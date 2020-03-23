'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');
  var housingPrice = document.querySelector('#housing-price');
  var housingRoom = document.querySelector('#housing-rooms');
  var housingGuest = document.querySelector('#housing-guests');
  var housingFeature = document.querySelector('#housing-features');
  var checkboxes = housingFeature.querySelectorAll('input[type = "checkbox"]');
  var filterBox = document.querySelector('.map__filters');
  var pinList = document.querySelector('.map__pins');
  var list = pinList.children;

  var removeCard = function () {
    if (window.pins.map.querySelector('.map__card')) {
      window.pins.map.removeChild(window.pins.map.querySelector('.map__card'));
    }
  };
  var hideElement = function () {
    for (var i = list.length - 1; i >= 2; i--) {
      var pin = list[i];
      pinList.removeChild(pin);
    }
    removeCard();
  };

  var getHousingType = function (it) {
    var typeValue = housingType.value;
    if (typeValue !== 'any') {
      hideElement();
      return it.offer.type === typeValue;
    } else {
      hideElement();
      return it.offer.type;
    }
  };

  var getHousingPrice = function (it) {
    var priceValue = housingPrice.value;
    var condition;
    switch (priceValue) {
      case 'middle':
        hideElement();
        condition = ((it.offer.price >= 10000) && (it.offer.price <= 50000));
        break;
      case 'low':
        hideElement();
        condition = (it.offer.price < 10000);
        break;
      case 'high':
        hideElement();
        condition = (it.offer.price >= 50000);
        break;
      case 'any':
        hideElement();
        condition = it.offer.price;
        break;
      default:
        hideElement();
        condition = it.offer.price;
    }
    return condition;
  };

  var getHousingRoom = function (it) {
    var roomValue = housingRoom.value;
    if (roomValue !== 'any') {
      hideElement();
      roomValue = Number(roomValue);
      return it.offer.rooms === roomValue;
    } else {
      hideElement();
      return ((it.offer.rooms >= 0));
    }
  };

  var getHousingGuest = function (it) {
    var typeGuest = housingGuest.value;
    if (typeGuest !== 'any') {
      hideElement();
      typeGuest = Number(typeGuest);
      return it.offer.guests === typeGuest;
    } else {
      hideElement();
      return (it.offer.guests >= 0);
    }
  };

  var getHousingFeature = function (it) {
    var features = [];
    var newFeatures;
    for (var j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        var featureValue = checkboxes[j].value;
        features.push(featureValue);
        newFeatures = features.every(function (element) {
          hideElement();
          return it.offer.features.includes(element);
        });
      } else {
        newFeatures = features.every(function (element) {
          hideElement();
          return it.offer.features.includes(element);
        });
      }
    }
    return newFeatures;
  };

  var getFilteredAdverts = window.debounce(function () {
    var advertsArray = window.load.adverts
    .filter(getHousingType)
    .filter(getHousingPrice)
    .filter(getHousingRoom)
    .filter(getHousingGuest)
    .filter(getHousingFeature);
    return (window.pins.filledList(advertsArray));
  });

  filterBox.addEventListener('change', getFilteredAdverts);

  window.filter = {
    hideElement: hideElement,
    list: list,
    filterBox: filterBox
  };

})();

