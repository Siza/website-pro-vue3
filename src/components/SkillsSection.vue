<template>
  <v-container>
    <v-row class="mb-4 justify-center">
      <h1
        class="text-h4 font-weight-black mb-14 animate-skills-title"
        v-intersect.once="onIntersect"
      >
        Mes Compétences
      </h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card
          class="mx-auto mb-14 pa-5 text-body-1 overflow-visible position-relative h-100 animate-skills"
          border
          flat
        >
          <div class="text-center mb-4 position-absolute icon-position">
            <v-avatar color="purple" variant="elevated">
              <v-icon color="white" size="42" :icon="mdiXml"> </v-icon>
            </v-avatar>
          </div>
          <div class="text-center mt-12">
            <p class="text-h5 font-weight-black text-teal-accent-4">
              Code skills
            </p>
          </div>

          <v-card-text class="pt-4 text-2 text-body-1 text-center">
            <p class="mb-8">
              Je navigue avec les compétences front end et back end afin d'être
              le plus autonome possible et aussi parce que j'aime apporter mon
              soutien dans les petites équipes.
            </p>
            <p class="text-h6 text-teal-accent-4 mb-4">Les langages:</p>
            <ul class="skills-list">
              <li>Javascript</li>
              <li>Vue 2/3</li>
              <li>Nuxt</li>
              <li>HTML 5 / CSS 3</li>
              <li>Sass</li>
              <li>Git</li>
              <li>PHP</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          class="mx-auto mb-14 pa-5 overflow-visible position-relative h-100 animate-skills"
          border
          flat
          id="card2"
        >
          <div class="text-center mb-4 position-absolute icon-position">
            <v-avatar color="purple" variant="elevated" class="mr-4">
              <v-icon
                color="white"
                size="42"
                :icon="mdiToolboxOutline"
              ></v-icon>
            </v-avatar>
          </div>
          <div class="text-center mt-12">
            <p class="text-h5 font-weight-black text-teal-accent-4">
              Dev Tools
            </p>
          </div>

          <v-card-text class="pt-4 text-2 text-body-1 text-center">
            <p class="mb-8">Les bons outils pour bien travailler</p>
            <p class="text-h6 text-teal-accent-4 mb-4">Les Outils:</p>
            <ul class="skills-list">
              <li>Github</li>
              <li>Gitlab</li>
              <li>Tailwind</li>
              <li>VS Code</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { mdiXml, mdiToolboxOutline } from "@mdi/js";

import anime from "animejs";
const tl = anime.timeline({
  easing: "easeOutCubic",
  duration: 800,
});
function onIntersect(isIntersecting, entries, observer) {
  if (isIntersecting) {
    tl.add({
      targets: ".animate-skills-title",
      opacity: [0, 1],
      translateY: [300, 0],
    }).add(
      {
        targets: ".animate-skills",
        opacity: [0, 1],
        translateY: [300, 0],
      },
      "-=300"
    );
  }
}
</script>

<style scoped></style>
