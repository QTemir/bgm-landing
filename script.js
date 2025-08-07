// Инициализация свайперов
const serviceSwiper = new Swiper('.serviceSlider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: '.serviceSlider .swiper-pagination',
    clickable: true,
  },
});

const portfolioSwiper = new Swiper('.portfolioSlider', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.portfolioSlider .swiper-pagination',
    clickable: true,
  },
});

// Остановить другие аудиоплееры при запуске одного
const audioPlayers = document.querySelectorAll('audio');

audioPlayers.forEach(audio => {
  audio.addEventListener('play', () => {
    audioPlayers.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });
  });
});

