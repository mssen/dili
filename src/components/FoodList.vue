<script setup lang="ts">
import { relationships, store } from '@/store';
import { onUnmounted, ref, watch } from 'vue';
import FoodItem, { type Food } from './FoodItem.vue';

const { restaurantId } = defineProps<{ restaurantId: string }>();
const foodList = ref<Food[]>([]);
const listenerId = ref<string>();

const loadFood = () => {
  const foodIds = relationships.getLocalRowIds('restaurantFood', restaurantId);
  foodList.value = foodIds.map((id) => {
    const storeFood = store.getRow('food', id);

    return {
      id,
      name: storeFood.name ?? 'Unnamed',
      rating: storeFood.rating ?? 1,
      note: storeFood.note,
    };
  });
};

const listenAndLoad = () => {
  if (listenerId.value) {
    relationships.delListener(listenerId.value);
  }
  listenerId.value = relationships.addLocalRowIdsListener('restaurantFood', restaurantId, () => {
    loadFood();
  });
  loadFood();
};

watch(() => restaurantId, listenAndLoad, { immediate: true });

onUnmounted(() => {
  if (listenerId.value) {
    relationships.delListener(listenerId.value);
  }
});
</script>

<template>
  <h2>Food</h2>
  <FoodItem v-for="food in foodList" :key="food.name" :food="food" />
</template>
