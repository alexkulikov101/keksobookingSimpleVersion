	'use strict';
	(function(){
		var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
		var fileChooser = document.querySelector('.form__photo-container input[type=file]');
		var preview = document.querySelector('.form__photo-container');

		fileChooser.addEventListener('change', function(){
			var file = fileChooser.files[0];
			var fileName = file.name.toLowerCase();

			var matches = FILE_TYPES.some(function(it){ 
					return fileName.endsWith(it); /// endsWith - возращает true если файл заканчивается на it
				});


			if(matches){ // и если совпадает

				var reader = new FileReader();

				reader.addEventListener('load', function(){
					var housePhoto = document.createElement('img');
					housePhoto.src = reader.result;
					housePhoto.style = 'max-width: 140px; margin-top: 10px;';
					preview.appendChild(housePhoto);

				});

				reader.readAsDataURL(file); // преобразовывает содержимое файла которое мы загрузили в строку


			}



		});


	})();