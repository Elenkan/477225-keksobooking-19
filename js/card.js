'use strict';
(function () {
  var similarCardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var ruble = '\u20BD';
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
  var getListOfFeatures = function (array) {
    var features = [];
    for (var i = 0; i < array.length; i++) {
      var element = getFeature(array[i]);
      features.push(element);
    }
    return features;
  };
  var renderCard = function (data) {
    var cardElement = similarCardTemplate.cloneNode(true);
    var popupClose = cardElement.querySelector('.popup__close');
    var filledPhoto = function (array) {
      var photoGallery = cardElement.querySelector('.popup__photos');
      var defaultPhoto = photoGallery.querySelector('.popup__photo');
      if (array.length !== 0) {
        defaultPhoto.src = array[0];
        for (var j = 1; j < array.length; j++) {
          var photoImg = defaultPhoto.cloneNode(true);
          photoImg.src = array[j];
          photoGallery.appendChild(photoImg);
        }
      } else {
        photoGallery.removeChild(defaultPhoto);
      }
    };
    cardElement.querySelector('.popup__text--address').textContent = data.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = data.offer.price + ruble + '/ночь';
    cardElement.querySelector('.popup__type').textContent = getTypeOfHouse(data.offer.type);
    if ((data.offer.rooms !== 0) && (data.offer.quests !== 0)) {
      cardElement.querySelector('.popup__text--capacity').textContent = data.offer.rooms + window.util.getEndingWord(data.offer.rooms, [' комната для ', ' комнаты для ', ' комнат для ']) + data.offer.guests + window.util.getEndingWord(data.offer.guests, [' гостя', ' гостей', ' гостей']);
    } else {
      cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
    }
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin +
    ', выезд до ' + data.offer.checkout;
    cardElement.querySelector('.popup__features').textContent = getListOfFeatures(data.offer.features);
    cardElement.querySelector('.popup__description').textContent = data.offer.description;
    filledPhoto(data.offer.photos);
    cardElement.querySelector('.popup__avatar').src = data.author.avatar;
    var closeCard = function () {
      cardElement.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    };
    var onPopupEscPress = function (evt) {
      if (evt.key === 'Escape') {
        closeCard();
      }
    };
    popupClose.addEventListener('click', closeCard);
    document.addEventListener('keydown', onPopupEscPress);
    return cardElement;
  };
  window.card = {
    renderCard: renderCard
  };
})();
