<template>
    <div ref="container" class="markdown-reveal w-full" :class="'text-' + position">
        <div v-html="renderedContent" class="markdown-content funnel font-normal text-lg"></div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
    content: {
        type: String,
        required: true
    },
    position: {
        type: String,
        default: 'left'
    }
});

const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true
});

const renderedContent = computed(() => md.render(props.content));
const container = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = container.value.querySelectorAll('.markdown-content > *');
    
    gsap.set(elements, { 
        y: 30, 
        autoAlpha: 0 
    });

    ScrollTrigger.batch(elements, {
        start: "top bottom",
        onEnter: batch => gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
        })
    });
});
</script>

<style>
.markdown-content h1, 
.markdown-content h2, 
.markdown-content h3 {
    font-family: 'Gabarito', sans-serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    line-height: 1.2;
}

.markdown-content h1 { font-size: 1.5rem; }
.markdown-content h2 { font-size: 1.25rem; }
.markdown-content h3 { font-size: 1.1rem; }

.markdown-content p {
    margin-bottom: 1rem;
    line-height: 1.6;
    opacity: 0.9;
}

.markdown-content ul, 
.markdown-content ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
}

.markdown-content ul { list-style-type: disc; }
.markdown-content ol { list-style-type: decimal; }

.markdown-content li {
    margin-bottom: 0.25rem;
    line-height: 1.5;
}

.markdown-content strong {
    font-weight: 700;
    color: inherit;
}

.markdown-content a {
    text-decoration: underline;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.markdown-content a:hover {
    opacity: 1;
}

.markdown-content > *:first-child {
    margin-top: 0;
}
</style>
