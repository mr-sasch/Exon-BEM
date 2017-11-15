$('.catalog__menu-item-title').click(function(){
	$('.catalog__menu').find('.active-item').removeClass('active-item');
	$(this).parent().addClass('active-item');
});

// Скрытие/разворачивание меню
// Сворачиваем все подразделы с классом hide
$('.catalog__submenu.hide').slideUp();
$('.catalog__menu').find('.catalog__menu-item:first').addClass('active');

$('.catalog__menu-item-title').click(function(){
	// Если у родителя класса, по которому кликнули, есть класс active,
	if(!$(this).parent().hasClass('active')){
		// то у всех остальных классов убираем класс active
		$('.catalog__menu-item-title').parent().removeClass('active');
		// и добавляем класс active Нашему родителю
		$(this).parent().addClass('active');
		// Cворачиваем все подразделы
		$('.catalog__menu-item-title').parent().find('.catalog__submenu').slideUp(300);
		// Разворачиваем подраздел текущего родителя
		$(this).parent().find('.catalog__submenu').slideDown(300);
	} else {
		$(this).parent().removeClass('active');
		$(this).parent().find('.catalog__submenu').slideUp(300);
	}
});

// Подсветка активного пункта меню (для бэкенда не надо)
$('.catalog__submenu-item').click(function(){
	$('.catalog__submenu').find('.active').removeClass('active');
	$(this).addClass('active');
});
