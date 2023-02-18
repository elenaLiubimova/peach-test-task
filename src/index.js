import './scss/index.scss';

import Swiper, { Navigation, Pagination } from 'swiper';
import { CitiesMap } from './components/CitiesMap';
import { CitiesPopup } from './components/CitiesPopup';

const fallingListButton = document.querySelector('.falling-list__button');
const hoveredCardButtons = document.querySelectorAll('.hovered-card__button');
const imageMap = new CitiesMap();
const citiesPopup = new CitiesPopup();

imageMap.toggleCitiesVisibility();

fallingListButton.addEventListener("click", () => {
  fallingListButton.classList.toggle('falling-list__button_active');
  citiesPopup.toggle();
  if (fallingListButton.classList.contains('falling-list__button_active')) {
    imageMap.decreaseOpacity();
  } else {
    imageMap.increaseOpacity();
  }
});

hoveredCardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.hovered-card').classList.toggle('hovered-card_active');
    button.classList.toggle('hovered-card__button_active');
  })
})

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
