'use strict';
(function () {
  var getMaxLength = function (arrLength, maxNumber) {
    var lengthArr = arrLength > maxNumber ? maxNumber : arrLength;
    return lengthArr;
  };

  var getRandomNumber = function (min, max) {
    return ((Math.round(Math.random() * (max - min + 1)) + min));
  };

  var getRandomElement = function (arr) {
    return Math.round(Math.random() * (arr.length - 1));
  };

  var getNewArrowLength = function (arr) {
    var quantity = arr.length - 1;
    arr.length = getRandomNumber(1, quantity);
    return arr;
  };

  var getNonRepeatingNumber = function (number) {
    var n = number + 1;
    var b = '0' + n;
    return b;
  };

  var setDisabled = function (arr) {
    arr.forEach(function (element) {
      element.setAttribute('disabled', 'disabled');
    });
  };

  var removeDisabled = function (arr) {
    arr.forEach(function (element) {
      element.removeAttribute('disabled');
    });
  };

  var addHiddenClass = function (arr) {
    for (var i = 2; i < arr.length; i++) {
      arr[i].classList.add('hidden');
    }
  };

  window.util = {
    randomNumber: getRandomNumber,
    randomElement: getRandomElement,
    newArrowLength: getNewArrowLength,
    nonRepeatingNumber: getNonRepeatingNumber,
    setDisabled: setDisabled,
    removeDisabled: removeDisabled,
    addHiddenClass: addHiddenClass,
    getMaxLength: getMaxLength,
  };
})();
