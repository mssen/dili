import { createStore } from 'tinybase/with-schemas';

export const store = createStore().setTablesSchema({
  restaurants: {
    name: { type: 'string' },
  },
  food: {
    name: { type: 'string' },
    rating: { type: 'number' },
    note: { type: 'string', default: '' },
    restaurantId: { type: 'string' },
  },
});
