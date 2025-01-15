<template>
  <section
    id="about"
    class="relative min-h-screen bg-[#1a1a1a] flex items-center py-12 md:py-14 overflow-hidden"
  >
    <!-- Geometric Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-32 sm:w-48 h-32 sm:w-48 rounded-full border-2 border-[#ff6b6b] opacity-15 top-[10%] left-[5%] animate-float"
      ></div>
      <div
        class="absolute w-40 sm:w-64 h-40 sm:h-64 border-2 border-[#ff6b6b] opacity-15 bottom-[15%] right-[8%] rounded-[10%] rotate-45 animate-float-reverse"
      ></div>
      <div
        class="absolute w-28 sm:w-40 h-28 sm:h-40 border-2 border-[#ff6b6b] opacity-15 top-[60%] left-[15%] rounded-[30%] animate-float-delay"
      ></div>
      <div
        class="absolute w-36 sm:w-44 h-36 sm:h-44 border-2 border-[#ff6b6b] opacity-15 top-[25%] right-[20%] rounded-[10%] animate-rotate"
      ></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <h2
        class="text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold mb-6 md:mb-8"
      >
        À propos de moi
      </h2>
      <div
        class="flex justify-center items-center gap-3 sm:gap-4 mb-10 md:mb-12"
      >
        <span class="w-6 sm:w-8 h-0.5 bg-[#ff6b6b]"></span>
        <p class="text-sm sm:text-base text-[#ff6b6b] uppercase tracking-wider">
          Qui suis-je ?
        </p>
        <span class="w-6 sm:w-8 h-0.5 bg-[#ff6b6b]"></span>
      </div>

      <!-- Main Content -->
      <div class="max-w-6xl mx-auto">
        <!-- Profile Picture for Mobile -->
        <div class="md:hidden flex justify-center mb-8">
          <div class="w-40 h-40 relative">
            <img
              src="/assets/profil-picture.jpg"
              alt="Théo EVON"
              class="w-full h-full object-cover rounded-full border-[0.5rem] sm:border-[1rem] border-white/[0.02]"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 md:gap-10">
          <!-- Profile Picture for Desktop -->
          <div class="hidden md:block flex-shrink-0 w-44">
            <div class="sticky top-8">
              <img
                src="/assets/profil-picture.jpg"
                alt="Théo EVON"
                class="w-full h-auto object-cover rounded-full border-[1rem] border-white/[0.02]"
              />
            </div>
          </div>

          <!-- Text Content -->
          <div class="flex-1">
            <div class="space-y-6 md:space-y-4">
              <p
                class="text-[#a0a0a0] text-sm sm:text-base leading-relaxed bg-[#1a1a1a]/70 p-4 md:p-3 rounded relative z-[3]"
              >
                En tant que développeur fullstack, je me suis spécialisé dans le
                développement web au cours de mes deux années de formation
                intensive. Actuellement en troisième année d'études, je continue
                d'approfondir mes connaissances et compétences. Cette expérience
                m'a permis d'acquérir une solide maîtrise de multiples langages
                de programmation et de comprendre en profondeur les différentes
                facettes du développement d'applications web.
              </p>
              <p
                class="text-[#a0a0a0] text-sm sm:text-base leading-relaxed bg-[#1a1a1a]/70 p-4 md:p-3 rounded relative z-[3]"
              >
                Bien que je sois compétent dans tous les aspects du
                développement fullstack, j'ai une affinité particulière pour le
                backend. J'apprécie la logique et la structure qu'offre le
                développement côté serveur, ce qui correspond bien à mon
                approche analytique. Cependant, mes compétences en frontend me
                permettent de créer des interfaces fonctionnelles et efficaces,
                faisant de moi un développeur polyvalent capable de gérer
                l'intégralité d'un projet web.
              </p>
              <p
                class="text-[#a0a0a0] text-sm sm:text-base leading-relaxed bg-[#1a1a1a]/70 p-4 md:p-3 rounded relative z-[3]"
              >
                Mon objectif est de continuer à développer mes compétences et à
                rester à jour avec les dernières technologies du secteur. Je
                m'efforce de combiner rigueur technique et solutions pratiques
                pour relever les défis complexes du développement web moderne.
              </p>
            </div>

            <!-- Separator -->
            <hr class="my-8 md:my-6 border-t border-[#333]" />

            <!-- Contact and CV -->
            <div
              class="flex flex-col sm:flex-row justify-between items-start gap-6 md:gap-4"
            >
              <div>
                <h3
                  class="text-xl sm:text-2xl md:text-xl text-white mb-4 md:mb-3"
                >
                  Coordonnées
                </h3>
                <ul class="space-y-3 md:space-y-2">
                  <li
                    class="flex items-center text-[#a0a0a0] text-sm sm:text-base"
                  >
                    <i class="fas fa-user text-[#ff6b6b] w-5 mr-3"></i>
                    Théo EVON
                  </li>
                  <li
                    class="flex items-center text-[#a0a0a0] text-sm sm:text-base"
                  >
                    <i
                      class="fas fa-map-marker-alt text-[#ff6b6b] w-5 mr-3"
                    ></i>
                    île de France
                  </li>
                  <li
                    class="flex items-center text-[#a0a0a0] text-sm sm:text-base"
                  >
                    <i class="fas fa-envelope text-[#ff6b6b] w-5 mr-3"></i>
                    t.evon@solganeo.com
                  </li>
                </ul>
              </div>
              <a
                href="#"
                class="w-full sm:w-auto text-center px-6 py-3 bg-white text-[#1a1a1a] font-bold rounded hover:bg-[#ff6b6b] hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                TÉLÉCHARGER MON CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-float {
  animation: float 15s infinite ease-in-out;
}

.animate-float-reverse {
  animation: float 18s infinite ease-in-out reverse;
}

.animate-float-delay {
  animation: float 12s infinite ease-in-out 2s;
}

.animate-rotate {
  animation: rotate 120s linear infinite;
}
</style>
