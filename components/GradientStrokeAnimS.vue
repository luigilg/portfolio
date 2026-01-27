<template class="bg-transparent">
    <div ref="wrapperRef" class="w-screen relative left-1/2 -translate-x-1/2 bg-transparent">
        <!-- Canvas for high-performance drawing -->
        <canvas ref="canvasRef" class="w-full h-auto block"></canvas>

        <!-- Hidden SVG to act as the "Data Source" for the path geometry -->
        <svg ref="svgRef" class="hidden absolute" width="2165" height="739" viewBox="0 0 2165 739" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="pathRef" d="M0.78833 284.821C174.955 293.987 678.688 262.128 824.288 149.328C1006.29 8.32834 858.288 -23.6717 762.788 62.828C667.288 149.328 713.288 441.328 585.788 532.328C458.288 623.328 401.788 486.829 553.788 441.328C720.288 391.488 999.788 426.328 1206.29 362.828C1412.79 299.328 1496.79 224.828 1496.79 124.328C1496.79 44.3451 1396.79 40.8281 1306.29 73.3281C1215.79 105.828 1101.29 206.828 1143.79 291.828C1186.29 376.828 1368.64 327.328 1454.08 233.328C1377.79 307.328 1351.29 615.328 1167.29 703.828C983.288 792.328 1050.79 562.829 1206.29 462.828C1361.79 362.828 1816.79 257.821 2164.29 248.821" 
                stroke="transparent" stroke-width="30" stroke-linecap="round"/>
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as d3 from 'd3';

const props = defineProps({
    start: {
        type: String,
        default: "top 80%"
    },
    end: {
        type: String,
        default: "bottom 20%"
    },
    dataSpeed: {
        type: [String, Number],
        default: 1
    }
});

const canvasRef = ref(null);
const pathRef = ref(null);
const wrapperRef = ref(null);

let ctx = null;
let segments = [];
let animationProgress = { value: 0 }; 

const ORIGINAL_WIDTH = 2165;
const ORIGINAL_HEIGHT = 739;

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (canvasRef.value && pathRef.value) {
        initCanvas();
        prepareSegments();
        initScrollAnimation();
        
        gsap.ticker.add(render);
        
        window.addEventListener('resize', handleResize);
    }
});

onUnmounted(() => {
    gsap.ticker.remove(render);
    window.removeEventListener('resize', handleResize);
});

function initCanvas() {
    const canvas = canvasRef.value;
    ctx = canvas.getContext('2d');
    
    canvas.width = ORIGINAL_WIDTH;
    canvas.height = ORIGINAL_HEIGHT;
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 32; 
}

function prepareSegments() {
    const path = pathRef.value;
    const totalLength = path.getTotalLength();
    
    const colorScale = d3.scaleLinear()
        .domain([0, 0.54, 1])
        .range(["#A23DD4", "#4F52BE", "#32A1B8"])
        .interpolate(d3.interpolateRgb);
        
    const step = 3; 
    segments = [];
    
    let prevPoint = path.getPointAtLength(0);
    
    for (let i = step; i <= totalLength; i += step) {
        const point = path.getPointAtLength(i);
        const t = i / totalLength;
        const color = colorScale(t);
        
        segments.push({
            start: prevPoint,
            end: point,
            color: color
        });
        
        prevPoint = point;
    }
    const endPoint = path.getPointAtLength(totalLength);
    segments.push({
        start: prevPoint,
        end: endPoint,
        color: colorScale(1)
    });
}

function initScrollAnimation() {
    gsap.to(animationProgress, {
        value: 1,
        ease: "none",
        scrollTrigger: {
            trigger: wrapperRef.value, 
            start: props.start,
            end: props.end,
            scrub: 0.3, 
        }
    });
}

function render() {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, ORIGINAL_WIDTH, ORIGINAL_HEIGHT);
    
    const count = Math.round(animationProgress.value * segments.length);
    
    if (count <= 0) return;

    for (let i = 0; i < count; i++) {
        const seg = segments[i];
        
        ctx.beginPath();
        ctx.moveTo(seg.start.x, seg.start.y);
        ctx.lineTo(seg.end.x, seg.end.y);
        ctx.strokeStyle = seg.color;
        ctx.stroke();
    }
}

function handleResize() {
}
</script>