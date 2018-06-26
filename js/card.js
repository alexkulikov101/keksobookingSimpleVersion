	'use strict';
	(function(){
		window.card = {
			renderCard: function(elem){	
				var template = document.querySelector('template').content;
				var mapCard = template.querySelector('.map__card').cloneNode(true);
				var getValueTypeOffer = function () {
					if (elem.offer.type === 'flat') {
						return 'Квартира';
					} else if (elem.offer.type === 'bungalo') {
						return 'Бунгало';
					} else {
						return 'Дом';
					}
				};
				mapCard.querySelector('small').textContent = elem.offer.address;
				mapCard.querySelector('h3').textContent = elem.offer.title;
				mapCard.querySelector('.popup__price').innerHTML = elem.offer.price + ' ' + '&#x20bd;/ночь';
				mapCard.querySelector('h4').textContent = getValueTypeOffer();
				mapCard.querySelector('h4').nextSibling.textContent = elem.offer.rooms  + ' ' + 'для'  + ' ' + elem.offer.guests + 'гостей';
				mapCard.querySelector('.popup__features').previousSibling.textContent = 'Заезд после' + ' ' + elem.offer.checkin + ' ' + 'выезд до' + ' ' + elem.offer.checkout;
				var feature = mapCard.querySelector('.popup__features');
				
	//// Удаление всех дутей у родителя
	var removeChilds = function(index){
		while(index.firstChild){
			index.removeChild(index.firstChild);
		}
	}
	removeChilds(feature);

	
	var fragmentFeature = document.createDocumentFragment();

	for(var i = 0; i < elem.offer.features.length; i++ ){
		var featureElement = document.createElement('li');
		featureElement.classList.add('feature', 'feature--' + elem.offer.features[i]);
		fragmentFeature.appendChild(featureElement);

	}
	feature.appendChild(fragmentFeature)	

	mapCard.querySelector('.popup__features').nextElementSibling.textContent = elem.offer.description;
	mapCard.querySelector('.popup__avatar').setAttribute('src', elem.author.avatar);

	
	/*var popupPictures = mapCard.querySelector('.popup__pictures');
	var getMapPhotos = function(){		
		for(var j = 0; j < elem.offer.photos; j++){
			var li = document.createElement('li');
			var photo = document.createElement('img');
			photo.setAttribute('src', elem.offer.photos[j]);
			photo.width = '45px';
			photo.height = '40';
			li.appendChild(photo); 
			popupPictures.appendChild(li);
		}
		return popupPictures;
	}

	popupPictures = getMapPhotos();*/

	 var mapCardPhotos = mapCard.querySelector('.popup__pictures');

    var getMapCardPhotos = function () {
      for (var j = 0; j < elem.offer.photos.length; j++) {
      	var li = document.createElement('li');
        var photo = document.createElement('img');
        photo.src = elem.offer.photos[j];
        photo.width = '45';
        photo.height = '40';
        photo.alt = 'Фотография жилья';
        photo.style = 'margin: 2px';
       	li.appendChild(photo);
        mapCardPhotos.appendChild(li);
      }
      return mapCardPhotos;
    };

    mapCardPhotos = getMapCardPhotos();

	var popupClose = mapCard.querySelector('.popup__close');
	var pinsElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
	popupClose.addEventListener('click', function(){
		mapCard.classList.add('hidden');

		for(var i = 0; i< pinsElements.length; i++){
			pinsElements[i].classList.remove('map__pin--active')
		}
	})

	document.addEventListener('keydown', function(evt){
		if(evt.keyCode == 27){
			mapCard.classList.add('hidden');
			for(var i = 0; i< pinsElements.length; i++){
				pinsElements[i].classList.remove('map__pin--active')
			}
		}
	})

	return mapCard;

}

}
})();