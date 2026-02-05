<template>
    <div class="relative w-full h-[9vh] -my-[2vh] text-center flex flex-col justify-center items-center overflow-hidden">
        <p v-for="(text, index) in props.texts" :key="index" :ref="el => { if (el) textRefs[index] = el }"
            class="hikasami font-semibold text-[4vh] leading-none text-gr-md invisible absolute inset-0 tracking-[-0.2vh] flex items-center"
            :class="['text-' + props.position, {
                'justify-start': props.position === 'start' || props.position === 'left',
                'justify-center': props.position === 'center',
                'justify-end': props.position === 'end' || props.position === 'right'
            }]">
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

    const fromY = props.from === 'top' ? '-10vh' : '10vh';
    const fromY2 = props.from === 'top' ? '-10vh' : '-10vh';

    if (props.texts.length === 1) {
        masterTl = gsap.timeline({ paused: true });
        const el = textRefs.value[0];
        gsap.set(el, { autoAlpha: 1 });
        const split = new SplitText(el, { type: 'chars' });

        masterTl.from(split.chars, {
            y: fromY,
            duration: 0.6,
            ease: 'expo.out',
            stagger: { each: 0.03, from: props.position }
        });
    } else {
        masterTl = gsap.timeline({ repeat: -1, paused: true });
        textRefs.value.forEach((el, index) => {
            gsap.set(el, { autoAlpha: 1 });
            const split = new SplitText(el, { type: 'chars' });
            const isFirst = index === 0 ? '0' : '-=0.5';

            masterTl.from(split.chars, {
                y: fromY, duration: 0.7, ease: 'expo.out', stagger: { each: 0.05, from: props.position }
            }, isFirst);

            masterTl.to(split.chars, {
                y:  fromY2, duration: 0.7, ease: 'expo.in', stagger: { each: 0.05, from: props.position }
            }, "+=0.8");
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