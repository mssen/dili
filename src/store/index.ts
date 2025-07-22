import { createRelationships, createStore } from 'tinybase/with-schemas';
import { createIndexedDbPersister } from 'tinybase/persisters/persister-indexed-db/with-schemas';

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

export const relationships = createRelationships(store);
relationships.setRelationshipDefinition('restaurantFood', 'food', 'restaurants', 'restaurantId');

export const persister = createIndexedDbPersister(store, 'dili');
