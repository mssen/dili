<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{ value: number }>();
console.log(props.value);
</script>

<template>
  <div class="container">
    <Icon :icon="props.value >= 1 ? 'iconoir:star-solid' : 'iconoir:star'" />
    <Icon :icon="props.value >= 2 ? 'iconoir:star-solid' : 'iconoir:star'" />
    <Icon :icon="props.value >= 3 ? 'iconoir:star-solid' : 'iconoir:star'" />
    <Icon :icon="props.value >= 4 ? 'iconoir:star-solid' : 'iconoir:star'" />
    <Icon :icon="props.value === 5 ? 'iconoir:star-solid' : 'iconoir:star'" />
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
