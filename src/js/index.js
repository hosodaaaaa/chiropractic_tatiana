const sliderInit = () => {
  new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    slidesPerView: 1,
    speed: 3000,
    autoplay: {
      delay: 3000,
      DisableOnInteraction: false,
    },
  })
}

window.addEventListener('DOMContentLoaded', sliderInit)