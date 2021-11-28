const bodyStyles = window.getComputedStyle(document.body)
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },

});
