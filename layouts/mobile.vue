<template>
  <div class="mobile-layout bg-white text-b-dark min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
    <div class="mobile-content relative overflow-hidden">
      <!-- Different wrapper structure for mobile, likely simpler without ScrollSmoother initially -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Mobile layout generic setup
</script>

<style scoped>
.mobile-layout {
  /* Mobile specific base styles */
  width: 100vw;
  max-width: 100%;
}
</style>
