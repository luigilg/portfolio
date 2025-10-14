<template>
    <Flex class="items-between h-max">
        <LogoAnim 
            class="transition-transform duration-[1s] ease-out hover:scale-110" 
            :tamanho="scale"
        />
        <h3>MENU</h3>
    </Flex>
</template>

<script setup>
const scale = 60;
</script>
