<template>
  <Lenis :options="{ lerp: 0.05, wheelMultiplier: 0.7, smoothTouch: false }">
    <div
      class="bg-b-light text-b-dark min-h-screen p-3"
    >
      <Menu v-if="isMenuOpen" @close="isMenuOpen = false" />

      <div v-if="!isMenuOpen">
        <TopBar v-if="complete" />

        <div class="relative grid place-items-end h-[95vh] overflow-hidden">
          <div class="w-full col-start-1 row-start-1">
            <div class="flex flex-col justify-center items-center gap-10">
              <div class="text-start flex flex-row items-end gap-12 w-full">
                <h1
                  ref="luigiRef"
                  class="invisible text-[20rem] gabarito font-black text-b-dark select-none whitespace-nowrap -tracking-[12px]"
                >
                  LUIGI
                </h1>
                <p
                  ref="creativeRef"
                  class="hikasami font-bold text-[5rem] leading-none mb-2 text-b-dark overflow-hidden invisible"
                >
                  creative
                </p>
              </div>
              <div class="w-full h-[50px] gradbar rounded-xl"></div>
              <div class="text-end w-full flex flex-row justify-end items-start gap-12">
                <p
                  ref="devRef"
                  class="hikasami font-bold text-[5rem] leading-none text-b-dark overflow-hidden invisible pb-2"
                >
                  developer
                </p>
                <h1
                  ref="girardiRef"
                  class="invisible text-[20rem] gabarito font-black text-b-dark select-none whitespace-nowrap -tracking-[12px]"
                >
                  GIRARDI
                </h1>
              </div>
            </div>
          </div>
        </div>
        <SnappyText />
        <WhatIDo />
      </div>
    </div>
  </Lenis>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
// 1. ScrollSmoother foi REMOVIDO
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase'
// 2. Importamos o hook 'useLenis' para acessar a instância
import { useLenis } from '@darkroomengineering/lenis/vue'

// 3. Registramos os plugins SEM o ScrollSmoother
gsap.registerPlugin(SplitText, CustomEase)

// 4. Refs do wrapper e content foram REMOVIDOS
// const mainWrapper = ref(null);
// const mainContent = ref(null);
const luigiRef = ref(null)
const girardiRef = ref(null)
const creativeRef = ref(null)
const devRef = ref(null)
const isMenuOpen = ref(false)
const complete = ref(false)

const creativeDevAnim = () => {
  if (!creativeRef.value || !devRef.value) return

  gsap.set([creativeRef.value, devRef.value], { visibility: 'visible' })

  const splitOptions = { type: 'chars', reduceWhiteSpace: false }
  const creSplit = new SplitText(creativeRef.value, splitOptions)
  const devSplit = new SplitText(devRef.value, splitOptions)

  const creChs = creSplit.chars
  const devChs = devSplit.chars

  gsap.from(creChs, {
    yPercent: 150,
    duration: 0.7,
    ease: 'expo.out',
    stagger: { each: 0.05, from: 'start' },
  })
  gsap.from(devChs, {
    yPercent: -150,
    duration: 0.7,
    ease: 'expo.out',
    stagger: { each: 0.05, from: 'end' },
  })
}

// 5. Movemos 'charPositions' e 'updateCharPositions' para o escopo do setup,
//    para que 'useLenis' possa acessá-los.
let charPositions = []

const updateCharPositions = () => {
  // O 'if' garante que só rode após 'saveOriginalCharData' popular o array
  if (!charPositions.length) return
  charPositions.forEach((pos) => {
    const rect = pos.el.getBoundingClientRect()
    pos.x = rect.left + rect.width / 2
    pos.y = rect.top + rect.height / 2
  })
}

// 6. Usamos o hook do Lenis.
//    Isso substitui o 'onUpdate' do ScrollSmoother.
//    O callback roda assim que a instância do Lenis é criada pelo componente <Lenis>.
useLenis((lenisInstance) => {
  if (lenisInstance) {
    // 'scroll' é o evento equivalente ao 'onUpdate'
    lenisInstance.on('scroll', updateCharPositions)
  }
})

