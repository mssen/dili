<script setup lang="ts">
import { store } from '@/store';
import ViewRating from './Rating/ViewRating.vue';

export type Food = {
  id: string;
  name: string;
  rating: number;
  note?: string;
};

const props = defineProps<{ food: Food }>();

const handleDelete = () => {
  store.delRow('food', props.food.id);
};
</script>

<template>
  <div class="header">
    <h3>{{ props.food.name }}</h3>
    <button @click="handleDelete">Delete</button>
  </div>
  <ViewRating :value="props.food.rating" />
  <p v-if="props.food.note">{{ props.food.note }}</p>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: center;
  gap: var(--size-3);
}
</style>
