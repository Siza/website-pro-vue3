<template>
  <v-container>
    <v-row class="mb-4 justify-center">
      <v-col>
        <h1
          class="text-h4 text-center font-weight-black mb-8 cads"
          v-intersect.once.quiet="onIntersect"
        >
          Mon Portfolio
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-4 justify-center">
      <v-col>
        <p class="text-body-1 text-center cads">
          Voici un aperçu des projets sur lesquels j'ai pu contribuer à
          plusieurs niveau : développement, intégration ou gestion
        </p>
      </v-col>
    </v-row>
    <v-row v-for="items in chunks">
      <v-col cols="12" md="4" v-for="item in items" :key="item.id">
        <!-- <Portfolio :info="item" :isIntersect="toto" /> -->
        <div v-if="!mobile" class="h-100 cads">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto h-100"
              max-width="600"
              v-bind="props"
              variant="flat"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out text-h2 position-absolute v-card--reveal w-100"
                  style="height: 100%"
                >
                  <v-card
                    class="w-100 bg-teal-accent-4 text-center pa-4"
                    variant="flat"
                  >
                    <v-card-text>
                      <h3
                        class="text-h4 font-weight-light text-orange-accent-4 mb-2"
                      >
                        {{ item.name }}
                      </h3>

                      <p class="text-h5 text-medium-emphasis">La Mission</p>
                      <p class="text-h6 font-weight-light mb-4">
                        {{ item.mission }}
                      </p>
                      <p class="text-h5 text-medium-emphasis">
                        Technologies utilisées
                      </p>
                      <ul class="list text-h6 font-weight-light">
                        <li v-for="tech in item.tech" :key="tech">
                          {{ tech }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </div>
              </v-expand-transition>
              <v-img
                :aspect-ratio="16 / 9"
                :src="
                  item.image
                    ? `images/${item?.image}`
                    : 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg'
                "
                :alt="item.name"
              >
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  {{ item.category }}
                </div>

                <h3 class="text-h4 font-weight-light text-orange mb-2">
                  {{ item.name }}
                </h3>

                <div class="font-weight-light text-h6 mb-2">
                  {{ item.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
        <div v-else>
          <PortfolioCardMobile :items="item" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import sourceData from "../data.json";
import { chunk } from "lodash";
import { ref } from "vue";
import anime from "animejs";
import { useDisplay } from "vuetify";
import PortfolioCardMobile from "./PortfolioCardMobile.vue";

const { mobile } = useDisplay();
const data = ref(sourceData);

const chunks = chunk(data.value.projects, 3);

const tl = anime.timeline({
  easing: "easeOutCubic",
  duration: 750,
});

function onIntersect(isIntersecting, entries, observer) {
  if (isIntersecting) {
    tl.add({
      targets: ".animate-portfolio-title",
      opacity: [0, 1],
      translateY: [-90, 0],
    }).add({
      targets: ".cads",
      translateY: [-120, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
    });
  }
}
</script>

<style scoped>
.list {
  list-style: none;
}

.v-card--reveal {
  z-index: 100;
  bottom: 0;
  opacity: 0.95;
}
</style>
