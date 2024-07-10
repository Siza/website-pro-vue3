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
          Passionné et motivé par les technologies du web. Après des années dans
          une ESN, je me suis lancé dans le freelance d'abord pour poursuivre
          une idée que j'avais développé pendant mes dernières années scolaire.
          Cette idée était orientée pour aider les jardiniers à entretenir leurs
          potagers. Puis, j'ai rejoint une startup au sein d'une équipe de 10
          personnes dans le domaine du conseil marketing afin de créer une
          application. Maintenant fort des années d'expériences en ESN, de
          freelance et d'un parcours professionnel qui m'ont challengé sur plein
          d'aspects comme sur l'investissement de soi, le décisionnel,
          l'engagement. Je suis une personne naturellement curieuse, qui fait de
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
