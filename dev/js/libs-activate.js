
function libsActivate() {
		
	// swiper slider
	(function(){
		var productSliderThumbs = new Swiper('.mainSlider', {
			slidesPerView:2,
			spaceBetween: 10,
			navigation: {
				nextEl: '.main-slider .arr-next',
				prevEl: '.main-slider .arr-prev',
			},
			pagination: {
				el: '.main-slider .swiper-pagination',
				type: 'bullets',
				clickable: 'true'
			}, 
		});

		
		// var productsSlider = new Swiper('.swiperProducts', {
		// 	slidesPerView:3,
		// 	// effect: 'fade',
		// 	loop: true,
		// 	spaceBetween: 30,
		// 	navigation: {
		// 		nextEl: '.swiperProducts .arr-next',
		// 		prevEl: '.swiperProducts .arr-prev',
		// 	},
		// 	pagination: false 
		// });
	})();

}



module.exports = libsActivate();