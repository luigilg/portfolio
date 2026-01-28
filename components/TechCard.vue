<template>
    <div class="w-[150px] h-[150px] relative group" @mouseenter="handleMouseEnter">
        <div ref="cardRef" class="flex flex-col justify-center items-center w-full h-full rounded-xl transition-shadow duration-300 shadow-xl" :style="cardStyle">
            <div class="w-[80px] h-[80px] flex items-center justify-center">
                <img :src="`/_nuxt/public/icons/${logo}.png`" class="logo-white h-full w-full object-contain group-hover:scale-[0.8] group-hover:-translate-y-3 transition duration-300">
            </div>
            <p class="text-white text-[1.4rem] select-none cursor-default scale-0 
                gabarito font-black absolute translate-y-[40px] opacity-0 group-hover:opacity-100 
                group-hover:scale-100 transition"
            >
                {{ logo.toUpperCase() }}
            </p>
        </div>
    </div>
</template>
    
<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
    logo: String,
    color: String,
    color2: String
})

const cardRef = ref(null)
const mouseVelocity = { x: 0, y: 0 }
let lastTime = Date.now()

const updateVelocity = (e) => {
    const now = Date.now()
    const dt = now - lastTime
    
    if (dt > 100) {
        mouseVelocity.x = 0
        mouseVelocity.y = 0
    }
    
    if (e.movementX !== undefined && e.movementY !== undefined) {
        mouseVelocity.x = e.movementX
        mouseVelocity.y = e.movementY
    }
    
    lastTime = now
}

const handleMouseEnter = () => {
    if (!cardRef.value) return

    const maxVelocity = 20
    const forceX = Math.max(Math.min(mouseVelocity.x, maxVelocity), -maxVelocity)
    const forceY = Math.max(Math.min(mouseVelocity.y, maxVelocity), -maxVelocity)

    const timeline = gsap.timeline()
    
    timeline.to(cardRef.value, {
        x: forceX * 3, 
        y: forceY * 3,
        rotation: (Math.random() * 30) - 15, 
        duration: 0.2,
        ease: 'power2.out'
    })
    
    timeline.to(cardRef.value, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.2,
        // ease: 'elastic.out(1, 0.3)'
        ease: 'expo.out'
    })
}

onMounted(() => {
    window.addEventListener('mousemove', updateVelocity)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', updateVelocity)
})

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
</style>