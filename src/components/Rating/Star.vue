<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useElementHover } from '@vueuse/core';

export type RatingValue = 1 | 2 | 3 | 4 | 5;

const props = defineProps<{ value: RatingValue; hoveredValue: RatingValue | undefined }>();
const currentValue = defineModel<RatingValue | undefined>();
const id = `star${props.value}`;

const starElement = ref();
const isHovered = useElementHover(starElement);
defineExpose({
  isHovered,
});
</script>

<template>
  <input v-model="currentValue" :value="value" :id="id" type="radio" name="rating" class="visually-hidden" />
  <label :for="id">
    <span class="visually-hidden">{{ value }} star{{ value > 1 ? 's' : '' }}</span>
    <div :class="{ icon: true, hover: hoveredValue && value <= hoveredValue }" ref="starElement">
      <Icon v-if="currentValue === undefined" icon="iconoir:star-dashed" />
      <Icon
        :class="{ selected: true, hover: hoveredValue && value > hoveredValue }"
        v-else-if="currentValue >= value"
        icon="iconoir:star-solid"
      />
      <Icon v-else icon="iconoir:star" />
    </div>
  </label>
</template>

<style lang="css" scoped>
.icon {
  padding: var(--size-1);
  font-size: 1.2em;
}

.icon:hover,
.hover,
.selected {
  color: var(--color-primary);
}

.selected.hover {
  color: inherit;
}
</style>
