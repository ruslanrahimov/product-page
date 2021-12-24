/* Mobile Menu Button */

let openBtn = document.querySelector(".header__burger-menu");
let closeBtn = document.querySelector(".header__burger-menu--opened");

let navMenu = document.querySelector(".header__menu");

function overlay() {
  if ( navMenu.classList.contains("open__menu")) {
    document.querySelector(".overlay").style.visibility = "visible";
  } else {
    document.querySelector(".overlay").style.visibility = "hidden";
  }
}


openBtn.addEventListener("click", () => {
  navMenu.classList.add("open__menu");
  overlay();
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("open__menu");
  overlay();
});
