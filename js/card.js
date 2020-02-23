'use strict';
(function () {
  var similarCardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var ruble = '\u20BD';
  var map = document.querySelector('.map');
  var renderCard = function (adv) {
    var cardElement = similarCardTemplate.cloneNode(true);
    var popupClose = cardElement.querySelector('.popup__close');
    var cardClose = function () {
      cardElement.classList.add('hidden');
    };
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
    popupClose.addEventListener('click', cardClose);
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        cardClose();
      }
    });
    return cardElement;
  };

  var filledList = function (i) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(renderCard(window.data.adverts[i]));
    map.appendChild(fragment);
  };

  window.card = {
    filledList: filledList,
    renderCard: renderCard,
  };
})();
