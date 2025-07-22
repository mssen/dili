<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import RestaurantFilter from '@/components/RestaurantFilter.vue';
import { persister } from '@/store';

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await persister.startAutoPersisting();
  isLoading.value = false;
});
</script>

<template>
  <header v-if="!isLoading">
    <RouterLink to="/">Dili</RouterLink>

    <RestaurantFilter />
  </header>

  <main>
    <p v-if="isLoading">Loading...</p>
    <RouterView v-else />
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
