import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

var swiper = new Swiper('.swiper', {
	slidesPerView: 2.6,
	centeredSlides: true,
	loop: true,
	initialSlide: 1,
	spaceBetween: 40,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
