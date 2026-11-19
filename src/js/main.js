const swiper = new Swiper(".swiper", {
  loop: false,
  speed: 700,

  autoplay:false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#heroNext",
    prevEl: "#heroPrev",
  },
});
