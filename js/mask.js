let element = document.getElementById("phone");
// let email = document.getElementById("email");

// email.addEventListener("input", function (e) {
//     if (
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//             e.target.value
//         )
//     ) {
//         console.log("Yes");
//     } else {
//         console.log("Nos");
//     }
// });
let maskOptions = {
    mask: "+{7}(000)000-00-00",
};
let mask = IMask(element, maskOptions);
export { element, maskOptions };
