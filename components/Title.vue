<template>
    <div class="flex flex-col justify-center items-center">
        <div class="text-start w-full">
            <h1 ref="luigiRef"
                class="invisible text-[18em] funnel font-black text-gray-400 select-none whitespace-nowrap -tracking-[25px]">
                Luigi</h1>
        </div>
        <div class="text-end w-full">
            <h1 ref="girardiRef"
                class="invisible text-[18em] funnel font-black text-gray-400 select-none whitespace-nowrap -tracking-[25px]">
                Girardi</h1>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const luigiRef = ref(null);
const girardiRef = ref(null);
const complete = ref(false);

onMounted(() => {
  if (luigiRef.value && girardiRef.value) {
    // const colorKeyframesL = ['#a0a0a0', '#32A1B8', '#4F52BE', '#A23DD4'];
    // const colorKeyframesG = ['#a0a0a0', '#A23DD4', '#4F52BE', '#32A1B8'];
    const colorKeyframesL = ['#202020', '#32A1B8', '#4F52BE', '#A23DD4', '#202020'];
    const colorKeyframesG = ['#202020', '#A23DD4', '#4F52BE', '#32A1B8', '#202020'];
    const waveSequence = ['#A23DD4', '#4F52BE', '#32A1B8', '#4F52BE', '#A23DD4'];

    const splitOptions = { type: 'chars', reduceWhiteSpace: false, charsClass: 'animated-text' };
    const luigiSplit = new SplitText(luigiRef.value, splitOptions);
    const girardiSplit = new SplitText(girardiRef.value, splitOptions);

    const luigiChars = luigiSplit.chars;
    const girardiChars = girardiSplit.chars;
    const allChars = [...luigiChars, ...girardiChars];

    gsap.set([luigiRef.value, girardiRef.value], { visibility: 'visible', color: 'transparent' });

    const tl = gsap.timeline();

    tl.from(luigiChars, {
      duration: 1.8,
      ease: 'power2.out',
      x: '400vw',
      stagger: { each: 0.08, from: 'start' }
    }, 0);
    tl.from(girardiChars, {
      duration: 1.8,
      ease: 'power2.out',
      x: '-400vw',
      stagger: { each: -0.08, from: 'start' }
    }, 0);
    tl.to(luigiChars, {
      keyframes: { color: colorKeyframesL, ease: 'steps(4)' },
      duration: 1.3,
      stagger: { each: 0.08, from: 'start' }
    }, 0.5);
    tl.to(girardiChars, {
      keyframes: { color: colorKeyframesG, ease: 'steps(4)' },
      duration: 1.3,
      stagger: { each: -0.08, from: 'start' }
    }, 0.5);

    tl.call(() => {
      const colorInterpolator = gsap.utils.interpolate(waveSequence);
      const baseProgress = allChars.map((_char, i) => (i / allChars.length) * 0.5);
      const progress = { value: 0 };
      const wrap = gsap.utils.wrap(0, 1);

      gsap.to(allChars, {
        // duration: 1.0,
        // color: (i) => colorInterpolator(baseProgress[i]),
        // ease: 'power2.inOut',
        // stagger: { each: 0.02, from: 'start' },
        onComplete: () => {
          complete.value = true;
          // gsap.to(progress, {
          //   value: 1,
          //   duration: 4,
          //   ease: 'none',
          //   repeat: -1,
          //   onUpdate: () => {
          //     allChars.forEach((char, i) => {
          //       const currentProgress = wrap(baseProgress[i] - progress.value);
          //       gsap.set(char, { color: colorInterpolator(currentProgress) });
          //     });
          //   }
          // });
          
          gsap.set(allChars, { '--wght': 900 });
          setupProximityAnimation();
        }
      });
    });

    const setupProximityAnimation = () => {
      let charPositions = [];
      let timeout;

      const calculateCharPositions = () => {
        charPositions = allChars.map(char => {
          const rect = char.getBoundingClientRect();
          return {
            el: char,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          };
        });
      };
      
      calculateCharPositions();
      
      const maxDistance = 300;
      const minWeight = 100;
      const maxWeight = 900;

      const mouseMoveHandler = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        charPositions.forEach(pos => {
          const distanceX = mouseX - pos.x;
          const distanceY = mouseY - pos.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          const newWeight = gsap.utils.mapRange(0, maxDistance, minWeight, maxWeight, distance);
          const clampedWeight = gsap.utils.clamp(minWeight, maxWeight, newWeight);

          gsap.to(pos.el, {
            '--wght': clampedWeight,
            duration: 0.4,
            ease: 'power2.out'
          });
        });
      };

      const debouncedRecalculate = () => {
        clearTimeout(timeout);
        timeout = setTimeout(calculateCharPositions, 100);
      };

      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('resize', debouncedRecalculate);
    };
  }
});
</script>

<style>
h1 {
    line-height: 0.8;
    text-shadow: none;
}
.animated-text {
    font-variation-settings: 'wght' var(--wght);
}
</style>