<template>
  <div>
    <div class="relative grid place-items-end h-[95vh]">
      <div class="w-full col-start-1 row-start-1">
        <div class="flex flex-col justify-center items-center gap-10 px-5">
          <div class="text-start flex flex-row items-end gap-12 w-full">
            <h1 ref="luigiRef" class="invisible text-[20rem] gabarito font-black text-b-dark select-none whitespace-nowrap -tracking-[12px]">LUIGI</h1>
            <!-- <AlternatingText :texts="['creative', 'professional','innovative', 'passionate']" position="start" :start="startAltText" from="bottom"  /> -->
            <AlternatingText :texts="['creative']" position="start" :start="startAltText" from="bottom" data-speed="0.97"  />
          </div>
          <div class="w-full h-[50px] gradbar rounded-xl" data-top-speed="0.94"></div>
          <div class="text-end w-full flex flex-row justify-end items-start gap-12" >
            <AlternatingText :texts="['developer', 'designer', 'composer', 'animator', 'artist']" position="end" from="top" data-top-speed="0.91" :start="startAltText" />
            <h1 ref="girardiRef" data-top-speed="0.88" class="invisible text-[20rem] gabarito font-black text-b-dark select-none whitespace-nowrap -tracking-[12px]">GIRARDI</h1>
          </div>
        </div>
      </div>
    </div>
    <div ref="snappyTextContainer" class="invisible">
      <SnappyTextBKP />
    </div>
    <div class="text-center text-[10rem] gabarito font-extrabold whoAmI relative z-0">
      <!-- QUEM SOU EU? -->
      MAS O QUE EU SOU?
    </div>
    <StripesWAI  class="-mt-[100px] relative z-20"/>
    <div class="relative mx-10 -mt-[800px] px-[10rem] z-30 bg-transparent">
      <p ref="introText" class="funnel font-normal text-[2.2rem] text-b-dark2">
      Sou um <span class="font-extrabold text-pu">generalista criativo</span> com formação em Análise e Desenvolvimento de Sistemas pela UFPR. 
      Trabalho com animação e edição de vídeo, design, composição musical e mais recentemente, desenvolvimento de sites e apps. 
      Tenho experiência prática como Full-Stack, porém prefiro o front-end. 
      Atuo há uma década fazendo trabalhos freelance e pessoais, de forma profissional. 
      Sou autodidata, tenho grande facilidade de aprendizado e adaptação, 
      e sou constantemente motivado a encontrar soluções eficientes e práticas para qualquer situação.</p>
    </div>
    <!-- <GradientStrokeAnimS ref="gradientStrokeRef" class="-mt-[20px] z-10 -mb-[510px]" :class="{ 'invisible': !showStroke }" data-speed="clamp(0.5)" start="20% 85%" end="100% 90%"/> -->
    <GradientStrokeAnim ref="gradientStrokeRef" data-lag="0.4" class="-mt-[20px] z-10 -mb-[510px]" :class="{ 'invisible': !showStroke }" start="20% 95%" end="100% 95%"/>
    <div data-lag="0.4" class="text-center mt-[550px] -mb-[200px] text-[10rem] gabarito font-extrabold worksIdid relative z-0">
      TRABALHOS QUE JÁ FIZ
    </div>
    <WhatIDo data-lag="0.4" ref="whatIDoRef" class="scale-[75%] z-[2]"/> 
    <RibbonText data-lag="0.4" text=" <TECH STACK/> "  class="-mt-[500px]" />
    <div class="h-screen"></div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: true,
});

import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

const luigiRef = ref(null);
const girardiRef = ref(null);
const creativeRef = ref(null);
const devRef = ref(null);
const isMenuOpen = ref(false);
const introText = ref(null);
const snappyTextContainer = ref(null);
const complete = ref(false);
const startAltText = ref(false);
const gradientStrokeRef = ref(null);
const showStroke = ref(false);
const whatIDoRef = ref(null);

const creativeDevAnim = () => {
  if (!creativeRef.value || !devRef.value) return;
  
  gsap.set([creativeRef.value, devRef.value], { visibility: 'visible' });
  
  const splitOptions = { type: 'chars', reduceWhiteSpace: false };
  const creSplit = new SplitText(creativeRef.value, splitOptions);
  const devSplit = new SplitText(devRef.value, splitOptions);

  const creChs = creSplit.chars;
  const devChs = devSplit.chars;

  gsap.from(creChs, {
    yPercent: 150,
    duration: 0.7,
    ease: 'expo.out',
    stagger: { each: 0.05, from: 'start' }
  });
  gsap.from(devChs, {
    yPercent: -150,
    duration: 0.7,
    ease: 'expo.out',
    stagger: { each: 0.05, from: 'end' }
  });
};

