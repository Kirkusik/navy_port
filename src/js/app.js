import { isWebp, headerFixed } from "./modules";
import createHomeHotelSlider from "./modules/home-hotel-slider";
import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    Lazy,
    EffectFade,
} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Lazy, EffectFade]);

import createHomeIntroSlider from "./modules/home-intro-slider";
import menuHaandler from "./modules/menu-handler";
import createRoomsSlider from "./modules/rooms-slider";
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp();
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================
document.addEventListener("DOMContentLoaded", function (evt) {
    createHomeHotelSlider(Swiper);

    createHomeIntroSlider(Swiper);

    createRoomsSlider(Swiper);

    menuHaandler();
});
