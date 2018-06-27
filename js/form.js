'use strict';

(function(){

	var form = document.querySelector('.notice__form');
	form.classList.add('notice__form--disabled');

	window.form = {
		disableFieldset: function(flag){
			var field = document.querySelectorAll('fieldset');
			for(var i = 0; i < field.length; i++){
				field[i].disabled = flag;
			}
		}
	}

	window.form.disableFieldset(true);

	var selectOn = document.querySelector('#timein');
	var selectOut = document.querySelector('#timeout');

	selectOn.addEventListener('change', function(){
		selectOut.selectedIndex = selectOn.selectedIndex;

	})

	selectOut.addEventListener('change', function(){
		selectOn.selectedIndex = selectOut.selectedIndex;

	})


	var selectType = document.querySelector('#type');
	var inputPrice = document.querySelector('#price');
	var optionType = selectType.querySelectorAll('option');

	selectType.addEventListener('change', function(){
		for (var i = 0; i < optionType.length; i++) {
			if (optionType[i].selected === true) {
				switch (optionType[i].value) {
					case 'bungalo':
					inputPrice.min = 0;
					break;
					case 'flat':
					inputPrice.min = 1000;
					break;
					case 'house':
					inputPrice.min = 5000;
					break;
					case 'palace':
					inputPrice.min = 10000;
					break;
				}
			}
		}

	});





	var rooms = document.querySelector('#room_number');
	var roomsNumber = rooms.querySelectorAll('option');
	var place = document.querySelector('#capacity');
	var placeNumber = place.querySelectorAll('option');

	var setCapacity = function(){
		for (var j = 0; j < placeNumber.length; j++) {
			placeNumber[j].disabled = false;
		}
	}



	rooms.addEventListener('change', function(){
		setCapacity();


		for (var i =0; i< roomsNumber.length; i++){
			if(roomsNumber[i].selected === true){
				if(roomsNumber[i].value == 1){
					placeNumber[2].selected = true;
					placeNumber[0].disabled = true;
					placeNumber[1].disabled = true;
					placeNumber[3].disabled = true;

				} else if(roomsNumber[i].value == 2){
					placeNumber[1].selected = true;
					placeNumber[2].selected = true;
					placeNumber[0].disabled = true;
					placeNumber[3].disabled = true;
				} else if(roomsNumber[i].value == 3){
					placeNumber[0].selected = true;
					placeNumber[1].selected = true;
					placeNumber[2].selected = true;
					placeNumber[3].disabled = true;
				} else if(roomsNumber[i].value == 100){
					placeNumber[0].disabled = true;
					placeNumber[1].disabled = true;
					placeNumber[2].disabled = true;
					placeNumber[3].selected = true;
				}

			}

		}

	})
	
	setCapacity();

	var errorHandler = function (errorMessage) {
		var errorElement = document.createElement('div');

		errorElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: orange;';
		errorElement.style.position = 'fixed';
		errorElement.style.left = 0;
		errorElement.style.right = 0;
		errorElement.style.fontSize = '30px';

		errorElement.textContent = errorMessage;
		document.body.insertAdjacentElement('afterbegin', errorElement);

	};


	var form = document.querySelector('.notice__form');

	form.addEventListener('submit', function(evt){
		evt.preventDefault();
		window.backend.save(new FormData(form), function(){
			form.reset();
			alert('Форма отправлена успешно!');
		}, errorHandler);
		
	});

})();