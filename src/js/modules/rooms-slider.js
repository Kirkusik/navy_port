export default function createRoomsSlider(Swiper) {
    try {
        const roomSlider = new Swiper('.rooms-slider__wrapper', {
            initialSlide: 1,
            loop: true,
            // slidesPerView: 3,

            centeredSlides: true,
            watchSlidesProgress: true,
            speed: 500,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // when window width is >= 480px
                576: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            },
        });
    } catch (e) {
        console.log(e);
    }
}
