"use strict";

var names = [];

for (var i=0; i<5; i++) {
	names[i] = prompt("Введите имя");
}

var userName = prompt("Введите ваше имя");

if (userName == null) {
	alert('Ошибка!');
} else {
	if (names.indexOf(userName) == -1) {
		alert('Ошибка!');
	} else {
		alert(userName + ', Вы успешно вошли!');
	}
}

