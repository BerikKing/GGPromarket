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
export { sliderContainer, prevBtn, nextBtn, counter, size, hits, pro, article };
