jQuery(document).ready(function() {
	
	/* services */	
	$('table.price tr:even').addClass('blue');
	
	$('.service p').click(function() {
		$('.service p').each(function(){
			$(this).removeClass('active')
		})
			$(this).addClass('active');
	});
	$('.service').click(function() {
		$('.service').each(function(){
			$(this).removeClass('active')
		})
			$(this).addClass('active');
	});
	
	$('.price-area table.price').html($('.service p').next().html());
	$('.service p').click(function(){
		$('.price-area table.price').html($(this).next().html());
	});
	
	/* popup */	
	$('a.callback').click(function(){
		$('.transp-bg').fadeIn();
		$("#commentFormone").validate({
			focusInvalid: false,
			focusCleanup: false
		});
	});
	$('.popup .icon-close').click(function(){
		 $('.transp-bg').fadeOut();	
	});
	
});








