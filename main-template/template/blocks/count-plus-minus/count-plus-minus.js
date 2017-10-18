// Блок +- количества
$('.product-count .minus').click(function(){
	count = $(this).parent().find('.value').text();
	if (count > 0){
		$(this).parent().find('.value').text(--count);
	};
	basket_calc();
});
$('.product-count .plus').click(function(){
	count = $(this).parent().find('.value').text();
	if (count < 99){
		$(this).parent().find('.value').text(++count);
	};
	basket_calc();
});

// http://kv-trade.nolimit.by/basket.php
/*
<div class="product-count">
	<span class="minus">-</span>
	<span class="value">2</span>
	<span class="plus">+</span>
</div>
*/

// Общее количество выбранных товаров
function basket_calc(){
	var count_of_products = 0;
	$('.product-count .value').each(function(){
		item_product_count = Number($(this).text());
		count_of_products += item_product_count;
	});
	$('.lk__table-footer-choose-number').text(count_of_products);
};
