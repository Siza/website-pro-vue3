<template>
  <v-app>
    <TheNavigationBar />
    <v-main ref="el">
      <section class="py-14 h-screen align-content-center">
        <HeroSection />
      </section>
      <section class="py-14 bg-teal-accent-4" id="goto-welcome">
        <WelcomeSection />
      </section>
      <section class="py-14">
        <SkillsSection />
      </section>
      <section class="bg-teal-accent-4 py-14">
        <CtaSection />
      </section>
      <section class="py-14" id="goto-features">
        <FeaturesSection />
      </section>
      <section id="goto-portfolio">
        <PortfolioSection />
      </section>
      <section class="bg-teal-accent-4 py-14" id="goto-contact">
        <ContactSection />
      </section>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
import SkillsSection from "./components/SkillsSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import HeroSection from "./components/HeroSection.vue";
import CtaSection from "./components/CtaSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>
<style lang="sass">
@import './styles/settings.scss'
</style>
<style lang="scss">
@media (min-width: 1920px) {
  .v-container {
    max-width: 1400px;
  }
}
.skills-list {
  list-style: none;
  text-align: center;
}
.icon-position {
  top: -50px;
  left: 41%;
}
</style>
