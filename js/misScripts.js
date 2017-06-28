/* Iniciamos WOW*/
    new WOW().init();


/* Iniciamos Smooth Scroll*/
    smoothScroll.init({
    	speed:1000,
    	offset:60,
    });

/* Iniciamos Efecto al NavBar*/

$(window).scroll(function(){

	var nav = $('.david');
	var scroll = $(window).scrollTop();
	if(scroll >= 600){
		nav.addClass('claseDavid');
		console.log('llego');
	} 
	else{
		nav.removeClass('claseDavid');
	}
});


