<template>
<div class="bg-b-light text-b-dark min-h-screen p-3">
    <Menu v-if="isMenuOpen" @close="isMenuOpen = false"/>

    <div v-if="!isMenuOpen">
        <div class="flex justify-end items-end px-5 py-3 text-end">
            <h1 @click="isMenuOpen = true" class="text-[5em] thunder text-end select-none cursor-pointer textMenu">MENU</h1>
        </div>

        <div class="relative grid place-items-center overflow-hidden">
            
            <div ref="gradientRef" class="opacity-0 w-full col-start-1 row-start-1">
                <div class="flex flex-col justify-center items-center gradient-container">
                    <div class="text-start w-full">
                        <h1 id="luigiGrad" class="text-[18em] funnel font-black select-none whitespace-nowrap">LUIGI</h1>
                    </div>
                    <div class="text-end w-full">
                        <h1 class="text-[18em] funnel font-black select-none whitespace-nowrap">GIRARDI</h1>
                    </div>
                </div>
            </div>
            
            <div class="w-full col-start-1 row-start-1">
                 <div class="flex flex-col justify-center items-center">
                    <div class="text-start w-full">
                        <h1 ref="luigiRef" class="invisible text-[18em] funnel font-black text-gray-400 select-none whitespace-nowrap">LUIGI</h1>
                    </div>
                    <div class="text-end w-full">
                        <h1 ref="girardiRef" class="invisible text-[18em] funnel font-black text-gray-400 select-none whitespace-nowrap">GIRARDI</h1>
                    </div>
                </div>
            </div>
        </div>
        
        <ArrowGrid class="mt-20"/>
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
const gradientRef = ref(null);
const isMenuOpen = ref(false);

onMounted(() => {
  if (luigiRef.value && girardiRef.value && gradientRef.value) {
    const colorKeyframesL = ['#9ca3af', '#32A1B8', '#4F52BE', '#A23DD4']; 
    const colorKeyframesG = ['#9ca3af', '#A23DD4', '#4F52BE', '#32A1B8']; 

    const luigiSplit = new SplitText(luigiRef.value, { type: 'chars', reduceWhiteSpace: false });
    const girardiSplit = new SplitText(girardiRef.value, { type: 'chars', reduceWhiteSpace: false });

    const luigiChars = luigiSplit.chars;
    const girardiChars = girardiSplit.chars;
    const allChars = [...luigiChars, ...girardiChars];

    gsap.set([luigiRef.value, girardiRef.value], { visibility: 'visible' });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(allChars, {
          duration: 0.2,
          opacity: 0,
          stagger: 0.05,
          ease: 'power2.inOut'
        });
        
        gsap.to(gradientRef.value, {
          duration: 0,
          opacity: 1,
          ease: 'power2.inOut'
        });
      }
    });

    tl.from(luigiChars, {
      duration: 1.8,
      ease: 'power2.out',
      x: '100vw',
      opacity: 0,
    //   filter: 'blur(10px)',
      stagger: {
        each: 0.08,
        from: 'start'
      }
    }, 0);
    tl.from(girardiChars, {
      duration: 1.8,
      ease: 'power2.out',
      x: '-100vw',
    //   filter: 'blur(10px)',
      opacity: 0,
      stagger: {
        each: 0.08,
        from: 'end'
      }
    }, 0);

    tl.to(luigiChars, {
      keyframes: {
        color: colorKeyframesL,
        ease: 'steps(3)'
      },
      duration: 1.3,
      stagger: {
        each: 0.08,
        from: 'start'
      }
    }, 0.3);
    tl.to(girardiChars, {
      keyframes: {
        color: colorKeyframesG,
        ease: 'steps(3)'
      },
      duration: 1.3,
      stagger: {
        each: 0.08,
        from: 'end'
      }
    }, 0.3);
  }
});
</script>

<style>
h1 {
    line-height: 0.8;
}

#luigiGrad{
    font-kerning: none;
}

.gradient-container {
    --d:120vw;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-image: repeating-linear-gradient(
        90deg, 
        #A23DD4, 
        #4F52BE, 
        #32A1B8,
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

.gradient-container h1 {
    color: transparent;
}
</style> 