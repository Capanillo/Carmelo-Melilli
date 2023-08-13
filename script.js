const menu = document.querySelector(".hamburger-menu");
const sideMenu = document.querySelector(".side-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  sideMenu.classList.toggle("open");
});
