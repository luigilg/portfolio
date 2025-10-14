<template>
    <div class="flex w-[1000px] h-[500px] justify-center items-center" >
        <LogoAnim 
            class="transition-transform duration-[1s] ease-out" 
            :style="{ 
            '--scale-factor': scale / 100, 
            '--hover-scale-factor': (scale * 1.3) / 100 
            }"
        />
  </div>
</template>

<script setup>
const scale = 60;
</script>

<style>
body {
    background-color: #E4E1D5;
}
.transition-transform {
  transform: scale(var(--scale-factor));
}

.transition-transform:hover {
  transform: scale(var(--hover-scale-factor));
}
</style>