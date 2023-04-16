const button = document.querySelector(".hamburger-btn");
const navbar = document.querySelector(".navbar-nav");
const triangle = document.querySelector(".triangle");

console.log(triangle);
button.addEventListener("click", showMenu);

function showMenu() {
  triangle.classList.toggle("show");
  navbar.classList.toggle("show");
}
