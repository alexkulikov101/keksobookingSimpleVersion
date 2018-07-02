	'use strict';
	(function(){

		var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
		var fileChooser = document.querySelector('.notice__photo input[type=file]');		
		var preview = document.querySelector('.notice__preview img');
		

		fileChooser.addEventListener('change', function(){
			var file = fileChooser.files[0];
			var fileName = file.name.toLowerCase();

			var matches = FILE_TYPES.some(function(it){ 
					return fileName.endsWith(it); /// endsWith - возращает true если файл заканчивается на it
				});


			if(matches){ // и если совпадает

				var reader = new FileReader();

				reader.addEventListener('load', function(){
					preview.src = reader.result;
				});

				reader.readAsDataURL(file); // преобразовывает содержимое файла которое мы загрузили в строку


			}



		});

	})();