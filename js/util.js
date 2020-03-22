'use strict';
(function () {
  var getMaxLength = function (arrayLength, maxNumber) {
    var newArrowLength = arrayLength > maxNumber ? maxNumber : arrayLength;
    return newArrowLength;
  };

  var getRandomNumber = function (min, max) {
    return ((Math.round(Math.random() * (max - min + 1)) + min));
  };

  var getRandomElement = function (array) {
    return Math.round(Math.random() * (array.length - 1));
  };

  var getNewArrowLength = function (array) {
    var quantity = array.length - 1;
    array.length = getRandomNumber(1, quantity);
    return array;
  };

  var setDisabled = function (array) {
    array.forEach(function (element) {
      element.setAttribute('disabled', 'disabled');
    });
  };

  var removeDisabled = function (array) {
    array.forEach(function (element) {
      element.removeAttribute('disabled');
    });
  };

  var addClass = function (array, className) {
    for (var i = 2; i < array.length; i++) {
      array[i].classList.add(className);
    }
  };

  var removeClass = function (array, className) {
    for (var i = 2; i < array.length; i++) {
      array[i].classList.remove(className);
    }
  };

  var getEndingWord = function (number, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  window.util = {
    randomNumber: getRandomNumber,
    randomElement: getRandomElement,
    newArrowLength: getNewArrowLength,
    setDisabled: setDisabled,
    removeDisabled: removeDisabled,
    addClass: addClass,
    removeClass: removeClass,
    getMaxLength: getMaxLength,
    getEndingWord: getEndingWord
  };
})();
