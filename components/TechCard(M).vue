<template>
    <div class="w-[20vw] h-[20vw] relative group" @click="toggle">
        <div ref="cardRef" class="flex flex-col justify-center items-center w-full h-full rounded-xl transition-shadow duration-300 shadow-xl" :style="cardStyle">
            <div class="w-[10vw] h-[10vw] flex items-center justify-center">
                <img :src="`/icons/${logo}.png`" 
                    class="logo-white h-full w-full object-contain transition select-none noselect duration-300"
                    :class="{ 'scale-[0.8] -translate-y-3': isActive }"
                >
            </div>
            <p class="text-white text-[3vw] select-none cursor-default scale-0 
                gabarito font-black absolute translate-y-[5vw] opacity-0 transition select-none"
                :class="{ 'opacity-100 scale-100': isActive }"
            >
                {{ logo.toUpperCase() }}
            </p>
        </div>
    </div>
</template>
    
<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    logo: String,
    color: String,
    color2: String
})

const isActive = ref(false)
const toggle = () => {
    isActive.value = !isActive.value
}

const adjustColor = (hex, amount) => {
    return '#' + hex.replace(/^#/, '').replace(/../g, color => {
        const value = Math.min(255, Math.max(0, parseInt(color, 16) + amount))
        return value.toString(16).padStart(2, '0')
    })
}

const cardStyle = computed(() => {
    const defaultColor = '#d22'
    const inputColor = props.color || defaultColor
    const hexColor = inputColor.startsWith('#') ? inputColor : `#${inputColor}`
    
    const gradientColor1 = hexColor
    const gradientColor2 = props.color2 ? props.color2 : adjustColor(hexColor, -30) 

    return {
        background: `linear-gradient(135deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`,
        boxShadow: `0 20px 25px -5px ${hexColor}4d, 0 8px 10px -6px ${hexColor}4d`
    }
})
</script>

<style>
.logo-white {
    filter: brightness(0) invert(1);
}

.noselect {
    /* Impede a seleção de texto/imagem (fundo azul) */
    -webkit-user-select: none; /* Safari/Chrome/Opera */
    -khtml-user-select: none;
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
    user-select: none;         /* Padrão */

    /* Impede o "arrastar" da imagem */
    -webkit-user-drag: none;

    /* Impede o menu de contexto no toque longo (Safari iOS) */
    -webkit-touch-callout: none;
}
</style>