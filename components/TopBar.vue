<template>
    <div class=" flex items-between h-max">
        <LogoAnim 
            class="transition-transform duration-[1s] ease-out hover:scale-110" 
            :tamanho="scale"
        />
        <h3>MENU</h3>
    </div>
</template>

<script setup>
const scale = 60;
</script>
