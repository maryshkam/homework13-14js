'use strict';
var test = [
	{
		question: "Тест на логіку",
		answers: ["Присутня", "Відсутня", "50/50"],
		valueOfEachAnswer: [10, 0, 10]
	},
	{
		question: "Бути чи не бути,",
		answers: ["Бути", "Не бути", "..."],
		valueOfEachAnswer: [10, 0, 0]
	},
	{
		question: "Що важливо,",
		answers: ["HTML", "CSS", "JS"],
		valueOfEachAnswer: [10, 10, 10]
	},
	{
		question: "Які перспективи",
		answers: ["Оптимістичні", "Хаотичні", "Жодних"],
		valueOfEachAnswer: [10, 0, 0]
	}
];

// Converting to a string, setting to a storage
var stringTest = JSON.stringify(test);
localStorage.setItem('string', stringTest);

// Getting a string from storage and creating an object
stringTest = localStorage.getItem('string');
var testObj = JSON.parse(stringTest);

// Generating the test result
var tmpl = document.getElementById('test-template').innerHTML.trim();
tmpl = _.template(tmpl);

var result = document.getElementById('wrapper');
result.innerHTML = tmpl({list: testObj});
