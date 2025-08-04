const slider = document.querySelector(".product-slider");
const products = document.querySelectorAll(".product");
const hero = document.querySelector(".hero");

let current = 0;
const total = products.length;

function showSlide(index) {
  const offset = -index * 100;
  slider.style.transform = `translateX(${offset}vw)`;
  hero.style.backgroundImage = `url('${products[index].dataset.bg}')`;
}

showSlide(current);

setInterval(() => {
  current = (current + 1) % total;
  showSlide(current);
}, 3000);
