<template>
  <div
    ref="wrap"
    class="wrap cursor-pointer select-none p-3 w-min"
    @mouseenter="hoverIn"
    @mouseleave="hoverOut"
    @mousedown="onMouseDown"
  >
    <div ref="wordEl" class="word inline-block tracking-normal uppercase select-none thunder text-[8rem] animated-text hover:tracking-[5px] hover:font-thin transition-all duration-[0.3s]">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import gsap from 'gsap'

const text = ref('ANIMATIONS')

const wrap = ref(null)
const wordEl = ref(null)
let chars = []
let targets = []

const CONFIG = {
  SPREAD: 8,
  MAX_Z: 200,
  MAX_Y: -20,
  MAX_SCALE: 1,
  MAX_ROT_X: 0,
  MAX_ROT_Y: 60,
  MAX_ROT_Z: 0,
  MAX_SKEW: 20,
  MIN_RND: -50,
  MAX_RND: 50,
  STAGGER: 0.03,
  DURATION: 1,
  EASE: 'circ.out'
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function splitToChars(el) {
  const txt = el.textContent
  el.textContent = ''
  const frag = document.createDocumentFragment()
  for (let i = 0; i < txt.length; i++) {
    const ch = txt[i]
    const s = document.createElement('span')
    s.className = 'char inline-block'
    s.textContent = ch === ' ' ? '\u00A0' : ch
    frag.appendChild(s)
  }
  el.appendChild(frag)
}

function calcTargets() {
  const len = chars.length
  const center = (len - 1) / 2
  const t = []
  for (let i = 0; i < len; i++) {
    const offset = i - center
    const normalized = center === 0 ? 0 : offset / center
    const absN = Math.abs(normalized)
    const archFactor = Math.pow(Math.max(0, 1 - absN), 0.5)
    const x = Math.round(archFactor * offset)
    const y = -Math.round(CONFIG.MAX_Y * archFactor)
    const z = Math.round(CONFIG.MAX_Z * archFactor)
    const scale = 1 + archFactor * (CONFIG.MAX_SCALE - 1)
    const scaleX = 1 + (scale - 1) * 0.48
    const scaleY = 1 + (scale - 1) * 1.8
    const rotX = -archFactor * CONFIG.MAX_ROT_X
    const rotY = normalized * CONFIG.MAX_ROT_Y
    const rotZ = normalized * CONFIG.MAX_ROT_Z
    const skew = normalized * CONFIG.MAX_SKEW * (0.9 - 0.5 * archFactor)
    t.push({ x, y, z, rotX, rotY, rotZ, skew, scaleX, scaleY })
  }
  return t
}

function hoverIn() {
  gsap.killTweensOf(chars)
  gsap.to(chars, {
    duration: CONFIG.DURATION,
    x: i => targets[i].x * CONFIG.SPREAD,
    y: () => getRandomIntInclusive(CONFIG.MIN_RND, CONFIG.MAX_RND),
    z: i => targets[i].z,
    rotateX: i => targets[i].rotX,
    rotateY: i => targets[i].rotY,
    rotateZ: i => targets[i].rotZ,
    skewX: i => targets[i].skew * 0,
    scaleX: i => targets[i].scaleX,
    scaleY: i => targets[i].scaleY,
    transformPerspective: 1400,
    transformOrigin: '50% 100%',
    stagger: { each: CONFIG.STAGGER, from: 'center' },
    ease: CONFIG.EASE,
    overwrite: true
  })
  const tl = gsap.timeline();
  tl.to(chars, {
    duration: 0.4,
    skewX: i => targets[i].skew,
    z: i => (targets[i].z || 0) + 150,
    y: i => (targets[i].y || 0) - 50,
    
    ease: 'expo.out',
    stagger: {
      each: 0.06,  
      from: 'start'
    }
  }, 0.7);

  tl.to(chars, {
    duration: 0.4, 
    x: 0, 
    y: -50,
    z: 0,
    rotateX: 0, rotateY: 0, rotateZ: 0,
    skewX: i => (targets[i].skew || 0) * 0,
    scaleX: 1, scaleY: 1,
    ease: 'expo.in',
    stagger: {
      each: 0.06,   
      from: 'start' 
    }
  }, 0.9);
  tl.to(chars, {
    duration: 1,
    y: 0,
    ease: 'elastic.out',
    stagger: {
      each: 0.06,   
      from: 'start' 
    }
  },1.3)
  // tl.to(chars, {
  //   duration: CONFIG.DURATION * 0.5,
  //   x: 0, 
  //   y: 0, z: 0,
  //   rotateX: 0, rotateY: 0, rotateZ: 0,
  //   skewX: 0,
  //   scaleX: 1, scaleY: 1,
  //   transformPerspective: 1400,
  //   transformOrigin: '50% 100%',
  //   stagger: { each: CONFIG.STAGGER * 0.9, from: 'center' },
  //   ease: 'expo.inOut',
  // }, 2);
}

function hoverOut() {
  gsap.killTweensOf(chars)
  gsap.to(chars, {
    duration: CONFIG.DURATION * 0.5,
    x: 0, y: 0, z: 0,
    rotateX: 0, rotateY: 0, rotateZ: 0,
    skewX: 0,
    scaleX: 1, scaleY: 1,
    transformPerspective: 1400,
    transformOrigin: '50% 100%',
    stagger: { each: CONFIG.STAGGER * 0.9, from: 'center' },
    ease: 'power4.inOut',
    overwrite: true
  })
}

function onMouseDown() {
  gsap.killTweensOf(chars);

  const tl = gsap.timeline();

  const timeOnTop = 0.1;

  tl.to(chars, {
    duration: 0.4,
    z: i => (targets[i].z || 0) + 150,
    // y: i => (targets[i].y || 0) - 50,
    ease: 'expo.out',
    stagger: {
      each: 0.06,  
      from: 'start'
    }
  });

  tl.to(chars, {
    duration: 0.4, 
    z: i => targets[i].z || 0,
    // y: i => targets[i].y || 0,
    ease: 'expo.in',
    stagger: {
      each: 0.06,   
      from: 'start' 
    }
  }, `<${timeOnTop}`); 
}



onMounted(() => {
  splitToChars(wordEl.value)
  chars = Array.from(wordEl.value.querySelectorAll('.char'))
  targets = calcTargets()

  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  gsap.killTweensOf(chars)
})

function onResize() {
  targets = calcTargets()
}

watch(text, () => {
  wordEl.value.textContent = text.value
  splitToChars(wordEl.value)
  chars = Array.from(wordEl.value.querySelectorAll('.char'))
  targets = calcTargets()
})
</script>

<style scoped>

.word{
  text-transform: uppercase;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  transform-style: preserve-3d;
}

.char{
  display: inline-block;
  transform-origin: 50% 100%;
  will-change: transform, filter;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0,0,0) rotateX(0deg) rotateZ(0deg) skewX(0deg) scale(1,1);
  text-shadow: 0 6px 12px rgba(0,0,0,0.45);
}

.animated-text {
    font-variation-settings: 'wght' var(--wght);
}

@media (max-width: 700px){ :root{ --font-size: 72px; } }
</style>
