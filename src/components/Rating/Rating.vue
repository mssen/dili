<script setup lang="ts">
import { ref, useTemplateRef, watchEffect } from 'vue';
import Star, { type RatingValue } from './Star.vue';

const rating = ref<RatingValue | undefined>(undefined);

const hoveredValue = ref<RatingValue | undefined>(undefined);
const oneRef = useTemplateRef('one');
const twoRef = useTemplateRef('two');
const threeRef = useTemplateRef('three');
const fourRef = useTemplateRef('four');
const fiveRef = useTemplateRef('five');

watchEffect(() => {
  if (oneRef.value?.isHovered) {
    hoveredValue.value = 1;
  } else if (twoRef.value?.isHovered) {
    hoveredValue.value = 2;
  } else if (threeRef.value?.isHovered) {
    hoveredValue.value = 3;
  } else if (fourRef.value?.isHovered) {
    hoveredValue.value = 4;
  } else if (fiveRef.value?.isHovered) {
    hoveredValue.value = 5;
  } else {
    hoveredValue.value = undefined;
  }
});
</script>

<template>
  <p>Rating</p>
  <div :class="$style.container">
    <Star v-model="rating" ref="one" :value="1" :hovered-value="hoveredValue" />
    <Star v-model="rating" ref="two" :value="2" :hovered-value="hoveredValue" />
    <Star v-model="rating" ref="three" :value="3" :hovered-value="hoveredValue" />
    <Star v-model="rating" ref="four" :value="4" :hovered-value="hoveredValue" />
    <Star v-model="rating" ref="five" :value="5" :hovered-value="hoveredValue" />
  </div>

  <p>Value: {{ rating }}</p>
</template>

<style lang="css" module>
.container {
  display: flex;
}
</style>
