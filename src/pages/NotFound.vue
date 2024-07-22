<template>
  <v-container class="pt-12">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 class="text-h2">La page que vous cherchez n'existe pas</h1>
        <p class="text-body-1 mt-12">
          Retrouvez le bon chemin en retournant sur
          <RouterLink to="/">la page principale</RouterLink>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
