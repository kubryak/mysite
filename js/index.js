// fancybox initialization

Fancybox.defaults.closeButton = false;

Fancybox.bind("[data-fancybox]", {});

// Замена placeholder у input type=tel при наведении

const inputElements = document.querySelectorAll('input[type="tel"]');

inputElements.forEach(function (inputElement) {
    inputElement.addEventListener("mouseover", function () {
        // Изменяем значение placeholder при наведении курсора
        inputElement.placeholder = "+7 (___) ___-__-__";
    });

    inputElement.addEventListener("mouseout", function () {
        // Возвращаем исходное значение placeholder после ухода курсора
        inputElement.placeholder = "+7 (999) 999-99-99";
    });
});

// Selecting a home area to view information about it

document.addEventListener("DOMContentLoaded", function () {
    const allHome = document.querySelector(".all-home");
    const modal = document.querySelector(".plan__modal");
    const parentBlock = document.querySelector(".plan__map-wrapper");
    console.log(modal.offsetWidth);

    allHome.addEventListener("click", function (event) {
        if (event.target.classList.contains("home-area")) {
            const clickedArea = event.target;
            const isActive = clickedArea.classList.contains("home-area_active");

            if (isActive) {
                // Если элемент уже активен, удаляем класс "active"
                clickedArea.classList.remove("home-area_active");
                modal.classList.add("d-none");
            } else {
                // Если элемент не активен, убираем класс "active" у других элементов и добавляем его к текущему
                const currentActive = document.querySelector(
                    ".home-area.home-area_active"
                );
                if (currentActive) {
                    currentActive.classList.remove("home-area_active");
                    modal.classList.add("d-none");
                }
                clickedArea.classList.add("home-area_active");

                const parentRect = parentBlock.getBoundingClientRect();
                const elementRect = clickedArea.getBoundingClientRect();

                const relativeX = elementRect.left - parentRect.left;
                const relativeY = elementRect.top - parentRect.top;

                modal.style.top = relativeY - 230 + "px";
                modal.style.left = relativeX - 260 + "px";

                modal.classList.remove("d-none");
            }
        }
    });
});
