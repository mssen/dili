<script setup lang="ts">
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

export type RatingValue = 1 | 2 | 3 | 4 | 5;

const props = defineProps<{ value: RatingValue }>();
const currentValue = defineModel<RatingValue | undefined>();
const id = `star${props.value}`;
</script>

<template>
  <input v-model="currentValue" :value="value" :id="id" type="radio" name="rating" class="visually-hidden" />
  <label :for="id">
    <span class="visually-hidden">{{ value }} star{{ value > 1 ? 's' : '' }}</span>
    <div :class="$style.icon">
      <Icon v-if="currentValue === undefined" icon="iconoir:star-dashed" />
      <Icon v-else-if="currentValue >= value" icon="iconoir:star-solid" />
      <Icon v-else icon="iconoir:star" />
    </div>
  </label>
</template>

<style lang="css" module>
.icon {
  padding: var(--size-1);
  font-size: 1.2em;
}
</style>
