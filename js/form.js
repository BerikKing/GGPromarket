let form = document.querySelector(".form");
let thanks = document.querySelector('.modal_thanks')

form.addEventListener("submit", async function (event) {
    event.preventDefault(); //refresh(перезгрузка алып тастайды)

    let formData = new FormData(form);

    let infoUser = Object.fromEntries(formData);
    await fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify(infoUser),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        if (res.status === 201) {
            localStorage.setItem("userinifo", JSON.stringify(infoUser));
            thanks.classList.add('show');
            console.log(thanks);
        }
    });
});
export { form, thanks };
