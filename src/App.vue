<template>
  <v-app>
    <TheNavigationBar />
    <v-main>
      <RouterView />
      <TheFooter />
    </v-main>
    <TheNavigationBottom v-if="mobile" />
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
import { useSeoMeta } from "@unhead/vue";

useSeoMeta({
  title: "Freelance Développeur Web Vue| Sisalio Phene",
  description:
    "Mon portfolio pour me découvrir et vous proposez mes services en tant que dévellopeur web freelance.",
  ogDescription:
    "Mon portfolio pour me découvrir et vous proposez mes services en tant que dévellopeur web freelance.",
  ogTitle: "Freelance Développeur Web Vue| Sisalio Phene",
  ogImage:
    "https://www.sisalio-phene.fr/images/3d-casual-life-colleagues-discussing-team-project-1.png",
  twitterCard: "summary_large_image",
});
</script>
<style lang="sass"></style>
