	'use strict';
	(function(){


		var map = document.querySelector('.map');	
		var mapPinsCont = document.querySelector('.map__pins');		
		var mapPinMain = map.querySelector('.map__pin--main');
		var pinsElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
		var mapPinMap = document.querySelector('.map__pin--main');
		map.classList.add('map--faded');
		var form = document.querySelector('.notice__form');


		var createMapElements = function (arrObjects) {
			var fragment = document.createDocumentFragment();

			for (var i = 0; i < arrObjects.length; i++) {
				fragment.appendChild(window.pin.renderPin(arrObjects[i]));
			}
			mapPinsCont.appendChild(fragment);
			return mapPinsCont;
		};

		

	window.map = {
		openPage: function() {

			createMapElements(window.data.listOfRentals);
			map.classList.remove('map--faded');

			for (var i = 0; i< pinsElements.length; i++){
				pinsElements[i].classList.remove('hidden');
			}
			form.classList.remove('notice__form--disabled');

			window.form.disableFieldset(false);
		}
	};

//////////////// Drag Перетаскивание


var fieldAdress = document.querySelector('#address');
var containerPin = document.querySelector('.map__pin--main')
var pinHandle = containerPin.querySelector('img');


pinHandle.addEventListener('mousedown', function(e){
	e.preventDefault();
	var startCoords = {
		x: e.clientX,
		y: e.clientY
	};



	var onMouseMove = function(moveevent){
		moveevent.preventDefault();
		var shift = {
			x: startCoords.x - moveevent.clientX ,
			y: startCoords.y - moveevent.clientY
		};

		

		startCoords = {
			x: moveevent.clientX,
			y: moveevent.clientY
		};

		containerPin.style.top = (containerPin.offsetTop - shift.y) + 'px';
		containerPin.style.left = (containerPin.offsetLeft - shift.x) + 'px';

		if(startCoords.y < 100){
			containerPin.style.top = '100px';

		};

		if(startCoords.y > 500){
			containerPin.style.top = '500px';
		};

		fieldAdress.value = ('y=' + containerPin.style.top  + ' ' + 'x=' + containerPin.style.left)


	};

	var onMouseUp = function(upvent){
		upvent.preventDefault();
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	};
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
	


});

})();
