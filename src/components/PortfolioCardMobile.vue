<template>
  <v-card class="mx-auto" max-width="600" variant="flat">
    <v-img
      :aspect-ratio="16 / 9"
      :src="
        project.image
          ? `images/${project?.image}`
          : '/images/3d-casual-life-colleagues-discussing-team-project-1.png'
      "
      :alt="project.name"
      contain
    >
    </v-img>

    <v-card-text class="pt-6">
      <div class="font-weight-light text-grey text-h6 mb-2">Start up</div>

      <h3 class="text-h4 font-weight-light text-orange-accent-4 mb-2">
        {{ project.name }}
      </h3>

      <div class="font-weight-light text-h6 mb-2">
        {{ project.description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="teal-accent-4"
        text="Plus de détails"
        variant="outlined"
        @click="handleReveal"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="position-absolute w-100 bg-teal-accent-4 text-center card-more-mobile"
        height="100%"
        style="bottom: 0"
        variant="flat"
      >
        <v-card-text>
          <h3 class="text-h4 font-weight-light text-orange-accent-4 mb-2">
            {{ project.name }}
          </h3>

          <p class="text-h5 text-medium-emphasis">La Mission</p>
          <p class="text-h6 font-weight-light mb-4">
            {{ project.mission }}
          </p>
          <p class="text-h5 text-medium-emphasis">Technologies utilisées</p>
          <ul class="list">
            <li v-for="tech in project.tech" :key="tech">
              {{ tech }}
            </li>
          </ul>
        </v-card-text>

        <v-btn
          text="Fermer"
          variant="outlined"
          @click="reveal = false"
          class="btn-close-card-mobile"
        ></v-btn>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});
const reveal = ref(false);
const project = ref(props.items);

const handleReveal = () => {
  reveal.value = true;
};
</script>

<style scoped>
.list {
  list-style: none;
}
.card-more-mobile {
  opacity: 0.95;
}
</style>
