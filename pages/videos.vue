<template>
<div class="p-10 min-h-screen bg-b-light relative">
    <div class="flex flex-col items-center">
        <div class="w-full max-w-[90%] fixed justify-start">
            <div @click="router.back()" class="flex items-center gap-3 group cursor-pointer">
                <svg class="w-5 h-5 -rotate-[135deg] transition-transform group-hover:-translate-x-3 group-hover:scale-[130%]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" fill="#44494c"/>
                </svg>
                <span class="gabarito font-bold text-2xl text-b-dark2 group-hover:text-b-dark group-hover:scale-[120%] group-hover:font-black transition-font-weight group-active:font-thin">VOLTAR</span>
            </div>
        </div>

        <Title1 text="VÍDEOS" :delay="0.3" class="relative z-20 leading-none" />

        
        <div ref="scrollContainer" class="flex w-full max-w-[90%] mt-10 relative justify-between">
            <ul class="flex flex-col gap-2 z-[10] w-1/3" @mouseleave="onListLeave">
                <li 
                    v-for="(item, index) in items" 
                    :key="index"
                    @mouseenter="onItemEnter(index)"
                    @mousedown="onItemDown(index)"
                    @mouseup="onItemUp(index)"
                    @click="handleItemClick(item)"
                    :class="item.link ? 'cursor-pointer active:scale-90 active:-translate-x-6' : 'cursor-default'"
                    class="anim-item flex items-center relative transition-transform duration-200 ease-out group hover:z-[11]"
                >
                    <!-- <svg 
                        :class="`arrow-left-${index}`"
                        class="absolute -left-8 opacity-0"
                        width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" 
                        :fill="activeColor"/>
                    </svg> -->
                    <div 
                        :class="[`item-text-${index}`, visualActiveIndex === index ? 'font-black' : 'font-bold'], [item.link ? 'group-active:font-[100]' : '']"
                        class="text-[2.6em] select-none text-nowrap leading-none flex items-center w-fit relative uppercase gabarito text-[#B0B0B0] origin-left transition-[font-weight] duration-200 ease-out "
                    >
                        {{ item.name }}
                        <svg 
                            v-if="item.link"
                            :class="`arrow-right-${index}`" 
                            class="absolute left-full ml-2 opacity-0 rotate-45 scale-1/2"
                            width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M43.7883 -5.44358e-06V37.6507L29.2602 37.4456V24.7605L10.0267 43.9939L0.000196677 33.9674L19.4394 14.5281L6.34344 14.5288L6.13835 0.00068509L43.7883 -5.44358e-06Z" 
                            :fill="'#282E32'"/>
                        </svg>
                    </div>
                </li>
            </ul>

            <div class="w-1/2 flex justify-end">
                <div 
                    ref="previewBox"
                    class="w-full h-[600px] flex items-center justify-center pointer-events-none"
                >
                    <div 
                        class="preview-content max-w-full rounded-xl transition-opacity duration-300 overflow-hidden relative shadow-2xl"
                        :class="(activeItemIndex !== null && contentReady) ? 'opacity-100' : 'opacity-0'"
                        :style="{ backgroundColor: 'transparent' }"
                    >
                        <template v-if="activeItemIndex !== null && items[activeItemIndex].src">
                             <video 
                                v-if="isVideo(items[activeItemIndex].src)"
                                :src="resolvePath(items[activeItemIndex].src)"
                                :key="`video-${activeItemIndex}`"
                                autoplay loop muted playsinline 
                                class="max-w-full h-auto max-h-[600px]"
                                @loadeddata="onMediaLoaded"
                             ></video>
                             <img 
                                v-else 
                                :src="resolvePath(items[activeItemIndex].src)" 
                                :key="`img-${activeItemIndex}`"
                                class="w-full h-auto block"
                                @load="onMediaLoaded"
                             />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRouter } from 'vue-router';
import { projects } from '../data/projects';

const router = useRouter();
const activeItemIndex = ref(null);
const activeColor = ref('');
const currentColorIndex = ref(-1);
const scrollContainer = ref(null);
const previewBox = ref(null);
const contentReady = ref(false);
let stInstance = null;


