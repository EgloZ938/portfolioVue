# SkillsSection.vue
<template>
  <section
    id="skills"
    class="relative min-h-screen bg-[#1a1a1a] py-20 overflow-hidden"
  >
    <!-- Conteneur particles.js -->
    <div id="particles-js" class="absolute inset-0 z-0"></div>

    <!-- Formes géométriques en background -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-32 sm:w-48 h-32 sm:w-48 rounded-full border-2 border-[#ff6b6b] opacity-15 top-[10%] left-[5%] animate-float"
      ></div>
      <div
        class="absolute w-40 sm:w-64 h-40 sm:h-64 border-2 border-[#ff6b6b] opacity-15 bottom-[15%] right-[8%] rounded-[10%] rotate-45 animate-float-reverse"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl text-white font-bold mb-6">
          Compétences
        </h2>
        <div class="flex justify-center items-center gap-4">
          <span class="w-6 sm:w-8 h-0.5 bg-[#ff6b6b]"></span>
          <p
            class="text-sm sm:text-base text-[#ff6b6b] uppercase tracking-wider"
          >
            Technologies maîtrisées
          </p>
          <span class="w-6 sm:w-8 h-0.5 bg-[#ff6b6b]"></span>
        </div>
      </div>

      <!-- Cartes de compétences -->
      <div class="flex flex-col md:flex-row gap-6 min-h-[500px]">
        <!-- Frontend -->
        <div
          class="relative bg-[#242424] rounded-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group"
          :class="{
            'md:w-3/5': activeCard === 'frontend',
            'md:w-1/5': activeCard && activeCard !== 'frontend',
            'md:w-1/3': !activeCard,
          }"
          @mouseenter.desktop="activeCard = 'frontend'"
          @mouseleave.desktop="activeCard = null"
          @click="handleCardClick('frontend')"
        >
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-[#242424]/90"
          ></div>

          <!-- Contenu -->
          <div class="relative flex flex-col justify-between h-full p-8">
            <!-- Partie supérieure -->
            <div>
              <!-- En-tête -->
              <div class="flex items-center gap-4 mb-8">
                <i class="fas fa-code text-[#ff6b6b] text-2xl"></i>
                <h3 class="text-2xl text-white font-bold">Frontend</h3>
                <i
                  class="fas fa-eye text-lg ml-auto hidden md:block transition-colors duration-300"
                  :class="[
                    activeCard === 'frontend'
                      ? 'text-[#ff6b6b]'
                      : 'text-[#a0a0a0] group-hover:text-[#ff6b6b]',
                  ]"
                ></i>
                <i
                  class="fas fa-chevron-down text-lg ml-auto md:hidden transition-all duration-300"
                  :class="[
                    activeCard === 'frontend'
                      ? 'text-[#ff6b6b] rotate-180'
                      : 'text-[#a0a0a0]',
                  ]"
                ></i>
              </div>

              <!-- Preview (visible quand non survolé) -->
              <div
                class="grid grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-500"
                :class="{ 'opacity-0': activeCard === 'frontend' }"
                v-show="activeCard !== 'frontend'"
              >
                <div
                  v-for="skill in frontendSkills.slice(0, isMobile ? 3 : 4)"
                  :key="skill.name"
                  class="flex flex-col items-center gap-2"
                >
                  <i :class="[skill.icon, 'text-3xl text-[#a0a0a0]']"></i>
                  <span class="text-[#a0a0a0] text-sm">{{ skill.name }}</span>
                </div>
                <!-- Indicateur "plus" sur desktop -->
                <div
                  class="hidden md:flex flex-col items-center justify-center text-[#a0a0a0]"
                  v-if="frontendSkills.length > 4 && !isMobile"
                >
                  <span class="text-2xl font-bold"
                    >+{{ frontendSkills.length - 4 }}</span
                  >
                  <span class="text-xs">technologies</span>
                </div>
              </div>

              <!-- Contenu complet (visible au survol/clic) -->
              <div
                class="grid grid-cols-3 md:grid-cols-4 gap-8 transition-all duration-700"
                :class="{
                  'opacity-100 scale-100': activeCard === 'frontend',
                  'opacity-0 scale-95': activeCard !== 'frontend',
                }"
                v-show="activeCard === 'frontend'"
              >
                <div
                  v-for="skill in frontendSkills"
                  :key="skill.name"
                  class="flex flex-col items-center gap-3"
                >
                  <i
                    :class="[
                      skill.icon,
                      'text-4xl text-[#a0a0a0] hover:text-[#ff6b6b] transition-colors duration-300',
                    ]"
                  ></i>
                  <span class="text-[#a0a0a0] text-sm">{{ skill.name }}</span>
                </div>
              </div>
            </div>

            <!-- Texte incitatif en bas (visible uniquement sur desktop et quand non survolé) -->
            <p
              class="hidden md:block text-[#a0a0a0] text-sm mt-4 text-center opacity-60"
              v-show="!activeCard"
            >
              Survolez pour voir plus
            </p>
          </div>
        </div>

        <!-- Backend -->
        <div
          class="relative bg-[#242424] rounded-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group"
          :class="{
            'md:w-3/5': activeCard === 'backend',
            'md:w-1/5': activeCard && activeCard !== 'backend',
            'md:w-1/3': !activeCard,
          }"
          @mouseenter.desktop="activeCard = 'backend'"
          @mouseleave.desktop="activeCard = null"
          @click="handleCardClick('backend')"
        >
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-[#242424]/90"
          ></div>

          <!-- Contenu -->
          <div class="relative flex flex-col justify-between h-full p-8">
            <!-- Partie supérieure -->
            <div>
              <!-- En-tête -->
              <div class="flex items-center gap-4 mb-8">
                <i class="fas fa-server text-[#ff6b6b] text-2xl"></i>
                <h3 class="text-2xl text-white font-bold">Backend</h3>
                <i
                  class="fas fa-eye text-lg ml-auto hidden md:block transition-colors duration-300"
                  :class="[
                    activeCard === 'backend'
                      ? 'text-[#ff6b6b]'
                      : 'text-[#a0a0a0] group-hover:text-[#ff6b6b]',
                  ]"
                ></i>
                <i
                  class="fas fa-chevron-down text-lg ml-auto md:hidden transition-all duration-300"
                  :class="[
                    activeCard === 'backend'
                      ? 'text-[#ff6b6b] rotate-180'
                      : 'text-[#a0a0a0]',
                  ]"
                ></i>
              </div>

              <!-- Preview -->
              <div
                class="grid grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-500"
                :class="{ 'opacity-0': activeCard === 'backend' }"
                v-show="activeCard !== 'backend'"
              >
                <div
                  v-for="skill in backendSkills.slice(0, isMobile ? 3 : 4)"
                  :key="skill.name"
                  class="flex flex-col items-center gap-2"
                >
                  <i :class="[skill.icon, 'text-3xl text-[#a0a0a0]']"></i>
                  <span class="text-[#a0a0a0] text-sm">{{ skill.name }}</span>
                </div>
                <!-- Indicateur "plus" -->
                <div
                  class="hidden md:flex flex-col items-center justify-center text-[#a0a0a0]"
                  v-if="backendSkills.length > 4 && !isMobile"
                >
                  <span class="text-2xl font-bold"
                    >+{{ backendSkills.length - 4 }}</span
                  >
                  <span class="text-xs">technologies</span>
                </div>
              </div>

              <!-- Contenu complet -->
              <div
                class="grid grid-cols-3 md:grid-cols-4 gap-8 transition-all duration-700"
                :class="{
                  'opacity-100 scale-100': activeCard === 'backend',
                  'opacity-0 scale-95': activeCard !== 'backend',
                }"
                v-show="activeCard === 'backend'"
              >
                <div
                  v-for="skill in backendSkills"
                  :key="skill.name"
                  class="flex flex-col items-center gap-3"
                >
                  <i
                    :class="[
                      skill.icon,
                      'text-4xl text-[#a0a0a0] hover:text-[#ff6b6b] transition-colors duration-300',
                    ]"
                  ></i>
                  <span class="text-[#a0a0a0] text-sm">{{ skill.name }}</span>
                </div>
              </div>
            </div>

            <!-- Texte incitatif -->
            <p
              class="hidden md:block text-[#a0a0a0] text-sm mt-4 text-center opacity-60"
              v-show="!activeCard"
            >
              Survolez pour voir plus
            </p>
          </div>
        </div>

        <!-- Outils -->
        <div
          class="relative bg-[#242424] rounded-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group"
          :class="{
            'md:w-3/5': activeCard === 'tools',
            'md:w-1/5': activeCard && activeCard !== 'tools',
            'md:w-1/3': !activeCard,
          }"
          @mouseenter.desktop="activeCard = 'tools'"
          @mouseleave.desktop="activeCard = null"
          @click="handleCardClick('tools')"
        >
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-[#242424]/90"
          ></div>

          <!-- Contenu -->
          <div class="relative flex flex-col justify-between h-full p-8">
            <!-- Partie supérieure -->
            <div>
              <!-- En-tête -->
              <div class="flex items-center gap-4 mb-8">
                <i class="fas fa-tools text-[#ff6b6b] text-2xl"></i>
                <h3 class="text-2xl text-white font-bold">Outils</h3>
                <i
                  class="fas fa-eye text-lg ml-auto hidden md:block transition-colors duration-300"
                  :class="[
                    activeCard === 'tools'
                      ? 'text-[#ff6b6b]'
                      : 'text-[#a0a0a0] group-hover:text-[#ff6b6b]',
                  ]"
                ></i>
                <i
                  class="fas fa-chevron-down text-lg ml-auto md:hidden transition-all duration-300"
                  :class="[
                    activeCard === 'tools'
                      ? 'text-[#ff6b6b] rotate-180'
                      : 'text-[#a0a0a0]',
                  ]"
                ></i>
              </div>

              <!-- Preview -->
              <div
                class="grid grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-500"
                :class="{ 'opacity-0': activeCard === 'tools' }"
                v-show="activeCard !== 'tools'"
              >
                <div
                  v-for="tool in tools.slice(0, isMobile ? 3 : 4)"
                  :key="tool.name"
                  class="flex flex-col items-center gap-2"
                >
                  <i :class="[tool.icon, 'text-3xl text-[#a0a0a0]']"></i>
                  <span class="text-[#a0a0a0] text-sm">{{ tool.name }}</span>
                </div>
                <!-- Indicateur "plus" -->
                <div
                  class="hidden md:flex flex-col items-center justify-center text-[#a0a0a0]"
                  v-if="tools.length > 4 && !isMobile"
                >
                  <span class="text-2xl font-bold"
                    >+{{ tools.length - 4 }}</span
                  >
                  <span class="text-xs">technologies</span>
                </div>
              </div>

              <!-- Contenu complet -->
              <div
                class="grid grid-cols-3 md:grid-cols-4 gap-8 transition-all duration-700"
                :class="{
                  'opacity-100 scale-100': activeCard === 'tools',
                  'opacity-0 scale-95': activeCard !== 'tools',
                }"
                v-show="activeCard === 'tools'"
              >
                <div
                  v-for="tool in tools"
                  :key="tool.name"
                  class="flex flex-col items-center gap-3"
                >
                  <i
                    :class="[
                      tool.icon,
                      'text-4xl text-[#a0a0a0] hover:text-[#ff6b6b] transition-colors duration-300',
                    ]"
                  ></i>
                  <span class="text-[#a0a0a0] text-sm">{{ tool.name }}</span>
                </div>
              </div>
            </div>

            <!-- Texte incitatif -->
            <p
              class="hidden md:block text-[#a0a0a0] text-sm mt-4 text-center opacity-60"
              v-show="!activeCard"
            >
              Survolez pour voir plus
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import particlesConfig from "@/config/particles-config";

