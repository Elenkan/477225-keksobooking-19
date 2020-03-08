'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');
  var pinList = document.querySelector('.map__pins');
  var map = document.querySelector('.map');
  var popupClose = function () {
    if (map.querySelector('.map__card')) {
      map.removeChild(map.querySelector('.map__card'));
    }
  };
  var getFilterHousingType = function (typeValue) {
    var advs;
    typeValue = housingType.value;
    switch (typeValue) {
      case 'bungalo':
        popupClose();
        window.util.addHiddenClass(pinList.children);
        advs = window.load.adverts.filter(function (it) {
          return it.offer.type === 'bungalo';
        });
        break;
      case 'flat':
        popupClose();
        window.util.addHiddenClass(pinList.children);
        advs = window.load.adverts.filter(function (it) {
          return it.offer.type === 'flat';
        });
        break;
      case 'house':
        popupClose();
        window.util.addHiddenClass(pinList.children);
        advs = window.load.adverts.filter(function (it) {
          return it.offer.type === 'house';
        });
        break;
      case 'palace':
        popupClose();
        window.util.addHiddenClass(pinList.children);
        advs = window.load.adverts.filter(function (it) {
          return it.offer.type === 'palace';
        });
        break;
      default:
        popupClose();
        window.util.addHiddenClass(pinList.children);
        advs = window.load.adverts;
    }
    return window.pins.filledList(advs);
  };


  housingType.addEventListener('change', getFilterHousingType);

})();

