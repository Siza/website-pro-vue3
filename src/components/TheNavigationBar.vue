<template>
  <v-app-bar :elevation="0">
    <v-container>
      <span>Sisalio Phene</span>
      <v-btn variant="text">Présentation</v-btn>
      <v-btn variant="text">Portfolio</v-btn>
      <v-btn variant="text">Services</v-btn>
    </v-container>

    <template v-if="$vuetify.display.mobile" v-slot:append>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped></style>
