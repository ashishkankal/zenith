$(document).ready(function(){

$('#home').click( function(){
	$('.box').fadeOut(500);
	$('.eve').fadeOut(500);
	$('#w_nav').fadeIn(500);
	$('#w_name').fadeIn(500);
});
$('#gala').click( function(){
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
	$('.box').fadeIn(500);
	
	$('.ash').load("gal.html");
});

$('#team').click( function(){
	$('.box').fadeIn(500);
	$('.ash').load("teami.html");
});

$('#about').click( function(){
	$('.box').fadeIn(500);
	$('.ash').load("about.html");
});

$('#mus').click( function(){
	$('.eve').fadeIn(500);
	$('.eve').load("music.html");
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
});
$('#dan').click( function(){
	$('.eve').fadeIn(500);
	$('.eve').load("dance.html");
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
});
$('#dra').click( function(){
	$('.eve').fadeIn(500);
	$('.eve').load("drama.html");
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
});
$('#aur').click( function(){
	$('.eve').fadeIn(500);
	$('.eve').load("aura.html");
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
});
$('#tro').click( function(){
	$('.eve').fadeIn(500);
	$('.eve').load("pond.html");
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
});
$('#per').click( function(){
	$('.eve').fadeIn(500);
	$('.eve').load("persona.html");
	$('#w_nav').fadeOut(500);
	$('#w_name').fadeOut(500);
});
$('#contact').click( function(){
	$('.box').fadeIn(500);
	$('.ash').load("contact.html");
});

$('.clo').click( function(){
	$('.box').fadeOut(500);
	$('#w_nav').fadeIn(500);
	$('#w_name').fadeIn(500);
	
});
$('#mus').click(function(){

	$("html, body").animate({
       scrollX: 1540},600);
	   
	   return false; 
	});
//calling jPreLoader
	var timer;
	$('body').jpreLoader( {
		splashID: "#jSplash",
		loaderVPos: '80%',//LOCATION OF LOADING BAR
		splashVPos: '40%',//LOCATION OF LOADING IMGS
		autoClose: true,
		closeBtnText: "",
		onetimeLoad: false,
		splashFunction: function() {  
			//passing Splash Screen script to jPreLoader
			$('#jSplash').children('section').not('.selected').hide();
			$('#jSplash').hide().fadeIn(800);
	
			timer = setInterval(function() 
				{
				splashRotator();
				},2000);
		}
	}, function() {	
				//callback function
				clearInterval(timer);
				//loadingComplete();
	});
	//create splash screen animation
	function splashRotator() {
		var cur = $('#jSplash').children('.selected');
		var next = $(cur).next();
		if($(next).length != 0) 
		{
			$(next).addClass('selected');
		} 
		else 
		{
			$('#jSplash').children('section:nth-child(2)').addClass('selected');
			next = $('#jSplash').children('section:nth-child(2)');
		}
		$(cur).removeClass('selected').hide(700);
		$(next).show(700);
	}
});	