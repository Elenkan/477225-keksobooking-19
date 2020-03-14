'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');
  var housingPriceType = document.querySelector('#housing-price');
  var housingRoomType = document.querySelector('#housing-rooms');
  var housingQuestType = document.querySelector('#housing-guests');
  //var housingFeature = document.querySelector('#housing-features');
  var pinList = document.querySelector('.map__pins');
  var list = pinList.children;
  var map = document.querySelector('.map');
  var popupClose = function () {
    if (map.querySelector('.map__card')) {
      map.removeChild(map.querySelector('.map__card'));
    }
  };
  var hideElement = function () {
    for (var i = list.length - 1; i >= 2; i--) {
      var pin = list[i];
      pinList.removeChild(pin);
    }
    popupClose();
  };

  var filterPin = function () {
    var advs;
    var getFilterHousingType = function (typeValue) {
      typeValue = housingType.value;
      switch (typeValue) {
        case 'bungalo':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.type === 'bungalo';
          });
          break;
        case 'flat':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.type === 'flat';
          });
          break;
        case 'house':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.type === 'house';
          });
          break;
        case 'palace':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.type === 'palace';
          });
          break;
        case 'any':
          hideElement();
          advs = window.load.adverts;
          break;
        default:
          hideElement();
      }
      return advs;
    };

    var getFilterHousingPrice = function (priceValue) {
      priceValue = housingPriceType.value;
      switch (priceValue) {
        case 'middle': /* 10000-50000*/
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return ((it.offer.price >= 10000) && (it.offer.price < 50000));
          });
          break;
        case 'low':/* до 1000*/
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return (it.offer.price < 10000);
          });
          break;
        case 'high':/* от50000*/
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return (it.offer.price >= 50000);
          });
          break;
        case 'any':
          hideElement();
          advs = window.load.adverts;
          break;
        default:
          hideElement();
      }
      return advs;
    };

    var getFilterHousingRoom = function (roomValue) {
      roomValue = housingRoomType.value;
      switch (roomValue) {
        case '1':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.rooms === 1;
          });
          break;
        case '2':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.rooms === 2;
          });
          break;
        case '3':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.rooms === 3;
          });
          break;
        case 'any':
          hideElement();
          advs = window.load.adverts.filter(function (it) {
            return it.offer.rooms > 0;
          });
          break;
        default:
          hideElement();
      }
      return advs;
    };

    // var getFilterHousingGuest = function (quest) {
    //   quest = housingQuestType.value;
    //   switch (quest) {
    //     case '0':
    //       hideElement();
    //       advs = window.load.adverts.filter(function (it) {
    //         return it.offer.rooms === 0;
    //       });
    //       break;
    //     case '1':
    //       hideElement();
    //       advs = window.load.adverts.filter(function (it) {
    //         return it.offer.rooms === 1;
    //       });
    //       break;
    //     case '2':
    //       hideElement();
    //       advs = window.load.adverts.filter(function (it) {
    //         return it.offer.rooms === 2;
    //       });
    //       break;
    //     case 'any':
    //       hideElement();
    //       advs = window.load.adverts;
    //       break;
    //     default:
    //       hideElement();
    //   }
    //   return advs;
    // };


    var a = getFilterHousingType();
    var b = getFilterHousingPrice();
    var c = getFilterHousingRoom();

    var filterPins = [].concat(a, b, c);


    var uniquePins = filterPins.filter(function (it, i) {
      return filterPins.indexOf(it) !== i;
    });


    return window.pins.filledList(uniquePins);

  };

  housingType.addEventListener('change', filterPin);
  housingPriceType.addEventListener('change', filterPin);
  housingRoomType.addEventListener('change', filterPin);
  // housingQuestType.addEventListener('change', filterPin);

})();

