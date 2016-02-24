/**
* Remodal
* https://github.com/VodkaBears/Remodal
*/
$('.js-remodal').remodal({
    // closeOnEscape: false
});

/**
* EasyTabs
* https://github.com/JangoSteve/jQuery-EasyTabs
*/
$('.js-easytabs').easytabs({
    animate: true,
    animationSpeed: 200,
    tabActiveClass: 'selected',
});

/**
* exchange__label--selected
*/
$('.exchange__label').click(function() {
    $('.exchange__label').removeClass('exchange__label--selected');
    $(this).toggleClass('exchange__label--selected');
});
