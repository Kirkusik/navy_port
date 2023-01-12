export default function createHomeIntroSlider(Swiper) {
    const homeIntroSlider = new Swiper(".intro__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,

        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
