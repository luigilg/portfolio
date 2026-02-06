<template>
    <div class="text-center gabarito font-extrabold text-[10rem] -tracking-[4px]" ref="titleRef">
        {{ text }}
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    delay: Number,
});

const titleRef = ref(null);

onMounted(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (titleRef.value) {
        gsap.set(titleRef.value, { visibility: 'hidden' });

        const split = new SplitText(titleRef.value, { type: 'chars' });
        const chars = split.chars;
        
        gsap.set(titleRef.value, { visibility: 'visible' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.value,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                refreshPriority: -1
            }
        });

        tl.from(chars, {
            opacity: 0,
            delay: props.delay ? props.delay : 0,
            x: 200,
            duration: 0.6,
            ease: 'elastic.out(1.1,1)',
            // ease: 'expo.out',
            stagger: {
                from: 'start',
                each: 0.03
            }
        });
    }
});
</script>