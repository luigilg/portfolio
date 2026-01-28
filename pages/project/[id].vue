<template>
<div class="min-h-screen bg-[#EAE8E1] p-10 flex flex-col items-center">
    <!-- Back Button -->
    <div class="w-full max-w-[90%] flex justify-start">
        <div @click="router.back()" class="flex items-center gap-3 group cursor-pointer">
            <svg class="w-5 h-5 -rotate-[135deg] transition-transform group-hover:-translate-x-3 group-hover:scale-[130%]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" fill="#44494c"/>
            </svg>
            <span class="gabarito font-bold text-2xl text-b-dark2 group-hover:text-b-dark group-hover:scale-[120%] group-hover:font-black transition-font-weight group-active:font-thin">VOLTAR</span>
        </div>
    </div>

    <div v-if="project" class="w-full flex flex-col items-center">
        <Title1 :text="project.title" class="mb-20 relative z-20 leading-none" />
        
        <div class="relative w-full max-w-[1200px] aspect-video rounded-xl overflow-hidden shadow-2xl z-10">
             <video 
                v-if="project.preview.type === 'video'"
                :src="project.preview.src"
                autoplay loop muted playsinline 
                class="w-full h-full object-cover"
             ></video>
             <img 
                v-else
                :src="project.preview.src"
                class="w-full h-full object-cover"
             />
        </div>

        <div v-if="project.media" class="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div 
                v-for="(item, index) in project.media" 
                :key="index"
                :class="item.cols === 2 ? 'md:col-span-2' : ''"
                class="flex flex-col gap-2"
            >
                <div class="rounded-xl overflow-hidden shadow-lg w-full relative">
                     <video 
                        v-if="item.type === 'video'"
                        :src="item.src"
                        autoplay loop muted playsinline 
                        class="w-full h-auto block max-h-[80vh]"
                     ></video>
                     <img 
                        v-else
                        :src="item.src"
                        class="w-full h-auto block"
                     />
                </div>
                <p v-if="item.caption" class="text-b-dark font-['Funnel_Display'] text-lg opacity-70 mt-2">{{ item.caption }}</p>
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
import { projects } from '../../data/projects';

const route = useRoute();
const router = useRouter();
const project = computed(() => projects.find(p => p.id === route.params.id));
</script>
