<template>
  <v-container>
    <v-row class="mb-4 justify-center">
      <v-col>
        <h1 class="text-h4 text-center font-weight-black mb-14">
          <span>Mes Services et Motivations</span>
        </h1>
      </v-col>
    </v-row>
    <v-row
      v-intersect.once.quiet="{
        handler: onIntersect,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      <v-col cols="12" md="3">
        <div ref="cardDev">
          <v-card variant="text">
            <v-card-title>
              <div>
                <v-icon :icon="mdiDevTo" size="x-large" color="purple"></v-icon>
              </div>
              <p class="text-teal-accent-4">Développement Web</p>
            </v-card-title>
            <v-card-text>
              Front End et Back End, je crée des sites et application web avec
              CMS ou Framework (VueJs et Nuxt). Je peux créer "from scratch",
              ajouter de nouvelles fonctionnalités, faire évoluer la plateforme
              et maintenir.
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div ref="cardInte">
          <v-card variant="text">
            <v-card-title>
              <div>
                <v-icon
                  :icon="mdiDevices"
                  size="x-large"
                  color="purple"
                ></v-icon>
              </div>
              <p class="text-teal-accent-4">Intégration Web</p>
            </v-card-title>
            <v-card-text>
              Je m'occupe de l'intégration du site à partir de la maquette
              fournie. Elle pourra être responsive, suivra les règles
              d'accessibilités et de SEO.
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div ref="cardRun">
          <v-card variant="text">
            <v-card-title>
              <div>
                <v-icon :icon="mdiRun" size="x-large" color="purple"></v-icon>
              </div>
              <p class="text-teal-accent-4">Courir</p>
            </v-card-title>
            <v-card-text>
              La pratique du sport est élément essentiel pour moi. Elle m'aide à
              être bien concentrer sur mes tâches et me permet tout d'abord de
              me tenir en bonne santé. C'est aussi un bon moyen pour s'oxygéner
              le cortex.
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div ref="cardPass">
          <v-card variant="text">
            <v-card-title>
              <div>
                <v-icon
                  :icon="mdiUpdate"
                  size="x-large"
                  color="purple"
                ></v-icon>
              </div>
              <p class="text-teal-accent-4">Passionné</p>
            </v-card-title>
            <v-card-text>
              J'aime apprendre et découvrir. La technologie ne cesse d'évoluer
              et se tenir au courant des changements et évolutions sont des
              élements importants. En effet, des élements peuvent évolués et
              nous permettre d'être plus productif ou de combler une faille de
              sécurité.
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { mdiDevices, mdiDevTo, mdiRun, mdiUpdate } from "@mdi/js";

import anime from "animejs";
import { ref } from "vue";

const tl = anime.timeline({
  duration: 600,
});
const cardDev = ref(null);
const cardInte = ref(null);
const cardRun = ref(null);
const cardPass = ref(null);
function onIntersect(isIntersecting, entries, observer) {
  if (isIntersecting) {
    tl.add({
      targets: cardDev.value,
      opacity: [0, 1],
      translateX: [-100, 0],
      easing: "easeOutCubic",
    })
      .add(
        {
          targets: cardInte.value,
          opacity: [0, 1],
          translateX: [-100, 0],
          easing: "easeOutCubic",
        },
        "-=300"
      )
      .add(
        {
          targets: cardRun.value,
          opacity: [0, 1],
          translateX: [-100, 0],
          easing: "easeOutCubic",
        },
        "-=300"
      )
      .add(
        {
          targets: cardPass.value,
          opacity: [0, 1],
          translateX: [-100, 0],
          easing: "easeOutCubic",
        },
        "-=300"
      );
  }
}
</script>

<style scoped></style>
