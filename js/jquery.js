$(document).ready(function(){
	
// 	$(".nav_links").hide();
	
	$('.photo-thumbnails .thumbnail').click(function() {
		$('.photo-thumbnails .thumbnail').removeClass('current');
		$(this).addClass('current');
			
// 		$($('.current .caption').contents()).html('#caption')
/*
		$(this).find("#caption");
		$("#caption").html("h4");
*/
		
		var path = $(this).find('img').attr('src');
		$('#big-photo img').attr('src', path);		
	});

	
	$('.photo-thumbnails2 .thumbnail2').click(function() {
		$('.photo-thumbnails2 .thumbnail2').removeClass('current2');
		$(this).addClass('current2');
		
		var path = $(this).find('img').attr('src');
		$('#big-photo2 img').attr('src', path);		
	});
	
	$('.photo-thumbnails3 .thumbnail3').click(function() {
		$('.photo-thumbnails3 .thumbnail3').removeClass('current3');
		$(this).addClass('current3');
		
		var path = $(this).find('img').attr('src');
		$('#big-photo3 img').attr('src', path);		
	});
	
	
	$('#hamburger').click(function(){
			       $('.nav_links').slideToggle();
			        
	});
	
	

});