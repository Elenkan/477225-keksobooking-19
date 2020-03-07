'use strict';
(function () {
  var housingType = document.querySelector('#housing-type');

  var getFilterHousingType = function () {
    if (housingType.value === 'bungalo') {
      var advs = window.load.adverts.filter(function (it) {
        return it.offer.type === 'bungalo';
      });
    }
    window.pins.filledList(advs, advs.length);
  };
  housingType.addEventListener('change', getFilterHousingType);

})();

