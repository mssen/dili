<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import RestaurantFilter from '@/components/RestaurantFilter.vue';
</script>

<template>
  <header>
    <RouterLink to="/">Dili</RouterLink>

    <RestaurantFilter />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: var(--size-3);
}
</style>
