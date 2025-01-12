<script setup lang="ts">
export type Food = {
  name: string;
  rating: number;
  note?: string;
};

const props = defineProps<{ food: Food }>();
</script>

<template>
  <h3>{{ props.food.name }}</h3>
  <!-- Read only rating component here -->
  <p v-if="props.food.note">{{ props.food.note }}</p>
</template>
