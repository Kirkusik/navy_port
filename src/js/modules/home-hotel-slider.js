export default function createHomeHotelSlider(Swiper) {
    const homeHotelSlider = new Swiper(".hotel__slider", {
        slidesPerView: 2,
        spaceBetween: 200,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 200,
            },
        },
    });
}