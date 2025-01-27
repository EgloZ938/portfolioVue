<template>
  <nav class="absolute top-0 w-full py-5 z-50">
    <div class="container mx-auto">
      <div class="flex justify-center items-center">
        <!-- Navigation desktop -->
        <div class="hidden md:flex items-center gap-8">
          <button
            v-for="link in navLinks"
            :key="link.href"
            @click="() => smoothScrollTo(link.href)"
            class="text-white hover:text-red-400 transition-colors duration-300 text-base"
            :class="{
              'accueil-link': link.text === 'Accueil',
              'active-section': currentSection === link.href.substring(1),
            }"
          >
            {{ link.text }}
          </button>
        </div>

        <!-- Menu burger -->
        <div
          class="hamburger md:hidden fixed top-8 right-8 z-50 cursor-pointer"
        >
          <svg
            viewBox="0 0 32 32"
            class="w-8 h-8 transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110"
            :class="{ 'rotate-[-45deg]': isMenuOpen }"
            @click="toggleMenu"
          >
            <path
              class="line line-top-bottom transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              :style="{
                'stroke-dasharray': isMenuOpen ? '20 300' : '12 63',
                'stroke-dashoffset': isMenuOpen ? '-32.42' : '0',
              }"
            ></path>
            <path
              class="line transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
              d="M7 16 27 16"
            ></path>
          </svg>
        </div>

        <!-- Menu mobile avec animation -->
        <transition
          enter-active-class="transform transition-transform duration-700 ease-in-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition-transform duration-700 ease-in-out"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div
            v-show="isMenuOpen"
            class="fixed top-0 right-0 w-full h-full bg-black/90 backdrop-blur-sm z-40 md:hidden"
            @click.self="closeMenu"
          >
            <div class="flex flex-col items-center justify-center min-h-screen">
              <button
                v-for="link in navLinks"
                :key="link.href"
                @click="
                  () => {
                    smoothScrollTo(link.href);
                    closeMenu();
                  }
                "
                class="text-white text-xl py-4 hover:text-red-400 transition-colors duration-300"
                :class="{
                  'active-section': currentSection === link.href.substring(1),
                }"
              >
                {{ link.text }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
const currentSection = ref("");

const navLinks = [
  { href: "#accueil", text: "Accueil" },
  { href: "#about", text: "À propos" },
  { href: "#skills", text: "Compétences" },
  { href: "#works", text: "Travaux" },
  { href: "#contact", text: "Contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

const smoothScrollTo = (target) => {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  // Détection de Firefox
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

  if (isFirefox) {
    // Votre code actuel pour Firefox qui fonctionne bien
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
    // Pour les autres navigateurs, utiliser le scroll natif
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const observeSection = () => {
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.1,
    rootMargin: "-10% 0px -10% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id;
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
};

onMounted(() => {
  observeSection();
});
</script>

<style scoped>
.line {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
}

.hamburger svg:hover path {
  stroke: #ff6b6b;
}

.accueil-link {
  color: #ff6b6b !important;
}

.active-section {
  color: #ff6b6b !important;
}
</style>
