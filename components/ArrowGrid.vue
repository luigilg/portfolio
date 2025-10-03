<template>
    <div ref="gridContainer" class="grid-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
        @mousemove="handleMouseMove" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
        <div v-for="i in totalArrows" :key="i" class="arrow-wrapper">
            <svg :ref="setArrowRef" xmlns="http://www.w3.org/2000/svg" class="arrow-svg" viewBox="0 0 22.769 14.821">
                <path
                    d="M10.212 12.007 7.645 9.414h15.124v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeUpdate, onMounted, computed } from 'vue';
import { gsap } from 'gsap';

const isMouseDown = ref(false);
const gridContainer = ref(null);
let lastMouseEvent = null;

let arrowPositions = [], colorTimelines = [], idleAnimation = null;
let quickRotators = [], quickMoversX = [], quickMoversY = [];

const rows = ref(6);
const cols = ref(16);
const horizontalRadius = 200;
const verticalRadius = 120;
const defaultColor = '#a3a3a3';
const colorPalette = ['#A23DD4', '#4F52BE','#32A1B8'];
const advanceDistance = 20;

const totalArrows = computed(() => rows.value * cols.value);
const arrowRefs = ref([]);
const setArrowRef = (el) => { if (el) arrowRefs.value.push(el); };

onBeforeUpdate(() => {
  arrowRefs.value = [];
  colorTimelines.forEach(tl => tl.kill());
  if (idleAnimation) idleAnimation.kill();
  colorTimelines = [], arrowPositions = [], quickRotators = [], quickMoversX = [], quickMoversY = [];
});

onMounted(() => {
    const containerRect = gridContainer.value.getBoundingClientRect();
    arrowRefs.value.forEach((arrow, index) => {
        const rect = arrow.getBoundingClientRect();
        arrowPositions[index] = { x: (rect.left - containerRect.left) + rect.width / 2, y: (rect.top - containerRect.top) + rect.height / 2 };

        quickRotators[index] = gsap.quickTo(arrow, "rotation", { duration: 0.5, ease: 'power3.out' });
        quickMoversX[index] = gsap.quickTo(arrow, "x", { duration: 0.5, ease: 'power3.out' });
        quickMoversY[index] = gsap.quickTo(arrow, "y", { duration: 0.5, ease: 'power3.out' });

        const tl = gsap.timeline({ paused: true, repeat: -1, delay: gsap.utils.random(0,2), onRepeat: function() { this.invalidate(); } });
        const shortWait = () => gsap.utils.random(0.15, 0.4);
        tl.set(arrow, { fill: () => gsap.utils.random(colorPalette) }).to({}, { duration: shortWait() }).set(arrow, { fill: () => gsap.utils.random(colorPalette) }).to({}, { duration: shortWait() });
        colorTimelines[index] = tl;
    });

    gsap.set(arrowRefs.value, { fill: defaultColor, rotation: 180, x: 0, y: 0 });

    idleAnimation = gsap.timeline({ repeat: -1 });
    const staggerConfig = { grid: "auto", from: "start", axis: "x", each: 0.06 };
    const sweepWidthTime = 0.2;
    colorPalette.forEach(color => {
        idleAnimation
            .to(arrowRefs.value, { fill: color, duration: 0.06, stagger: staggerConfig })
            .to(arrowRefs.value, { fill: defaultColor, duration: 0.2, stagger: staggerConfig }, `<+${sweepWidthTime}`)
            .to({}, { duration: 1 });
    });
});

function updateArrows(event) {
    if (!gridContainer.value) return;
    lastMouseEvent = event;
    const containerRect = gridContainer.value.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    arrowRefs.value.forEach((arrow, index) => {
        const pos = arrowPositions[index];
        if (!pos) return;

        const dx = mouseX - pos.x;
        const dy = mouseY - pos.y;
        const angleRad = Math.atan2(dy, dx);
        
        if (!isMouseDown.value) {
            const ellipseValue = (dx * dx) / (horizontalRadius * horizontalRadius) + (dy * dy) / (verticalRadius * verticalRadius);
            const isInRadius = ellipseValue < 1;
            const timeline = colorTimelines[index];
            if (isInRadius && timeline.paused()) { timeline.restart(); } 
            else if (!isInRadius && !timeline.paused()) {
                timeline.pause();
                gsap.to(arrow, { fill: defaultColor, opacity: 1, duration: 0.2 });
            }
        }
        
        const targetAngleDeg = angleRad * (180 / Math.PI) + 180;
        const newRotation = gsap.getProperty(arrow, "rotation") + gsap.utils.wrap(-180, 180)(targetAngleDeg - gsap.getProperty(arrow, "rotation"));
        
        let targetX = 0, targetY = 0;
        if (isMouseDown.value) {
            targetX = Math.cos(angleRad) * advanceDistance;
            targetY = Math.sin(angleRad) * advanceDistance;
        }
        
        quickRotators[index](newRotation);
        quickMoversX[index](targetX);
        quickMoversY[index](targetY);
    });
}


function handleMouseEnter() {
    if (idleAnimation) idleAnimation.pause();
    gsap.to(arrowRefs.value, { fill: defaultColor, duration: 0.3 });
}

function handleMouseLeave() {
    isMouseDown.value = false;
    colorTimelines.forEach(tl => tl.pause());
    
    quickMoversX.forEach(q => q(0, 0.8, 'elastic.out(1, 0.5)'));
    quickMoversY.forEach(q => q(0, 0.8, 'elastic.out(1, 0.5)'));
    quickRotators.forEach(q => q(180, 0.7, 'elastic.out(1, 0.5)'));
    
    if (idleAnimation) idleAnimation.restart(true);
}

function handleMouseMove(event) { updateArrows(event); }

function handleMouseDown(event) {
    isMouseDown.value = true;
    colorTimelines.forEach(tl => tl.restart());
    updateArrows(event);
}

function handleMouseUp() {
    if (!isMouseDown.value) return; 
    isMouseDown.value = false;
    quickMoversX.forEach(q => q(0));
    quickMoversY.forEach(q => q(0));
    if (lastMouseEvent) {
        updateArrows(lastMouseEvent);
    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(v-bind(cols), 1fr);
    width: 100%;
    height: 50vh;
    overflow: hidden;
    cursor: default;
}

.arrow-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow-svg {
    width: 70%;
    height: 70%;
    max-width: 35px;
}
</style>