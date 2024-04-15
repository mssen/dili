<script setup lang="ts">
import { ref } from 'vue';
import { db } from '@/store/db';
import router from '@/router';

const name = ref('');
const onSubmit = async () => {
  const id = await db.restaurants.add({ name: name.value });
  router.push(`/restaurant/${id}`);
};
</script>

<template>
  <form @submit.prevent="onSubmit" :class="$style.form">
    <h1>Create Restaurant</h1>
    <label for="restaurant-name">
      Name
      <input required autocomplete="off" :class="$style.input" :value="name" id="restaurant-name" type="text" />
    </label>
    <button type="submit">Create</button>
  </form>
</template>

<style module>
.form {
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
}

.input {
  margin-inline-start: var(--size-1);
}
</style>
