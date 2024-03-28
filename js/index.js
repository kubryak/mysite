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
    const modalCloseBtn = document.querySelector(".modal__close-icon");
    const maskWrapper = document.querySelector(".plan__mask-wrapper");

    allHome.addEventListener("click", function (event) {
        if (event.target.classList.contains("home-area")) {
            const clickedArea = event.target;
            const isActive = clickedArea.classList.contains("home-area_active");

            if (isActive) {
                // Закрываем модальное окно при повторном нажатии на уже выделенный участок
                closeModal();
            } else {
                // Если есть уже выделенный участок и выделяем другой, то снимаем выделение с первого участка и выделяем второй
                const currentActive = document.querySelector(
                    ".home-area.home-area_active"
                );
                if (currentActive) {
                    closeModal();
                }
                clickedArea.classList.add("home-area_active");

                if (window.innerWidth > 991) {
                    const parentRect = parentBlock.getBoundingClientRect();
                    const elementRect = clickedArea.getBoundingClientRect();

                    const relativeX = elementRect.left - parentRect.left;
                    const relativeY = elementRect.top - parentRect.top;

                    if (
                        (relativeX < 250 && relativeY < 250) ||
                        relativeX < 250
                    ) {
                        modal.style.top = relativeY + "px";
                        modal.style.left = relativeX + 75 + "px";
                    } else if (relativeY < 250) {
                        modal.style.top = relativeY - 50 + "px";
                        modal.style.left = relativeX - 240 + "px";
                    } else {
                        modal.style.top = relativeY - 230 + "px";
                        modal.style.left = relativeX - 230 + "px";
                    }
                } else {
                    modal.classList.add("plan__modal_type_mobile");
                    maskWrapper.classList.add("plan__mask-wrapper_type_mobile");
                }
                modal.classList.remove("d-none");
            }
        }
    });

    // close modal and delete home-area active
    modalCloseBtn.addEventListener("click", function (event) {
        closeModal();
    });

    document.addEventListener("click", function (event) {
        // Проверяем, был ли клик сделан вне модального окна
        if (!modal.contains(event.target) && !allHome.contains(event.target)) {
            closeModal();
        }
    });

    // function for close modal
    function closeModal() {
        maskWrapper.classList.remove("plan__mask-wrapper_type_mobile");
        modal.classList.add("d-none");
        modal.classList.remove("plan__modal_type_mobile");

        const activeArea = document.querySelector(".home-area_active");
        if (activeArea) {
            activeArea.classList.remove("home-area_active");
        }
    }

    // delete map-helper overlay

    document
        .querySelector(".plan__map-helper")
        .addEventListener("click", function () {
            var element = this;
            element.style.opacity = "0";

            setTimeout(function () {
                element.style.display = "none";
            }, 500);
        });
});
