	'use strict';
	(function(){
		window.backend = {
			load: function(onLoad, onError){
				var URL = 'https://js.dump.academy/keksobooking/data';
				var xhr = new XMLHttpRequest();
				xhr.responseType = 'json'; //// Общаюсь с сервером с помощью Json
				
				console.log(xhr)
			

				xhr.addEventListener('load', function(){
					if(xhr.status == 200){
						onLoad(xhr.response);
					
					} else {
						onError('Неизвестный статус:' + xhr.status + ' ' + xhr.statusText);
					}
				});
				xhr.addEventListener('error', function(){
					onError('Произошла ошибка соединения');
				});

				xhr.addEventListener('timeout', function(){
					onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
				});



	xhr.timeout = 10000; //10s

	xhr.open('GET', URL);	
	xhr.send();

},

save: function(data, onLoad, onError){
	var URL = 'https://js.dump.academy/keksobooking';
	/// data - данные которые я хочу отправить на сервер
	/// Колбэк OnSucces будет вызываться когда у меня успешно закацаются данные на сервер
	var xhr = new XMLHttpRequest();

	xhr.responseType = 'json'; //// Общаюсь с сервером с помощью Json

	xhr.addEventListener('load', function(){ /// load вызывает колбэк onsuccess
		onLoad(xhr.response);
		

	});

	xhr.open('POST', URL);
	xhr.send(data);
}
}
})();