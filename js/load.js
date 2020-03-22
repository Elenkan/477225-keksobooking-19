'use strict';
(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';
  var statusCode = 200;
  var TIMEOUT_IN_MS = 5000;
  var loadData = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === statusCode) {
        onSuccess(xhr.response);
        window.util.removeDisabled(window.pageStatus.selects);
        window.pageStatus.mapFilter.querySelector('#housing-features').removeAttribute('disabled');
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соеднинения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };


  var onSuccess = function (data) {
    window.load.adverts = data;
    window.pins.filledList(window.load.adverts);
  };
  var onError = function (errorMessage) {
    var errorBlock = document.createElement('div');
    errorBlock.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorBlock.style.position = 'absolute';
    errorBlock.style.left = 0;
    errorBlock.style.right = 0;
    errorBlock.style.fontSize = '30px';

    errorBlock.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorBlock);
  };

  window.load = {
    loadData: loadData,
    onSuccess: onSuccess,
    onError: onError
  };
})();
