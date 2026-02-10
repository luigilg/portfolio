<template>
    <div ref="gridRef" class="grid grid-cols-5 gap-6 p-4">
        <TechCard 
            class="tech-card-item opacity-0 translate-y-10"
            v-for="(tech, index) in techList" 
            :key="index"
            :logo="tech.logo"
            :color="tech.color"
            :color2="tech.color2"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gridRef = ref(null)

onMounted(() => {
    if (gridRef.value) {
        gsap.to(gridRef.value.children, {
            scrollTrigger: {
                trigger: gridRef.value,
                start: "top 85%", // Start animation when top of grid hits 85% of viewport height
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        })
    }
})

const techList = ref([
    { logo: 'html', color: '#fe4d13' },
    { logo: 'css', color: '#1370b4' },
    { logo: 'javascript', color: '#ffde24' },
    { logo: 'typescript', color: '#2f74c0' },
    { logo: 'vue', color: '#4ebf8c' },
    { logo: 'react', color: '#61dbfb' },
    { logo: 'angular', color: '#e42939' },
    { logo: 'nodejs', color: '#82cd2a' },
    { logo: 'java', color: '#f0931c' },
    { logo: 'python',  color: '#ffd341' },
    { logo: 'C', color: '#A8B9CC' }, 
    { logo: 'mysql', color: '#00618a' },
    { logo: 'oracle', color: '#f70000' },
    { logo: 'bootstrap', color: '#910bfe', color2: '#6a07f3' },
    { logo: 'tailwind', color: '#00b9d8' }
])
</script>