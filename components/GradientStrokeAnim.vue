<template class="bg-transparent">
    <div ref="wrapperRef" class="w-screen relative left-1/2 -translate-x-1/2 bg-transparent invisible">
        <svg ref="svgRef" width="100%" height="auto" viewBox="0 0 1920 1531" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="pathRef" d="M-87 4.46436C-69.8333 87.2977 30.4 276.064 294 368.464C623.5 483.964 995.5 500.964 1094 287.464C1192.5 73.9644 837.492 14.1617 814 221.464C788 450.9 1100.65 716.166 1501.5 856.464C1931.5 1006.96 2078 1263.13 2105 1527.96" stroke="transparent" stroke-width="44" stroke-linecap="round" stroke-dasharray="10000" stroke-dashoffset="10000"/>
            <defs>
                <linearGradient id="paint0_linear_173_3" x1="1975" y1="1428.46" x2="-86.9999" y2="24.9643" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#21A9C5"/>
                    <stop offset="0.437847" stop-color="#4F52BE"/>
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

    if (pathRef.value && svgRef.value && wrapperRef.value) {
        const length = pathRef.value.getTotalLength();

        // 1. Set dashes to hide the line geometry.
        // 2. CRITICAL: Switch stroke from 'transparent' (HTML) to Gradient (JS) 
        //    ONLY AFTER geometry is hidden.
        gsap.set(pathRef.value, {
            strokeDasharray: length,
            strokeDashoffset: length,
            stroke: 'url(#paint0_linear_173_3)'
        });
        
        gsap.to(wrapperRef.value, { autoAlpha: 1, duration: 0.5 });

        gsap.fromTo(pathRef.value, 
            { strokeDashoffset: length },
            {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: svgRef.value,
                    start: props.start,
                    end: props.end,
                    scrub: 1, 
                }
            }
        );
    }
});
</script>