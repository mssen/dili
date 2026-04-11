<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import RestaurantList from '@/components/RestaurantList.vue';
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

    <button>+ Create restaurant</button>
  </header>

  <p v-if="isLoading">Loading...</p>
  <div class="app-layout" v-else>
    <RestaurantList />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: var(--size-3);
  display: flex;
  justify-content: space-between;
}

main {
  max-inline-size: calc(var(--size-content-3) * 2);
  margin: auto;
}

.app-layout {
  display: flex;
  flex-direction: row;
}
</style>
