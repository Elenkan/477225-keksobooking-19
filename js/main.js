'use strict';
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinList = document.querySelector('.map__pins');
var fields = document.querySelectorAll('fieldset');
var mapFilter = document.querySelector('.map__filters');
var mainForm = document.querySelector('.ad-form');
var mainPin = document.querySelector('.map__pin--main');
var MAIN_PIN_HEIGHT = 84;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var NUMBER_OF_ELEMENTS = 8;
var TITLES = ['Квартира в центре', 'Дом в спальном районе', 'Отличный вид', 'Тихий район', 'Рядом с парком', 'Отличные соседи', 'Своя парковка', 'Лофт'];
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var CHECKINS = ['12:00', '13:00', '14:00'];
var CHECKOUTS = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTIONS = ['Уютная квартира', 'Бесплатная парковка', 'Самая низкая цена', 'Можно с домашними животными', 'Есть вся кухонная техника', 'Большие комнаты', 'Большой балкон', 'Отдельный лифт'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var address = mainForm.querySelector('#address');
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

var adverts = getNewArrow();

var renderAdvert = function (adv) {
  var pinElement = similarPinTemplate.cloneNode(true);
  pinElement.querySelector('img').src = adv.author.avatar;
  pinElement.querySelector('img').alt = adv.offer.title;
  pinElement.style = 'left: ' + (adv.location.x + (PIN_WIDTH / 2)) + 'px; top: ' + (adv.location.y + PIN_HEIGHT) + 'px';
  return pinElement;
};

var filledList = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < adverts.length; i++) {
    fragment.appendChild(renderAdvert(adverts[i]));
  }
  pinList.appendChild(fragment);
};

var mapOpen = function () {
  document.querySelector('.map').classList.remove('map--faded');
  filledList();
};

var mapClose = function () {
  document.querySelector('.map').classList.add('map--faded');
};


var getCenterCoordinatePin = function () {
  var mainPinX = Math.round(mainPin.getBoundingClientRect().left + (mainPin.offsetWidth / 2));
  var mainPinY = Math.round(mainPin.getBoundingClientRect().top + (mainPin.offsetHeight / 2));
  return (mainPinX + ', ' + mainPinY);
};

var formClose = function () {
  mapFilter.classList.add('.ad-form--disabled');
  address.value = getCenterCoordinatePin();
  for (var i = 0; i < fields.length; i++) {
    fields[i].setAttribute('disabled', 'disabled');
  }
};

var getBottomCoordinatePin = function () {
  var mainPinX = Math.round(mainPin.getBoundingClientRect().left + (mainPin.offsetWidth / 2));
  var mainPinY = mainPin.getBoundingClientRect().top + MAIN_PIN_HEIGHT;
  return (mainPinX + ', ' + mainPinY);
};

var formOpen = function () {
  mapFilter.classList.remove('ad-form--disabled');
  mainForm.classList.remove('ad-form--disabled');
  for (var i = 0; i < fields.length; i++) {
    fields[i].removeAttribute('disabled');
  }
  address.value = getBottomCoordinatePin();
};

mapClose();
formClose();

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.which === 1) {
    mapOpen();
    formOpen();
  }
});

mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    mapOpen();
    formOpen();
  }
});

var roomNumber = mainForm.querySelector('#room_number');
var capacity = mainForm.querySelector('#capacity');

var m = function () {
  if ((roomNumber.value = 1) && (capacity.value >= 2)) {
    console.log('f');
  }
};
m();
