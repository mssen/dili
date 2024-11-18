<script setup lang="ts">
import { ref } from 'vue';
import { store } from '@/store';
import router from '@/router';

const name = ref('');
const onSubmit = () => {
  const id = store.addRow('restaurants', { name: name.value });
  if (typeof id === 'string') {
    router.push(`/restaurant/${id}`);
  } else {
    // TODO: better error handling
    console.error('Invalid row!');
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <h1>Create Restaurant</h1>
    <label for="restaurant-name">
      Name
      <input
        required
        autocomplete="off"
        class="input"
        v-model="name"
        id="restaurant-name"
        name="restaurant-name"
        type="text"
      />
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
