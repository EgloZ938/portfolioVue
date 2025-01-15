<template>
  <div class="min-h-screen">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
</script>