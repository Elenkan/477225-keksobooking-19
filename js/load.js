'use strict';
(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';
  var loadData = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
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

    xhr.timeout = 5000;

    xhr.open('GET', URL);
    xhr.send();
  };

  var adverts = [];
  var onSuccess = function (data) {
    adverts = data;
    window.pins.filledList(adverts);
    // var filterAdverts = adverts.filter(function (it) {
    //   return it.offer.type === 'bungalo';
    // });

    // console.log(filterAdverts);
    document.querySelector('#housing-type').addEventListener('change', function () {
      if (document.querySelector('#housing-type').value === 'bungalo') {
        var filterAdverts = adverts.filter(function (it) {
          return it.offer.type === 'bungalo';
        });
        console.log(filterAdverts);
      }
    });
  };
  var onError = function () {
    console.log('что-т пошло не так');
  };

  window.load = {
    loadData: loadData,
    adverts: adverts,
    onSuccess: onSuccess,
    onError: onError
  };
})();