onMounted(() => {
  let allChars = [];
  let charPositions = [];
  const waveSequence = ['#A23DD4', '#A23DD4', '#4F52BE', '#32A1B8', '#32A1B8', '#4F52BE', '#A23DD4'];
  const colorInterpolator = gsap.utils.interpolate(waveSequence);
  
  const mousePos = { x: 0, y: 0 };
  let timeout;

  const saveOriginalCharData = () => {
    if (!allChars.length) return;

    gsap.set(allChars, { fontVariationSettings: "'wght' 900", textAlign: 'center' });

    charPositions = allChars.map(char => {
      const width = char.getBoundingClientRect().width;
      gsap.set(char, { width: width });

      const rect = char.getBoundingClientRect();
      return {
        el: char,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        originalColor: '#282e32'
      };
    });

    gsap.set(allChars, { clearProps: "fontVariationSettings", '--wght': 900 });
  };

  const updateCharPositions = () => {
    if (!charPositions.length) return;
    charPositions.forEach(pos => {
      const rect = pos.el.getBoundingClientRect();
      pos.x = rect.left + rect.width / 2;
      pos.y = rect.top + rect.height / 2;
    });
  };

  const debouncedRecalculate = () => {
    clearTimeout(timeout);
    timeout = setTimeout(updateCharPositions, 100);
  };
  
  if (process.client) {
    CustomEase.create("fast", "M0,0 C0.126,0.382 0.32,0.925 0.634,0.971 0.788,0.993 0.731,0.984 1,1 ");
    CustomEase.create("scroll", "M0,0 C0,0.598 0.248,0.757 0.347,0.828 0.442,0.9 0.703,1 1,1 ");
    
    window.addEventListener('mousemove', e => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      updateCharPositions();
    });
    window.addEventListener('resize', debouncedRecalculate);
  }

  if (luigiRef.value && girardiRef.value) {
    const colorKeyframesL = ['#282e32', '#32A1B8', '#4F52BE', '#A23DD4', '#282e32'];
    const colorKeyframesG = ['#282e32', '#A23DD4', '#4F52BE', '#32A1B8', '#282e32'];

    const splitOptions = { type: 'chars', reduceWhiteSpace: false, charsClass: 'animated-text' };
    const luigiSplit = new SplitText(luigiRef.value, splitOptions);
    const girardiSplit = new SplitText(girardiRef.value, splitOptions);

    const luigiChars = luigiSplit.chars;
    const girardiChars = girardiSplit.chars;
    allChars = [...luigiChars, ...girardiChars];

    gsap.set([luigiRef.value, girardiRef.value], { visibility: 'visible', color: 'transparent' });

    const tl = gsap.timeline();

    tl.from(luigiChars, {
      duration: 1.8,
      ease: 'expo.out',
      x: '400vw',
      stagger: { each: 0.08, from: 'start' }
    }, 0);
    tl.from(girardiChars, {
      duration: 1.8,
      ease: 'expo.out',
      x: '-400vw',
      stagger: { each: 0.08, from: 'end' }
    }, 0.2);
    tl.to(luigiChars, {
      keyframes: { color: colorKeyframesL, ease: 'steps(4)' },
      duration: 1.3,
      stagger: { each: 0.09, from: 'start' }
    }, 0.2);
    tl.to(girardiChars, {
      keyframes: { color: colorKeyframesG, ease: 'steps(4)' },
      duration: 1.3,
      stagger: { each: 0.05, from: 'end' }
    }, 0.4);
    tl.call(creativeDevAnim, [], 1.5);
    tl.call(() => {
      startAltText.value = true;
    }, [], 1.6);
    
    tl.call(() => {
      complete.value = true;
      
      saveOriginalCharData();
      setupProximityAnimation();
    });

    const setupProximityAnimation = () => {
      const maxDistance = 300;
      const proximityColorEffectRadius = 270;
      const minWeight = 100;
      const maxWeight = 900;
      
      const proximityLoop = () => {
        const mouseX = mousePos.x;
        const mouseY = mousePos.y;

        charPositions.forEach(pos => {
          const distanceX = mouseX - pos.x;
          const distanceY = mouseY - pos.y;
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
              duration: 2.4,
              ease: 'power1.out',
              overwrite: 'auto'
            });
          }
        });
      };
      
      gsap.ticker.add(proximityLoop);
    };

    if (snappyTextContainer.value) {
      gsap.from(snappyTextContainer.value, {
        scrollTrigger: {
          trigger: snappyTextContainer.value,
          start: "top 85%",
        },
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        onStart: () => {
          gsap.set(snappyTextContainer.value, { visibility: 'visible' });
        }
      });
    }
  }

  const whoAmISplit = new SplitText('.whoAmI', { type: 'chars' }); 
  const tlWhoAmI = gsap.timeline({
    scrollTrigger: {
      trigger: '.whoAmI',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
  ScrollTrigger.create({
    trigger: '.whoAmI',
    start: 'center center',
    end: '+=2200',
    pin: true,
    pinSpacing: false, 
  });
  tlWhoAmI.from(whoAmISplit.chars, {
    opacity: 0,
    x: 200,
    duration: 0.7,
    ease: 'elastic.out(1.10,0.8)',
    stagger: {
      from: 'start',
      each: 0.05
    },
    onStart: () => {
      gsap.set('.whoAmI', { visibility: 'visible' });
    }
  })
  
  const worksIdidSplit = new SplitText('.worksIdid', { type: 'chars' }); 
  const tlworksIdid = gsap.timeline({
    scrollTrigger: {
      trigger: '.worksIdid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
  tlworksIdid.from(worksIdidSplit.chars, {
    opacity: 0,
    x: 200,
    duration: 0.7,
    ease: 'elastic.out(1.10,0.8)',
    stagger: {
      from: 'start',
      each: 0.05
    },
    onStart: () => {
      gsap.set('.worksIdid', { visibility: 'visible' });
    }
  })

  if (introText.value) {
      const splitIntro = new SplitText(introText.value, { type: 'words' });
      
      gsap.set(splitIntro.words, { autoAlpha: 0, color: '#32A1B8' });

      const tlIntro = gsap.timeline({
          scrollTrigger: {
              trigger: introText.value,
              start: 'center center', 
              end: '+=2000', 
              scrub: true, 
              pin: true,
          }
      });
      
      splitIntro.words.forEach((word, i) => {
          
          tlIntro.to(word, {
              autoAlpha: 1,
              duration: 0.01, 
              ease: 'none',
              onStart: () => {
                  // gsap.set(word, { filter: 'blur(4px)' });

                  gsap.to(word, {
                      keyframes: [
                          // { filter: 'blur(0px)', duration: 0.2 }, 
                          { color: '#4F52BE', duration: 0.4 },
                          { color: '#A23DD4', duration: 0.2 },
                          { color: '#44494c', duration: 0.2 }
                      ],
                      duration: 0.45,   
                      ease: 'none',
                      overwrite: 'auto'
                  });
              },
              onReverseComplete: () => {
                  gsap.set(word, { color: '#32A1B8', filter: 'blur(0px)', overwrite: 'auto' });
              }
          }, i * 0.2); 
      });

      const animDuration = tlIntro.duration();
      const pauseDuration = animDuration * (1000 / 2000);
      tlIntro.to({}, { duration: pauseDuration });
  }

    if (gradientStrokeRef.value) {
    ScrollTrigger.create({
      trigger: gradientStrokeRef.value.$el, 
      start: "top 75%", 
      onEnter: () => {
        showStroke.value = true;
      }
    });

    const topParallaxElements = document.querySelectorAll('[data-top-speed]');
    topParallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-top-speed') || 1);
      gsap.to(el, {
        y: () => ScrollTrigger.maxScroll(window) * (1 - speed),
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0
        }
      });
    });
  }

  if (whatIDoRef.value) {
    ScrollTrigger.create({
      trigger: whatIDoRef.value.$el,
      start: "center center",
      end: "+=700",
      pin: true,
      pinSpacing: true,
    });
  }
});
</script>

<style>
.gradbar {
    position: relative;
    --d:120vw;
    color: transparent;
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
    top: 20px;
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
}

@keyframes sweep-right {
    0% {
        background-position: calc(var(--d)/sin(90deg)) 0;
    }
}

h1 {
    line-height: 0.8;
    text-shadow: none;
}
.animated-text {
    font-variation-settings: 'wght' var(--wght);
}
</style>