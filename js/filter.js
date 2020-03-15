'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');
  // var housingPriceType = document.querySelector('#housing-price');
  // var housingRoomType = document.querySelector('#housing-rooms');
  // var housingQuestType = document.querySelector('#housing-guests');
  // var housingFeature = document.querySelector('#housing-features');
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


  var filterP = function (evt) {
    hideElement();
    var target = evt.target;
    var typeValue = target.value;
    var advs = window.load.adverts.filter(function (it) {
      return it.offer.type === typeValue;
    });
    return advs;
  };

  housingType.addEventListener('change', filterP);
  // housingPriceType.addEventListener('change', filterP);
  // housingRoomType.addEventListener('change', filterP);

  var uniquePins = filterP().filter(function (it, i) {
    return filterP.indexOf(it) !== i;
  });

  window.pins.filledList(uniquePins);

  window.filter = {
    hideElement: hideElement
  };

})();

