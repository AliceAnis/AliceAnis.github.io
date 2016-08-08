"use strict";

function pow(x, n) {  
	
	if (n == 0) {
		return 1;
	}

	if (n == 1) {
		return x;
	}
	
	var result = x;
	var count = Math.abs(n);

	for (var i = 1; i < count; i++) {
		result *= x;
	}

  return (n > 0) ? result : 1 / result;
}

var x = +prompt("Введите число!", '');
var n = +prompt("Введите степень", '');

console.log('x: ', x);
console.log('n: ', n);

if (!x || !n) {
	alert('Ошибка! Введены некорректные данные.');
} else {
	alert(pow(x, n));
}

