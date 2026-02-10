<template>
<div class="w-full min-h-screen bg-b-dark relative">
    
    <!-- Layer 1: Blurred Ambient Background (Z-0) -->
    <div class="fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-black">
        <transition name="fade">
            <div :key="'bg-' + activeItemIndex" class="absolute inset-0 w-full h-full">
                 <template v-if="activeItemIndex !== null && items[activeItemIndex]">
                     <video 
                        v-if="isVideo(items[activeItemIndex].src)"
                        :src="resolvePath(items[activeItemIndex].src)"
                        autoplay loop muted playsinline 
                        class="w-full h-full object-cover blur-xl opacity-60 brightness-50 scale-110"
                     ></video>
                     <img 
                        v-else 
                        :src="resolvePath(items[activeItemIndex].src)" 
                        class="w-full h-full object-cover blur-xl opacity-60 brightness-50 scale-110"
                     />
                 </template>
            </div>
        </transition>
    </div>

    <!-- Layer 2: Sharp Centered Content (Z-20) -->
    <div class="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <transition name="fade">
            <div :key="'fg-' + activeItemIndex" class="absolute inset-0 w-full h-full flex items-center justify-center p-[5vw]">
                 <template v-if="activeItemIndex !== null && items[activeItemIndex]">
                     <img 
                        :src="resolvePath(items[activeItemIndex].src)" 
                        :class="{ 'shadow-2xl': !items[activeItemIndex].transparent }"
                        class="w-auto h-auto max-w-full max-h-[40vh] object-contain rounded-lg mx-auto"
                     />
                 </template>
            </div>
        </transition>
    </div>

    <!-- Layer 3: Fixed Title Container (Z-30) -->
    <div class="fixed top-[13vh] w-full left-0 z-30 flex justify-center pointer-events-none group">
        <transition name="slide-fade" mode="out-in">
            <div :key="activeItemIndex" class="flex flex-col items-center text-center w-[90vw] pointer-events-auto cursor-pointer group-active:font-normal group-active:scale-95 transition select-none" @click="activeItemIndex !== null && items[activeItemIndex].link ? handleItemClick(items[activeItemIndex]) : null">
                 <span class="gabarito font-black text-[12vw] text-white uppercase leading-[0.9] drop-shadow-xl">
                    {{ activeItemIndex !== null ? items[activeItemIndex].name : '' }}
                 </span>
                 <span 
                 class="funnel text-white/80 text-[3.5vw] mt-[2vh] uppercase tracking-widest font-bold animate-pulse group-active:underline transition group-active:scale-[110%] group-active:text-white group-active:font-black select-none">
                    {{ activeItemIndex !== null && items[activeItemIndex].link ? 'VEJA MAIS >' : '' }}
                 </span>
             </div>
        </transition>
    </div>

    <!-- Header (Back Btn) -->
    <div class="fixed top-[2.4vh] left-[5vw] z-50">
        <div @click="router.back()" class="back-btn-wrapper flex items-center justify-center gap-[2vw] group cursor-pointer bg-white/10 backdrop-blur-md px-[4vw] py-[2vw] rounded-full w-fit border border-white/20 shadow-lg transition-colors duration-300">
            <svg class="w-[5vw] h-[5vw] -rotate-[135deg] transition-transform" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" fill="#ffffff"/>
            </svg>
            <span class="gabarito voltartxt font-bold text-[4vw] text-white leading-none overflow-hidden whitespace-nowrap">VOLTAR</span>
        </div>
    </div>

    <!-- Hero Title (Moves from Center to Top) -->
    <div class="hero-title fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center pointer-events-none origin-top">
        <Title1 text="DESIGN" class="text-[17vw] text-white mix-blend-overlay whitespace-nowrap" />
    </div>

    <!-- Scroll Prompt -->
    <div class="scroll-prompt fixed bottom-[5vh] left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-[1vh] pointer-events-none">
        <div class="flex flex-col items-center gap-[1vh] animate-pulse">
            <span class="funnel font-bold text-[3.5vw] text-white/50 tracking-widest">DESLIZE A TELA</span>
            <svg class="w-[5vw] h-[5vw] -rotate-45" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" fill="#ffffff" fill-opacity="0.5"/>
            </svg>
        </div>
    </div>

    <div class="relative w-full min-h-screen">
         
         <ul class="flex flex-col w-full pb-[20vh] pt-[80vh] relative z-10">
             <li v-for="(item, index) in items" :key="index"
                 class="anim-item w-full min-h-[100vh] flex flex-col items-center justify-start relative transition-all"
                 :class="[
                    `item-trigger-${index}`, 
                    activeItemIndex === index ? 'z-30' : 'z-10'
                 ]"
             >
                 <!-- List Item: ONLY serving as rising preview. Hidden when active. -->
                 <div class="w-full flex justify-center mt-[40vh]">
                     <div class="flex flex-col items-center text-center"
                          :class="getItemVisualClass(index)"
                          :ref="el => visualRefs[index] = el"
                          @click="handleItemClick(item)"
                          style="width: 90vw;"
                     >
                         <span class="gabarito font-black text-[12vw] text-white uppercase leading-[0.9]">
                            {{ item.name }}
                         </span>
                     </div>
                 </div>
             </li>
         </ul>
    </div>

