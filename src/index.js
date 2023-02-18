import './scss/index.scss';

import Swiper, { Navigation, Pagination } from 'swiper';
import { CitiesMap } from './components/CitiesMap';

const imageMap = new CitiesMap();
imageMap.toggleCitiesVisibility();

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  autoplay: {
    delay: 2000,
  },
  
  loop: true,
});
