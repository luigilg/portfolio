<template>
    <Menu v-if="isMenuOpen" @close="isMenuOpen = false"/>

    <div v-if="!isMenuOpen">
        <div class="flex justify-end items-end px-5 py-3 text-end">
            <h1 @click="isMenuOpen = true" class="text-[5em] thunder text-end select-none cursor-pointer textMenu">MENU</h1>
        </div>
        <div class="flex justify-center items-center">
            <h1 id="menuItem" ref="title" class="text-[10em] thunder select-none">LUIGI <br/> GIRARDI</h1>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

const isMenuOpen = ref(false)

const title = ref(null)

gsap.to(title.value, {
  duration: 0.5,
  opacity: 0,
  ease: 'power2.inOut'
})

</script>