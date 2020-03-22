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
    mainPin.removeEventListener('keydown', onMainPinEnterPress);
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
    mapFilter.classList.add('ad-form--disabled');
    address.value = getCenterCoordinatePin();
    window.util.setDisabled(fields);
    window.util.setDisabled(selects);
  };

  var formOpen = function () {
    mapFilter.classList.remove('ad-form--disabled');
    mainForm.classList.remove('ad-form--disabled');

    window.util.removeDisabled(fields);
    mapFilter.querySelector('#housing-features').setAttribute('disabled', 'disabled');
  };

  mapClose();
  formClose();

  var onMainPinLeftClick = function (evt) {
    evt.preventDefault();
    if (evt.which === 1) {
      mapOpen();
      formOpen();
    }
    mainPin.removeEventListener('mousedown', onMainPinLeftClick);
  };

  var onMainPinEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      mapOpen();
      formOpen();
    }
    mainPin.removeEventListener('keydown', onMainPinEnterPress);
  };

  mainPin.addEventListener('mousedown', onMainPinLeftClick);

  mainPin.addEventListener('keydown', onMainPinEnterPress);

  window.pageStatus = {
    mapClose: mapClose,
    formClose: formClose,
    address: address,
    mainPin: mainPin,
    selects: selects,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    mainForm: mainForm,
    mapFilter: mapFilter
  };

})();
