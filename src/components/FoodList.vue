<script setup lang="ts">
import { relationships, store } from '@/store';
import { onMounted, onUnmounted, ref } from 'vue';
import FoodItem, { type Food } from './FoodItem.vue';

const props = defineProps<{ restaurantId: string }>();
const foodList = ref<Food[]>([]);

const loadFood = () => {
  const foodIds = relationships.getLocalRowIds('restaurantFood', props.restaurantId);
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

const listenerId = relationships.addLocalRowIdsListener('restaurantFood', props.restaurantId, () => {
  loadFood();
});

onMounted(() => {
  loadFood();
});

onUnmounted(() => {
  relationships.delListener(listenerId);
});
</script>

<template>
  <h2>Food</h2>
  <FoodItem v-for="food in foodList" :key="food.name" :food="food" />
</template>
