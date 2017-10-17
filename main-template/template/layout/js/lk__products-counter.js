// Блок +- количества
$('.product-count .minus').click(function(){
	count = $(this).parent().find('.value').text();
	if (count > 1){
		$(this).parent().find('.value').text(--count);
	}
});
$('.product-count .plus').click(function(){
	count = $(this).parent().find('.value').text();
	if (count < 99){
		$(this).parent().find('.value').text(++count);
	}
});
// http://kv-trade.nolimit.by/basket.php
/*
<div class="product-count">
	<span class="minus">-</span>
	<span class="value">2</span>
	<span class="plus">+</span>
</div>
*/
