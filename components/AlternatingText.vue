<template>
    <div class="relative w-full h-[6rem] text-end">
        <p v-for="(text, index) in props.texts" :key="index" :ref="el => { if (el) textRefs[index] = el }"
            class="hikasami font-semibold text-[5rem] leading-none text-gr-md overflow-hidden invisible pb-2 absolute inset-0"
            :class="'text-' + props.position">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const textRefs = ref([]);
let masterTl = null;

const props = defineProps({
    texts: {
        type: Array,
        required: true
    },
    start: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        default: 'end'
    },
    from: {
        type: String,
        default: 'top'
    }
});

const createAnimation = () => {
    if (masterTl) {
        masterTl.kill();
    }

    const fromY = props.from === 'top' ? -150 : 150;

    if (props.texts.length === 1) {
        masterTl = gsap.timeline({ paused: true });
        const el = textRefs.value[0];
        gsap.set(el, { autoAlpha: 1 });
        const split = new SplitText(el, { type: 'chars' });

        masterTl.from(split.chars, {
            yPercent: fromY,
            duration: 0.7,
            ease: 'expo.out',
            stagger: { each: 0.05, from: props.position }
        });
    } else {
        masterTl = gsap.timeline({ repeat: -1, paused: true });
        textRefs.value.forEach((el, index) => {
            gsap.set(el, { autoAlpha: 1 });
            const split = new SplitText(el, { type: 'chars' });
            const isFirst = index === 0 ? '0' : '-=0.6';

            masterTl.from(split.chars, {
                yPercent: fromY, duration: 0.7, ease: 'expo.out', stagger: { each: 0.05, from: props.position }
            }, isFirst);

            masterTl.to(split.chars, {
                yPercent:  -fromY, duration: 0.7, ease: 'expo.in', stagger: { each: 0.05, from: props.position }
            }, "+=0.7");
        });
    }
};

watch(() => props.start, (newValue) => {
    if (newValue && masterTl) {
        masterTl.play();
    }
}, { immediate: false });

onMounted(() => {
    watch(textRefs, (newRefs) => {
        if (newRefs.length === props.texts.length && newRefs.every(el => el)) {
            createAnimation();
        }
    }, { immediate: true, deep: true });
});
</script>