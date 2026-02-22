<template>
  <div class="ribbon-container w-full overflow-hidden flex justify-center items-center py-[1vh] relative cursor-default">
    <svg viewBox="0 0 1920 600" class="w-[120%] min-w-[1200px]" preserveAspectRatio="xMidYMid slice">
        <path id="curve" d="M -200,400 C 400,100 1000,700 2200,300" fill="transparent" />
        
        <path d="M -200,400 C 400,100 1000,700 2200,300" stroke="#282E32" stroke-width="140" stroke-linecap="butt" fill="none" />
        
        <text width="100%" dominant-baseline="central">
            <textPath 
              ref="textPathRef" 
              href="#curve" 
              class="text-[8rem] font-black uppercase fill-b-light gabarito"
              startOffset="-50%"
            >
             {{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}{{ dot }}{{ text }}
            </textPath>
        </text>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const textPathRef = ref(null)
const props = defineProps({
  text: {
    type: String,
    default: "TRABALHOS QUE JÁ FIZ"
  },
  ball: {
    type: Boolean,
    default: false
  }
})
const dot = ref("")

onMounted(() => {
  if (props.ball) {
    dot.value = " • "
  }
  gsap.fromTo(textPathRef.value, 
    { attr: { startOffset: '-100%' } },
    {
      attr: { startOffset: '-60%' }, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.ribbon-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    }
  )
})
</script>

<style scoped>
</style>
