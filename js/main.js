$(document).ready (function(){
	
	
	$('.slider').slick({
		
		prevArrow: '.arrow-prev',
		nextArrow: '.arrow-next',
		dots:true,
		arrows: true,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 565,
			  settings: {
				centerMode: false,
				centerPadding: '0px',
				slidesToShow: 1, 
			  }
			}
		  ]		
		
	});
	
	$('.service-active').slick({
		
		prevArrow: '.arrowPrev',
		nextArrow: '.arrowNext',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		dots:true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerMode: false,
				centerPadding: '0px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 565,
			  settings: {
				arrows: true,
				centerMode: false,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 349,
			  settings: {
				arrows: true,
				centerMode: false,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			}
		  ]
		
	});
	
	/* Magnific popup */
	
	$('.popup').magnificPopup({
		type: 'iframe'
	});
	
	
	$('.portfolio-active').slick({
		
		prevArrow: '.right-arrow',
		nextArrow: '.left-arrow',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots:false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 565,
			  settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '0',
				slidesToShow: 1
			  }
			}
		  ]
		
	});

	$('.consultant-active').slick({
		
		prevArrow: '.r-arrow',
		nextArrow: '.l-arrow',
		autoplay: true,		
		
	});
	
	
	$('.brand-active').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 565,
			  settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '0',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 349,
			  settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '0',
				slidesToShow: 2
			  }
			}
		  ]
		
	});
	
	/* Nice select plugin activation */
	
	 $('select').niceSelect();
	 
	 /* faq-area js */
	 
	 $('.question-1 span').click(function(){
		 $('.icon-1').toggleClass('fa-plus');
		 $('.answer-1').toggle(300);
		 $('.question-answer-1').toggleClass('toggle-css');
		 $('.question-1').toggleClass('mb-20');
	 })
	 
	 $('.question-2 span').click(function(){
		 $('.icon-2').toggleClass('fa-plus');
		 $('.answer-2').toggle(300);
		 $('.question-answer-2').toggleClass('toggle-css');
		 $('.question-2').toggleClass('mb-20');
	 })
	 
	 $('.question-3 span').click(function(){
		 $('.icon-3').toggleClass('fa-plus');
		 $('.answer-3').toggle(300);
		 $('.question-answer-3').toggleClass('toggle-css');
		 $('.question-3').toggleClass('mb-20');
	 })
	 
	$("#meanmenu").meanmenu({
	meanMenuContainer:".meanmenu",
	meanScreenWidth:"991"
	});

});











