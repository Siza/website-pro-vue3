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
    </v-main>
    <TheFooter />
    <div>
      <v-bottom-navigation>
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>

          <span>Recent</span>
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>

          <span>Favorites</span>
        </v-btn>

        <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>

          <span>Nearby</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import SkillsSection from "./components/SkillsSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import HeroSection from "./components/HeroSection.vue";
import CtaSection from "./components/CtaSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
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
