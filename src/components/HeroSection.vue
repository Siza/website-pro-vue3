<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <h1 class="text-h2 text-lg-h1 mb-4" id="title">
          Un Développeur Web Dans Les Starting &lt;Block&gt;
        </h1>
        <p class="mb-10" id="subtitle">
          Toujours prêt pour partager l'aventure et écrire une histoire pour
          votre projet
        </p>
        <div class="text-center" id="btn-cta">
          <v-btn
            rounded="xl"
            size="large"
            color="teal-accent-4"
            @click="goTo('#goto-welcome', { offset: -60 })"
          >
            <template v-slot:prepend>
              <v-icon :icon="mdiAccountTie" />
            </template>
            Qui suis-je ?
            <template v-slot:append>
              <v-icon :icon="mdiArrowDownBold" />
            </template>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="align-self-center">
        <div id="image">
          <v-img :src="image" alt="computer" aspect-ratio="16/9" cover></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import image from "@/assets/undraw.svg";
import { mdiArrowDownBold, mdiAccountTie } from "@mdi/js";
import anime from "animejs";
import { onMounted } from "vue";
import { useGoTo } from "vuetify";

const goTo = useGoTo();
const tl = anime.timeline({
  duration: 600,
});

/*onMounted(() => {
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const btn = document.getElementById("btn-cta");
  const image = document.getElementById("image");
  tl.add({
    targets: image,
    opacity: [0, 1],
    translateY: [200, 0],
  })
    .add(
      {
        targets: title,
        opacity: [0, 1],
        translateY: [-50, 0],
      },
      "-=100"
    )
    .add(
      {
        targets: subtitle,
        opacity: [0, 1],
        translateX: [-100, 0],
      },
      "-=200"
    )
    .add(
      {
        targets: btn,
        opacity: [0, 1],
        translateX: [-50, 0],
      },
      "-=100"
    );
});*/
</script>

<style scoped></style>
