export default function createSingleEventSlider(Swiper) {
    try {
        const singleEventSlider = new Swiper('.event-location__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
        });
    } catch (e) {
        console.log(e);
    }
}
