<template>
    <div class="h-screen w-full flex justify-center items-center relative">
        <div class="flex flex-col w-full justify-center items-center gabarito font-light text-[9rem] 
                    select-none text-gr hover:font-light transition-[font-weight] z-10 mt-20"
            @mouseenter="onListEnter"
            @mouseleave="onListLeave">
            <div v-for="(item, key) in items" 
                :key="key" 
                class="w-full flex justify-center cursor-pointer relative hover:font-black
                -tracking-[10px] transition-[font-weight, letter-spacing] duration-200 ease-out z-0 hover:z-10
                active:font-[100] active:scale-90"
                @click="navigate(item.route)"
                @mouseenter="onItemEnter(key)">
                <p :class="key" class="wid-txt leading-none">{{ item.desc }}</p>
                <ClientOnly>
                    <div v-if="item.imgs != null" :class="key + '-imgs image-group z-20 opacity-0'">
                        <div v-for="(media, i) in items[key].imgs" :key="media.src + i">
                            <video
                                v-if="media.type === 'video'"
                                :src="media.src"
                                class="preview-vid"
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
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

const router = useRouter();

const activeItemKey = ref(null);
const lastHoveredIndex = ref(null);
const currentColor = ref(-1);

const items = {
    anim: {
        desc: 'ANIMAÇÕES',
        imgs: [
            { src: "/projects/ProCubo/S1.mp4", type: 'video' },
            { src: "/projects/MiniDrinks/LogoAnim.mp4", type: 'video' },
            { src: "/projects/ANIMAÇÕES/TrilhasDoSaber.mp4", type: 'video' }
        ],
        route: '/animations'
    },
    syst: {
        desc: 'SITES E APPS',
        imgs: [
            { src: "/projects/Bantads/logo.png", type: 'image' },
            { src: "/projects/Gasto/logo.png", type: 'image' },
            { src: "/projects/Nutriplan/logo.png", type: 'image' }
        ]
    },
    vids: {
        desc: 'VÍDEOS',
        imgs: [
            { src: "/projects/Conversu/logo.png", type: 'image' },
            { src: "/projects/Vzion/logo_full.jpg", type: 'image' },
            { src: "/projects/Engepro/logo.jpg", type: 'image' }
        ]
    },
    desn: {
        desc: 'DESIGN',
        imgs: [
            { src: "/projects/Abelino/Logo.jpg", type: 'image' },
            { src: "/projects/Squirrel/horizontal1.jpg", type: 'image' },
            { src: "/projects/Nutriplan/logo.png", type: 'image' }
        ]
    },
    musc: {
        desc: 'MÚSICA',
        route: '/music',
    },
};

onMounted(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("fast", "M0,0 C0.039,0.356 0.05,0.675 0.228,0.837 0.406,1 0.489,1 1,1 ");

    gsap.set(".image-group", {
        opacity: 0,
        scale: 1,
    });
});

const colorSequence = () => {
    const colors = ["#A23DD4", "#4F52BE", "#32A1B8"];
    currentColor.value = (currentColor.value + 1) % colors.length;
    return colors[currentColor.value];
};

const onItemEnter = (key) => {
    if (activeItemKey.value === key) return;

    const itemKeys = Object.keys(items);
    const newIndex = itemKeys.indexOf(key);
    let yDirection = 1;

    if (lastHoveredIndex.value !== null) {
        if (newIndex < lastHoveredIndex.value) yDirection = -1;
    } else {
        yDirection = newIndex < itemKeys.length / 2 ? 1 : -1;
    }
    
    if (activeItemKey.value) {
        const exitDirection = yDirection * -1;
        animateOut(activeItemKey.value, false, exitDirection);
    }
    
    animateIn(key, colorSequence(), yDirection);
    
    activeItemKey.value = key;
    lastHoveredIndex.value = newIndex;
};

const onListEnter = () => {
    gsap.to(".wid-txt", {
        color: "#aaa",
        overwrite: true
    });
};

