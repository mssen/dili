<script setup lang="ts">
import { relationships, store } from '@/store';
import { onUnmounted, ref } from 'vue';
import FoodItem, { type Food } from './FoodItem.vue';

const props = defineProps<{ restaurantId: string }>();
const foodList = ref<Food[]>([]);
const listenerId = relationships.addLocalRowIdsListener('restaurantFood', props.restaurantId, () => {
  const foodIds = relationships.getLocalRowIds('restaurantFood', props.restaurantId);
  foodList.value = foodIds.map((id) => {
    const storeFood = store.getRow('food', id);

    return {
      name: storeFood.name ?? '',
      rating: storeFood.rating ?? 0,
      note: storeFood.note,
    };
  });
});

onUnmounted(() => {
  relationships.delListener(listenerId);
});
</script>

<template>
  <h2>Food</h2>
  <FoodItem v-for="food in foodList" :key="food.name" :food="food" />
</template>
