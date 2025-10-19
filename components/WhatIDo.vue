<template>
    <div class="h-screen w-full flex justify-center items-center relative">
        <div class="flex flex-col w-full justify-center items-center thunder font-light text-[9rem] 
                    select-none text-gr hover:font-light transition-[font-weight] z-10 mt-20"
            @mouseenter="onListEnter"
            @mouseleave="onListLeave">
            <div v-for="(item, key) in items" :key="key" 
                class="w-full flex justify-center cursor-pointer relative hover:font-bold
                hover:tracking-[0px] transition-[font-weight,letter-spacing] duration-200 ease-out
                active:tracking-[0px] active:font-thin"
                @mouseenter="onItemEnter(key)">
                <p :class="key" class="wid-txt leading-none">{{ item.desc }}</p>
                <div :class="key + '-imgs image-group z-20 opacity-0'">
                    <div v-for="(media, i) in items[key].imgs" :key="media.src + i">
                        <video
                            v-if="media.type === 'video'"
                            :src="media.src"
                            class="preview-img"
                            :class="key+'-img-'+i"
                            autoplay
                            loop
                            muted
                            playsinline
                            preload="metadata"
                        ></video>
                        <img
                            v-else
                            :src="media.src"
                            class="preview-img"
                            :class="key+'-img-'+i"
                            alt=""
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

