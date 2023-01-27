export default function createRoomsSlider(Swiper) {
    try {
        const roomSlider = new Swiper(".rooms-slider__wrapper", {
            initialSlide: 1,
            loop: true,
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            watchSlidesProgress: true,
            speed: 1000,
        });
    } catch (e) {
        console.log(e);
    }
}
