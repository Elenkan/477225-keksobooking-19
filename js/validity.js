'use strict';
var roomNumber = window.pageStatus.mainForm.querySelector('#room_number');
var capacity = window.pageStatus.mainForm.querySelector('#capacity');
var housingType = window.pageStatus.mainForm.querySelector('#type');
var rentPrice = window.pageStatus.mainForm.querySelector('#price');
var timein = window.pageStatus.mainForm.querySelector('#timein');
var timeout = window.pageStatus.mainForm.querySelector('#timeout');


var checkSelect = function () {
  if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Количество гостей не должно превышать количество комнат');
  } else {
    capacity.setCustomValidity('');
  }
};

var getMinPriceOfRent = function (typeValue) {
  var minPrice;
  typeValue = housingType.value;
  switch (typeValue) {
    case 'bungalo':
      minPrice = '0';
      break;
    case 'flat':
      minPrice = '1000';
      break;
    case 'house':
      minPrice = '5000';
      break;
    case 'palace':
      minPrice = '10000';
      break;
    default:
      minPrice = '10000';
  }

  return (rentPrice.placeholder = minPrice);
};

var checkTimein = function (time) {
  var newTime;
  time = timein.value;
  switch (time) {
    case '12:00':
      newTime = '12:00';
      break;
    case '13:00':
      newTime = '13:00';
      break;
    case '14:00':
      newTime = '14:00';
      break;
    default:
      newTime = '12:00';
  }
  return (timeout.value = newTime);
};

var checkTimeout = function (time) {
  var newTime;
  time = timeout.value;
  switch (time) {
    case '12:00':
      newTime = '12:00';
      break;
    case '13:00':
      newTime = '13:00';
      break;
    case '14:00':
      newTime = '14:00';
      break;
    default:
      newTime = '12:00';
  }
  return (timein.value = newTime);
};

roomNumber.addEventListener('change', checkSelect);
capacity.addEventListener('change', checkSelect);
housingType.addEventListener('change', getMinPriceOfRent);
timein.addEventListener('change', checkTimein);
timeout.addEventListener('change', checkTimeout);

