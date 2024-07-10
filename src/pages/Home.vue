<template>
  <section class="py-14 align-content-center" id="goto-home">
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
</template>

<script setup lang="ts"></script>
<style lang="sass">
@import '../styles/settings.scss'
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
