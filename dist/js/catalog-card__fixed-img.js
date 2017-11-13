$(window).scroll(function(){
	var scrollTopElem = $('#catalog-card__img-col').offset().top;
	var scrollTopThis = $(this).scrollTop();
	if (scrollTopThis > scrollTopElem) {
		$('#catalog-card__img-col').addClass('catalog-card__img-fixed');

	} else {
		$('#catalog-card__img-col').removeClass('catalog-card__img-fixed');

	}
});
