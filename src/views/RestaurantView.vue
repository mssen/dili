<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { store } from '@/store';
import FoodForm from '@/components/FoodForm.vue';
import FoodList from '@/components/FoodList.vue';

type State = 'loading' | 'error' | 'valid';

const route = useRoute();
const id = route.params.id as string;

const state = ref<State>('loading');
const restaurant = ref<string>();

const fetchRestaurant = (id: string | string[]) => {
  if (Array.isArray(id)) {
    state.value = 'error';
    return;
  }

  const restaurantName = store.getCell('restaurants', id, 'name');
  if (restaurantName) {
    restaurant.value = restaurantName;
    state.value = 'valid';
  } else {
    state.value = 'error';
  }
};

watch(() => id, fetchRestaurant, { immediate: true });
</script>

<template>
  <p v-if="state === 'loading'">Loading...</p>
  <div v-else-if="state === 'valid' && restaurant">
    <div class="header">
      <h1>{{ restaurant }}</h1>
      <FoodForm :restaurant-id="id" />
    </div>
    <FoodList :restaurant-id="id" />
  </div>
  <div v-else>
    <p>Error!</p>
  </div>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--size-4);
}
</style>
