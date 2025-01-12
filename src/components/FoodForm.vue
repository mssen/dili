<script setup lang="ts">
import { ref } from 'vue';
import { store } from '@/store';
import { Rating, type RatingValue } from './Rating';

const props = defineProps<{ restaurantId: string }>();

const name = ref('');
const rating = ref<RatingValue | undefined>(undefined);
const note = ref('');

const onSubmit = () => {
  const id = store.addRow('food', {
    name: name.value,
    rating: rating.value,
    note: note.value,
    restaurantId: props.restaurantId,
  });
  if (typeof id === 'string') {
    name.value = '';
    rating.value = undefined;
    note.value = '';
  } else {
    // TODO: better error handling
    console.error('Invalid row!');
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <h2>Create Food</h2>
    <label for="food-name">
      Name
      <input required autocomplete="off" class="input" v-model="name" id="food-name" name="food-name" type="text" />
    </label>

    <Rating v-model="rating" />

    <label for="food-note">
      Note
      <textarea autocomplete="off" class="input" v-model="note" id="food-note" name="food-note" />
    </label>
    <button type="submit">Create</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
}

.input {
  margin-inline-start: var(--size-1);
}
</style>
