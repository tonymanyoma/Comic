
<script setup lang="ts">
  import Vue3StarRatings from "vue3-star-ratings";
  import { defineComponent, ref } from 'vue';
  import { useRatingStore } from "@/stores/ratingStore";
  
  
  const ratingStore = useRatingStore();
  
  // const rating = ref(0)
  var rating = ref(0)
  
  </script>
  
  <template>
    <Vue3StarRatings 
    :numberOfStars="5"
    :starSize="40"
    :step="1"
    v-model="ratingStore.rating"
    :clearable="true"
    @click="ratingStore.setRating(ratingStore.rating)"
    />
  </template>
  
  <style scoped>
  
  </style>