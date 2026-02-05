<template>
  <div class="flex flex-col items-center w-full min-h-screen px-5 pb-20">
    <div class="flex flex-col justify-center items-center w-full h-[100vh]">
      <div class="flex flex-col justify-center items-center gap-2 px-5 text-[26vw] -tracking-[1vw]">
        <div class="text-start w-full flex flex-row justify-center items-center z-[1] pb-[10vh] overflow-hidden -mb-[10vh]">
          <h1 ref="luigiRef" class="invisible gabarito font-black text-b-dark select-none whitespace-nowrap">LUIGI</h1>
        </div>
        <AlternatingText(M)  class="z-[2]" :texts="['creative']" position="center" :start="startAltText" from="bottom" />
        <div class="w-full h-[7vh] gradbar rounded-lg"></div>
        <!-- <div class="w-full h-[7vh] gradblur rounded-lg"></div> -->
        <AlternatingText(M)  class="z-[2]" :texts="['developer', 'designer', 'composer', 'animator', 'artist']" position="center" from="top" :start="startAltText" />
        <div class="text-end w-full flex flex-row justify-center items-center z-[1] pt-[10vh] overflow-hidden -mt-[10vh]" >
          <h1 ref="girardiRef" class="invisible gabarito font-black text-b-dark select-none whitespace-nowrap">GIRARDI</h1>
        </div>
      </div>
    </div>
    <div ref="snappyTextContainer" class="flex">
      <SnappyText(M) />
    </div>
    <Title1 class="whoAmI relative z-[2] text-[18vw] -mt-[60vh]" text="MAS O QUE EU SOU?"/>
    <StripesWAI(M)  class="-mt-[100px] mb-[210vh] relative z-[3]"/>
    <div class="relative px-[10vw] z-[4] bg-transparent">
      <p ref="introText" class="funnel font-normal text-[4vw] text-b-dark text-justify">
      Sou um <span class="font-extrabold text-pu">generalista criativo</span> com formação em Análise e Desenvolvimento de Sistemas pela UFPR. 
      Trabalho com animação e edição de vídeo, design, composição musical e mais recentemente, desenvolvimento de sites e apps. 
      Tenho experiência prática como Full-Stack, porém prefiro o front-end. 
      Atuo há uma década fazendo trabalhos freelance e pessoais, de forma profissional. 
      Sou autodidata, tenho grande facilidade de aprendizado e adaptação, 
      e sou constantemente motivado a encontrar soluções eficientes e práticas para qualquer situação.</p>
    </div>
    <div class="mt-10">
      <p class="text-sm text-center funnel text-gray-500 mb-10">Versão mobile ainda em desenvolvimento... Acesse pelo computador!</p>
    </div> 
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'mobile',
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
const introText = ref(null);
const snappyTextContainer = ref(null);
const complete = ref(false);
const startAltText = ref(false);
const gradientStrokeRef = ref(null);
const showStroke = ref(false);
const whatIDoRef = ref(null);
const techStackRef = ref(null);

onMounted(() => {
  let allChars = [];
  let charPositions = [];
  
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
    const colorKeyframesL = ['#32A1B8', '#4F52BE', '#A23DD4', '#282e32'];
    const colorKeyframesG = ['#A23DD4', '#4F52BE', '#32A1B8', '#282e32'];

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
      y: '20vh',
      stagger: { each: 0.08, from: 'center' }
    }, 0);
    tl.from(girardiChars, {
      duration: 1.8,
      ease: 'expo.out',
      y: '-20vh',
      stagger: { each: 0.08, from: 'center' }
    }, 0.2);
    tl.to(luigiChars, {
      keyframes: { color: colorKeyframesL, ease: 'steps(3)' },
      duration: 1.2,
      stagger: { each: 0.04, from: 'center' }
    }, 0);
    tl.to(girardiChars, {
      keyframes: { color: colorKeyframesG, ease: 'steps(3)' },
      duration: 1.4,
      stagger: { each: 0.04, from: 'center' }
    }, 0);
    tl.call(() => {
      startAltText.value = true;
    }, [], 1);
    
    tl.call(() => {
      complete.value = true;
      
      saveOriginalCharData();
    });

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

  ScrollTrigger.create({
    trigger: '.whoAmI',
    start: 'center center',
    end: '+=2200',
    pin: true,
    pinSpacing: false, 
  });


  if (introText.value) {
      const splitIntro = new SplitText(introText.value, { type: 'words' });
      
      gsap.set(splitIntro.words, { autoAlpha: 0, color: '#32A1B8' });

      const tlIntro = gsap.timeline({
          scrollTrigger: {
              trigger: introText.value,
              start: 'center center', 
              end: '+=2500', 
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
                  gsap.to(word, {
                      keyframes: [
                          { color: '#4F52BE', duration: 0.4 },
                          { color: '#A23DD4', duration: 0.2 },
                          { color: '#282E32', duration: 0.2 }
                      ],
                      duration: 0.45,   
                      ease: 'none',
                      overwrite: 'auto'
                  });
              },
              onReverseComplete: () => {
                  gsap.set(word, { color: '#32A1B8', filter: 'blur(0px)', overwrite: 'auto' });
              }
          }, 8 + i * 0.2); 
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

  if (techStackRef.value) {
      ScrollTrigger.create({
        trigger: techStackRef.value,
        start: "center center",
        end: "+=600",
        pin: true,
        pinSpacing: true,
        pinReparent: true
      });
  }
});
</script>

<style>
.gradbar {
    position: relative;
    --d:120vw;
    color: transparent;
    z-index: 4;
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
    top: 20px;
    left: 0;
    background-image: inherit;
    background-size: inherit;
    animation: inherit;
    filter: blur(25px);
    border-radius: inherit;
    opacity: 0.6;
    z-index: -1;
} */

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

.logo-white{
  filter: brightness(0) invert(1);
}
</style>
