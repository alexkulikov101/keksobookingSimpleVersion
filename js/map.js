	'use strict';
	(function(){

		var NUMBER_PINS = 5;
		var map = document.querySelector('.map');	
		var mapPinsCont = document.querySelector('.map__pins');	
		var mapContainer = document.querySelector('.map__container');	
		var mapPinMain = map.querySelector('.map__pin--main');
		var pinsElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
		var mapPinMap = document.querySelector('.map__pin--main');
		map.classList.add('map--faded');
		var form = document.querySelector('.notice__form');


	



		

		window.map = {
			openPage: function() {

				window.backend.load(loadHandler, errorHandler);
				map.classList.remove('map--faded');

				for (var i = 0; i< pinsElements.length; i++){
					pinsElements[i].classList.remove('hidden');
				}
				form.classList.remove('notice__form--disabled');

				window.form.disableFieldset(false);
			},

			//// Удаление всех детей у родителя
			removeChilds: function(parent){
				while(parent.firstChild){
					parent.removeChild(parent.firstChild);
				}

			},
			createPin: function(arr){
				/// Удаляем пины
				window.map.removeChilds(mapPinsCont);
					/// Удаляем попап
					window.map.removeChilds(mapContainer);

					var arrSlice = arr.slice(0, NUMBER_PINS);

					var fragment = document.createDocumentFragment();
					for (var i  = 0; i < arrSlice.length; i++){
						fragment.appendChild(window.pin.renderPin(arrSlice[i]));
						mapPinsCont.appendChild(fragment);	
					}					
					return mapPinsCont;
				}
			};



///// Работа с сетью


var loadHandler = function (data) {
	window.data(data);
	window.map.createPin(window.data.value);

};

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
