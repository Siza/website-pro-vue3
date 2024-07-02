<template>
  <v-app-bar :elevation="0">
    <v-container>
      <span>Sisalio Phene</span>
      <v-btn
        variant="text"
        @click="goTo('#goto-welcome', { offset: -60 })"
        v-if="!mobile"
      >
        Présentation
      </v-btn>
      <v-btn
        variant="text"
        @click="goTo('#goto-features', { offset: -60 })"
        v-if="!mobile"
      >
        Services
      </v-btn>
      <v-btn
        variant="text"
        @click="goTo('#goto-portfolio', { offset: -60 })"
        v-if="!mobile"
      >
        Portfolio
      </v-btn>
      <v-btn
        variant="text"
        @click="goTo('#goto-contact', { offset: -60 })"
        v-if="!mobile"
      >
        Contact
      </v-btn>
    </v-container>

    <!-- <template v-if="$vuetify.display.mobile" v-slot:append>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->
  </v-app-bar>
</template>

<script setup lang="ts">
import { useGoTo } from "vuetify";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const goTo = useGoTo();
</script>

<style scoped></style>
