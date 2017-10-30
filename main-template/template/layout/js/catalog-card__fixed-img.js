$(window).scroll(function(){
	var scrollTopElem = $('#catalog-card__img-col').offset().top;
	var scrollTopThis = $(this).scrollTop();
	if (scrollTopThis > scrollTopElem) {
		$('#catalog-card__img-col').addClass('catalog-card__img-fixed');

	} else {
		$('#catalog-card__img-col').removeClass('catalog-card__img-fixed');

	}
});



/*fixed header - row_header-top*/
// $(document).ready(function () {
//   $(window).scroll(function() {
//    var top = $(document).scrollTop();
//    if (top <= $('.row_header-top').innerHeight()) $('.row_header-bottom').removeClass('row_header-bottom_fixed');
//         else {
//             $('.row_header-bottom').addClass('row_header-bottom_fixed');
//         }
//     });
// });
//
// $(document).ready(function () {
//   $(window).scroll(function() {
//    var top = $(document).scrollTop();
//    if (top <= $('.row_header-top').innerHeight()) $('.slider-bootstrap').removeClass('carousel_margin-top');
//         else {
//             $('.slider-bootstrap').addClass('carousel_margin-top');
//         }
//     });
// });
/*/fixed header - row_header-top*/
