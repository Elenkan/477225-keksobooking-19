'use strict';
var roomNumber = window.pageStatus.mainForm.querySelector('#room_number');
var capacity = window.pageStatus.mainForm.querySelector('#capacity');

var checkSelect = function () {
  if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Количество гостей не должно превышать количество комнат');
  } else {
    capacity.setCustomValidity('');
  }
};
roomNumber.addEventListener('change', checkSelect);
capacity.addEventListener('change', checkSelect);
