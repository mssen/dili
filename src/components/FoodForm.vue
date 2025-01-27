<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';
import { store } from '@/store';
import { Rating, type RatingValue } from './Rating';

const props = defineProps<{ restaurantId: string }>();

const isDialogOpen = ref(false);

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

  isDialogOpen.value = false;
};
</script>

<template>
  <DialogRoot v-model:open="isDialogOpen">
    <DialogTrigger><Icon icon="iconoir:plus" /> Create Food</DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="overlay" />
      <DialogContent class="content">
        <DialogTitle>Create Food</DialogTitle>

        <form @submit.prevent="onSubmit" class="form">
          <label for="food-name">
            Name
            <input
              required
              autocomplete="off"
              class="input"
              v-model="name"
              id="food-name"
              name="food-name"
              type="text"
            />
          </label>

          <Rating v-model="rating" />

          <label for="food-note">
            Note
            <textarea autocomplete="off" class="input" v-model="note" id="food-note" name="food-note" />
          </label>
          <div class="actions">
            <DialogClose as-child>
              <button>Cancel</button>
            </DialogClose>
            <button type="submit">Create</button>
          </div>
        </form>
        <DialogClose class="close icon-button" aria-label="Close">
          <Icon aria-hidden="true" icon="iconoir:xmark" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
  margin-top: var(--size-4);
}

.actions {
  display: flex;
  justify-content: end;
  gap: var(--size-3);
  margin-top: var(--size-4);
}

.input {
  margin-inline-start: var(--size-1);
}

.overlay {
  background-color: rgb(0 0 0 / 30%);
  position: fixed;
  inset: 0;
}

.content {
  background: var(--surface-2);
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  box-shadow: var(--shadow-4);
  padding: var(--size-7);
  border-radius: var(--radius-3);
}

.close {
  position: absolute;
  top: var(--size-4);
  right: var(--size-4);
}
</style>
