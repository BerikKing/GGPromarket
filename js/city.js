let city = document.querySelector(".city");
let cityNames = document.querySelector(".city_names");
let cityName = document.querySelectorAll(".city_name");
let cityNamesOpacity = document.querySelector(".city_names_opacity");
let cityNameGlobal = document.querySelector(".city_name_global");

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
export { city, cityNames, cityName, cityNamesOpacity, cityNameGlobal };
