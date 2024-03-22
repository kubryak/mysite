// fancybox initialization

Fancybox.defaults.closeButton = false;

Fancybox.bind("[data-fancybox]", {

});

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
