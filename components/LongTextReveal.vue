<template>
    <div class="reveal-container w-full">
        <p ref="textElement" class="invisible funnel font-normal" :class="`text-${position} ${size}`">
            {{ texto }}
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
    texto: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: "text-2xl"
    },
    position: String,
});

const textElement = ref(null);
let ctx;

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(SplitText, ScrollTrigger);

        setTimeout(() => {
             ctx = gsap.context(() => {
                gsap.set(textElement.value, { autoAlpha: 1 });

                const splitChild = new SplitText(textElement.value, {
                    type: 'lines',
                    linesClass: 'line-child' 
                });

                const splitParent = new SplitText(textElement.value, { 
                    type: 'lines', 
                    linesClass: 'line-parent' 
                });

                gsap.from(splitChild.lines, {
                    yPercent: 100,
                    ease: 'expo.out',
                    stagger: 0.1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textElement.value,
                        start: 'top 85%', 
                    }
                });
            }, textElement.value);
        }, 200);
    }
});

onUnmounted(() => {
    if (ctx) ctx.revert();
});
</script>

<style>
.line-parent {
    overflow: hidden;
}

.line-child {
    transform: translate(0, 0); 
}
</style>