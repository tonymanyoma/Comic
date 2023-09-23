import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRatingStore = defineStore({
  id: 'rating',
  state: () => ({
    rating: 0,
  }),
  actions: {
    setRating(newRating: number) {
      this.rating = newRating;
    },
  },
});