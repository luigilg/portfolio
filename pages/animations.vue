<template>
<div class="p-10 min-h-screen bg-[#EAE8E1] relative">
    <div class="flex flex-col items-center">
        <h1 class="gabarito font-black text-[10rem] text-[#2C2C2C]">ANIMAÇÕES</h1>
        
        <div class="flex w-full max-w-[90%] mt-10 relative px-20">
            <!-- List -->
            <ul class="flex flex-col gap-2 z-10 w-1/3" @mouseleave="onListLeave">
                <li 
                    v-for="(item, index) in items" 
                    :key="index"
                    @mouseenter="onItemEnter(index)"
                    @mousedown="onItemDown(index)"
                    @mouseup="onItemUp(index)"
                    class="cursor-pointer flex items-center relative active:scale-90 active:-translate-x-6 transition-transform duration-200 ease-out group"
                >
                    <!-- <svg 
                        :class="`arrow-left-${index}`"
                        class="absolute -left-8 opacity-0"
                        width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" 
                        :fill="activeColor"/>
                    </svg> -->
                    <div 
                        :class="[`item-text-${index}`, activeItemIndex === index ? 'font-black' : 'font-bold']"
                        class="text-4xl flex items-center w-fit relative uppercase gabarito text-[#B0B0B0] origin-left transition-[font-weight] duration-200 ease-out group-active:font-[100]"
                    >
                        {{ item.name }}
                        <svg 
                            :class="`arrow-right-${index}`" 
                            class="absolute left-full ml-3 opacity-0 rotate-45 scale-1/2"
                            width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" 
                            :fill="activeColor"/>
                        </svg>
                    </div>
                </li>
            </ul>

            <div 
                v-if="activeItemIndex !== null"
                class="absolute left-1/3 top-0 ml-10 w-96 h-64 rounded-xl shadow-lg transition-colors duration-300 pointer-events-none flex items-center justify-center text-white font-bold"
                :style="{ backgroundColor: activeColor }"
            >
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

const activeItemIndex = ref(null);
const activeColor = ref('');
const currentColorIndex = ref(-1);

const items = [
    { name: 'MINIDRINKS'},
    { name: 'PROCUBO'},
    { name: 'CONVERSU'},
    { name: 'BAYA'},
    { name: 'VZION'},
    { name: 'GIRARTIST'},
    { name: 'KINETIC TYPOGRAPHY'},
    { name: 'ELASTIC TYPE'},
    { name: 'FUTEGOL'},
    { name: 'ENGEPRO'},
    { name: 'ABELINO'},
    { name: 'TRILHAS DO SABER'},
    { name: 'COEMJR'},
    { name: 'EMJEL'},
    { name: 'ESTAÇÃO CENTRAL'},
    { name: 'ESCOLA JÚNIOR'},
    { name: 'CHUNG RESPONDE'},
    { name: 'KUTASSY ENG'},
    { name: 'LUNE'},
    { name: 'DEHALL'},
    { name: 'LAW ARQUITETURA'},
    { name: 'HC PAINT'},
    { name: 'BRUNA GAZOLLA'},
    { name: 'ARASSAEM'},
];

onMounted(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("fast", "M0,0 C0.039,0.356 0.05,0.675 0.228,0.837 0.406,1 0.489,1 1,1 ");
});

const colorSequence = () => {
    const colors = ["#A23DD4", "#4F52BE", "#32A1B8"];
    currentColorIndex.value = (currentColorIndex.value + 1) % colors.length;
    return colors[currentColorIndex.value];
};

const onItemEnter = (index) => {
    if (activeItemIndex.value === index) return;

    if (activeItemIndex.value !== null) {
        animateOut(activeItemIndex.value);
    }

    activeItemIndex.value = index;
    const nextColor = colorSequence();
    activeColor.value = nextColor;

    gsap.to(`.item-text-${index}`, {
        color: nextColor,
        x: 0,
        scale: 1.6,
        duration: 0.8,
        ease: 'fast',
        overwrite: true
    });

    gsap.fromTo(`.arrow-left-${index}`, 
        { x: -50, opacity: 1},
        { x: 15, opacity: 1, duration: 1, ease: 'fast', overwrite: true }
    );

    gsap.to(`.arrow-right-${index}`, { 
        opacity: 1, 
        rotate: 0,
        duration: 1, 
        scale: 1,
        ease: 'fast', 
        overwrite: true 
    });
};

const onItemDown = (index) => {
    gsap.to(`.arrow-right-${index}`, { 
        x: 5,
        y: 0,
        rotate: 45,
        opacity: 1,
        scale: 1.6, 
        duration: 0.4, 
        ease: 'fast',
        overwrite: true
    });
};

const onItemUp = (index) => {
    gsap.to(`.arrow-right-${index}`, { 
        x: 0, 
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.4, 
        ease: 'fast',
        overwrite: true
    });
};

const onListLeave = () => {
    if (activeItemIndex.value !== null) {
        animateOut(activeItemIndex.value);
        activeItemIndex.value = null;
    }
};

const animateOut = (index) => {
    gsap.to(`.item-text-${index}`, {
        color: '#B0B0B0',
        x: 0,
        scale: 1,
        duration: 0.4,
        ease: 'fast',
        overwrite: true
    });

    // Animate Left Arrow OUT
    gsap.to(`.arrow-left-${index}`, {
        x: -50,
        opacity: 0,
        duration: 0.25,
        ease: 'fast',
        overwrite: true
    });
    gsap.to(`.arrow-right-${index}`, {
        opacity: 0,
        rotate: 45,
        scale: 1/2,
        x: 0,
        duration: 0.25,
        ease: 'fast',
        overwrite: true
    });
};
</script>