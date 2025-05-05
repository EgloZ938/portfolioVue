<template>
  <section id="accueil" class="relative min-h-screen">
    <!-- Background avec overlay -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
      :style="{ backgroundImage: 'url(/assets/intro-bg.jpg)' }">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_100%)]"></div>
    </div>
    <!-- Contenu principal -->
    <div class="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-10 lg:px-[10%]">
      <p
        class="text-[#ff6b6b] text-[0.8em] sm:text-[0.9em] md:text-[1em] lg:text-[1.1em] xl:text-[1.2em] uppercase tracking-[2px] font-normal">
        Heureux de vous accueillir.
      </p>
      <h1
        class="text-[2.4em] sm:text-[2.8em] md:text-[3.2em] lg:text-[3.5em] xl:text-[4em] text-white font-bold mb-[0.2em]">
        Je suis Théo EVON.
      </h1>
      <div class="flex items-center justify-center mb-[1.5em]">
        <span class="w-[2px] h-[30px] bg-[#ff6b6b] mx-[15px]"></span>
        <p class="text-white text-[0.9em] sm:text-[1em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.4em] font-light">
          DÉVELOPPEUR FULLSTACK
        </p>
        <span class="w-[2px] h-[30px] bg-[#ff6b6b] mx-[15px]"></span>
      </div>
      <button @click="smoothScrollTo('#about')" @mouseenter="buttonHovered = true" @mouseleave="buttonHovered = false"
        class="group relative overflow-hidden px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[30px] md:py-[15px] bg-transparent text-white uppercase tracking-[2px] font-bold text-[0.7em] sm:text-[0.8em] md:text-[0.9em] border-0">
        <!-- Fond du bouton avec effet de survol -->
        <span
          class="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] transform transition-transform duration-500 ease-out"
          :class="buttonHovered ? 'translate-y-0' : 'translate-y-full'"></span>

        <!-- Bordure animée -->
        <span
          class="absolute bottom-0 left-0 w-full h-[2px] bg-white transform origin-right transition-transform duration-500 ease-out"
          :class="buttonHovered ? 'scale-x-0' : 'scale-x-100'"></span>

        <!-- Texte du bouton -->
        <span class="relative z-10 flex items-center transition-all duration-300"
          :class="buttonHovered ? 'text-[#1a1a1a]' : 'text-white'">
          En savoir plus
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transition-all duration-300 transform"
            :class="buttonHovered ? 'translate-x-1' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </button>
    </div>
    <!-- Icônes sociales -->
    <div class="absolute bottom-[20px] left-0 w-full text-center z-10">
      <div class="flex justify-center gap-[20px]">
        <a v-for="social in socials" :key="social.url" :href="social.url" target="_blank" rel="noopener noreferrer"
          class="text-white text-[1.5em] hover:text-[#ff6b6b] hover:-translate-y-0.5 transition-all duration-300">
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const socials = [
  { icon: "fab fa-github", url: "https://github.com/EgloZ938" },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/théo-evon-825317324/",
  },
];

const buttonHovered = ref(false);

const smoothScrollTo = (target) => {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  // Détection de Firefox
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

  if (isFirefox) {
    // Animation personnalisée pour Firefox
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1500;
    let start = null;

    const easeInOutQuart = (t) => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo({
        top: startPosition + distance * easeInOutQuart(progress),
        behavior: "auto",
      });

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  } else {
    // Scroll natif pour les autres navigateurs
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>
