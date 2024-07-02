<template>
  <v-app>
    <TheNavigationBar />
    <v-main>
      <RouterView />
      <TheFooter />
    </v-main>
    <TheNavigationBottom v-if="mobile" />
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>
<style lang="sass"></style>
