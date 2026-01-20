<template>
    <div class="reveal-container w-full">
        <p ref="textElement" class="invisible hikasami font-semibold text-2xl" :class="'text-' + position">
            {{ texto }}
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
    texto: {
        type: String,
        required: true
    },
    position: String,
});

const textElement = ref(null);

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(SplitText, ScrollTrigger);

        gsap.to(textElement.value, {
            autoAlpha: 1, duration: 0, onComplete: () => {
                const split = new SplitText(textElement.value, {
                    type: 'lines',
                    linesClass: 'line-child' 
                });

                new SplitText(textElement.value, { type: 'lines', linesClass: 'line-parent' });

                gsap.from(split.lines, {
                    yPercent: 100,
                    ease: 'expo.out',
                    stagger: 0.1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textElement.value,
                        start: 'top 85%', 
                    }
                });
            }
        });
    }
});
</script>

<style>
.line-parent {
    overflow: hidden;
}

.line-child {
    transform: translate(0, 0); /* Garante que a animação GSAP funcione corretamente */
}
</style>