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

<style module>
header {
  display: flex;
  justify-content: space-between;
  padding: var(--size-3);
}

main {
  max-inline-size: calc(var(--size-content-3) * 2);
  margin: auto;
}
</style>
