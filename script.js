// Первый свайпер (сервисы)
const serviceSwiper = new Swiper('.serviceSlider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: '.serviceSlider .swiper-pagination',
    clickable: true,
  },
});

// Портфолио свайпер
const portfolioSwiper = new Swiper('.portfolioSlider', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.portfolioSlider .swiper-pagination',
    clickable: true,
  },
});
