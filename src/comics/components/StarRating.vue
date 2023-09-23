
<script setup lang="ts">
  import { useRatingStore } from "@/stores/ratingStore";
  import Star from "./Star.vue";
  
  const ratingStore = useRatingStore();
    
</script>
  
  <template>

    <Star
      v-model="ratingStore.rating"
    />
  </template>
  
<style scoped>
  
</style>