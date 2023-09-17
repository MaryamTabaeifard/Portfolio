const swiper = new Swiper('.testimonials-slider', {
	speed:600,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
		type: 'bullets',
        clickable: true
    },
    autoplay: { 
		delay: 5000,
		disableOnInteraction:false
		},
	breakpoints:{
		320:{
			slidesPerView:1,
			spaceBetween:20
		},
		1200:{
			slidesPerView:3,
			spaceBetween:20
		}
	}
});
