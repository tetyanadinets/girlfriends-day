
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
		// 	loop: true,
		// 	spaceBetween: 20,
		// 	navigation: {
		// 		nextEl: '.swiperProducts .arr-next',
		// 		prevEl: '.swiperProducts .arr-prev',
		// 	},
		// 	pagination: false
		// });

		// $('.swiperProducts').each(function (index) {
		// 		console.log('ok');
		// 	var mySwiper = new Swiper($(this)[0],{
		// 		slidesPerView:3,
		// 		loop: true,
		// 		spaceBetween: 20,
		// 		navigation: {
		// 			nextEl: '.swiperProducts .arr-next',
		// 			prevEl: '.swiperProducts .arr-prev',
		// 		},
		// 		pagination: false
		// 	});
		// });




	})();

	// sticky plugin
	// (function(){
	// 	$(".sticky").stick_in_parent({
	// 		offset_top: 130,
	// 	});
	// })();

}



module.exports = libsActivate();
