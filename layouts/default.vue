<template>
  <div class="bg-b-light" id="smooth-wrapper" ref="mainWrapper">
    <div id="smooth-content" class="bg-b-light text-b-dark min-h-screen py-3 px-0" ref="mainContent">
      <NuxtPage :transition="pageTransition" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase';

const mainWrapper = ref(null);
const mainContent = ref(null);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);


const pageTransition = {
  name: 'page',
  mode: 'out-in',
  css: false, 
  onEnter(el, done) {
    gsap.from(el, {
      opacity: 0,
      xPercent: 50,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: done,
    });
  },
  onLeave(el, done) {
    gsap.to(el, {
      opacity: 0,
      xPercent: -50,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: done,
    });
  },
};

onMounted(() => {
  if (process.client) {
    ScrollSmoother.create({
      wrapper: mainWrapper.value,
      content: mainContent.value,
      smooth: 1,
      ease: CustomEase.create("expow", "M0,0 C0.038,0.569 0.053,0.748 0.169,0.857 0.283,0.964 0.366,1 1,1 "),
      effects: true,
      normalizeScroll: true,
    });
  }
});
</script>