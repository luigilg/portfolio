<template class="bg-transparent">
    <div ref="wrapperRef" class="w-screen h-[60vh] relative bg-transparent flex items-center justify-center overflow-hidden">
        <svg ref="svgRef" class="min-w-[170vw] h-auto absolute top-1/2 left-1/2 -translate-x-[46%] -translate-y-1/2 pointer-events-none" viewBox="0 0 2165 739" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="pathRef" d="M0.78833 284.821C174.955 293.987 678.688 262.128 824.288 149.328C1006.29 8.32834 858.288 -23.6717 762.788 62.8283C667.288 149.328 713.288 441.328 585.788 532.328C458.288 623.328 401.788 486.829 553.788 441.328C720.288 391.488 999.788 426.328 1206.29 362.828C1412.79 299.328 1496.79 224.828 1496.79 124.328C1496.79 44.3451 1396.79 40.8281 1306.29 73.3281C1215.79 105.828 1101.29 206.828 1143.79 291.828C1186.29 376.828 1368.64 327.328 1454.08 233.328C1377.79 307.328 1351.29 615.328 1167.29 703.828C983.288 792.328 1050.79 562.829 1206.29 462.828C1361.79 362.828 1816.79 257.821 2164.29 248.821" 
                stroke="url(#paint_mobile)" stroke-width="30" stroke-linecap="round" stroke-dasharray="10000" stroke-dashoffset="10000"/>
            <defs>
                <linearGradient id="paint_mobile" x1="2128.8" y1="1179.42" x2="223.585" y2="-360.437" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#21A9C5"/>
                    <stop offset="0.4" stop-color="#21A9C5"/>
                    <stop offset="0.543269" stop-color="#4F52BE"/>
                    <stop offset="0.74" stop-color="#A23DD4"/>
                    <stop offset="1" stop-color="#A23DD4"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
    start: {
        type: String,
        default: "top 80%"
    },
    end: {
        type: String,
        default: "bottom 20%"
    }
});

const pathRef = ref(null);
const svgRef = ref(null);
const wrapperRef = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial check
    if (pathRef.value && svgRef.value && wrapperRef.value) {
        // Small delay to ensure DOM and layout are settled (especially with huge scales)
        setTimeout(() => {
            const length = pathRef.value.getTotalLength();
            
            // Explicitly set initial state using fromTo to ensure no race conditions
            gsap.fromTo(pathRef.value, 
                { 
                    strokeDasharray: length, 
                    strokeDashoffset: length 
                },
                {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapperRef.value,
                        start: props.start,
                        end: props.end,
                        scrub: 1, 
                    }
                }
            );
        }, 50);
    }
});
</script>