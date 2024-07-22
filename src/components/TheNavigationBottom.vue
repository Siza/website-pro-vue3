<template>
  <v-bottom-navigation class="overflow-visible">
    <v-btn
      @click="goTo('#goto-home', { offset: -60 })"
      class="pa-0"
      min-width="24"
    >
      <v-icon :icon="mdiHome"></v-icon>
    </v-btn>
    <v-btn @click="goTo('#goto-welcome', { offset: -60 })">
      <span>Présentation</span>
    </v-btn>
    <v-btn @click="goTo('#goto-features', { offset: -60 })">
      <span>Services</span>
    </v-btn>

    <v-btn @click="goTo('#goto-portfolio', { offset: -60 })">
      <span>Portfolio</span>
    </v-btn>
    <v-btn
      variant="text"
      @click="goTo('#goto-contact', { offset: -60 })"
      class="pa-0"
      min-width="24"
    >
      <v-icon :icon="mdiMail"></v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { mdiHome, mdiMail } from "@mdi/js";
import { useGoTo } from "vuetify";

const goTo = useGoTo();
</script>

<style scoped></style>
