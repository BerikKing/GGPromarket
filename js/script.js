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
let cityNames = document.querySelector(".city_names");
let cityName = document.querySelectorAll(".city_name");
let cityNamesOpacity = document.querySelector(".city_names_opacity");
let cityNameGlobal = document.querySelector(".city_name_global");

btn.forEach((item, index) => {
    item.addEventListener("click", function () {
        if (img[index]) {
            modal.classList.add("show");
            modalImg.src = img[index].src;
            console.log(index);
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

// города выбрать
cityNameGlobal.addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelector(".city_names").classList.add("show");
    cityNamesOpacity.classList.toggle("show");
    cityNames.classList.add("show");
});
cityName.forEach((item, index) => {
    item.addEventListener("click", function () {
        cityNameGlobal.innerHTML = cityName[index].innerHTML;
        // console.log(cityName[index]);
        cityNames.classList.remove("show");
    });
});

window.addEventListener("click", function (e) {
    if (e.target === cityNamesOpacity) {
        document.querySelector(".city_names").classList.remove("show");
        cityNamesOpacity.classList.remove("show");
    }

    // console.log(e.target);
});

// setTimeout(function () {
//   document.querySelector(".overlay").classList.add("show");
//   document.body.classList.add("no-scroll");
// }, 3000);
let modalCTA = document.querySelector(".modal_cta");
let callText = document.querySelectorAll(".call");
let modalWrap = document.querySelector(".modal_cta_wrapper");
console.log(callText);

callText.forEach((item, index) => {
    item.addEventListener("click", function () {
        if (index || index === 0) {
            modalCTA.classList.add("show");
            console.log(index);
        } else {
            return null;
        }
    });
});

window.addEventListener("click", function (e) {
    if (e.target === modalWrap) {
        modalCTA.classList.remove("show");
    }
});

// маска телефона
let element = document.getElementById("phone");
let email = document.getElementById("email");

email.addEventListener("input", function (e) {
    if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e.target.value
        )
    ) {
        console.log("Yes");
    } else {
        console.log("Nos");
    }
});

let maskOptions = {
    mask: "+{7}(000)000-00-00",
};
let mask = IMask(element, maskOptions);
