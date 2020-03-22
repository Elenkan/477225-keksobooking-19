'use strict';
(function () {
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinList = document.querySelector('.map__pins');
  var map = document.querySelector('.map');
  var QUANTITY = 5;
  var renderAdvert = function (array) {
    if (array.offer) {
      var pinElement = similarPinTemplate.cloneNode(true);
      pinElement.querySelector('img').src = array.author.avatar;
      pinElement.querySelector('img').alt = array.offer.title;
      pinElement.style = 'left: ' + array.location.x + 'px; top: ' + array.location.y + 'px';
      var addPinActiveClass = function () {
        for (var i = 2; i < window.filter.list.length; i++) {
          if (window.filter.list[i].classList.contains('map__pin--active')) {
            window.filter.list[i].classList.remove('map__pin--active');
          }
        }
        pinElement.classList.add('map__pin--active');
      };
      var createCard = function () {
        addPinActiveClass();
        if (map.querySelector('.map__card')) {
          map.removeChild(map.querySelector('.map__card'));
        }
        map.appendChild(window.card.renderCard(array));
      };
      pinElement.addEventListener('click', createCard);
      pinElement.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          createCard();
        }
      });
    }
    return pinElement;
  };
  var filledList = function (array) {
    var fragment = document.createDocumentFragment();
    var arrayLength = window.util.getMaxLength(array.length, QUANTITY);
    for (var j = 0; j < arrayLength; j++) {
      fragment.appendChild(renderAdvert(array[j]));
    }
    pinList.appendChild(fragment);
  };

  window.pins = {
    filledList: filledList,
    map: map
  };
})();
