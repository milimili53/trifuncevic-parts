const burger = document.querySelector(".burger");
const resMenu = document.querySelector(".nav-links-res");
const closeBtn = document.querySelector(".close-btn");

burger.addEventListener("click", function () {
  resMenu.classList.remove("none");
});

closeBtn.addEventListener("click", function () {
  resMenu.classList.add("none");
});
