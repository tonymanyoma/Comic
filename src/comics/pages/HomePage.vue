<script stup lang="ts">
import { defineComponent, computed, onMounted , ref} from 'vue';
import type { Comic } from '../interfaces/comic';
import { getComic } from '../services/comicService';
import StarRating from '../components/StarRating.vue';
import { useRatingStore } from '../../stores/ratingStore';

export default defineComponent({
  components: {
    StarRating
  },
  setup() {
    const ratingStore = useRatingStore();

    // Propiedad computada para obtener el rating actual
    const currentRating = computed(() => ratingStore.rating);

    const comic = ref<Comic | null>(null);
  
    onMounted(async () => {
      try {
        const id = Math.floor(Math.random() * 2830) + 1;
        comic.value = await getComic(id);
      } catch (error) {
        console.error(error);
      }
    });


    return {
      currentRating,
      comic
    };
  },
});





</script>

<template>
  <div class="home_page">
    <h1 class="home_page__title">{{ comic?.title }}</h1>
    <div class="home_page__img_container">
      <img :src="comic?.img" class="home_page__img_container--img"/>
    </div>
  
    <div class="home_page__rating">
      <StarRating />
    </div>

    <div class="home_page__current_rating">
      <h3>{{ currentRating }}</h3>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 80%;
}

.title {
  text-align: center;
}

.centered-container {
  display: flex;
  justify-content: center;
}
</style>
