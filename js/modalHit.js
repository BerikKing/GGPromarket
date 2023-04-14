let modal_inner = document.querySelector(".modal_inner");
let img = document.querySelectorAll(".hit_cards_png");
let btn = document.querySelectorAll(".hit_cards_btn");
let btnClose = document.querySelector(".btn_close");
let modalImg = document.querySelector(".modal_img");


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

export {
    modal_inner,
    img,
    btn,
    btnClose,
    modalImg,
}