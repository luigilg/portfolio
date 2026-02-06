<template>
    <div ref="containerRef" class="relative w-screen bg-white text-b-dark pb-[1vh] flex flex-col gap-[5vw]">
        <div class="gradbar absolute drop-shadow-2xl z-10 w-full h-[30px]"></div>

        <div class="flex flex-col px-[5vw] justify-center items-center h-full w-full m-0 bg-transparent">
            <div ref="linksRef" class="flex justify-around w-full mb-[4vh] h-full text-[4vw] bg-transparent">
                <div class="footer-link-wrapper-1 overflow-hidden bg-transparent">
                    <a href="https://github.com/luigilg" target="_blank" class="gabarito font-black hover:font-thin transition-all tracking-wide text-b-dark no-underline block bg-transparent">GITHUB</a>
                </div>
                <div class="footer-link-wrapper-2 overflow-hidden bg-transparent">
                    <a href="https://www.linkedin.com/in/luigi-girardi/" target="_blank" class="gabarito font-black hover:font-thin transition-all tracking-wide text-b-dark no-underline block bg-transparent">LINKEDIN</a>
                </div>
                <div class="footer-link-wrapper-3 overflow-hidden bg-transparent">
                    <a href="https://www.behance.net/girartist" target="_blank" class="gabarito font-black hover:font-thin transition-all tracking-wide text-b-dark no-underline block bg-transparent">BEHANCE</a>
                </div>
                <div class="footer-link-wrapper-4 overflow-hidden bg-transparent">
                    <a href="https://www.instagram.com/luigilg_/" target="_blank" class="gabarito font-black hover:font-thin transition-all tracking-wide text-b-dark no-underline block bg-transparent">INSTAGRAM</a>
                </div>
            </div>
            <div class="flex flex-col leading-[0.75] select-none items-start" @mousemove="updateMousePos">
                <div class="flex w-full justify-between items-end">
                    <h1 ref="luigiRef" class="animated-text text-[25vw] gabarito font-black text-b-dark uppercase tracking-tighter">LUIGI</h1>
                    <div class="footer-email-wrapper">
                        <a href="mailto:luigilgirardi@gmail.com" class="funnel font-normal text-[2.5vw] -translate-y-[1vh] hover:font-thin transition-all text-b-dark no-underline block">luigilgirardi@gmail.com</a>
                    </div>
                </div>
                <h1 ref="girardiRef" class="animated-text text-[25vw] gabarito font-black text-b-dark uppercase tracking-tighter">GIRARDI</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

const luigiRef = ref(null);
const girardiRef = ref(null);
const linksRef = ref(null);
const containerRef = ref(null);

let allChars = [];
let charPositions = [];


onMounted(() => {

    if (luigiRef.value && girardiRef.value && linksRef.value) {
        setTimeout(() => {
            const splitOptions = { type: 'chars', reduceWhiteSpace: false, charsClass: 'animated-text-footer' }; 
            const luigiSplit = new SplitText(luigiRef.value, splitOptions);
            const girardiSplit = new SplitText(girardiRef.value, splitOptions);

            allChars = [...luigiSplit.chars, ...girardiSplit.chars];
            
            charPositions = allChars.map(char => ({ 
                el: char, 
            }));

            gsap.from(allChars, {
                scrollTrigger: {
                    trigger: containerRef.value, 
                    start: "top 90%",
                    end: "bottom bottom",
                    scrub: 1.4,
                },
                yPercent: 200, 
                x: 100,
                rotate: 10,
                autoAlpha: 0,
                stagger: 0.05,
                ease: "power2.out",
                duration: 1
            });

            const link1 = document.querySelector('.footer-link-wrapper-1');
            if (link1) {
                gsap.fromTo(link1, 
                    { yPercent: 100, autoAlpha: 0 },
                    {
                        scrollTrigger: {
                            trigger: link1,
                            start: "top 95%", 
                            end: "bottom 85%",
                            scrub: 1,
                        },
                        yPercent: 0,
                        autoAlpha: 1,
                        ease: "power2.out",
                        duration: 1
                    }
                );
            }

            const link2 = document.querySelector('.footer-link-wrapper-2');
            if (link2) {
                gsap.fromTo(link2, 
                    { yPercent: 100, autoAlpha: 0 },
                    {
                        scrollTrigger: {
                            trigger: link2,
                            start: "top 95%", 
                            end: "bottom 85%",
                            scrub: 1,
                        },
                        yPercent: 0,
                        autoAlpha: 1,
                        ease: "power2.out",
                        duration: 1
                    }
                );
            }

            const link3 = document.querySelector('.footer-link-wrapper-3');
            if (link3) {
                gsap.fromTo(link3, 
                    { yPercent: 100, autoAlpha: 0 },
                    {
                        scrollTrigger: {
                            trigger: link3,
                            start: "top 95%", 
                            end: "bottom 85%",
                            scrub: 1,
                        },
                        yPercent: 0,
                        autoAlpha: 1,
                        ease: "power2.out",
                        duration: 1
                    }
                );
            }

            const link4 = document.querySelector('.footer-link-wrapper-4');
            if (link4) {
                gsap.fromTo(link4, 
                    { yPercent: 100, autoAlpha: 0 },
                    {
                        scrollTrigger: {
                            trigger: link4,
                            start: "top 95%", 
                            end: "bottom 85%",
                            scrub: 1,
                        },
                        yPercent: 0,
                        autoAlpha: 1,
                        ease: "power2.out",
                        duration: 1
                    }
                );
            }

            const emailWrapper = document.querySelector('.footer-email-wrapper');
            if (emailWrapper) {
                gsap.fromTo(emailWrapper, 
                    { yPercent: 100, autoAlpha: 0 },
                    {
                        scrollTrigger: {
                            trigger: emailWrapper,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 1,
                        },
                        yPercent: 0,
                        autoAlpha: 1,
                        ease: "power2.out",
                        duration: 1
                    }
                );
            }

        }, 100);
    }
});

onUnmounted(() => {
});



</script>

<style scoped>
.gradbar {
    position: relative;
    --d: 200vw;
    background-image: repeating-linear-gradient(
        90deg,
        #A23DD4,
        #4F52BE,
        #32A1B8,
        #4F52BE,
        #A23DD4
        var(--d));
    background-size: calc(var(--d)/sin(90deg)) 100%;
    animation: sweep-right 5s linear infinite reverse;
}

/* .gradbar::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    animation: inherit;
    filter: blur(25px);
    z-index: -1;
    border-radius: inherit;
    opacity: 0.6;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.5);
} */

@keyframes sweep-right {
    0% {
        background-position: calc(var(--d)/sin(90deg)) 0;
    }
}

.animated-text-footer {
    font-variation-settings: 'wght' var(--wght);
}
</style>