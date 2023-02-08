import { isWebp, headerFixed } from './modules';
import createHomeHotelSlider from './modules/home-hotel-slider';
import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    Lazy,
    EffectFade,
} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Lazy, EffectFade]);

import createHomeIntroSlider from './modules/home-intro-slider';
import menuHaandler from './modules/menu-handler';
import createRoomsSlider from './modules/rooms-slider';
import createSingleEventSlider from './modules/single-event-slider';
import 'fslightbox';

/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp();
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================
document.addEventListener('DOMContentLoaded', function (evt) {
    menuHaandler();

    createHomeHotelSlider(Swiper);

    createHomeIntroSlider(Swiper);

    createRoomsSlider(Swiper);

    createSingleEventSlider(Swiper);
});
