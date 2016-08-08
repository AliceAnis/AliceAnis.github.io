"use strict"

var myPage = {
	
	createElement: function (settings) {
		var element = document.createElement(settings.tag);
		
		if (settings.text) {
			element.innerText = settings.text;
		}

		if (settings.html) {
			element.innerHTML = settings.html;
		}
		
		if (settings.type) {
			element.setAttribute('type', settings.type);
		}

		if (settings.value) {
			element.setAttribute('value', settings.value);
		}

		if (settings.className) {
			element.className = settings.className;
		}
		
		settings.parent.appendChild(element);

		return element;
	},

	createBlock: function(blockNumber, parent){
		myPage.createElement({
			tag: 'h3',
			parent: parent,
			text: blockNumber +'. Вопрос №' + blockNumber
		});

		var ul = myPage.createElement({
			tag: 'ul',
			parent: parent,
		});

		for (var j = 1; j < 4;j++) {
			var li = myPage.createElement({
				tag: 'li',
				parent: ul,
			});

			myPage.createElement({
				tag: 'label',
				parent: li,
				html: '<input type="checkbox">Вариант ответа №' + j
			});
		}
	},
}

myPage.createElement({
		tag: 'h2',
		parent: document.body,
		text: 'Тест по программированию'
	});

var form = myPage.createElement({
		tag: 'form',
		parent: document.body,
	});

for (var i = 1; i < 4; i++) {
	myPage.createBlock(i, form);
}

myPage.createElement({
	tag: 'input',
	parent: form,
	type: 'submit',
	value: 'Проверить мои результаты',
	className: 'btn btn-success'
});