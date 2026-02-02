<template>
    <div ref="containerRef" class="relative w-full bg-b-dark text-b-light pb-10 flex flex-col gap-12">
        <div class="gradbar absolute z-10 w-full h-[30px]"></div>

        <div class="flex md:flex-row px-10 justify-between h-full w-full m-0">
             <div class="flex flex-col leading-[0.75] select-none items-start" @mousemove="updateMousePos">
                 <h1 ref="luigiRef" class="animated-text text-[15vw] md:text-[18rem] gabarito font-black text-[#E4E1D5] uppercase tracking-tighter">LUIGI</h1>
                 <h1 ref="girardiRef" class="animated-text text-[15vw] md:text-[18rem] gabarito font-black text-[#E4E1D5] uppercase tracking-tighter">GIRARDI</h1>
             </div>

             <div ref="linksRef" class="flex flex-col items-between justify-between gap-1 h-auto text-right mt-10 md:mt-0">
                 <div class="flex flex-col gap-2 mb-8 h-full">
                     <div class="footer-link-wrapper-1 overflow-hidden">
                        <a href="https://github.com/luigilg" target="_blank" class="gabarito font-black text-xl md:text-3xl hover:font-thin transition-all tracking-wide text-[#E4E1D5] no-underline block">GITHUB</a>
                     </div>
                     <div class="footer-link-wrapper-2 overflow-hidden">
                        <a href="https://www.linkedin.com/in/luigi-girardi/" target="_blank" class="gabarito font-black text-xl md:text-3xl hover:font-thin transition-all tracking-wide text-[#E4E1D5] no-underline block">LINKEDIN</a>
                     </div>
                     <div class="footer-link-wrapper-3 overflow-hidden">
                        <a href="https://www.behance.net/girartist" target="_blank" class="gabarito font-black text-xl md:text-3xl hover:font-thin transition-all tracking-wide text-[#E4E1D5] no-underline block">BEHANCE</a>
                     </div>
                     <div class="footer-link-wrapper-4 overflow-hidden">
                        <a href="https://www.instagram.com/luigilg_/" target="_blank" class="gabarito font-black text-xl md:text-3xl hover:font-thin transition-all tracking-wide text-[#E4E1D5] no-underline block">INSTAGRAM</a>
                     </div>
                 </div>
                 
                 <div class="footer-email-wrapper">
                    <a href="mailto:luigilgirardi@gmail.com" class="funnel font-normal text-3xl hover:font-thin transition-all text-[#E4E1D5] no-underline block">luigilgirardi@gmail.com</a>
                 </div>
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

const waveSequence = ['#32A1B8', '#32A1B8', '#4F52BE', '#A23DD4', '#A23DD4', '#4F52BE', '#32A1B8', '#32A1B8'];
const colorInterpolator = gsap.utils.interpolate(waveSequence);

const mousePos = { x: 0, y: 0 };

const handleMouseMove = (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
};

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);

    if (luigiRef.value && girardiRef.value && linksRef.value) {
        setTimeout(() => {
            const splitOptions = { type: 'chars', reduceWhiteSpace: false, charsClass: 'animated-text-footer' }; 
            const luigiSplit = new SplitText(luigiRef.value, splitOptions);
            const girardiSplit = new SplitText(girardiRef.value, splitOptions);

            allChars = [...luigiSplit.chars, ...girardiSplit.chars];
            
            gsap.set(allChars, { fontVariationSettings: "'wght' 900" });
            
            charPositions = allChars.map(char => ({ 
                el: char, 
                originalColor: '#E4E1D5' 
            }));

            gsap.from(allChars, {
                scrollTrigger: {
                    trigger: containerRef.value, 
                    start: "top 90%",
                    end: "bottom 95%",
                    scrub: 1,
                },
                yPercent: 100, 
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

            setupProximityAnimation();
        }, 100);
    }
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    gsap.ticker.remove(proximityLoopRef);
});

let proximityLoopRef;

const setupProximityAnimation = () => {
      const maxDistance = 125; 
      const proximityColorEffectRadius = 100;
      const minWeight = 100;
      const maxWeight = 900;
      
      const proximityLoop = () => {
        const mouseX = mousePos.x;
        const mouseY = mousePos.y;

        charPositions.forEach(pos => {
          const rect = pos.el.getBoundingClientRect();
          const charX = rect.left + rect.width / 2;
          const charY = rect.top + rect.height / 2 - (rect.height * 0.12);

          const distanceX = (mouseX - charX) * 0.4;
          const distanceY = mouseY - charY;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          const newWeight = gsap.utils.mapRange(0, maxDistance, minWeight, maxWeight, distance);
          const clampedWeight = gsap.utils.clamp(minWeight, maxWeight, newWeight);

          gsap.to(pos.el, {
            '--wght': clampedWeight, 
            duration: 0.4,
            ease: 'power1.out',
            overwrite: 'auto'
          });

          if (distance < proximityColorEffectRadius) {
            const xProgress = gsap.utils.mapRange(-proximityColorEffectRadius, proximityColorEffectRadius, 0, 1, distanceX);
            const clampedXProgress = gsap.utils.clamp(0, 1, xProgress);
            
            const newColor = colorInterpolator(clampedXProgress);

            gsap.to(pos.el, {
              color: newColor,
              duration: 0.2,
              ease: 'power4.out',
              overwrite: 'auto'
            });
          } else {
            gsap.to(pos.el, {
              color: pos.originalColor,
              duration: 1.2,
              ease: 'power1.out',
              overwrite: 'auto'
            });
          }
        });
      };
      
      proximityLoopRef = proximityLoop;
      gsap.ticker.add(proximityLoop);
}


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

.gradbar::before {
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
}

@keyframes sweep-right {
    0% {
        background-position: calc(var(--d)/sin(90deg)) 0;
    }
}

.animated-text-footer {
    font-variation-settings: 'wght' var(--wght);
}
</style>