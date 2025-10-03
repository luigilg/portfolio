<template>
    <div ref="menuContainer" class="flex flex-col justify-center items-center h-full w-full bg-gradient-to-br from-pu via-bl to-cy">
        <div class="flex justify-end items-end px-5 py-3 text-end w-full">
            <h1 @click="closeMenu" class="text-[5em] thunder text-end text-b-light select-none cursor-pointer textMenu hover:text-danger">CLOSE</h1>
        </div>
        <div class="flex flex-col text-[8em] thunder text-b-light text-start w-[70%]">
            <h1 :ref="el => addMenuItemRef(el)" class="leading-none w-max menuItem textMenu whitespace-nowrap">SITES E APPS</h1>
            <h1 :ref="el => addMenuItemRef(el)" class="leading-none w-max menuItem textMenu whitespace-nowrap">VÍDEOS</h1>
            <h1 :ref="el => addMenuItemRef(el)" class="leading-none w-max menuItem textMenu whitespace-nowrap">ANIMAÇÕES</h1>
            <h1 :ref="el => addMenuItemRef(el)" class="leading-none w-max menuItem textMenu whitespace-nowrap">LOGOS</h1>
            <h1 :ref="el => addMenuItemRef(el)" class="leading-none w-max menuItem textMenu whitespace-nowrap">SOBRE MIM</h1>
            <h1 :ref="el => addMenuItemRef(el)" class="leading-none w-max menuItem textMenu whitespace-nowrap">CONTATO</h1>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const menuContainer = ref(null)
const menuItems = ref([])
const addMenuItemRef = (el) => {
  if (el && !menuItems.value.includes(el)) {
    menuItems.value.push(el)
  }
}

onMounted(() => {

  const tl = gsap.timeline()
  
  tl.from(menuContainer.value, {
    duration: 0.5,
    opacity: 0,
    ease: 'power2.inOut'
  })
  
  tl.to(menuItems.value, {
    duration: 0.5,
    x: 0,
    opacity: 1,
    ease: 'power3.out',
    stagger: 0.08
  }, "-=0.2")
})


const emit = defineEmits(['close'])

function closeMenu() {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close')
    }
  })

  tl.to(menuItems.value, {
    duration: 0.4,
    x: -90,
    opacity: 0,
    ease: 'power3.in',
    stagger: 0.05
  })

  tl.to(menuContainer.value, {
    duration: 0.4,
    opacity: 0,
    ease: 'power3.in'
  })
}
</script>

<style>
.menuItem {
    opacity: 0;
    transform: translateX(-90px);
}
</style>