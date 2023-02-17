import './scss/index.scss';

import Swiper, { Navigation, Pagination } from 'swiper';
import { citiesMap } from './components/Map';

const imageMap = new citiesMap();
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
  },
});
