<template>
  <v-footer class="d-flex flex-column container">
    <v-container>
      <div class="text-center">
        <v-btn variant="plain" @click="overlay = !overlay"
          >Mentions Légales</v-btn
        >
        <v-btn variant="plain" :icon="mdiLinkedin"></v-btn>
      </div>
      <div class="d-flex justify-center">
        <v-overlay v-model="overlay" class="d-flex justify-center align-center">
          <v-sheet><MentionsLegales /></v-sheet>
        </v-overlay>
      </div>
      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>© Sisalio Phene</strong>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { mdiLinkedin } from "@mdi/js";
import { ref } from "vue";
import MentionsLegales from "../pages/MentionsLegales.vue";

const overlay = ref(false);
</script>

<style scoped>
.v-footer .v-container {
  padding: 0;
}
</style>
