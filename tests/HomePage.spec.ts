import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'



import HomePage from '../src/comics/pages/HomePage.vue';
import StarRating from '../src/comics/components/StarRating.vue';


describe('HomePage', () => {
  it('debe renderizar correctamente en el montaje inicial', async () => {

      vi.mock('../src/comics/components/StarRating.vue')

      const wrapper = mount(HomePage);

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('.home_page__title').text()).toBe('');
      expect(wrapper.find('.home_page__img_container--img').exists()).toBe(true);
  });
});




