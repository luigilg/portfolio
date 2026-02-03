<template>
<div class="p-6 md:p-20 bg-b-light text-b-dark min-h-screen pb-20 overflow-x-hidden">
    <!-- Header -->
    <div class="max-w-screen-2xl mx-auto flex flex-col gap-6 mb-10 md:mb-24">
        <h1 class="gabarito text-[15vw] md:text-[8rem] font-black tracking-[-0.05em] leading-[0.8] uppercase">Músicas</h1>
        <div class="w-full h-[2px] bg-b-dark/5 relative overflow-hidden rounded-full">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pu via-cy to-bl opacity-100"></div>
        </div>
    </div>

    <!-- Content -->
    <div class="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        <!-- Text Column -->
        <div class="lg:col-span-5 flex flex-col gap-12 order-2 lg:order-1">
            <div class="text-xl md:text-2xl leading-relaxed text-pretty">
                <LongTextReveal :texto="texto1" position="start"/>
            </div>
            
            <!-- Statistics / Tags Block -->
            <div class="flex flex-wrap gap-4 pt-4 border-t border-b-dark/10 gabarito">
                 <div class="flex flex-col items-center">
                    <span class="text-5xl gabarito font-bold text-pu">+50</span>
                    <span class="text-sm font-medium uppercase tracking-widest opacity-60">Composições</span>
                    <span class="text-sm font-medium uppercase tracking-widest opacity-60">finalizadas</span>
                 </div>
                 <div class="w-[1px] bg-b-dark/10 mx-4"></div>
                 <div class="flex flex-col items-center">
                    <span class="text-5xl gabarito font-bold text-bl">+150</span>
                    <span class="text-sm font-medium uppercase tracking-widest opacity-60">Rascunhos</span>
                 </div>
                 <div class="w-[1px] bg-b-dark/10 mx-4"></div>
                 <div class="flex flex-col items-center">
                    <span class="text-5xl gabarito font-bold text-cy">10</span>
                    <span class="text-sm font-medium uppercase tracking-widest opacity-60">Publicações</span>
                 </div>
            </div>
        </div>

        <!-- Player Column -->
        <div class="lg:col-span-7 order-1 lg:order-2">
            <div class="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white border border-b-dark/5 transform transition duration-200 hover:translate-y-[-10px] hover:shadow-[0_20px_50px_rgba(90,0,180,0.25)]">
                <iframe 
                    width="100%" 
                    height="600" 
                    scrolling="no" 
                    frameborder="no" 
                    allow="autoplay" 
                    :src="iframeSrc">
                </iframe>
            </div>
        </div>

    </div>
</div>
</template>

<script setup>
definePageMeta({
  pageTransition: true,
});

const iframeSrc = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1090480555&color=%23A23DD4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

const texto1 = 'Comecei a compor músicas aos 14 anos de idade. Hoje, com 24 anos, tenho dezenas de composições prontas, e mais de 150 rascunhos de músicas. Dentre os estilos musicais que mais produzi, estão o orquestral, o eletrônico e o híbrido entre ambos, mas também já compus músicas em estilo voz e violão. Comecei com as eletrônicas e desenvolvi uma paixão imensa por trilhas sonoras cinematográficas. Em 2017 participei do IV Concurso Nacional de Composição Música Hoje, para composições orquestrais, e apesar da minha composição não ter sido uma das premiadas, fiquei muito contente com o desafio de criar uma composição mais longa. Todas as músicas que decidi publicar estão disponíveis no SoundCloud.'
</script>