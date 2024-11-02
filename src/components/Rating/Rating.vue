<script setup lang="ts">
import { ref } from 'vue';
import Star, { type RatingValue } from './Star.vue';

const rating = ref<RatingValue | undefined>(undefined);
</script>

<template>
  <p>Rating</p>
  <div :class="$style.container">
    <Star v-model="rating" :value="1" />
    <Star v-model="rating" :value="2" />
    <Star v-model="rating" :value="3" />
    <Star v-model="rating" :value="4" />
    <Star v-model="rating" :value="5" />
  </div>

  <p>Value: {{ rating }}</p>
</template>

<style lang="css" module>
.container {
  display: flex;
}
</style>
