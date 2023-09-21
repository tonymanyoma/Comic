<script lang="ts">
import vue3starRatings from "vue3-star-ratings";
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { vue3starRatings },
  setup() {
    const rating = ref(0); // Define una variable ref para la puntuación

    return {
      rating, 
    };
  },
});


</script>

<template>
  <vue3starRatings 
  v-bind:star-size="40"
  :max-rating="5"

  v-model="rating"
  />
{{ rating }}
</template>

<style scoped>

</style>