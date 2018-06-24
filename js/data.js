	'use strict';
	(function(){
		var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец','Красивый гостевой домик', 'Некрасивый негостеприимный домик','Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
		var TYPE = ['flat', 'house', 'bungalo'];
		var TIMES = ['12:00', '13:00', '14:00'];
		var FEATURES = ['wifi','dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

		var offerType = {
			flat: 'Квартира',
			house: 'Дом',
			bungalo: 'Бунгало'
		};



		var getRandomNumber = function (min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		};

		var getRandomElement = function (arr) {
			return arr[getRandomNumber(0, arr.length)];
		};

		var getRandomArray = function (arr) {
			var newArr = [];

			while (newArr.length < arr.length) {
				var randomElement = getRandomElement(arr);

				if (newArr.indexOf(randomElement) !== -1) {
					continue;
				}

				newArr.push(randomElement);
			}

			newArr = newArr.slice(0, getRandomNumber(0, newArr.length));
			return newArr;
		};

		var createOffer = function(index) {

			var offerAvatar = index;
			var offerTitle = TITLES[getRandomNumber(0,TITLES.length-1)];
			var offerPrice = getRandomNumber(1000,1000000);
			var offerType = TYPE[getRandomNumber(0, TYPE.length - 1)];
			var offerRooms = getRandomNumber(1,5);
			var offerGuests = getRandomNumber(1,32);
			var offerCheckin = TIMES[getRandomNumber(0, TIMES.length - 1)];
			var offerCheckout = TIMES[getRandomNumber(0, TIMES.length - 1)];
			var offerFeatures = getRandomArray(FEATURES);
			var offerLocationX = getRandomNumber(300,900);
			var offerLocationY = getRandomNumber(100,500);

			var ob = {
				author: {
					avatar: 'img/avatars/user' + '0' + (offerAvatar + 1) + '.png'
				},
				offer: {
					title: offerTitle,
					address: offerLocationX + ', ' + offerLocationY,
					price: offerPrice,
					type: offerType,
					rooms: offerRooms,
					guests: offerGuests,
					checkin: offerCheckin,
					checkout: offerCheckout,
					features: offerFeatures,
					description: '',
					photos: []
				},

				location :{
					x: offerLocationX,
					y: offerLocationY
				}
			};

			return ob;
		};

		var addObjects = function (numberOfObjects) {
			var Objects = [];

			for (var i = 0; i < numberOfObjects; i++) {
				Objects.push(createOffer(i));
			}

			return Objects;
		};


		window.data = {
			listOfRentals: addObjects(8)
		};

	})();