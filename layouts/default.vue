<template>
  <div id="smooth-wrapper" ref="mainWrapper">
    <div id="smooth-content" class="bg-b-light text-b-dark min-h-screen p-3" ref="mainContent">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

const mainWrapper = ref(null);
const mainContent = ref(null);

onMounted(() => {
  if (process.client) {
    ScrollSmoother.create({
      wrapper: mainWrapper.value,
      content: mainContent.value,
      smooth: 0.5,
    });
  }
});
</script>