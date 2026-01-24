<template>
    <div ref="container" class="w-[100vw] h-screen relative overflow-hidden flex flex-col justify-center items-center z-20 pointer-events-none left-1/2 -translate-x-1/2">
        <div class="stripe stripe-1 bg-pu absolute top-0 left-0 w-full h-[20%] flex items-center overflow-hidden">
            <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[6rem] uppercase whitespace-nowrap leading-none">
                <span v-for="n in 20" :key="n">Designer <span class="align-middle mx-10"></span> </span>
            </div>
        </div>

        <div class="stripe stripe-2 bg-bl absolute top-[20%] left-0 w-full h-[20%] flex items-center overflow-hidden">
            <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[6rem] uppercase whitespace-nowrap leading-none">
                <span v-for="n in 20" :key="n">Video Editor <span class="align-middle mx-10"></span> </span>
            </div>
        </div>

        <div class="stripe stripe-3 bg-cy absolute top-[40%] left-0 w-full h-[20%] flex items-center overflow-hidden">
            <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[6rem] uppercase whitespace-nowrap leading-none">
                <span v-for="n in 20" :key="n">Developer <span class="align-middle mx-10"></span> </span>
            </div>
        </div>

        <div class="stripe stripe-4 bg-[#9d59e5] absolute top-[60%] left-0 w-full h-[20%] flex items-center overflow-hidden">
            <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[6rem] uppercase whitespace-nowrap leading-none">
                <span v-for="n in 20" :key="n">Composer <span class="align-middle mx-10"></span> </span>
            </div>
        </div>

        <div class="stripe stripe-5 bg-[#4482de] absolute top-[80%] left-0 w-full h-[20%] flex items-center overflow-hidden">
            <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[6rem] uppercase whitespace-nowrap leading-none">
                <span v-for="n in 20" :key="n">Animator <span class="align-middle mx-10"></span> </span>
            </div>
        </div>

        <div class="mask mask-1 bg-b-light absolute top-0 left-0 w-full h-[20.2%] z-20"></div>
        <div class="mask mask-2 bg-b-light absolute top-[20%] left-0 w-full h-[20.2%] z-20"></div>
        <div class="mask mask-3 bg-b-light absolute top-[40%] left-0 w-full h-[20.2%] z-20"></div>
        <div class="mask mask-4 bg-b-light absolute top-[60%] left-0 w-full h-[20.2%] z-20"></div>
        <div class="mask mask-5 bg-b-light absolute top-[80%] left-0 w-full h-[20.2%] z-20"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const container = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stripes = gsap.utils.toArray('.stripe');
    
    gsap.set('.stripe-1, .stripe-3, .stripe-5', { xPercent: 100 });
    gsap.set('.stripe-2, .stripe-4', { xPercent: -100 });

    gsap.set('.stripe-2 .stripe-content, .stripe-4 .stripe-content', { xPercent: -25 });
    gsap.set('.mask-1, .mask-3, .mask-5', { xPercent: -100 });
    gsap.set('.mask-2, .mask-4', { xPercent: 100 });

    gsap.set('.stripe-2 .stripe-content, .stripe-4 .stripe-content', { xPercent: -25 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: "top top", 
            end: "+=3000", 
            pin: true,
            scrub: true, 
            anticipatePin: 1
        }
    });

    tl.to('.stripe-1', { xPercent: 0, duration: 1, ease: "expo.Out" }, 0);
    tl.to('.stripe-5', { xPercent: 0, duration: 1, ease: "expo.Out" }, 0.2);
    tl.to('.stripe-2', { xPercent: 0, duration: 1, ease: "expo.Out" }, 0.4);
    tl.to('.stripe-4', { xPercent: 0, duration: 1, ease: "expo.Out" }, 0.8);
    tl.to('.stripe-3', { xPercent: 0, duration: 1, ease: "expo.Out" }, 1.1);

    tl.to('.mask-1, .mask-3, .mask-5', { xPercent: 0, duration: 2, ease: "power2.inOut" }, ">");
    tl.to('.mask-2, .mask-4', { xPercent: 0, duration: 2, ease: "power2.inOut" }, "<");
    
    tl.set('.stripe', { opacity: 0 });

    const tlText = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: "top top", 
            end: () => "+=" + (3000 + window.innerHeight), 
            scrub: true 
        }
    });
    tlText.to('.stripe-1 .stripe-content, .stripe-3 .stripe-content, .stripe-5 .stripe-content', { 
        xPercent: -15, 
        ease: 'none', 
    }, 0);

    tlText.to('.stripe-2 .stripe-content, .stripe-4 .stripe-content', { 
        xPercent: -10, 
        ease: 'none', 
    }, 0);

});
</script>

<style scoped>
</style>
