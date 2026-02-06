<template>
    <div class="text-center gabarito font-extrabold select-none text-[10rem] leading-none" :class=" mobile ? '-tracking-[0.05vw]' : '-tracking-[4px]' " ref="titleRef">
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
    mobile: {
        type: Boolean,
        default: false
    },
    start: {
        type: String,
        default: 'top 80%'
    },
    noScroll: {
        type: Boolean,
        default: false
    }
});

const titleRef = ref(null);

onMounted(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (titleRef.value) {
        gsap.set(titleRef.value, { visibility: 'hidden' });

        const split = new SplitText(titleRef.value, { type: 'words, chars' });
        const chars = split.chars;
        
        gsap.set(titleRef.value, { visibility: 'visible' });

        const tl = gsap.timeline(props.noScroll ? {} : {
            scrollTrigger: {
                trigger: titleRef.value,
                start: props.start,
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