	'use strict';
	(function(){
		var DEBOUNCE_INTERVAL = 500;
		var mapPinsCont = document.querySelector('.map__pins');
		var mapContainer = document.querySelector('.map__container');
		var mapFilters = document.querySelector('.map__filters');
		var propertyType = mapFilters.querySelector('#housing-type');
		var propertyPrice = mapFilters.querySelector('#housing-price');
		var propertyRooms = mapFilters.querySelector('#housing-rooms');
		var propertyGuests = mapFilters.querySelector('#housing-guests');
		var propertyGuests = mapFilters.querySelector('#housing-guests');
		var propertyFeatures = mapFilters.querySelectorAll('.features input');

		mapFilters.addEventListener('change', function(){
			var propertyObjects = window.data.value.slice(0);

			switch(propertyType.value){
				case 'flat':
				propertyObjects = propertyObjects.filter(function(elem){
					return elem.offer.type === 'flat';
				});
				break;

				case 'house':
				propertyObjects = propertyObjects.filter(function(elem){
					return elem.offer.type === 'house';
				});
				break;

				case 'bungalo':
				propertyObjects = propertyObjects.filter(function(elem){
					return elem.offer.type === 'bungalo';
				});
				break;
			}

			switch(propertyPrice.value){
				case 'middle':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.price >= 10000 && elem.offer.price <= 50000;
				});
				break;
				case 'low':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.price <= 10000;
				});
				break;
				case 'high':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.price >= 50000;
				});
				break;

			}

			switch(propertyRooms.value){
				case '1':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.rooms == 1;
				});
				break;
				case '2':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.rooms == 2;
				});
				break;
				case '3':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.rooms == 3;
				});
				break;
			}

			switch(propertyGuests.value){
				case '1':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.guests == 1;
				});
				break;
				case '2':
				propertyObjects = propertyObjects.filter(function(elem) {
					return elem.offer.guests == 2;
				});
				break;
				
			}

			for (var i = 0; i < propertyFeatures.length; i++){
				if(propertyFeatures[i].checked){
					propertyObjects = propertyObjects.filter(function(elem) {
						return elem.offer.features.indexOf(propertyFeatures[i].value) >= 0;
					});
				}
			}


				/// Устранение Дребизга(Debaunce)
				var lastTimeOut;
				if(lastTimeOut){
					clearTimeout(lastTimeOut);
				}
				lastTimeOut = setTimeout(function(){
					window.map.createPin(propertyObjects);
				},DEBOUNCE_INTERVAL);
				



			})

	})();