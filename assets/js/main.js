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
    tabActiveClass: 'selected'
});

/**
 * include throw
 */
// rub2fun
$(".js-rub2fun-rub").keyup(function () {
    var value = $(this).val();
    $(".js-rub2fun-fun").val(value);
    $(".js-rub2fun-result").text(value);
}).keyup();

$(".js-rub2fun-fun").keyup(function () {
    var value = $(this).val();
    $(".js-rub2fun-rub").val(value);
    $(".js-rub2fun-result").text(value);
}).keyup();

// cp2fun
$(".js-cp2fun-cp").keyup(function () {
    var value = $(this).val();
    $(".js-cp2fun-fun").val(value);
    $(".js-cp2fun-result").text(value);
}).keyup();

$(".js-cp2fun-fun").keyup(function () {
    var value = $(this).val();
    $(".js-cp2fun-cp").val(value);
    $(".js-cp2fun-result").text(value);
}).keyup();


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
function notIncrease(element) {
    $(element).focus(function () {
        var ownSum = +$(this).val();

        $(this).keyup(function () {
            var currentSum = $(this).val();

            if (currentSum > ownSum) {
                $(this).val(ownSum);
            }
        });
    });
}

notIncrease('.exchange__input-text');


/**
 * calculation
 */
// var number1 = $(".js-number1").val();
// var number2 = $(".js-number2").val();

// function multiply(a, b) {
//   return a * b;
// }

// var result = multiply(number1, number2);

// $(".js-result").text(result)
