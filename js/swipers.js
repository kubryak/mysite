const backgroundSwiper = new Swiper(".swiper.background-swiper", {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    pagination: {
        el: ".main-swiper__pagination.swiper-pagination",
        clickable: true,
      },

    navigation: {
        nextEl: ".swiper-button.swiper-button-next-main",
        prevEl: ".swiper-button.swiper-button-prev-main",
    },
});
console.log(backgroundSwiper)

const mainSwiper = new Swiper(".swiper.main-swiper__swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
});

mainSwiper.controller.control = backgroundSwiper;

backgroundSwiper.controller.control = mainSwiper;

const improvementSwiper = new Swiper(".swiper.swiper__improvement", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button.swiper-button-next-improvement",
        prevEl: ".swiper-button.swiper-button-prev-improvement",
    },
});

const gallerySwiper = new Swiper(".swiper.swiper__gallery", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
});

improvementSwiper.controller.control = gallerySwiper;

document.addEventListener("DOMContentLoaded", function () {
    let housesPicSwiper; // Переменная для хранения housesPicSwiper
    let housesThumbSwiper;

    // Инициализируем housesSwiper
    const housesSwiper = new Swiper(".swiper.swiper__houses", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button.swiper-button-next-text",
            prevEl: ".swiper-button.swiper-button-prev-text",
        },
        on: {
            init: function () {
                // При инициализации housesSwiper получаем активный слайд и инициализируем на нем housesPicSwiper
                const activeSlide = this.slides[this.activeIndex];
                initializeNestedSwiper(activeSlide);
            },
            slideChange: function () {
                // При изменении слайда получаем новый активный слайд и инициализируем на нем housesPicSwiper
                const activeSlide = this.slides[this.activeIndex];
                initializeNestedSwiper(activeSlide);
            },
        },
    });

    // Функция для инициализации или деинициализации вложенного Swiper на активном слайде
    function initializeNestedSwiper(activeSlide) {
        // Получаем контейнер вложенного Swiper на активном слайде
        const nestedPicSwiperContainer = activeSlide.querySelector(
            ".swiper.swiper__houses-pic"
        );
        const nestedThumbSwiperContainer = activeSlide.querySelector(
            ".swiper.swiper__houses-thumb"
        );

        // Если housesPicSwiper был инициализирован на предыдущем активном слайде, деинициализируем его
        if (housesPicSwiper && housesPicSwiper.initialized) {
            housesPicSwiper.destroy();
        }

        if (housesThumbSwiper && housesThumbSwiper.initialized) {
            housesThumbSwiper.destroy();
        }

        // Если вложенный Swiper уже был инициализирован на текущем активном слайде, выходим
        if (
            nestedPicSwiperContainer.swiper &&
            nestedThumbSwiperContainer.swiper
        )
            return;

        // Инициализируем вложенный Swiper только на активном слайде
        housesThumbSwiper = new Swiper(nestedThumbSwiperContainer, {
            spaceBetween: 8,
            slidesPerView: "auto",
            nested: true,
            breakpoints: {
                991: {
                    spaceBetween: 14,
                },
            },
        });

        housesPicSwiper = new Swiper(nestedPicSwiperContainer, {
            slidesPerView: 1,
            spaceBetween: 20,
            nested: true,
            allowTouchMove: true,
            navigation: {
                nextEl: ".swiper-button.swiper-button-next-pic",
                prevEl: ".swiper-button.swiper-button-prev-pic",
            },
            thumbs: {
                swiper: housesThumbSwiper,
            },
        });
    }
});