const activeCard = ref(null);
const isMobile = ref(false);

// Fonction pour vérifier si c'est mobile
const checkIfMobile = () => {
  isMobile.value = window?.innerWidth < 768;
};

// Setup des event listeners
onMounted(() => {
  // Initialisation de particles.js
  if (window.particlesJS) {
    window.particlesJS("particles-js", particlesConfig);
  }

  // Check initial
  checkIfMobile();

  // Event listener pour le resize
  window.addEventListener("resize", checkIfMobile);
});

// Cleanup des event listeners
onUnmounted(() => {
  window.removeEventListener("resize", checkIfMobile);
});

// Directive pour desktop uniquement
const vDesktop = {
  mounted: (el, binding) => {
    const handler = binding.value;
    el.desktopHandler = (e) => {
      if (!isMobile.value) {
        handler(e);
      }
    };
    el.addEventListener(binding.arg, el.desktopHandler);
  },
  unmounted: (el, binding) => {
    el.removeEventListener(binding.arg, el.desktopHandler);
  },
};

// Gestionnaire de clic pour mobile
const handleCardClick = (cardName) => {
  // Sur desktop, ne rien faire
  if (!isMobile.value) return;

  // Sur mobile, toggle la carte
  if (activeCard.value === cardName) {
    activeCard.value = null;
  } else {
    activeCard.value = cardName;
  }
};

// Les compétences
const frontendSkills = ref([
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "SASS", icon: "devicon-sass-original colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "jQuery", icon: "devicon-jquery-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Markdown", icon: "devicon-markdown-original colored" },
]);

const backendSkills = ref([
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-original colored" },
  { name: "Django", icon: "devicon-django-plain colored" },
  { name: "Flask", icon: "devicon-flask-original colored" },
  { name: "Rails", icon: "devicon-rails-plain colored" },
]);

const tools = ref([
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "SQLite", icon: "devicon-sqlite-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark colored" },
  { name: "Ubuntu", icon: "devicon-ubuntu-plain colored" },
  { name: "Bash", icon: "devicon-bash-plain colored" },
  { name: "SSH", icon: "devicon-ssh-original colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Unity", icon: "devicon-unity-plain colored" },
]);
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -10px);
  }
  50% {
    transform: translate(20px, 0);
  }
  75% {
    transform: translate(10px, 10px);
  }
}

.animate-float {
  animation: float 15s infinite ease-in-out;
}

.animate-float-reverse {
  animation: float 18s infinite ease-in-out reverse;
}

/* Styles pour particles.js */
#particles-js {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

#particles-js canvas {
  pointer-events: auto;
}
</style>
