
module.exports = class Common {
	constructor() {

	}

	init() {
		this.scrollWindow();
		this.openContent();
		this.scrollLink();
		// this.	scrollContent();
		this.goTop();
		this.checkboxChecked();
		this.switchTabs();
		this.constructorGirl();
		// this.scrollMedia();
		this.showInputs();
		this.sendInputValue();
	}


	scrollWindow(){
		$(window).scroll(function(){
			if($(window).scrollTop() > 150) {
				$('body').addClass('scroll');
				$('.go-top').addClass('go-top_active');
			} else {
				$('body').removeClass('scroll')
				$('.go-top').removeClass('go-top_active');
			}
		})
	}

	goTop(){
		var btnTop = $('.go-top');
		btnTop.on('click', function(){
			$('html, body').animate({scrollTop:0}, '300');
		});
	}

	scrollContent(){
		// var scrollContent = $(window);
		// var scrollPos = 0;


		// scrollContent.scroll(function() {

		// 	// var scroll_h = $(this).scrollTop();
		// 	if($(window).scrollTop() > 30) {
		// 		$('.header').addClass('fixed');
		// 	} else {
		// 		$('.header').removeClass('fixed');
		// 	}
		// });


			// if($(window).scrollTop() > 100 && $('body').height() > $(window).innerHeight() + 500) {
			// 	$('.header').addClass('fixed');
			// } else {
			// 	$('.header').removeClass('fixed fixed_hide');
			// }

			// if (scroll_h > scrollPos && $(window).scrollTop() > 100) {
			// 	$('.header').addClass('fixed_hide');

			// }	else {
			// 	$('.header').removeClass('fixed_hide');
			// }

			// scrollPos = scroll_h;

			// setTimeout(function(){
			// 	if(scrollPos === scroll_h && $(window).scrollTop() > 100) {
			// 		$('.header').addClass('fixed_hide')
			// 	}
			// }, 3000)

	}

	showInputs() {
		var clicks = 5;
		var row = $( ".share-form__row_append" ).html();

		$('.share-form__show-btn').on('click', function(){

			--clicks;

			if( clicks >=0 ) {

				$(this).find('span').html( '(' + clicks + ')' );

				$('.share-form__hidden').append(row);
				
			}

		});
	}

	openContent() {
		var openBtnDesc = $('[data-projects-desc]');
		var openBtnMob = $('[data-projects-mob]');

		openBtnDesc.on('click', function(){
			let btn = $(this);
			$('.progects').toggleClass('open');
			$(this).toggleClass('active');

		})

		// if($(window).width() < 1100) {
			openBtnMob.on('click', function(){
				let btn = $(this);
				console.log('ok')
				$(this).parent().find('ul').slideToggle();
				$(this).toggleClass('active');
			})
		// }
	}

	scrollLink() {
		var scrollLink = $('.scroll');
		scrollLink.click(function(e) {
			e.preventDefault();

			$('body,html').animate({
				scrollTop: this.hash && ($(this.hash).offset().top - jQuery('.header ul').height())
			}, 1000 );
		});
		
	}

	checkboxChecked() {
		var checkbox = $('.popup-code__input-check');
		// var checkboxShare = $('#share-checkbox');


		checkbox.on('click', function(){
			if ($('#code-checkbox:checked').val() !== undefined) {
				checkbox.attr('checked', true);
				checkbox.attr('disabled', true);
			}

		});

		// checkboxShare.on('click', function(){
		// 	console.log('ok');
		// 	if ($('#share-checkbox:checked').val() !== undefined) {
		// 			checkboxShare.attr('checked', true);
		// 			checkboxShare.attr('disabled', true);
		// 		}
		// });
	}

	switchTabs(){
		var switchBtn = $('.btns__item');
		// var switchContent = $('.constructor-page__products');

		switchBtn.on('click', function(){
			var dataSwitchbtn = $(this).data('switchbtn');
			var switchCurrent = $('.' + dataSwitchbtn);
			var switchContent = $(this).closest('.sector__tab-outer').find('.constructor-page__products');
			// var slider= $(this).closest('.sector__tab-outer').find('.constructor-page__products .swiperProducts');

			// console.log(slider)

			switchContent.removeClass('current');
			switchCurrent.addClass('current');
			
			switchBtn.removeClass('current-btn');
			$(this).addClass('current-btn active');
			$(this).siblings().removeClass('active');


			// var mySwiper = new Swiper($(slider)[0],{
			// 	slidesPerView:3,
			// 	loop: true,
			// 	spaceBetween: 20,
			// 	navigation: {
			// 		nextEl: '.swiperProducts .arr-next',
			// 		prevEl: '.swiperProducts .arr-prev',
			// 	},
			// 	pagination: false
			// });

		})

	}


	scrollAnchors(btn, offset, callback) {
			var hash = window.location.hash;
			var anhor = hash.replace(/#/, ''); 
			var reqElem = $('[data-anchor= "'+ anhor +'"]');
			var anchorItem = $('.anchorItem');
			var topElem;

			if(reqElem.length) {
				topElem = reqElem.offset().top - offset;

				$('html, body').scrollTop(topElem);  
			}

			if (!btn.length) return;

			$(btn).on('click', function(e){
				e.preventDefault();

				var btn = $(this);

				if(this.tagName == 'A') {
					var hash = btn.attr('href'); 
					var anhor = hash.replace(/#/, ''); 
				} else {
					var anhor = btn.attr('data-link'); 
				};

				if(!reqElem.length) return;
				
				reqElem = $('[data-anchor= "'+ anhor +'"]');
				topElem = reqElem.offset().top - offset;

				$('html, body').stop().animate({'scrollTop':topElem},1000, 'easeInOutCubic', function(){
					if (callback) {
						callback();
					}
				});
				window.location.hash = anhor;

			});


			$(window).scroll(function(){
				$('.header__nav a').removeClass('active');
				anchorItem.each(function(i, el){
					var el = $(el);
					var scrollTop = $(window).scrollTop();
					var elementsHeight = el.height();
					var topElements = el.offset().top - (offset+5);
					if(scrollTop > topElements && scrollTop < (topElements + elementsHeight)) {
						var reqElemData = el.data('anchor');
						$('a[href$="'+ reqElemData +'"]').addClass('active');
					}
				});
				

			});
	}

	constructorGirl() {
		var switchBtn = $('[data-hair]');
		
		// CHANDGE HEAD

		switchBtn.on('click', function(){
			var dataSwitchbtn = $(this).data('hair');
			var switchCurrent = $('.' + dataSwitchbtn);
			var swichContentHair = $('.girl-head__item');

			swichContentHair.removeClass('show');
			switchCurrent.addClass('show');
		});

		// HAIR COLOR

		$('[data-color]').on('click', function(){
			$('.girl-head').removeClass('girl-head_red girl-head_brown girl-head_black girl-head_blond')
			$('.girl-head').addClass('girl-head_' + $(this).data('color'));

		});

		// LIPS COLOR

		$('[data-lips]').on('click', function(){
			$('.girl-head').removeClass('girl-head_glitter girl-head_glanetc girl-head_mat')
			$('.girl-head').addClass('girl-head_' + $(this).data('lips'));

		});

		// BODY

		$('[data-body]').on('click', function(){
			$('.girl-body').removeClass('girl-body_body-0 girl-body_body-1 girl-body_body-2 girl-body_body-3 girl-body_body-4');
			$('.girl-body').addClass('girl-body_body-' + $(this).data('body'));
		});

		// ACTIVE ITEM

		$('.products__item').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});

		// CLEAR

		$('.bottom-btns__btn-clear').on('click', function(){
				$('.products__item').removeClass('active');
				$('.btns__item').removeClass('active');
				$('.girl-body').removeClass('girl-body_body-0 girl-body_body-1 girl-body_body-2 girl-body_body-3 girl-body_body-4');
				$('.girl-head').removeClass('girl-head_glitter girl-head_glanetc girl-head_mat girl-head_red girl-head_brown girl-head_black girl-head_blond');
				$('.girl-head__item').removeClass('show');
				$('.girl-head__head-default').addClass('show');
		});

	}

	sendInputValue() {
		$('.products__item').on('click', function(){
			var input = $(this).closest('.sector__content').find('input');
			var prodValue = $(this).data('prod');
			var btn = $(this).closest('.sector__tab-outer').find('.btns__item.current-btn')
			var btnValue = btn.data('hair');

			console.log(prodValue, btnValue);

			input.val( btnValue + " , " + prodValue);
		});
	}

	scrollMedia() {
		var content = $('.finished-look-page__inner');
		if(!content.length) return;

		var top = $(window).scrollTop();
		var header_h = $('.header').height();
		var media_h = $('.finished-look-page__col-l').height();
		var content_h = content.height();
		var offset_c = content.offset().top;

		var top_c = offset_c - header_h;
		var content_full = offset_c + content_h;
		var top_unfix = content_full - media_h - header_h;


			// var windowHeight = $(window).innerHeight();

			// $(window).scroll(function(){
			// var contentParentHeight = $('.finished-look-page__inner').innerHeight();

			// 	if($(window).scrollTop() > 2000)  {

			// 			$('.finished-look-page__col-l').addClass('finished-look-page__col-l_pos-a')
			// 		}
				
			// });


		if (window.matchMedia('(max-width: 1100px)').matches) {
		$('.finished-look-page__col-l').css({
		'position' : 'static',
		// 'top': offset_c - top + 'px'
		});
		}

		if ($(window).width() > 1101) {
			if (top < top_c) {
				$('.finished-look-page__col-l').css({
					'position' : 'fixed',
					'top': offset_c - top + 'px'
				});
			}
			else if (top > top_unfix) {
				$('.finished-look-page__col-l').css({
					'position' : 'fixed',
					'top': top_unfix + header_h - top + 'px'
				});
			}
			else {
				$('.finished-look-page__col-l').css({
					'position' : 'fixed',
					'top': header_h + 'px'
				});
			}


		}
	}

}