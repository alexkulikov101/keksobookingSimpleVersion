	'use strict';
	(function(){

		
		window.pin = {

			renderPin: function(elem){
				var mapPinsCont = document.querySelector('.map__pins');
				var mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin');			
				var mapPin = mapPinTemplate.cloneNode(true);
				var imagePin = mapPin.querySelector('img');

				mapPin.style.left = elem.location.x - (imagePin.width / 2) +  'px';
				mapPin.style.top = elem.location.y - (imagePin.height / 2) +  'px';
				imagePin.setAttribute('src', elem.author.avatar);

				mapPin.addEventListener('click', function(){
					var pinsElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
					var map = document.querySelector('.map');
					var mapFiltersCont = document.querySelector('.map__filters-container');

					for(var i = 0; i < pinsElements.length; i++){

						pinsElements[i].classList.remove('map__pin--active');
					}
					mapPin.classList.add('map__pin--active');



					var fragment = document.createDocumentFragment();					
					fragment.appendChild(window.card.renderCard(elem));

					var mapContainer = document.querySelector('.map__container');

					var removeChilds = function(index){
						while(index.firstChild){
							index.removeChild(index.firstChild);
						}
					}
					removeChilds(mapContainer);					
					mapContainer.appendChild(fragment);
				})	

				return mapPin;
			}
		}

		var map = document.querySelector('.map');
		var mapPinMain = map.querySelector('.map__pin--main');

		mapPinMain.addEventListener('mouseup', function(){
			window.map.openPage();
		})
	})();