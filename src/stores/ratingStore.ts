import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRatingStore = defineStore({
  id: 'rating',
  state: () => ({
    rating:  ref(0),
  }),
  actions: {
    setRating(newRating: number) {
        console.log('setRating', newRating)
      this.rating = newRating;
    },
  },
});