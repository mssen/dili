<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { store, type Restaurant } from '@/store';

const restaurants = ref<Restaurant[]>([]);

onMounted(() => {
  const rowIds = store.getSortedRowIds('restaurants', 'name');
  restaurants.value = rowIds.map((id) => {
    const row = store.getRow('restaurants', id);
    return {
      id,
      name: row.name ?? 'Unnamed',
    };
  });
});
</script>

<template>
  <nav>
    <RouterLink
      v-for="restaurant in restaurants"
      :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      :key="restaurant.id"
    >
      {{ restaurant.name }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  padding-inline: var(--size-3);
}
</style>