export default {
    data() {
        return {
            activeItemKey: null,
            lastHoveredIndex: null,
            currentColor: -1,
            items: {
                // CORREÇÃO #1: A estrutura de dados foi restaurada
                anim: {
                    desc: 'ANIMAÇÕES',
                    imgs: [
                        { src: "/_nuxt/assets/images/ProCubo-3.mp4", type: 'video' },
                        { src: "/_nuxt/assets/images/Minidrinks.mp4", type: 'video' },
                        { src: "/_nuxt/assets/images/Baya-jornada.mp4", type: 'video' }
                    ]
                },
                syst: {
                    desc: 'SITES E APPS',
                    imgs: [
                        { src: "/_nuxt/assets/images/Gasto-logo.png", type: 'image' },
                        { src: "/_nuxt/assets/images/Bantads-logo.png", type: 'image' },
                        { src: "/_nuxt/assets/images/Nutriplan-logo.png", type: 'image' }
                    ]
                },
                vids: {
                    desc: 'VÍDEOS',
                    imgs: [
                        { src: "/_nuxt/assets/images/ProCubo-3.mp4", type: 'video' }, 
                        { src: "/_nuxt/assets/images/Minidrinks.mp4", type: 'video' },
                        { src: "/_nuxt/assets/images/Baya-jornada.mp4", type: 'video' }
                    ]
                },
                desn: {
                    desc: 'DESIGN',
                    imgs: [
                        { src: "/_nuxt/assets/images/Gasto-logo.png", type: 'image' },
                        { src: "/_nuxt/assets/images/Bantads-logo.png", type: 'image' },
                        { src: "/_nuxt/assets/images/Nutriplan-logo.png", type: 'image' }
                    ]
                },
                musc: {
                    desc: 'MÚSICA',    
                    imgs: [
                        { src: "/_nuxt/assets/images/Bantads-logo.png", type: 'image' }
                    ]
                },
            }
        };
    },
    mounted() {
        gsap.registerPlugin(CustomEase);
        CustomEase.create("fast", "M0,0 C0.039,0.356 0.05,0.675 0.228,0.837 0.406,1 0.489,1 1,1 ");

        gsap.set(".image-group", {
            opacity: 0,
            scale: 1,
        });
    },
    methods: {
        colorSequence() {
            const colors = ["#A23DD4", "#4F52BE", "#32A1B8"];
            this.currentColor = (this.currentColor + 1) % colors.length;
            return colors[this.currentColor];
        },
        onItemEnter(key) {
            if (this.activeItemKey === key) return;

            const itemKeys = Object.keys(this.items);
            const newIndex = itemKeys.indexOf(key);
            let yDirection = 1;

            if (this.lastHoveredIndex !== null) {
                if (newIndex < this.lastHoveredIndex) yDirection = -1;
            } else {
                yDirection = newIndex < itemKeys.length / 2 ? 1 : -1;
            }
            
            if (this.activeItemKey) {
                const exitDirection = yDirection * -1; 
                this.animateOut(this.activeItemKey, false, exitDirection);
            }
            
            this.animateIn(key, this.colorSequence(), yDirection);
            
            this.activeItemKey = key;
            this.lastHoveredIndex = newIndex;
        },
        onListEnter() {
            gsap.to(".wid-txt", {
                color: "#aaa",
                overwrite: true
            });
        },
        onListLeave() {
            if (this.activeItemKey) {
                const itemKeys = Object.keys(this.items);
                const lastIndex = itemKeys.indexOf(this.activeItemKey);
                const exitDirection = lastIndex < itemKeys.length / 2 ? 1 : -1; 

                this.animateOut(this.activeItemKey, true, exitDirection);
                this.activeItemKey = null;
                this.lastHoveredIndex = null;
            }
        },
        animateIn(key, color, yDirection) {
            const textSelector = `.${key}`;
            const groupSelector = `.${key}-imgs`;
            
            const textLength = this.items[key].desc.length;
            const textCharWidth = 60;
            const textOffset = (textLength * textCharWidth) / 2;

            const initialYOffset = 100 * yDirection * -1;
            
            const finalX_img1 = -textOffset - 180;
            const finalX_img2 = textOffset + 180;

            // Gera rotações aleatórias entre -5 e 5 graus para cada imagem
            const randomRotation1 = (Math.random() - 0.5) * 20;
            const randomRotation2 = (Math.random() - 0.5) * 20;
            const randomRotation3 = (Math.random() - 0.5) * 20;

            gsap.set(groupSelector, { opacity: 1 });
            gsap.to(textSelector, { color: color, duration: 0.8, ease: 'elastic.out(1.25,0.8)', overwrite: true, scale: 1.15 });
            gsap.to(groupSelector, { scale: 1, duration: 1, ease: 'elastic.out(1.25, 0.8)', overwrite: true });

            gsap.fromTo(`.${key}-img-0`, 
                { x: 0, y: (initialYOffset-200), scale: 0.6, rotation: 0,  }, 
                { x: 0, y: -200, scale: 1, rotation: randomRotation1, duration: 0.9, ease: "elastic.out(1,0.8)", overwrite: true }
            );
            gsap.fromTo(`.${key}-img-1`, 
                { x: finalX_img1, y: initialYOffset, scale: 0.6, rotation: 0,  },
                { x: finalX_img1, y: 0, scale: 1, rotation: randomRotation2, duration: 0.9, ease: "elastic.out(1,0.8)", overwrite: true }
            );
            gsap.fromTo(`.${key}-img-2`, 
                { x: finalX_img2, y: initialYOffset, scale: 0.6, rotation: 0,  },
                { x: finalX_img2, y: 0, scale: 1, rotation: randomRotation3, duration: 0.9, ease: "elastic.out(1,0.8)", overwrite: true }
            );
        },
        animateOut(key, isFinalLeave = false, yDirection) {
            const textSelector = `.${key}`;
            const groupSelector = `.${key}-imgs`;
            const allImgsSelector = `.${key}-img-0, .${key}-img-1, .${key}-img-2`;
            const finalTextColor = isFinalLeave ? '' : '#aaa';
            const exitYOffset = 100 * -yDirection;

            gsap.to(textSelector, { color: finalTextColor, duration: 0.4, ease: 'fast', overwrite: true, scale: 1 });
            gsap.to(groupSelector, { scale: 1, duration: 0.4, ease: 'fast', overwrite: true });
            gsap.to(groupSelector, { opacity: 0, duration: 0 });
            gsap.to(allImgsSelector, { y: exitYOffset, rotation: 0, duration: 0.4, ease: 'fast', overwrite: true });
        }
    }
}
</script>

<style scoped>
.image-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    will-change: transform, opacity;
    width: 1200px; 
    height: 600px;
}

.preview-img {
    position: absolute;
    max-height: 150px;
    width: 250px;
    border-radius: 0.75rem;
    box-shadow: 0 30px 60px 3px rgb(0 0 0 / 0.1), 0 10px 20px rgb(0 0 0 / 0.15);
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
}
</style>