</div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'vue-router';
import { projects } from '../../data/projects'; 

definePageMeta({
  layout: 'mobile',
  pageTransition: true,
});

useHead({
  bodyAttrs: {
    class: 'bg-black' // Ensures Safari overscroll matches
  },
  meta: [
    { name: 'theme-color', content: '#000000' }
  ]
});

const router = useRouter();
const activeItemIndex = ref(null);
const visualRefs = ref([]);
let ctx;

const items = projects
    .filter(p => p.categories && p.categories.includes('design'))
    .map(p => {
        const preview = p.previews?.design || p.preview;
        return {
            id: p.id,
            name: p.title,
            src: `../../public${preview.src}`, 
            link: p.hasPage,
            speed: preview.speed,
            start: preview.start,
            transparent: preview.transparent
        };
    });

const handleItemClick = (item) => {
    if (item.link) {
        router.push(`/mobile/project/${item.id}`);
    }
};

const resolvePath = (path) => {
    if (!path) return '';
    return path.replace('../../public', '');
};

const isVideo = (path) => {
    if (!path) return false;
    return path.toLowerCase().endsWith('.mp4');
};

const getItemVisualClass = (index) => {
    if (activeItemIndex.value === null) {
        // Initial state for all items before any scrolling
        // return 'opacity-50 blur-[0.6vw] scale-90'; 
        return ''; 
    }
    
    if (index === activeItemIndex.value) {
        // Active: HIDDEN (Handed off to Fixed Title)
        // !important to override GSAP inline styles
        return '!opacity-0 pointer-events-none';
    } else if (index > activeItemIndex.value) {
        // Next (Rising): Visible - GSAP handles styles, but base class here
        // return 'opacity-90 blur-[0.6vw] scale-90';
        return '';
    } else {
        // Previous (Done): Hidden
        return '!opacity-0 pointer-events-none';
    }
};

onMounted(() => {
  ctx = gsap.context(() => {
    // FORCE SCROLL RESET
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    gsap.registerPlugin(ScrollTrigger);

    // 1. HERO ANIMATION: Slide Title from Center to Top
    // Initial entrance
    // gsap.from('.hero-title', {
    //     y: 50,
    //     opacity: 0,
    //     duration: 1.5,
    //     ease: 'power3.out'
    // });
    
    // Scroll Scrub - Title
    gsap.to('.hero-title', {
        top: '8vh', // Adjusted per user request (was 3vh)
        scale: 0.4, 
        y: 0, 
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            end: "+=400vh", // Absolute scroll distance (was 25% of body)
            scrub: 1
        }
    });

    // Scroll Scrub - Back Button Morph (Pill -> Circle)
    // 1. Animate Wrapper (Gap & Padding)
    gsap.to('.back-btn-wrapper', {
        gap: '0vw',
        paddingLeft: '2.5vw', // Assuming py is 2vw, aiming for circle
        paddingRight: '2vw',
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            end: "+=400vh",
            scrub: 1
        }
    });

    // 2. Animate Text (Width & Opacity)
    gsap.to('.voltartxt', {
        width: 0,
        opacity: 0,
        marginLeft: 0,
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            end: "+=400vh",
            scrub: 1
        }
    });


    // Scroll Prompt Fade Out
    ScrollTrigger.create({
        start: 10, // Absolute scroll 10px
        onEnter: () => gsap.to('.scroll-prompt', { opacity: 0, duration: 0.5, overwrite: true }),
        onLeaveBack: () => gsap.to('.scroll-prompt', { opacity: 1, duration: 0.5, overwrite: true })
    });


    items.forEach((item, index) => {
        ScrollTrigger.create({
            trigger: `.item-trigger-${index}`,
            start: "top 10%", 
            end: "bottom 50%",
            onEnter: () => activeItemIndex.value = index,
            onEnterBack: () => activeItemIndex.value = index,
            onLeaveBack: () => {
                if (index > 0) activeItemIndex.value = index - 1;
                else activeItemIndex.value = null; // Reset to null if going back to Hero
            }
        });
        
        if (visualRefs.value[index]) {
            gsap.fromTo(visualRefs.value[index], 
                { 
                    opacity: 0, 
                    scale: 2.2, 
                    filter: "blur(3vw)", 
                    // letterSpacing: "10vw" 
                },
                {
                    opacity: 1, 
                    scale: 1, 
                    filter: "blur(0vw)",
                    // letterSpacing: "0vw",
                    scrollTrigger: {
                        trigger: `.item-trigger-${index}`,
                        start: "top 90%", 
                        end: "top 12%",   
                        scrub: true,
                    }
                }
            );
            gsap.fromTo(visualRefs.value[index], 
                {
                    opacity: 0.8,
                    scale: 1
                },
                {
                    opacity: 0,
                    scale: 0,
                    scrollTrigger: {
                        trigger: `.item-trigger-${index}`,
                        start: "top 25%",
                        end: "top 0%",
                        scrub: true,
                    }
                }
            );
        }
    });
    
    setTimeout(() => ScrollTrigger.refresh(), 200);
  });
});

onUnmounted(() => {
    if (ctx) ctx.revert();
    activeItemIndex.value = null;
    contentReady.value = false;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>