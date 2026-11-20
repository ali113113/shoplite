const swiperHero = new Swiper(".swiperHero", {
  loop: false,
  speed: 700,

  autoplay: false,



  navigation: {
    nextEl: "#heroNext",
    prevEl: "#heroPrev",
  },
});
const swiperBestSellingItems = new Swiper(".swiperBestSellingItems", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 700,
  navigation: {
    nextEl: "#bestSellingItemsNext",
    prevEl: "#bestSellingItemsPrev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

const customersReviews = new Swiper(".customersReviews", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 700,
  navigation: {
    nextEl: "#customersReviewsNext",
    prevEl: "#customersReviewsPrev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});