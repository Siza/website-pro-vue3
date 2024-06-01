<template>
  <v-app>
    <TheNavigationBar />
    <v-main>
      <section>
        <v-container><h1>Hero</h1></v-container>
      </section>
      <section>
        <v-container><h1>Features</h1></v-container>
      </section>
      <section>
        <v-container><h1>About</h1></v-container>
      </section>
      <section>
        <v-container><h1>My Portfolio</h1></v-container>
      </section>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
//
</script>
<style>
@media (min-width: 1920px) {
  .v-container {
    max-width: 1400px;
  }
}
</style>
