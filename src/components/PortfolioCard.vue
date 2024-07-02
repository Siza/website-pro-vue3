<template>
  <v-card
    class="mx-auto h-100"
    max-width="600"
    v-bind="propsVue.propsHover ? propsVue.propsHover : ''"
    variant="flat"
  >
    <slot name="expand-desktop"></slot>
    <v-img
      :aspect-ratio="16 / 9"
      :src="
        propsVue.items.image
          ? `images/${propsVue.items?.image}`
          : '/images/undraw_experience_design.svg'
      "
      :alt="propsVue.items.name"
    >
    </v-img>

    <v-card-text class="pt-6">
      <div class="font-weight-light text-grey text-h6 mb-2">
        {{ propsVue.items.category }}
      </div>

      <h3 class="text-h4 font-weight-light text-orange mb-2">
        {{ propsVue.items.name }}
      </h3>

      <div class="font-weight-light text-h6 mb-2">
        {{ propsVue.items.description }}
      </div>
    </v-card-text>
    <slot name="expand-mobile"></slot>
  </v-card>
</template>

<script setup lang="ts">
const propsVue = defineProps({
  propsHover: {
    type: Object,
    default: () => {},
  },
  items: {
    type: Object,
    default: () => {},
  },
});
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
