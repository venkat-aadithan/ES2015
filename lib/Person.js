"use strict";

function calculateDiscount(price) {
  var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .25;
  return price - price * discount;
}

alert(calculateDiscount(100));
alert(calculateDiscount(100, .10));