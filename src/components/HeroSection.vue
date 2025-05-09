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
        Je suis
        <div class="relative inline-block transform hover:scale-105 transition-all duration-300 cursor-pointer"
          @mouseover="startGlitchEffect" @mouseout="stopGlitchEffect">
          <span class="pseudo-glitch pointer-events-none">
            <span :class="{ 'glitch-before': isGlitching }" data-text="Théo EVON" class="relative text-[#ff6b6b]">Théo
              EVON</span>
          </span>
          <div
            class="absolute -bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent pointer-events-none"
            :class="{ 'glow-line': isGlitching }"></div>
        </div>
      </h1>

      <div class="flex items-center justify-center mb-[1.5em]">
        <span class="w-[2px] h-[30px] bg-[#ff6b6b] mx-[15px]"></span>
        <div class="relative">
          <p
            class="text-white text-[0.9em] sm:text-[1em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.4em] font-light min-h-[1.6em] flex items-center justify-center">
            <span ref="typewriterElement" class="whitespace-nowrap"></span>
            <span class="typing-cursor">|</span>
          </p>
        </div>
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
import { ref, onMounted, onUnmounted } from "vue";

const socials = [
  { icon: "fab fa-github", url: "https://github.com/EgloZ938" },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/théo-evon-825317324/",
  },
];

const buttonHovered = ref(false);
const typewriterElement = ref(null);


const developperTexts = [
  "FULLSTACK",
  "PASSIONNÉ",
  "JAVASCRIPT",
  "REACT",
  "VUE",
  "NODEJS",
  "BEAU GOSSE 😎"
];

let typewriterTimeout = null;
const isGlitching = ref(false);
let glitchInterval = null;

// Effet de glitch pour le pseudo EgloZ
const startGlitchEffect = () => {
  if (glitchInterval) clearInterval(glitchInterval);

  // Lance l'effet glitch à intervalles irréguliers
  glitchInterval = setInterval(() => {
    isGlitching.value = true;

    // Arrête l'effet après un court délai
    setTimeout(() => {
      isGlitching.value = false;
    }, 150);
  }, 300);
};

const stopGlitchEffect = () => {
  if (glitchInterval) {
    clearInterval(glitchInterval);
    glitchInterval = null;
  }
  isGlitching.value = false;
};

const setupTypewriter = () => {
  if (!typewriterElement.value) return;

  const element = typewriterElement.value;
  let baseText = "DÉVELOPPEUR ";  // Texte fixe qui reste toujours
  let currentTextIndex = 0;
  let text = '';
  let isWritingBase = true;  // Si on écrit la partie "DÉVELOPPEUR" ou la spécialité
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 120;

  const type = () => {
    // Première partie - écrire "DÉVELOPPEUR "
    if (isWritingBase) {
      if (charIndex < baseText.length) {
        text += baseText.charAt(charIndex);
        element.textContent = text;
        charIndex++;
        typewriterTimeout = setTimeout(type, typingDelay);
        return;
      } else {
        isWritingBase = false;
        charIndex = 0;
      }
    }

    // Deuxième partie - écrire/effacer les spécialités
    const currentText = developperTexts[currentTextIndex];

    if (!isDeleting) {
      // Ajout de caractères pour la spécialité
      if (charIndex < currentText.length) {
        text = baseText + currentText.substring(0, charIndex + 1);
        element.textContent = text;
        charIndex++;

        typingDelay = 120;
      } else {
        // Pause avant de commencer à effacer
        typingDelay = 2000;
        isDeleting = true;
      }
    } else {
      // Supprimer uniquement la spécialité, pas "DÉVELOPPEUR "
      if (charIndex > 0) {
        charIndex--;
        text = baseText + currentText.substring(0, charIndex);
        element.textContent = text;
        typingDelay = 60;  // Supprimer plus rapidement
      } else {
        isDeleting = false;
        // Passer au texte suivant
        currentTextIndex = (currentTextIndex + 1) % developperTexts.length;
        typingDelay = 500;  // Pause avant de passer au texte suivant
      }
    }

    typewriterTimeout = setTimeout(type, typingDelay);
  };

  // Démarrer l'effet
  type();
};

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

onMounted(() => {
  // Lancer l'effet de machine à écrire après un délai
  setTimeout(() => {
    setupTypewriter();
  }, 500);
});

onUnmounted(() => {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
  }
  if (glitchInterval) {
    clearInterval(glitchInterval);
  }
});
</script>

<style scoped>
/* Animation du curseur de machine à écrire */
.typing-cursor {
  color: #ff6b6b;
  animation: blink 1s step-end infinite;
}

@keyframes blink {

  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

/* Effet de glitch pour le nom */
.pseudo-glitch {
  position: relative;
  text-shadow: 0 0 8px rgba(255, 107, 107, 0.7);
  transition: all 0.3s ease;
}

.pseudo-glitch:hover {
  text-shadow: 0 0 15px rgba(255, 107, 107, 1);
}

.glitch-before {
  position: relative;
  display: inline-block;
}

.glitch-before::before,
.glitch-before::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-before::before {
  left: -2px;
  text-shadow: 2px 0 #ff6b6b;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
  pointer-events: none;
}

.glitch-before::after {
  left: 2px;
  text-shadow: -2px 0 rgba(0, 255, 255, 0.8);
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim-2 0.2s infinite linear alternate-reverse;
  pointer-events: none;
}

@keyframes glitch-anim-1 {
  0% {
    clip: rect(32px, 550px, 54px, 0);
  }

  20% {
    clip: rect(12px, 550px, 84px, 0);
  }

  40% {
    clip: rect(62px, 550px, 114px, 0);
  }

  60% {
    clip: rect(42px, 550px, 94px, 0);
  }

  80% {
    clip: rect(22px, 550px, 74px, 0);
  }

  100% {
    clip: rect(52px, 550px, 104px, 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    clip: rect(12px, 550px, 34px, 0);
  }

  20% {
    clip: rect(52px, 550px, 74px, 0);
  }

  40% {
    clip: rect(32px, 550px, 54px, 0);
  }

  60% {
    clip: rect(92px, 550px, 114px, 0);
  }

  80% {
    clip: rect(72px, 550px, 94px, 0);
  }

  100% {
    clip: rect(12px, 550px, 34px, 0);
  }
}

.glow-line {
  animation: glow 1s ease-in-out infinite alternate;
  height: 2px;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px rgba(255, 107, 107, 0.6);
    opacity: 0.6;
  }

  to {
    box-shadow: 0 0 20px rgba(255, 107, 107, 1);
    opacity: 1;
  }
}
</style>