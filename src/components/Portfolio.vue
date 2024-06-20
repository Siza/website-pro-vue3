<template>
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
            class="d-flex transition-fast-in-fast-out bg-orange-darken-2 text-h2 position-absolute v-card--reveal w-100"
            style="height: 100%"
          >
            <v-card
              class="w-100 bg-teal-accent-4 text-center pa-4"
              variant="flat"
            >
              <v-card-text>
                <h3 class="text-h4 font-weight-light text-orange-accent-4 mb-2">
                  {{ propsVue.info.name }}
                </h3>

                <p class="text-h5 text-medium-emphasis">La Mission</p>
                <p class="text-h6 font-weight-light mb-4">
                  {{ propsVue.info.mission }}
                </p>
                <p class="text-h5 text-medium-emphasis">
                  Technologies utilisées
                </p>
                <ul class="list text-h6 font-weight-light">
                  <li v-for="tech in propsVue.info.tech" :key="tech">
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
            propsVue.info.image
              ? `images/${propsVue.info?.image}`
              : 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg'
          "
          :alt="propsVue.info.name"
        >
        </v-img>

        <v-card-text class="pt-6">
          <div class="font-weight-light text-grey text-h6 mb-2">
            {{ propsVue.info.category }}
          </div>

          <h3 class="text-h4 font-weight-light text-orange mb-2">
            {{ propsVue.info.name }}
          </h3>

          <div class="font-weight-light text-h6 mb-2">
            {{ propsVue.info.description }}
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
  <div v-else>
    <v-card class="mx-auto" max-width="600" variant="flat">
      <v-img
        :aspect-ratio="16 / 9"
        :src="
          propsVue.info.image
            ? `images/${propsVue.info?.image}`
            : 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg'
        "
        :alt="propsVue.info.name"
        cover
      >
      </v-img>

      <v-card-text class="pt-6">
        <div class="font-weight-light text-grey text-h6 mb-2">Start up</div>

        <h3 class="text-h4 font-weight-light text-orange-accent-4 mb-2">
          {{ propsVue.info.name }}
        </h3>

        <div class="font-weight-light text-h6 mb-2">
          {{ propsVue.info.description }}
        </div>
      </v-card-text>
      <v-card-actions v-if="mobile">
        <v-btn
          color="teal-accent-4"
          text="Learn More"
          variant="text"
          @click="reveal = true"
        ></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="position-absolute w-100"
          height="100%"
          style="bottom: 0"
          variant="flat"
        >
          <v-card-text>
            <h3 class="text-h4 font-weight-light text-orange-accent-4 mb-2">
              {{ propsVue.info.name }}
            </h3>

            <p class="text-h5 text-medium-emphasis">La Mission</p>
            <p class="text-body-1">
              {{ propsVue.info.mission }}
            </p>
            <p class="text-h5 text-medium-emphasis">Technologies utilisées</p>
            <ul class="list">
              <li v-for="tech in propsVue.info.tech" :key="tech">
                {{ tech }}
              </li>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="teal-accent-4"
              text="Close"
              variant="text"
              @click="reveal = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import anime from "animejs";
import { onMounted, ref } from "vue";
import { useDisplay } from "vuetify";

const reveal = ref(false);
const { mobile } = useDisplay();
const propsVue = defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
  isIntersect: {
    type: Boolean,
    default: false,
  },
});
console.log(propsVue.isIntersect);
function onIntersect(isIntersecting, entries, observer) {
  if (isIntersecting) {
    anime({
      targets: ".cads",
      translateY: [-100, 0],
      easing: "easeOutCubic",
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