const onMediaLoaded = (e) => {
    const el = e.target;
    if (activeItemIndex.value !== null && items[activeItemIndex.value]) {
        const item = items[activeItemIndex.value];
        if (el.tagName === 'VIDEO') {
            el.playbackRate = item.speed || 1;
            if (item.start) el.currentTime = item.start;
        }
    }
    
    contentReady.value = true;
    gsap.fromTo('.preview-content', 
        { scale: 0},
        { scale: 1, duration: 0.3, ease: 'fast', overwrite: true }
    );
};

watch(activeItemIndex, () => {
    contentReady.value = false;
});



const items = projects
    .filter(p => p.categories && p.categories.includes('videos'))
    .map(p => {
        const preview = p.previews?.videos || p.preview;
        return {
            id: p.id,
            name: p.title,
            src: `../public${preview.src}`, 
            link: p.hasPage,
            speed: preview.speed,
            start: preview.start
        };
    });

const handleItemClick = (item) => {
    if (item.link) {
        router.push(`/project/${item.id}`);
    }
};

const resolvePath = (path) => {
    if (!path) return '';
    return path.replace('../public', '');
};

const isVideo = (path) => {
    if (!path) return false;
    return path.toLowerCase().endsWith('.mp4');
};

onMounted(() => {
    gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);
    CustomEase.create("fast", "M0,0 C0.039,0.356 0.05,0.675 0.228,0.837 0.406,1 0.489,1 1,1 ");
    
    stInstance = ScrollTrigger.create({
        trigger: scrollContainer.value,
        start: "top center-=300px", 
        end: "bottom center+=300px",
        pin: previewBox.value,
    });

    gsap.set('.anim-item', { transition: 'none' });
    gsap.from('.anim-item', {
        opacity: 0,
        x: 200,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.3,
        ease: 'elastic.out(1.10,0.8)',
        clearProps: 'all'
    });
});

onUnmounted(() => {
    if (stInstance) stInstance.kill();
});

const colorSequence = () => {
    const colors = ["#A23DD4", "#4F52BE", "#32A1B8"];
    currentColorIndex.value = (currentColorIndex.value + 1) % colors.length;
    return colors[currentColorIndex.value];
};

let hoverTimeout = null;
const visualActiveIndex = ref(null);

const onItemEnter = (index) => {
    if (visualActiveIndex.value === index) return;
    
    if (visualActiveIndex.value !== null) {
        animateOut(visualActiveIndex.value);
    }
    visualActiveIndex.value = index;
    const nextColor = colorSequence();
    activeColor.value = nextColor;

    gsap.to(`.item-text-${index}`, {
        color: nextColor,
        x: 0,
        scale: 1.6,
        duration: 0.8,
        ease: 'fast',
        overwrite: true
    });

    gsap.fromTo(`.arrow-left-${index}`, 
        { x: -50, opacity: 1},
        { x: 15, opacity: 1, duration: 1, ease: 'fast', overwrite: true }
    );

    gsap.to(`.arrow-right-${index}`, { 
        opacity: 1, 
        y: -5,
        rotate: 0,
        duration: 1, 
        scale: 1,
        ease: 'fast', 
        overwrite: true 
    });

    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    hoverTimeout = setTimeout(() => {
        activeItemIndex.value = index;
    }, 120); 
};

const onItemDown = (index) => {
    gsap.to(`.arrow-right-${index}`, { 
        x: 5,
        y: 0,
        rotate: 45,
        opacity: 1,
        scale: 1.6, 
        duration: 0.4, 
        ease: 'fast',
        overwrite: true
    });
};

const onItemUp = (index) => {
    gsap.to(`.arrow-right-${index}`, { 
        x: 0, 
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.4, 
        ease: 'fast',
        overwrite: true
    });
};

const onListLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    if (visualActiveIndex.value !== null) {
        animateOut(visualActiveIndex.value);
        visualActiveIndex.value = null;
    }
    activeItemIndex.value = null;
};

const animateOut = (index) => {
    gsap.to(`.item-text-${index}`, {
        color: '#B0B0B0',
        x: 0,
        scale: 1,
        duration: 0.4,
        ease: 'fast',
        overwrite: true
    });

    gsap.to(`.arrow-left-${index}`, {
        x: -50,
        opacity: 0,
        duration: 0.25,
        ease: 'fast',
        overwrite: true
    });
    gsap.to(`.arrow-right-${index}`, {
        opacity: 0,
        rotate: 45,
        scale: 1/2,
        x: 0,
        y: 0,
        duration: 0.25,
        ease: 'fast',
        overwrite: true
    });
};
</script>