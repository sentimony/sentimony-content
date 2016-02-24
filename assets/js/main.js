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
