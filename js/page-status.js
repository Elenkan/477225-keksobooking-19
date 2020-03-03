'use strict';
(function () {
  var fields = document.querySelectorAll('fieldset');
  var mapFilter = document.querySelector('.map__filters');
  var selects = document.querySelectorAll('select');
  var mainForm = document.querySelector('.ad-form');
  var mainPin = document.querySelector('.map__pin--main');
  var MAIN_PIN_HEIGHT = 84;
  var address = mainForm.querySelector('#address');


  var mapOpen = function () {
    document.querySelector('.map').classList.remove('map--faded');
    window.load.loadData(window.load.onSuccess, window.load.onError);
  };

  var mapClose = function () {
    document.querySelector('.map').classList.add('map--faded');
  };


  var getCenterCoordinatePin = function () {
    var mainPinX = Math.round(mainPin.getBoundingClientRect().left + (mainPin.offsetWidth / 2));
    var mainPinY = Math.round(mainPin.getBoundingClientRect().top + (mainPin.offsetHeight / 2));
    return (mainPinX + ', ' + mainPinY);
  };

  var formClose = function () {
    mapFilter.classList.add('.ad-form--disabled');
    address.value = getCenterCoordinatePin();
    window.util.setDisabled(fields);
    window.util.setDisabled(selects);
  };

  var getBottomCoordinatePin = function () {
    var mainPinX = Math.round(mainPin.getBoundingClientRect().left + (mainPin.offsetWidth / 2));
    var mainPinY = mainPin.getBoundingClientRect().top + MAIN_PIN_HEIGHT;
    return (mainPinX + ', ' + mainPinY);
  };

  var formOpen = function () {
    mapFilter.classList.remove('ad-form--disabled');
    mainForm.classList.remove('ad-form--disabled');

    window.util.removeDisabled(fields);
    mapFilter.querySelector('#housing-features').setAttribute('disabled', 'disabled');
    address.value = getBottomCoordinatePin();
  };

  mapClose();
  formClose();

  mainPin.addEventListener('mousedown', function (evt) {
    if (evt.which === 1) {
      mapOpen();
      formOpen();
    }
  });

  mainPin.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      mapOpen();
      formOpen();
    }
  });

  window.pageStatus = {
    mainForm: mainForm,
    selects: selects,
    mapFilter: mapFilter
  };
})();
