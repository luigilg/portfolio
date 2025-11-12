<template>
  <div>
    <div class="relative grid place-items-end h-[95vh] overflow-hidden">
      <div class="w-full col-start-1 row-start-1">
        <div class="flex flex-col justify-center items-center gap-10">
          <div class="text-start flex flex-row items-end gap-12 w-full">
            <h1 ref="luigiRef" class="invisible text-[20rem] gabarito font-black text-b-dark select-none whitespace-nowrap -tracking-[12px]">LUIGI</h1>
            <!-- <AlternatingText :texts="['creative', 'professional','innovative', 'passionate']" position="start" :start="startAltText" from="bottom"  /> -->
            <AlternatingText :texts="['creative']" position="start" :start="startAltText" from="bottom"  />
          </div>
          <div class="w-full h-[50px] gradbar rounded-xl"></div>
          <div class="text-end w-full flex flex-row justify-end items-start gap-12">
            <AlternatingText :texts="['developer', 'designer', 'composer', 'animator', 'artist']" position="end" from="top" :start="startAltText" />
            <h1 ref="girardiRef" class="invisible text-[20rem] gabarito font-black text-b-dark select-none whitespace-nowrap -tracking-[12px]">GIRARDI</h1>
          </div>
        </div>
      </div>
    </div>
    <div ref="snappyTextContainer" class="invisible">
      <SnappyText />
    </div>
    <WhatIDo /> 
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(SplitText, CustomEase);

const luigiRef = ref(null);
const girardiRef = ref(null);
const creativeRef = ref(null);
const devRef = ref(null);
const isMenuOpen = ref(false);
const snappyTextContainer = ref(null);
const complete = ref(false);
const startAltText = ref(false);

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
});
</script>

<style>
.gradbar {
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