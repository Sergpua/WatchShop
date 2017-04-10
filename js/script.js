$(document).ready(function($){

	$('.field-input').focus(function(){
		$(this).parent().addClass('is-focused');
	})

	$('.field-input').blur(function(){
		$(this).parent().removeClass('is-focused');
	})

})