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

})();