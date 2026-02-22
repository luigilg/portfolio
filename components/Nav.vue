<template>
  <div class="fixed top-[3vh] left-[3vh] z-[100]">
    <div 
      ref="navPill"
      @click="toggleNav"
      @mouseenter="logoHoverIn(); isHoveredLogo = true"
      @mouseleave="logoHoverOut(); isHoveredLogo = false"
      class="ESSA relative flex items-center rounded-full cursor-pointer  transition duration-300 justify-start"
      :class="isActive ? 'shadow-xl border border-white/20' : 'shadow-none border-none bg-transparent'"
      style="width: 7vh; height: 7vh;"
    >
      <div 
        ref="navBg"
        class="absolute inset-0 w-full h-full opacity-0 rounded-full overflow-hidden"
        style="background: linear-gradient(90deg, #A23DD4, #4F52BE, #32A1B8);"
      ></div>

      <div 
        ref="logoWrapper"
        class="relative z-10 shrink-0 flex items-center justify-center transition-all duration-300 w-[7vh] h-[7vh] pl-[0.5vh]"
        :class="isActive ? 'brightness-0 invert ml-[0.4vw]' : ''"
      >
        <div 
          class="absolute origin-center transition-transform ease-in-out duration-300"
          :style="{ transform: `scale(${isActive ? vhScale * 0.75 : (isHoveredLogo ? vhScale * 1.15 : vhScale)})` }"
        >
          <LogoAnim ref="logoAnimRef" class="pointer-events-none" />
        </div>
      </div>

      <div 
        ref="linksContainer"
        class="relative z-10 flex items-center whitespace-nowrap overflow-hidden w-0"
      >
        <div 
          class="flex items-center text-b-light font-bold gabarito gap-[1.5vw] pr-[2vw] pl-[0.5vw] text-[1.2vw] pb-[0.2vh]" 
          ref="linksInner"
        >
          <NuxtLink to="#sobre" class="nav-link group inline-block">
            <span class="inline-block transition-all duration-300 ease-out origin-center group-hover:scale-110 group-hover:text-white">SOBRE MIM</span>
          </NuxtLink>
          <span class="nav-dot rounded-full bg-b-light inline-block w-[0.4vw] h-[0.4vw]"></span>
          <NuxtLink to="#work" class="nav-link group inline-block">
            <span class="inline-block transition-all duration-300 ease-out origin-center group-hover:scale-110 group-hover:text-white">PROJETOS</span>
          </NuxtLink>
          <span class="nav-dot rounded-full bg-b-light inline-block w-[0.4vw] h-[0.4vw]"></span>
          <NuxtLink to="#tech" class="nav-link group inline-block">
            <span class="inline-block transition-all duration-300 ease-out origin-center group-hover:scale-110 group-hover:text-white">TECH STACK</span>
          </NuxtLink>
          <span class="nav-dot rounded-full bg-b-light inline-block w-[0.4vw] h-[0.4vw]"></span>
          <NuxtLink to="#contato" class="nav-link group inline-block">
            <span class="inline-block transition-all duration-300 ease-out origin-center group-hover:scale-110 group-hover:text-white">CONTATO</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const navPill = ref(null)
const navBg = ref(null)
const linksContainer = ref(null)
const linksInner = ref(null)
const logoWrapper = ref(null)
const logoAnimRef = ref(null)

const isActive = ref(false)
const isHoveredLogo = ref(false)
const vhScale = ref(0.4)
let hoverTl = null
let handleResize = null

// const handleClickOutside = (event) => {
//   if (isActive.value && navPill.value && !navPill.value.contains(event.target)) {
//     toggleNav()
//   }
// }

onMounted(() => {
  const calculateScale = () => {
    if (process.client) {
      const targetHeightVh = 4.5
      const vhInPx = window.innerHeight / 100
      const targetHeightPx = targetHeightVh * vhInPx
      vhScale.value = targetHeightPx / 200
    }
  }

  const initNav = () => {
    if (linksInner.value && process.client && !isActive.value) {
      calculateScale()
      const vw = window.innerWidth / 100
      const vh = window.innerHeight / 100
      const innerWPx = linksInner.value.offsetWidth
      const rootSizeInPx = 7 * vh 
      const expandedWidthPx = rootSizeInPx + innerWPx 
      
      const links = linksInner.value.querySelectorAll('.nav-link, .nav-dot')
      
      if (hoverTl) hoverTl.kill()
      hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'power4.out' } })
      
      hoverTl.to(navPill.value, {
        width: `${expandedWidthPx}px`,
        duration: 0.5,
      }, 0)
      
      hoverTl.to(navBg.value, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, 0)

      hoverTl.to(linksContainer.value, {
        width: `${innerWPx}px`,
        duration: 0.5
      }, 0)

      gsap.set(links, { opacity: 0, x: -1.5 * vw })
      hoverTl.to(links, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power3.out'
      }, 0.1)
    }
  }

  handleResize = () => {
    calculateScale()
    initNav()
  }

  calculateScale()
  window.addEventListener('resize', handleResize)
  // if (process.client) {
  //   document.addEventListener('click', handleClickOutside)
  // }

  setTimeout(initNav, 500)
})

const logoHoverIn = () => {
  if (logoAnimRef.value && logoAnimRef.value.hoverIn) {
    logoAnimRef.value.hoverIn()
  }
}

const logoHoverOut = () => {
  if (logoAnimRef.value && logoAnimRef.value.hoverOut) {
    logoAnimRef.value.hoverOut()
  }
}

const toggleNav = () => {
  isActive.value = !isActive.value
  
  if (isActive.value) {
    if (hoverTl) hoverTl.play()
  } else {
    if (hoverTl) hoverTl.reverse()
  }
}

onUnmounted(() => {
  if (hoverTl) hoverTl.kill()
  if (process.client && handleResize) {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>
