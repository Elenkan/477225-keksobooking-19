'use strict';
(function () {
  var similarCardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var ruble = '\u20BD';
  var map = document.querySelector('.map');
  var getTypeOfHouse = function (type) {
    var houseType;
    switch (type) {
      case 'flat':
        houseType = 'Квартира';
        break;
      case 'bungalo':
        houseType = 'Бунгало';
        break;
      case 'house':
        houseType = 'Дом';
        break;
      case 'palace':
        houseType = 'Дворец';
        break;
      default:
        houseType = 'Неизвестный тип жилья';
    }
    return houseType;
  };

  var getFeature = function (feature) {
    var typeFeature;
    switch (feature) {
      case 'wifi':
        typeFeature = 'Wi-Fi';
        break;
      case 'dishwasher':
        typeFeature = ' посудомоечная машина';
        break;
      case 'parking':
        typeFeature = ' парковка';
        break;
      case 'washer':
        typeFeature = ' стиральная машина';
        break;
      case 'elevator':
        typeFeature = ' лифт';
        break;
      case 'conditioner':
        typeFeature = ' кондиционер';
        break;
      default:
        typeFeature = 'неизвестный тип удобства';
    }
    return typeFeature;
  };
  var getListOfFeatures = function (arr) {
    var someArr = [];
    for (var i = 0; i < arr.length; i++) {
      var el = getFeature(arr[i]);
      someArr.push(el);
    }
    return someArr;
  };
  var renderCard = function (adv) {
    var cardElement = similarCardTemplate.cloneNode(true);
    var popupClose = cardElement.querySelector('.popup__close');

    var filledPhoto = function (arr) {
      var photoGallery = cardElement.querySelector('.popup__photos');
      var defaultPhoto = photoGallery.querySelector('.popup__photo');
      if (arr.length !== 0) {
        defaultPhoto.src = arr[0];
        for (var i = 1; i < arr.length; i++) {
          var photoImg = defaultPhoto.cloneNode(true);
          photoImg.src = arr[i];
          photoGallery.appendChild(photoImg);
        }
      } else {
        photoGallery.removeChild(defaultPhoto);
      }
    };
    var cardClose = function () {
      cardElement.classList.add('hidden');
    };
    cardElement.querySelector('.popup__title').textContent = adv.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = adv.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = adv.offer.price + ruble + '/ночь';
    cardElement.querySelector('.popup__type').textContent = getTypeOfHouse(adv.offer.type);
    cardElement.querySelector('.popup__text--capacity').textContent = adv.offer.rooms + ' комнаты для ' + adv.offer.guests + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + adv.offer.checkin +
    ', выезд до ' + adv.offer.checkout;
    cardElement.querySelector('.popup__features').textContent = getListOfFeatures(adv.offer.features);
    cardElement.querySelector('.popup__description').textContent = adv.offer.description;
    filledPhoto(adv.offer.photos);
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
