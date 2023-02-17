import './scss/index.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

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
