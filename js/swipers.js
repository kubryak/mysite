const backgroundSwiper = new Swiper('.swiper.background-swiper', {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    pagination: {
      el: ".main-swiper__pagination.swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button.swiper-button-next-main',
      prevEl: '.swiper-button.swiper-button-prev-main',
    },
  });

const mainSwiper = new Swiper('.swiper.main-swiper__swiper', {
    slidesPerView: 1,
    loop: true,

});

mainSwiper.controller.control = backgroundSwiper;

backgroundSwiper.controller.control = mainSwiper;


const improvementSwiper = new Swiper('.swiper.swiper__improvement', {
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button.swiper-button-next-improvement',
    prevEl: '.swiper-button.swiper-button-prev-improvement',
  },
});

const gallerySwiper = new Swiper ('.swiper.swiper__gallery', {
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
});

improvementSwiper.controller.control = gallerySwiper;

const housesThumbSwiper = new Swiper('.swiper.swiper__houses-thumb', {
  spaceBetween: 14,
  slidesPerView: 'auto',
  freeMode: true,
});

const housesPicSwiper = new Swiper('.swiper.swiper__houses-pic', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button.swiper-button-next-pic',
    prevEl: '.swiper-button.swiper-button-prev-pic',
  },
  thumbs: {
    swiper: housesThumbSwiper,
  },
});

const housesTextSwiper = new Swiper('.swiper.swiper__houses-desc', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button.swiper-button-next-text',
    prevEl: '.swiper-button.swiper-button-prev-text',
  },
});
