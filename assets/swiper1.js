import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

var swiper1 = new Swiper('.swiper1', {
	slidesPerView: 4.5,
	loop: true,
	spaceBetween: 1,
	initialSlide: 1,
	navigation: {
		nextEl: '.button-right',
		prevEl: '.button-left',
	},
});
