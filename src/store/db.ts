import Dexie, { type Table } from 'dexie';

export type Restaurant = {
  id?: number;
  name: string;
};

export type Food = {
  id?: number;
  name: string;
  rating: number;
  restaurantId: number;
};

export class DiliDexie extends Dexie {
  restaurants!: Table<Restaurant>;
  food!: Table<Food>;

  constructor() {
    super('dili');
    this.version(1).stores({
      restaurants: '++id, name',
      food: '++id, name, rating, restaurantId',
    });
  }
}

export const db = new DiliDexie();
