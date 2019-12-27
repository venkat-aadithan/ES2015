"use strict";

function calculateSum() {
  for (var _len = arguments.length, price = new Array(_len), _key = 0; _key < _len; _key++) {
    price[_key] = arguments[_key];
  }

  return price.reduce(function (prev, current) {
    return prev + current;
  });
}

alert(calculateSum(1, 2, 3, 4, 5));