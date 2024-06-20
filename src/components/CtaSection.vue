<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <h1
          class="text-h4 font-weight-black text-center"
          ref="titleCta"
          v-intersect.once="onIntersect"
        >
          Intéressez pour une collaboration ?
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col>
        <p class="text-center" ref="subtitleCta">
          Je suis ouvert à toute discussion
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col class="text-center">
        <div ref="btnCta">
          <v-btn rounded="xl" size="large" color="purple">
            Commencer une discussion
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import anime from "animejs";
import { ref } from "vue";

const tl = anime.timeline({
  duration: 600,
});
const titleCta = ref(null);
const subtitleCta = ref(null);
const btnCta = ref(null);
function onIntersect(isIntersecting, entries, observer) {
  tl.add({
    targets: titleCta.value,
    opacity: [0, 1],
    translateY: [200, 0],
  })
    .add(
      {
        targets: subtitleCta.value,
        opacity: [0, 1],
        translateY: [-50, 0],
      },
      "-=100"
    )
    .add(
      {
        targets: btnCta.value,
        opacity: [0, 1],
        translateY: [-50, 0],
      },
      "-=200"
    );
}
</script>

<style scoped></style>
