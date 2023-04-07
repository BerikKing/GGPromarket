// menu for mobile
$(document).ready(function () {
    $(".mobile-menu-toggle").click(function () {
        $(".mobile-menu").slideToggle();
        $(".burger-icon, .close-icon").toggleClass("animate");
    });
});

const sliderContainer = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;
const size = sliderContainer.children[0].clientWidth;

nextBtn.addEventListener("click", () => {
    if (counter < sliderContainer.children.length - 1) {
        counter++;
        sliderContainer.style.transform = `translateX(-${size}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        sliderContainer.style.transform = `translateX(-${size}px)`;
    }
});

let loader = document.querySelector(".loader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

// setTimeout(function () {
//     loader.style.display = 'none';
// }, 3000)

let hits = $(".hits");
let pro = $(".promotions");
let article = $(".article_wrapper");

pro.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
});
hits.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});
article.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

// $('.hits').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 3
// });

let modal = document.querySelector(".modal");
let modal_inner = document.querySelector(".modal_inner");
let img = document.querySelectorAll(".hit_cards_png");
let btn = document.querySelectorAll(".hit_cards_btn");
let btnClose = document.querySelector(".btn_close");
let modalImg = document.querySelector(".modal_img");
let city = document.querySelector(".city");
let cityName = document.querySelector(".city_names");



btn.forEach((item, index) => {
    item.addEventListener("click", function () {
        if (img[index]) {
            modal.classList.add("show");
            modalImg.src = img[1 + index].src;
        } else {
            return null;
        }
    });
});

btnClose.addEventListener("click", function (e) {
    modal.classList.remove("show");
});

window.addEventListener("click", function (e) {
    if (e.target === modal_inner) {
        modal.classList.remove("show");
    }
});

city.addEventListener("click", function () {
    document.querySelector(".city_names").classList.toggle("show");
});

// setTimeout(function () {
//   document.querySelector(".overlay").classList.add("show");
//   document.body.classList.add("no-scroll");
// }, 3000);
