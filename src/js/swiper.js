import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function initSwipers() {
  new Swiper('.reviews-swiper', {
    modules: [Navigation],
    loop: true,
    slideClass: 'reviews-swiper-slide',
    wrapperClass: 'reviews-swiper-wrapper',
    direction: 'horizontal',
    navigation: {
      nextEl: '.reviews-nav .custom-next',
      prevEl: '.reviews-nav .custom-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      374: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  new Swiper('.gallery-swiper', {
    modules: [Navigation],
    loop: true,
    slideClass: 'gallery-swiper-slide',
    wrapperClass: 'gallery-swiper-wrapper',
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery-nav .custom-next',
      prevEl: '.gallery-nav .custom-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      374: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}


document.addEventListener('DOMContentLoaded', initSwipers);