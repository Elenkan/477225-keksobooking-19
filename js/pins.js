'use strict';
(function () {
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinList = document.querySelector('.map__pins');
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var map = document.querySelector('.map');
  var renderAdvert = function (adv) {
    var pinElement = similarPinTemplate.cloneNode(true);
    pinElement.querySelector('img').src = adv.author.avatar;
    pinElement.querySelector('img').alt = adv.offer.title;
    pinElement.style = 'left: ' + (adv.location.x + (PIN_WIDTH / 2)) + 'px; top: ' + (adv.location.y + PIN_HEIGHT) + 'px';
    var card = function () {
      map.appendChild(window.card.renderCard(adv));
    };
    pinElement.addEventListener('click', card);
    pinElement.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        card();
      }
    });
    return pinElement;
  };

  var filledList = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.data.adverts.length; i++) {
      fragment.appendChild(renderAdvert(window.data.adverts[i]));
    }
    pinList.appendChild(fragment);
  };

  window.pins = {
    filledList: filledList
  };
})();
