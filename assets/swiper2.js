import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

var swiper = new Swiper('.swiper2', {
	slidesPerView: 1.65,
	initialSlide: 1,
	navigation: {
		nextEl: '.arrow-r',
		prevEl: '.arrow-l',
	},
});
