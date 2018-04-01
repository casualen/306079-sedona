var link = document.querySelector(".search-top");
var popup = document.querySelector(".search-hotel-form");

popup.classList.add("search-hide");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
     if (popup.classList.contains("search-hide")) {
     popup.classList.remove("search-hide");
     } 
    else {
        popup.classList.add("search-hide");
    }
});
