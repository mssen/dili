<script setup lang="ts">
import { ref } from 'vue';
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue';
import { Icon } from '@iconify/vue';

const v = ref('');
const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];
</script>

<template>
  <ComboboxRoot v-model="v" class="root">
    <ComboboxAnchor class="anchor">
      <ComboboxInput placeholder="Find restaurant..." aria-label="find restaurant" />
      <ComboboxTrigger>
        <Icon icon="radix-icons:chevron-down" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent class="content">
      <ComboboxViewport>
        <ComboboxEmpty />

        <ComboboxItem class="item" v-for="(option, index) in options" :key="index" :value="option">
          <span>
            {{ option }}
          </span>
        </ComboboxItem>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>

<style scoped>
.root {
  position: relative;
}

.anchor {
  display: inline-flex;
  align-items: center;
  justify-content: between;
  gap: var(--size-1);
}

.content {
  z-index: var(--layer-4);
  position: absolute;
  overflow: hidden;
  background-color: var(--surface-2);
  border-radius: var(--radius-2);
  margin-block-start: var(--size-3);
  padding: var(--size-2);
  box-shadow: var(--shadow-2);
}

.item {
  padding-inline: var(--size-2);
  border-radius: var(--radius-1);
}

.item[data-highlighted] {
  background: var(--color-primary);
}
</style>
