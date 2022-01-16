const portSilder = document.querySelector('.portfolio-section__items')

const portfolioSlider = new Swiper(portSilder, {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  on: {
    init: function () {

      const activeSlide = portSilder.querySelector('.swiper-slide-active');
      const nextActiveSlider = activeSlide.nextElementSibling;
      const nextNextActiveSlider = nextActiveSlider.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlider.classList.add('slider-visible');
      nextNextActiveSlider.classList.add('slider-visible');

    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },

});


portfolioSlider.on('slideChange', function () {
  const activeSlide = portSilder.querySelector('.swiper-slide-next');
  const nextActiveSlider = activeSlide.nextElementSibling;
  const nextNextActiveSlider = nextActiveSlider.nextElementSibling;


  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible')
  })

  activeSlide.classList.add('slider-visible');
  nextActiveSlider.classList.add('slider-visible');
  nextNextActiveSlider.classList.add('slider-visible');


});
