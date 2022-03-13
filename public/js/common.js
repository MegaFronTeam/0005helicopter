"use strict";

// const $ = jQuery;

function eventHandler() { 



	const swiper4 = new Swiper('.headerBlock__slider--js', { 
		slidesPerView: 'auto',
		freeMode: true,
		spaceBetween: 32,
	});
	// modal window

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }