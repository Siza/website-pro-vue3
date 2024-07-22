<template>
  <v-app-bar :elevation="0">
    <v-container>
      <v-btn variant="plain" @click="goToHome">
        <span>Sisalio Phene</span>
      </v-btn>
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
      <v-btn
        variant="plain"
        :icon="mdiLinkedin"
        href="https://www.linkedin.com/in/sisalio-phene-93a5b166"
      ></v-btn>
    </v-container>

    <!-- <template v-if="$vuetify.display.mobile" v-slot:append>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useGoTo } from "vuetify";
import { useDisplay } from "vuetify";
import { mdiLinkedin } from "@mdi/js";

const { mobile } = useDisplay();

const route = useRoute();
const router = useRouter();
const goTo = useGoTo();

console.log(route);
const goToHome = () => {
  if (route.name === "Home") {
    goTo("#goto-home", { offset: -60 });
  } else {
    router.push("/");
  }
};
</script>

<style scoped></style>
