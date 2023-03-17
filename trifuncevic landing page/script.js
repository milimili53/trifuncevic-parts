const cards = document.querySelectorAll(".ad-card");
const loader = document.querySelector(".loader");
console.log(cards);

window.addEventListener("load", function () {
  loader.style.display = "none";
  cards.forEach((card) => {
    card.classList.add("animate-cards");
    card.style.display = "block";
  });
});
