$(document).ready(function(){
	$('.nav-icon').click(function(){
			$('.nav').toggleClass('canvas-menu');
			return false;
		});	

	/*********** scroll down ***************/
	 $('.scroll-down').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	  });
	 //owl carosel
	 // $('.owl-carosel-slider-main').owlCarousel({
		//     loop:true,
		// 	margin:false,
		// 	nav:true,
		// 	autoplay:false,
		// 	autoplayTimeout:3000,
		// 	dots:true,
		// 	center: true,
		// 	 navText: [
		//         ' <img src="assets/images/al.png" alt="img">',
		//         ' <img src="assets/images/ar.png" alt="img">'
		//     ],
		// 	items:3,
		// 	 responsive:{
  //               0:{
  //                   items:1
  //               },
  //               575:{
  //                   items:1
  //               },
  //               768:{
  //                   items:1
  //               },
  //               992:{
  //                   items:3
  //               },
  //               1200:{
  //                   items:3
  //               }
  //           }
	
		// })


	 // slik owl-carosel-slider-main
	 $('#slider-overlay .slides').slick({
		  lazyLoad: 'progressive',
			arrows: true,
			// fade: true,
			centerPadding: '0px',
			autoplay: true,
            infinite: true,
			infinite: true,
			centerMode: true,
			speed: 500,
			swipe: false,
			cssEase: 'ease-in-out',
			slidesToShow: 3,
			adaptiveHeight: true,
		  asNavFor: '.slick-dots-thumb, #slider .slides',
		        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
		});
		$('.slick-dots-thumb').slick({
		  lazyLoad: 'progressive',
			 arrows: false,
			 infinite: true,
			 autoplay: true,
             infinite: true,
			 slidesToShow: 3,
			 centerMode: true,
			 centerPadding: '0px',
			 adaptiveHeight: true,
			 cssEase: 'ease-in-out',
		  asNavFor: '#slider-overlay .slides, #slider .slides',
		  focusOnSelect: true,
		  prevArrow: '<button class="slide-arrow prev-arrow"><img src="assets/images/al.png" alt="img"></button>',
          nextArrow: '<button class="slide-arrow next-arrow"><img src="assets/images/ar.png" alt="img"></button>',
            arrows: true,
                  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
		});

	  
});

 $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });


		




