$('.catalog__menu-item-title').click(function(){
	$('.catalog__menu').find('.active').removeClass('active');
	$(this).parent().addClass('active');

});
