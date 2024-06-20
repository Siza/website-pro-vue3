<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="8">
        <h1
          class="text-h4 font-weight-bold mb-8 animate-welcome"
          v-intersect.once="onIntersect"
        >
          Bienvenue, je m'appelle Sisalio 👋
        </h1>
        <p class="text-h6 font-weight-regular animate-welcome">
          Passionné et motivé par les technologies du web. Je me suis lancé dans
          le freelance pour monter une startup qui avait pour but d'aider les
          amateurs geeks du potager. Puis, j'ai rejoint une startup dans le
          domaine du conseil marketing. Maintenant fort des années d'expériences
          en ESN, de freelance et d'un parcours professionnel challengeant sur
          tous les aspects d'un point vu investissement, décisionnel,
          engagement. Je suis une personne naturellement curieuse, qui fait de
          la veille constamment pour continuer à progresser et qui aime
          partager.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import anime from "animejs";

function onIntersect(isIntersecting, entries, observer) {
  if (isIntersecting) {
    anime({
      targets: ".animate-welcome",
      opacity: [0, 1],
      translateY: [300, 0],
      duration: 1000,
      easing: "easeOutCubic",
    });
  }
}
</script>

<style scoped></style>
