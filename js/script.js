// Проверка скелета

window.addEventListener("load", () => {

    let skelet = document.querySelector('.skeleton')

    document.body.style.overflow = "visible";

    setTimeout(function () {
        $(skelet).addClass('hide');
    }, 1000); // Задержка на 1000 для демонстрации загрузки
});

// Карусель

$('.post__images').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ["", ""],
    dots: true,
})

// Переназначение на кастомные кнопки - навигация карусели

let owl = $(".post__images");
owl.owlCarousel();
$(".nav__next").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".nav__prev").click(function () {
    owl.trigger("prev.owl.carousel");
});