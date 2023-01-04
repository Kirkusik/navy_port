export default function createHomeHotelSlider(Swiper) {
    const homeHotelSlider = new Swiper(".hotel__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 1,

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
