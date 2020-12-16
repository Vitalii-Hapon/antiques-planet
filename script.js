new Swiper(".main-slider__section", {
  navigation: {
    nextEl: ".main-slider__button-next",
    prevEl: ".main-slider__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  slideToClikeSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".main-slider__section",
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1500,
});

new Swiper(".section-new__slider", {
  navigation: {
    nextEl: ".section-new__slider__button-next",
    prevEl: ".section-new__slider__button-prev",
  },
  grabCursor: true,
  slideToClikeSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".section-new__slider",
  },
  loop: true,
  speed: 1000,
  spaceBetween: 20,
  slidesPerView: 3,
});

new Swiper(".section-recommended__slider", {
  navigation: {
    nextEl: ".section-recommended__slider__button-next",
    prevEl: ".section-recommended__slider__button-prev",
  },
  grabCursor: true,
  slideToClikeSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".section-recommended__slider",
  },
  loop: true,
  speed: 1000,
  spaceBetween: 20,
  slidesPerView: 3,
});

new Swiper(".section-sellers__slider", {
  navigation: {
    nextEl: ".section-sellers__slider__button-next",
    prevEl: ".section-sellers__slider__button-prev",
  },
  grabCursor: true,
  slideToClikeSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".section-sellers__slider",
  },
  loop: true,
  speed: 1000,
  spaceBetween: 20,
  slidesPerView: 4,
});
