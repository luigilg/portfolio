<template>
<div class="bg-b-light text-b-dark min-h-screen">
    <Menu v-if="isMenuOpen" @close="isMenuOpen = false"/>

    <div v-if="!isMenuOpen">
        <div class="flex justify-end items-end px-5 py-3 text-end">
            <h1 @click="isMenuOpen = true" class="text-[5em] thunder text-end select-none cursor-pointer textMenu">MENU</h1>
        </div>
        <div class="flex justify-center items-center ">
        <!-- <div class="justify-center items-center border-2 border-black inline-block"> -->
            <p id="title" ref="title" class="text-[10em] funnel font-black bg-gradient-to-r from-pu via-bl to-cy h-min bg-clip-text text-transparent select-none whitespace-nowrap top-1">LUIGI GIRARDI</p>
        </div>
        <ArrowGrid />
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

<style>
#title {
    line-height: 0.8;
}
</style>