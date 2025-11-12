<template>
    <div class="flex w-full h-screen items-center justify-center bg-b-light">
        <h1 class="text-[10rem] gabarito font-black text-b-dark select-none whitespace-nowrap 
                -tracking-[6px]  transition-all"
            @click="click"
            :class="hasClicked ? '' : 'active:font-[100] active:scale-95 cursor-pointer'"
        >
            ANIMAÇÕES
        </h1>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const hasClicked = ref(false);

const click = () => {
    if (hasClicked.value) return;
    hasClicked.value = true;

    const split = new SplitText('h1', { type: 'chars', reduceWhiteSpace: false });
    const chars = split.chars;

    const wordBounds = chars[0].parentElement.getBoundingClientRect();
    const wordCenter = wordBounds.left + wordBounds.width / 2;

    const targetScale = 1.6; // Fator de escala
    const targetY = 150;   // Posição Y final em pixels a partir do topo

    gsap.to(chars,
        {
            scale: targetScale,
            x: (index, target) => {
                const charBounds = target.getBoundingClientRect();
                const charCenter = charBounds.left + charBounds.width / 2;
                const distanceFromCenter = charCenter - wordCenter;
                return distanceFromCenter * (targetScale - 1);
            },
            y: (index, target) => {
                const charBounds = target.getBoundingClientRect();
                return targetY - charBounds.top;
            },
            duration: 1,
            ease: 'back.inOut(2.5)',
            stagger: 0.05,
        }
    );
};

onMounted(() => {
    // click();
});


</script>