<template>
<div class="min-h-screen bg-white py-[3vh] px-[5vw] flex flex-col items-center">
    <div class="w-full max-w-[95vw] flex fixed justify-between">
        <div @click="router.back()" class="flex ml-[3vw] items-center gap-3 group cursor-pointer">
            <svg class="w-[5vw] h-[5vw] -rotate-[135deg] transition-transform group-hover:-translate-x-3 group-hover:scale-[130%]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" 
                    :fill="project.color ? '#282E32' : '#282E32'"
                />
            </svg>
            <!-- <span class="gabarito font-bold text-2xl text-b-dark2 group-hover:text-b-dark group-hover:scale-[120%] group-hover:font-black transition-font-weight group-active:font-thin">VOLTAR</span> -->
        </div>
        <!-- <div v-if="project.link" class=" flex items-center group gap-1 cursor-pointer">
            <a :href="project.link.url" target="_blank" class="funnel font-normal text-2xl text-b-dark2 group-hover:text-b-dark group-hover:scale-[120%] group-hover:font-black underline group-active:font-thin">{{ project.link.label }}</a>
            <svg class="w-3 h-3 -translate-y-[2px] -rotate-[0deg] transition-transform group-hover:translate-x-4 group-hover:-translate-y-2 group-hover:scale-[130%]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" 
                :fill="project.color ? project.color : '#44494c'"/>
            </svg>
        </div> -->
    </div>

    <div v-if="project" class="w-full flex flex-col items-center">
        <Title1 
            :text="project.title" class="mb-[5vh] relative z-20 break-words leading-none text-[12vw] tracking-[0vw] max-w-[85vw]" 
            mobile noScroll
            :class="{ 'text-b-dark': !project.color }" 
            :style="{ color: project.color }" 
        /> 


        <MarkdownText(M)
            v-if="project.isMarkdown && project.description" 
            class="max-w-[81vw] w-full" 
            :content="project.description" 
            position="start" 
        />
        <LongTextReveal 
            v-else-if="project.description" 
            class="max-w-[81vw] mb-10"
            size="text-[4vw]" 
            :texto="project.description" 
            position="start" 
        />

        <div v-if="project.media" class="w-full max-w-[90vh] grid grid-cols-1 md:grid-cols-2 gap-[6vh] mt-[6vh]">
            <div 
                v-for="(item, index) in project.media" 
                :key="index"
                :class="item.cols === 2 ? 'md:col-span-2' : ''"
                class="flex flex-col gap-2 items-center w-full"
            >
                <video 
                    v-if="item.type === 'video'"
                    :src="item.src"
                    :controls="item.controls"
                    :autoplay="item.autoplay == null ? !item.controls : item.autoplay"
                    :loop="item.loop == null ? !item.controls : item.loop"
                    :muted="item.muted == null ? !item.controls : item.muted"
                    playsinline 
                    class="rounded-xl shadow-lg block h-auto max-h-[80vh] max-w-full mx-auto"
                ></video>
                <img 
                    v-else
                    :src="item.src"
                    class="rounded-xl shadow-lg block  h-auto max-h-[80vh] max-w-full mx-auto"
                />
                <p v-if="item.caption" class="text-b-dark funnel text-[3.7vw] opacity-70 mt-1">{{ item.caption }}</p>
            </div>
        </div>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center h-[50vh]">
        <h1 class="text-4xl gabarito font-bold text-[#2C2C2C]">Projeto não encontrado</h1>
        <NuxtLink to="/animations" class="mt-4 underline text-[#2C2C2C]">Voltar para Animações</NuxtLink>
    </div>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../../../data/projects';

definePageMeta({
  layout: 'mobile',
  pageTransition: true,
});

useHead({
  bodyAttrs: {
    class: 'bg-white' 
  },
  meta: [
    { name: 'theme-color', content: '#ffffff' }
  ]
});

const route = useRoute();
const router = useRouter();
const project = computed(() => projects.find(p => p.id === route.params.id));
</script>
