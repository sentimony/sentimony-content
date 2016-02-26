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
    updateHash: false
});

/* Exchange Points on Fun */
$('.js-cp2fun-cp').keyup(function () {
    var value = $(this).val(),
        resultSum = value * 1.25;
    $('.js-cp2fun-fun').val(resultSum);
    $(".js-cp2fun-result").text(resultSum);
});

$('.js-cp2fun-fun').keyup(function () {
    var value = $(this).val(),
        resultSum = value / 1.25;
    $('.js-cp2fun-cp').val(resultSum);
    $(".js-cp2fun-result").text(value);
});

/* Checked cashbox */
$('.js-exchange').click(function () {
    $(this).find('input').prop('checked', true);
});

/* Duplication sum cashbox */
$('.exchange__item').click(function () {
    var sum = $(this).find('.exchange__right .exchange__number').text(),
        exchangeSum = $(this).find('.js-rub2fun-fun').val(),
        result = $('.active .js-rub2fun-result');

    result = result.length ? result : $('.active .js-cp2rub-result');

    sum.length ? result.text(sum) : result.text(exchangeSum);
});

/* Disabled */
(function () {
    var availableSum = +$('.js-rub2fun-rub').val(),
        disabledElem = $('.exchange__item').find('.exchange__left .exchange__number');

    disabledElem.each(function () {
        var thisSum = $(this).text();
        thisSum = +thisSum.replace(/\s/g, '');

        if (thisSum > availableSum) {
            $(this).closest('.exchange__item').addClass('disabled');
        }
    });
})();

/* Not increase sum */
function notIncrease(element, ownSum) {
    $(element).keyup(function () {
        var currentSum = $(this).val();

        if (currentSum > +ownSum) {
            $(this).val(+ownSum);
        }
    });
}

notIncrease('.js-exchange .exchange__input-text', $('.js-exchange-rub').text().match(/\d+/)[0]);
notIncrease('.exchange__item--noradio .exchange__input-text', $('.js-exchange-points').text().match(/\d+/)[0]);

