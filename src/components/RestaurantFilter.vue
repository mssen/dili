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
      <!-- FIXME: Focus is bad on this -->
      <ComboboxInput placeholder="Find restaurant..." aria-label="find restaurant" class="unset" />
      <ComboboxTrigger class="unset">
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
.unset {
  all: unset;
}

.root {
  position: relative;
}

.anchor {
  display: inline-flex;
  align-items: center;
  justify-content: between;
  gap: var(--size-1);
  border-radius: var(--radius-2);
  border: var(--border-size-2) solid var(--text-2);
  background: var(--surface-1);
  padding: var(--size-2);
}

.anchor:hover {
  background: var(--surface-2);
}

.content {
  z-index: var(--layer-4);
  width: 100%;
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
  padding-block: var(--size-2);
  border-radius: var(--radius-2);
}

.item[data-highlighted] {
  background: var(--color-primary);
}
</style>
