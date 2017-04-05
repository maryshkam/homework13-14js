'use strict';
var wrapper, modalDiv, modalOverlay, modalMessage, modalButton;

var button = document.querySelector('.test__button');
button.addEventListener('click', checkResults);

// Checking results
function checkResults() {
	var sum = sumAnswers();
	showModal();
	if (sum >= 30 ) {
		modalMessage.innerHTML = 'Молодец, Будуть з тебе люди.';
	} else if(sum >= 20) {
		modalMessage.innerHTML = 'Не все так погано, але йди вчитись ще.';
	} else {
		modalMessage.innerHTML = 'Все пропало. ти чайник.';
	}
}

// Creating array of right numbers
function rightAnswers() { // Array of right answers
	var rightAnswersArr = [];

	testObj.forEach(function (item, j) {
		var rightAnswers = testObj[j].valueOfEachAnswer;

		rightAnswers.forEach(function (item, j) {
			rightAnswersArr.push(rightAnswers[j]);
			return rightAnswersArr;
		})
	});
	return rightAnswersArr;
}

// Summing answers results
function sumAnswers() {
	var inputs = document.querySelectorAll('.test__input');

	var sumOfAnswers = 0;
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if (input.checked) {
			var rightAnswersArr = rightAnswers();
			var rightAnswer = rightAnswersArr[i];
			sumOfAnswers += rightAnswer;
		}
	}
	return sumOfAnswers;
}

// Showing modal window
function showModal() {
	wrapper = document.querySelector('#wrapper');
	modalDiv = document.createElement('div');
	modalOverlay = document.createElement('div');
	modalMessage = document.createElement('p');
	modalButton = document.createElement('button');

	modalDiv.className = 'modal';
	modalOverlay.className = 'modal__overlay';
	modalMessage.className = 'modal__message';
	modalButton.className = 'modal__button';

	modalButton.innerHTML = 'Close';

	wrapper.appendChild(modalOverlay);
	wrapper.appendChild(modalDiv);
	modalDiv.appendChild(modalMessage);
	modalDiv.appendChild(modalButton);

	modalButton.addEventListener('click', hideModal);
}

// Hiding modal window
function hideModal() {
	modalDiv.remove();
	modalOverlay.remove();
	clearForm();
}

//Reseting form
function clearForm() {
	document.getElementsByTagName('form')[0].reset();
}



