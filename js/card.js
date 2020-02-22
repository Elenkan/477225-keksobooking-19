'use strict';
(function () {
  var similarCardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var ruble = '\u20BD';
  var map = document.querySelector('.map');
  var renderCard = function (adv) {
    var cardElement = similarCardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = adv.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = adv.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = adv.offer.price + ruble + '/ночь';
    cardElement.querySelector('.popup__type').textContent = adv.offer.type;
    cardElement.querySelector('.popup__text--capacity').textContent = adv.offer.rooms + ' комнаты для ' + adv.offer.guests + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + adv.offer.checkin +
    ', выезд до ' + adv.offer.checkout;
    cardElement.querySelector('.popup__features').textContent = adv.offer.features;
    cardElement.querySelector('.popup__description').textContent = adv.offer.description;
    // cardElement.querySelector('.popup__photos').textContent = ;
    cardElement.querySelector('.popup__avatar').src = adv.author.avatar;
    return cardElement;
  };

  var adverts = window.pins.adverts;
  var filledMap = function () {
    var fragment = document.createDocumentFragment();
    // for (var i = 0; i < adverts.length; i++) {

    // }
    fragment.appendChild(renderCard(adverts[1]));
    map.appendChild(fragment);
  };

  window.card = {
    filledMap: filledMap
  };
})();
