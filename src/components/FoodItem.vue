<script setup lang="ts">
import ViewRating from './Rating/ViewRating.vue';

export type Food = {
  name: string;
  rating: number;
  note?: string;
};

const props = defineProps<{ food: Food }>();
</script>

<template>
  <h3>{{ props.food.name }}</h3>
  <ViewRating :value="props.food.rating" />
  <p v-if="props.food.note">{{ props.food.note }}</p>
</template>
