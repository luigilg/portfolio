<template>
  <div class="bg-b-light" id="smooth-wrapper" ref="mainWrapper">
    <div id="smooth-content" class="bg-b-light text-b-dark min-h-screen p-3" ref="mainContent">
      <NuxtPage :transition="pageTransition" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const mainWrapper = ref(null);
const mainContent = ref(null);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
      smooth: 0.7,
      effects: true,
      normalizeScroll: true,
    });
  }
});
</script>