const onListLeave = () => {
    if (activeItemKey.value) {
        const itemKeys = Object.keys(items);
        const lastIndex = itemKeys.indexOf(activeItemKey.value);
        const exitDirection = lastIndex < itemKeys.length / 2 ? 1 : -1;

        animateOut(activeItemKey.value, true, exitDirection);
        activeItemKey.value = null;
        lastHoveredIndex.value = null;
    }
};

const animateIn = (key, color, yDirection) => {
    // Se não houver imagens, apenas anima o texto e sai da função
    if (!items[key].imgs) {
        gsap.to(`.${key}`, { color: color, duration: 0.8, ease: 'elastic.out(1.25,0.8)', overwrite: true, scale: 1.15 });
        return;
    }

    const textSelector = `.${key}`;
    const groupSelector = `.${key}-imgs`;
    
    const textLength = items[key].desc.length;
    const textCharWidth = 60;
    const textOffset = (textLength * textCharWidth) / 2;

    const initialYOffset = 100 * yDirection * -1;
    
    const finalX_img1 = -textOffset - 270;
    const finalX_img2 = textOffset + 270;

    const randomRotation1 = (Math.random() - 0.5) * 20;
    const randomRotation2 = (Math.random() - 0.5) * 20;
    const randomRotation3 = (Math.random() - 0.5) * 20;

    gsap.set(groupSelector, { opacity: 1 });
    gsap.to(textSelector, { color: color, duration: 0.8, ease: 'elastic.out(1.25,0.8)', overwrite: true, scale: 1.15 });
    gsap.to(groupSelector, { scale: 1, duration: 1, ease: 'elastic.out(1.25, 0.8)', overwrite: true });

    gsap.fromTo(`.${key}-img-0`,
        { x: 0, y: (initialYOffset - 200), scale: 0.6, rotation: 0, },
        { x: 0, y: -200, scale: 1, rotation: randomRotation1, duration: 0.9, ease: "elastic.out(1,0.8)", overwrite: true }
    );
    gsap.fromTo(`.${key}-img-1`,
        { x: finalX_img1, y: initialYOffset, scale: 0.6, rotation: 0, },
        { x: finalX_img1, y: 0, scale: 1, rotation: randomRotation2, duration: 0.9, ease: "elastic.out(1,0.8)", overwrite: true }
    );
    gsap.fromTo(`.${key}-img-2`,
        { x: finalX_img2, y: initialYOffset, scale: 0.6, rotation: 0, },
        { x: finalX_img2, y: 0, scale: 1, rotation: randomRotation3, duration: 0.9, ease: "elastic.out(1,0.8)", overwrite: true }
    );
};

const animateOut = (key, isFinalLeave = false, yDirection) => {
    const textSelector = `.${key}`;
    const groupSelector = `.${key}-imgs`;
    const allImgsSelector = `.${key}-img-0, .${key}-img-1, .${key}-img-2`;
    const finalTextColor = isFinalLeave ? '' : '#aaa';

    // Se não houver imagens, apenas anima o texto e sai da função
    if (!items[key].imgs) {
        gsap.to(`.${key}`, { color: finalTextColor, duration: 0.4, ease: 'fast', overwrite: true, scale: 1 });
        return;
    }

    const exitYOffset = 100 * -yDirection;

    gsap.to(textSelector, { color: finalTextColor, duration: 0.4, ease: 'fast', overwrite: true, scale: 1 });
    gsap.to(groupSelector, { scale: 1, duration: 0.4, ease: 'fast', overwrite: true });
    gsap.to(groupSelector, { opacity: 0, duration: 0 });
    gsap.to(allImgsSelector, { y: exitYOffset, rotation: 0, duration: 0.4, ease: 'fast', overwrite: true });
};

const navigate = async (route) => {
    if (route) {
        await router.push({ path: route });
    }
};

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
.preview-vid {
    position: absolute;
    max-height: 150px;
    width: 250px;
    border-radius: 0.75rem;
    box-shadow: 0 30px 60px 3px rgb(0 0 0 / 0.1), 0 10px 20px rgb(0 0 0 / 0.15);
    object-fit: cover;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%); 
}
</style>