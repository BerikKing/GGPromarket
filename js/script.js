const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;
const size = sliderContainer.children[0].clientWidth;

nextBtn.addEventListener('click', () => {
  if (counter < sliderContainer.children.length - 1) {
    counter++;
    sliderContainer.style.transform = `translateX(-${size * counter}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    sliderContainer.style.transform = `translateX(-${size * counter}px)`;
  }
});
