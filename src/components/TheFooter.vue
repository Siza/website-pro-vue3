<template>
  <v-footer class="d-flex flex-column container">
    <v-container>
      <div class="d-flex w-100 align-center px-4">
        <strong>Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>

      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Sisalio Phene</strong>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-footer .v-container {
  padding: 0;
}
</style>
