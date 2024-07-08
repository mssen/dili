<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { db, type Restaurant } from '@/store/db';

type State = 'loading' | 'error' | 'valid';

const restaurant = ref<Restaurant>();
const state = ref<State>('loading');

const route = useRoute();

const fetchRestaurant = async (id: string | string[]) => {
  if (Array.isArray(id)) {
    state.value = 'error';
    return;
  }

  try {
    restaurant.value = await db.restaurants.get(parseInt(id, 10));
    console.log('rest', restaurant.value);
    state.value = 'valid';
  } catch (error) {
    state.value = 'error';
  }
};

watch(() => route.params.id, fetchRestaurant, { immediate: true });
</script>

<template>
  <p v-if="state === 'loading'">Loading...</p>
  <div v-else-if="state === 'valid' && restaurant">
    <h1>{{ restaurant.name }}</h1>
    <p>Loaded!</p>
  </div>
  <div v-else>
    <p>Error!</p>
  </div>
</template>
