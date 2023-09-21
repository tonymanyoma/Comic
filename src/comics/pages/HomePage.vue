<script stup lang="ts">
import { defineComponent } from 'vue';
import type { Comic } from '../interfaces/comic';
import { getComic } from '../services/comicService';
import StarRating from '../components/StarRating.vue';

export default defineComponent({
  data() {
    return {
      comic: null as Comic | null,
    };
  },
  async mounted() {
    try {
      const id = Math.floor(Math.random() * 2830) + 1;
      this.comic = await getComic(id);
    }
    catch (error) {
      console.error(error);
    }
  },
  components: { StarRating }
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
