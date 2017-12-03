$(document).ready(function(){

$('.mic').fadeIn(500,function(){
	$('#b1').fadeIn(500,function(){
		$(this).animate({width:"700px"},function(){
			$('#music').fadeIn(500,function(){
				$('#gv').fadeIn(500);
			});
		});
	});
});
$('.clos').click(function(){
	$('#gv').fadeOut(500, function(){
		$('#music').fadeOut(500);
		$('#b1').fadeOut(500);
		$('.mic').fadeOut(500);
		$('#w_nav').fadeIn(500);
		$('#w_name').fadeIn(500);
		$('.eve').fadeOut(500);
		
	});

});

});
