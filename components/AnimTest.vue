<template>
  <div class="flex">
    <div class="flex flex-col w-min">
      <div class="header">
          <button @click="playAnimations" class="play-button">
            Animar
          </button>
        </div>
    </div>
    <div class="flex flex-col w-screen">
      <div class="gsap-ease-comparator w-screen">
        <div class="animation-container">
          <div v-for="(ease, index) in eases" :key="index" class="ease-row">
            <div class="ease-label">{{ ease }}</div>
            <div class="box-wrapper">
              <div :class="['box', `box-${index}`]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Back, Elastic, Bounce, SlowMo } from "gsap/all";
gsap.registerPlugin(Back, Elastic, Bounce, SlowMo);

export default {
  name: "GSAPEaseComparator",
  data() {
    return {
      eases: [
        "power1.in", "power1.out", "power1.inOut",
        "power2.in", "power2.out", "power2.inOut",
        "power3.in", "power3.out", "power3.inOut",
        "power4.in", "power4.out", "power4.inOut",
        "back.in.config(1.7)", "back.out.config(1.7)", "back.inOut.config(1.7)",
        "elastic.in.config(1, 0.3)", "elastic.out.config(1, 0.3)", "elastic.inOut.config(1, 0.3)",
        "bounce.in", "bounce.out", "bounce.inOut",
        "slow(0.7, 0.7, false)",
        "steps(12)",
        "circ.in", "circ.out", "circ.inOut",
        "expo.in", "expo.out", "expo.inOut",
        "sine.in", "sine.out", "sine.inOut",
      ],
    };
  },
  methods: {
    playAnimations() {
      // Pega a largura do primeiro .box-wrapper para calcular o ponto final
      const wrapper = this.$el.querySelector('.box-wrapper');
      if (!wrapper) return;

      const endPoint = wrapper.offsetWidth - 30 - 60; // Largura total - largura da caixa - padding da direita

      this.eases.forEach((ease, index) => {
        const target = `.box-${index}`;

        gsap.fromTo(
          target,
          { x: 0 },
          {
            // O ponto final agora é calculado para parar ANTES da borda,
            // dando espaço para o efeito acontecer.
            x: endPoint,
            duration: 2.5,
            ease: ease,
            yoyo: true,
            repeat: 1,
            repeatDelay: 0.5,
          }
        );
      });
    },
  },
};
</script>

<style scoped>
.header {
  padding: 2rem;
  text-align: center;
}
.title {
  font-size: 2em;
  font-weight: bold;
  color: #34495e;
}
.subtitle {
  font-size: 1.1em;
  color: #7f8c8d;
  margin-top: 0.5rem;
}
.play-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  font-weight: bold;
  position: fixed;
}
.play-button:hover { background-color: #36a473; }

.gsap-ease-comparator {
  padding: 2rem;
}

.animation-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ease-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: center;
  gap: 1rem;
}

.ease-label {
  text-align: right;
  font-family: monospace;
  font-size: 0.9em;
  color: #34495e;
  padding-right: 1rem;
}

/* --- MUDANÇAS CRÍTICAS AQUI --- */
.box-wrapper {
  background-color: #ecf0f1;
  border-radius: 8px;
  height: 50px;
  border: 1px solid #dce1e3;
  /* 1. Adicionamos padding para criar o espaço extra visível */
  /* A caixa começará no início (esquerda) e o alvo será o final do espaço cinza, ANTES do padding da direita */
  padding: 10px 60px 10px 10px; /* 60px de respiro na direita */
}

.box {
  width: 30px;
  height: 30px;
  background-color: #e74c3c; /* Cor alterada para maior destaque */
  border-radius: 4px;
}
</style>