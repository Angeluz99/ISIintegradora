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

if (products.length > 0) {
  showSlide(current);

  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 3000);
}

// Email copy functionality
document.addEventListener("DOMContentLoaded", function () {
  const copyIcon = document.querySelector('.copy-icon');
  const copiedMsg = document.querySelector('.copied-msg');
  const email = "ventas@isiempresa.com";

  if (!copyIcon || !copiedMsg) return;

  copyIcon.addEventListener('click', function (e) {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      copiedMsg.style.display = 'inline';
      copyIcon.style.display = 'none';
      setTimeout(() => {
        copiedMsg.style.display = 'none';
        copyIcon.style.display = 'inline';
      }, 1800);
    });
  });
});