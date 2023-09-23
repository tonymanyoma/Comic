
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    props: {
      maxStars: {
        type: Number,
        default: 5,
      },
      modelValue: {
        type: Number,
        default: 0,
      },
    },
    setup(props, { emit }) {
      const hoverValue = ref(0);
  
      const setRating = (rating: number) => {
        emit('update:modelValue', rating);
      };
  
      const hoverRating = (rating: number) => {
        hoverValue.value = rating;
      };
  
      const resetRating = () => {
        hoverValue.value = 0;
      };
  
      return {
        hoverValue,
        setRating,
        hoverRating,
        resetRating,
      };
    },
  });
  </script>


<template>
    <div class="star_rating">
      <div
        v-for="star in maxStars"
        :key="star"
        @click="setRating(star)"
        @mouseover="hoverRating(star)"
        @mouseout="resetRating()"
      >
        <span
          :class="{ 'star_rating__filled': star <= modelValue, 'star_rating__hovered': star <= hoverValue }"
          class="star_rating__star"
        >
          ★
        </span>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  
  </style>