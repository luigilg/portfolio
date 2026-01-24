<template class="bg-transparent">
    <div class="w-screen relative left-1/2 -translate-x-1/2 bg-transparent">
        <svg ref="svgRef" width="100%" height="auto" viewBox="0 0 1920 1531" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref="pathRef" d="M-87 4.46436C-69.8333 87.2977 30.4 276.064 294 368.464C623.5 483.964 995.5 500.964 1094 287.464C1192.5 73.9644 837.492 14.1617 814 221.464C788 450.9 1100.65 716.166 1501.5 856.464C1931.5 1006.96 2078 1263.13 2105 1527.96" stroke="url(#paint0_linear_173_3)" stroke-width="44" stroke-linecap="round"/>
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

const pathRef = ref(null);
const svgRef = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (pathRef.value && svgRef.value) {
        const length = pathRef.value.getTotalLength();

        gsap.set(pathRef.value, {
            strokeDasharray: length,
            strokeDashoffset: length
        });

        gsap.to(pathRef.value, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: svgRef.value,
                start: "top 10%", // Start drawing when top of SVG hits 80% viewport
                end: "bottom 20%", // Finish when bottom hits 20%
                scrub: 1, // Smooth interaction
            }
        });
    }
});
</script>