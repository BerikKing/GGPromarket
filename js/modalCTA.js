
let modalCTA = document.querySelector(".modal_cta");
let callText = document.querySelectorAll(".call");
let modalWrap = document.querySelector(".modal_cta_wrapper");
// console.log(callText);

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
export{modalCTA, callText, modalWrap}
