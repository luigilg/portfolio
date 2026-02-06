<template>
    <div ref="container" class="w-[100vw] h-screen bg-transparent relative overflow-hidden grid grid-cols-5 pointer-events-none">
        
        <!-- Stripe 1 -->
        <div class="stripe stripe-1 bg-pu relative w-full h-full overflow-hidden">
            <div class="mask mask-1 bg-white absolute inset-0 z-[3] w-[102%]"></div>
            <div class="rotator absolute inset-0 flex items-center justify-center rotate-90 pointer-events-none z-[2]">
                <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[7vh] uppercase whitespace-nowrap leading-none flex items-center justify-center">
                    <span v-for="n in 15" :key="n">Designer <span class="align-middle mx-4">•</span> </span>
                </div>
            </div>
        </div>

        <!-- Stripe 2 -->
        <div class="stripe stripe-2 bg-bl relative w-full h-full overflow-hidden">
            <div class="mask mask-2 bg-white absolute inset-0 z-[3] w-[102%]"></div>
            <div class="rotator absolute inset-0 flex items-center justify-center -rotate-90 pointer-events-none z-[2]">
                <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[7vh] uppercase whitespace-nowrap leading-none flex items-center justify-center">
                    <span v-for="n in 15" :key="n">Video Editor <span class="align-middle mx-4">•</span> </span>
                </div>
            </div>
        </div>

        <!-- Stripe 3 -->
        <div class="stripe stripe-3 bg-cy relative w-full h-full overflow-hidden">
            <div class="mask mask-3 bg-white absolute inset-0 z-[3] w-[102%]"></div>
            <div class="rotator absolute inset-0 flex items-center justify-center rotate-90 pointer-events-none z-[2]">
                <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[7vh] uppercase whitespace-nowrap leading-none flex items-center justify-center">
                    <span v-for="n in 15" :key="n">Developer <span class="align-middle mx-4">•</span> </span>
                </div>
            </div>
        </div>

        <!-- Stripe 4 -->
        <div class="stripe stripe-4 bg-[#9d59e5] relative w-full h-full overflow-hidden">
            <div class="mask mask-4 bg-white absolute inset-0 z-[3] w-[102%]"></div>
            <div class="rotator absolute inset-0 flex items-center justify-center -rotate-90 pointer-events-none z-[2]">
                <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[7vh] uppercase whitespace-nowrap leading-none flex items-center justify-center">
                    <span v-for="n in 15" :key="n">Composer <span class="align-middle mx-4">•</span> </span>
                </div>
            </div>
        </div>

        <!-- Stripe 5 -->
        <div class="stripe stripe-5 bg-[#4482de] relative w-full h-full overflow-hidden">
            <div class="mask mask-5 bg-white absolute inset-0 z-[3] w-[102%]"></div>
            <div class="rotator absolute inset-0 flex items-center justify-center rotate-90 pointer-events-none z-[2]">
                <div class="stripe-content gabarito select-none cursor-normal font-black text-white text-[7vh] uppercase whitespace-nowrap leading-none flex items-center justify-center">
                    <span v-for="n in 15" :key="n">Animator <span class="align-middle mx-4">•</span> </span>
                </div>
            </div>
        </div>

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
    
    // Animate along Y axis instead of X
    // Odd stripes from bottom (100%), Even stripes from top (-100%)
    gsap.set('.stripe-1, .stripe-3, .stripe-5', { yPercent: 100.2 });
    gsap.set('.stripe-2, .stripe-4', { yPercent: -100.2 });

    // Masks follow stripes logic
    gsap.set('.mask-1, .mask-3, .mask-5', { yPercent: -100 });
    gsap.set('.mask-2, .mask-4', { yPercent: 100 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: "top top", 
            end: "+=1200vh", 
            pin: true,
            scrub: true, 
            anticipatePin: 1
        }
    });

    tl.to('.stripe-1', { yPercent: 0, duration: 1, ease: "expo.Out" }, 0);
    tl.to('.stripe-5', { yPercent: 0, duration: 1, ease: "expo.Out" }, 0.2);
    tl.to('.stripe-2', { yPercent: 0, duration: 1, ease: "expo.Out" }, 0.4);
    tl.to('.stripe-4', { yPercent: 0, duration: 1, ease: "expo.Out" }, 0.8);
    tl.to('.stripe-3', { yPercent: 0, duration: 1, ease: "expo.Out" }, 1.1);

    tl.to('.mask-1, .mask-3, .mask-5', { yPercent: 0, duration: 2, ease: "power2.inOut" }, ">");
    tl.to('.mask-2, .mask-4', { yPercent: 0, duration: 2, ease: "power2.inOut" }, "<");
    
    tl.set('.stripe', { opacity: 0 });

    const tlText = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: "top top", 
            end: "+=1200vh", 
            scrub: true 
        }
    });

    // Parallax text
    // The text is inside .rotator (rotate-90)
    // Moving xPercent on the text moves it along the rotator X axis (Screen Vertical)
    // -15% moves it "Left" relative to text flow, which is "Up" relative to screen (if 90deg clockwise)
    
    tlText.to('.stripe-1 .stripe-content, .stripe-3 .stripe-content, .stripe-5 .stripe-content', { 
        xPercent: -80, 
        ease: 'none', 
    }, 0);

    tlText.to('.stripe-2 .stripe-content, .stripe-4 .stripe-content', { 
        xPercent: -80, 
        ease: 'none', 
    }, 0);

});
</script>

<style scoped>
.stripe-content {
    /* Large width to accommodate the long text strip, centered */
    width: 300vh; /* Make it long enough */
    height: 100%;
}
</style>
