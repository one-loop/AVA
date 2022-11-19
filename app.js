let navCollapse = document.querySelector("#navcollpase-icon");
let mobileMenu = document.querySelector(".mobile-menu");
let bottomLineIcon = document.querySelector(".line.bottom");
let topLineIcon = document.querySelector(".line.top");
let body = document.querySelector("body");
let community = document.querySelector(".link-community");

let categories = document.querySelector(".layout_desktopSidebar__SviRJ");
let categoriesButton = document.querySelector("#categories-mobile");

categoriesButton.addEventListener("click", function () {
  if (categories.style.display == "") {
    categories.style.display = "block";
    categories.style.transform = "translate(0, -500px)";
    console.log("clicked");
  } else {
    categories.style.display = "";
    categories.style.transform = "translate(0, 500px)";
  }
});

navCollapse.addEventListener("click", function () {
  if (mobileMenu.style.display == "") {
    mobileMenu.style.display = "block";
    topLineIcon.style.transform = "translateY(1px) rotate(45deg)";
    bottomLineIcon.style.transform = "translateY(0px) rotate(-45deg)";
    body.style.overflow = "hidden";
  } else {
    mobileMenu.style.display = "";
    topLineIcon.style.transform = "";
    bottomLineIcon.style.transform = "";
    body.style.overflow = "";
  }
});

community.addEventListener("click", function () {
  mobileMenu.style.display = "";
  topLineIcon.style.transform = "";
  bottomLineIcon.style.transform = "";
  body.style.overflow = "";
});
