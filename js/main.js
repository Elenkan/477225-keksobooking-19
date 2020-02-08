'use strict';
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinList = document.querySelector('.map__pins');
var NUMBER_OF_ELEMENTS = 8;
var TITLES = ['Квартира в центре', 'Дом в спальном районе', 'Отличный вид', 'Тихий район', 'Рядом с парком', 'Отличные соседи', 'Своя парковка', 'Лофт'];
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var CHECKINS = ['12:00', '13:00', '14:00'];
var CHECKOUTS = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTIONS = ['Уютная квартира', 'Бесплатная парковка', 'Самая низкая цена', 'Можно с домашними животными', 'Есть вся кухонная техника', 'Большие комнаты', 'Большой балкон', 'Отдельный лифт'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var getRandomNumber = function (min, max) {
  return ((Math.round(Math.random() * (max - min + 1)) + min));
};
var getRandomElement = function (arr) {
  return Math.round(Math.random() * (arr.length - 1));
};

var getNewArrowLength = function (arr) {
  var quantity = arr.length - 1;
  arr.length = getRandomNumber(1, quantity);
  return arr;
};

var getNonRepeatingNumber = function (number) {
  var n = number + 1;
  var b = '0' + n;

  return b;
};

var getNewArrow = function () {
  var arr = [];
  for (var i = 0; i < NUMBER_OF_ELEMENTS; i++) {
    arr[i] =
    {
      'author': {
        'avatar': 'img/avatars/user' + getNonRepeatingNumber(i) + '.png'
      },
      'offer': {
        'title': TITLES[getRandomElement(TITLES)],
        'address': '600, 350',
        'price': getRandomNumber(200, 15000),
        'type': TYPES[getRandomElement(TYPES)],
        'rooms': getRandomNumber(1, 4),
        'guests': getRandomNumber(1, 4),
        'checkin': CHECKINS[getRandomElement(CHECKINS)],
        'checkout': CHECKOUTS[getRandomElement(CHECKOUTS)],
        'features': getNewArrowLength(FEATURES),
        'description': DESCRIPTIONS[getRandomElement(DESCRIPTIONS)],
        'photos': getNewArrowLength(PHOTOS)
      },

      'location': {
        'x': getRandomNumber(0, document.querySelector('.map').clientWidth),
        'y': getRandomNumber(130, 630)
      }
    };
  }
  return arr;
};

document.querySelector('.map').classList.remove('map--faded');

var adverts = getNewArrow();

var renderAdvert = function (adv) {
  var pinElement = similarPinTemplate.cloneNode(true);
  pinElement.querySelector('img').src = adv.author.avatar;
  pinElement.querySelector('img').alt = adv.offer.title;
  pinElement.style = 'left: ' + adv.location.x + 'px; top: ' + adv.location.y + 'px';
  return pinElement;
};

var filledList = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < adverts.length; i++) {
    fragment.appendChild(renderAdvert(adverts[i]));
  }
  pinList.appendChild(fragment);
};

filledList();