onMounted(() => {
  let allChars = []
  // let charPositions = []; // Movido para o escopo do setup
  // let smoother = null; // REMOVIDO
  const waveSequence = [
    '#A23DD4',
    '#A23DD4',
    '#4F52BE',
    '#32A1B8',
    '#4F52BE',
    '#A23DD4',
    '#A23DD4',
  ]
  const colorInterpolator = gsap.utils.interpolate(waveSequence)

  const mousePos = { x: 0, y: 0 }
  let timeout

  const saveOriginalCharData = () => {
    if (!allChars.length) return
    // Popula o array 'charPositions' que está no escopo do setup
    charPositions = allChars.map((char) => {
      const rect = char.getBoundingClientRect()
      return {
        el: char,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        originalColor: '#282e32',
      }
    })
  }

  // updateCharPositions (movido para o escopo do setup)

  const debouncedRecalculate = () => {
    clearTimeout(timeout)
    timeout = setTimeout(updateCharPositions, 100)
  }

  if (process.client) {
    CustomEase.create(
      'fast',
      'M0,0 C0.126,0.382 0.32,0.925 0.634,0.971 0.788,0.993 0.731,0.984 1,1 '
    )

    // 7. Bloco de criação do ScrollSmoother REMOVIDO
    /*
    smoother = ScrollSmoother.create({
      wrapper: mainWrapper.value,   
      content: mainContent.value,
      smooth: 0.3,
      ease: "expo.out",
      onUpdate: updateCharPositions 
    });
    */

    window.addEventListener('mousemove', (e) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
    })
    window.addEventListener('resize', debouncedRecalculate)
  }

  if (luigiRef.value && girardiRef.value) {
    const colorKeyframesL = [
      '#282e32',
      '#32A1B8',
      '#4F52BE',
      '#A23DD4',
      '#282e32',
    ]
    const colorKeyframesG = [
      '#282e32',
      '#A23DD4',
      '#4F52BE',
      '#32A1B8',
      '#282e32',
    ]

    const splitOptions = {
      type: 'chars',
      reduceWhiteSpace: false,
      charsClass: 'animated-text',
    }
    const luigiSplit = new SplitText(luigiRef.value, splitOptions)
    const girardiSplit = new SplitText(girardiRef.value, splitOptions)

    const luigiChars = luigiSplit.chars
    const girardiChars = girardiSplit.chars
    allChars = [...luigiChars, ...girardiChars]

    gsap.set([luigiRef.value, girardiRef.value], {
      visibility: 'visible',
      color: 'transparent',
    })

    const tl = gsap.timeline()

    tl.from(
      luigiChars,
      {
        duration: 1.8,
        ease: 'expo.out',
        x: '400vw',
        stagger: { each: 0.08, from: 'start' },
      },
      0
    )
    tl.from(
      girardiChars,
      {
        duration: 1.8,
        ease: 'expo.out',
        x: '-400vw',
        stagger: { each: 0.08, from: 'end' },
      },
      0.2
    )
    tl.to(
      luigiChars,
      {
        keyframes: { color: colorKeyframesL, ease: 'steps(4)' },
        duration: 1.3,
        stagger: { each: 0.09, from: 'start' },
      },
      0.2
    )
    tl.to(
      girardiChars,
      {
        keyframes: { color: colorKeyframesG, ease: 'steps(4)' },
        duration: 1.3,
        stagger: { each: 0.05, from: 'end' },
      },
      0.4
    )

    tl.call(() => {
      complete.value = true
      gsap.set(allChars, { '--wght': 900 })

      saveOriginalCharData()
      setupProximityAnimation()
      creativeDevAnim()
    })

    const setupProximityAnimation = () => {
      const maxDistance = 300
      const proximityColorEffectRadius = 270
      const minWeight = 100
      const maxWeight = 900

      const proximityLoop = () => {
        const mouseX = mousePos.x
        const mouseY = mousePos.y

        charPositions.forEach((pos) => {
          const distanceX = mouseX - pos.x
          const distanceY = mouseY - pos.y
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

          const newWeight = gsap.utils.mapRange(
            0,
            maxDistance,
            minWeight,
            maxWeight,
            distance
          )
          const clampedWeight = gsap.utils.clamp(minWeight, maxWeight, newWeight)

          gsap.to(pos.el, {
            '--wght': clampedWeight,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          })

          if (distance < proximityColorEffectRadius) {
            const xProgress = gsap.utils.mapRange(
              -proximityColorEffectRadius,
              proximityColorEffectRadius,
              0,
              1,
              distanceX
            )
            const clampedXProgress = gsap.utils.clamp(0, 1, xProgress)

            const newColor = colorInterpolator(clampedXProgress)

            gsap.to(pos.el, {
              color: newColor,
              duration: 0.2,
              ease: 'power4.out',
              overwrite: 'auto',
            })
          } else {
            gsap.to(pos.el, {
              color: pos.originalColor,
              duration: 2.4,
              ease: 'power1.out',
              overwrite: 'auto',
            })
          }
        })
      }

      // O seu loop de proximidade continua funcionando perfeitamente
      // com o ticker do GSAP, independente do Lenis.
      gsap.ticker.add(proximityLoop)
    }
  }
})
</script>

<style>
.gradbar {
  --d: 120vw;
  color: transparent;
  background-image: repeating-linear-gradient(
    90deg,
    #a23dd4,
    #4f52be,
    #32a1b8,
    #4f52be,
    #a23dd4 var(--d)
  );
  background-size: calc(var(--d) / sin(90deg)) 100%;
  animation: sweep-right 5s linear infinite reverse;
}

@keyframes sweep-right {
  0% {
    background-position: calc(var(--d) / sin(90deg)) 0;
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