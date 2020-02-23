'use strict';
(function () {
  var NUMBER_OF_ELEMENTS = 8;
  var TITLES = ['Квартира в центре', 'Дом в спальном районе', 'Отличный вид', 'Тихий район', 'Рядом с парком', 'Отличные соседи', 'Своя парковка', 'Лофт'];
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var CHECKINS = ['12:00', '13:00', '14:00'];
  var CHECKOUTS = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var DESCRIPTIONS = ['Уютная квартира', 'Бесплатная парковка', 'Самая низкая цена', 'Можно с домашними животными', 'Есть вся кухонная техника', 'Большие комнаты', 'Большой балкон', 'Отдельный лифт'];
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  var getNewArrow = function () {
    var arr = [];
    for (var i = 0; i < NUMBER_OF_ELEMENTS; i++) {
      arr[i] =
      {
        'author': {
          'avatar': 'img/avatars/user' + window.util.nonRepeatingNumber(i) + '.png'
        },
        'offer': {
          'title': TITLES[window.util.randomElement(TITLES)],
          'address': '600, 350',
          'price': window.util.randomNumber(200, 15000),
          'type': TYPES[window.util.randomElement(TYPES)],
          'rooms': window.util.randomNumber(1, 4),
          'guests': window.util.randomNumber(1, 4),
          'checkin': CHECKINS[window.util.randomElement(CHECKINS)],
          'checkout': CHECKOUTS[window.util.randomElement(CHECKOUTS)],
          'features': window.util.newArrowLength(FEATURES),
          'description': DESCRIPTIONS[window.util.randomElement(DESCRIPTIONS)],
          'photos': window.util.newArrowLength(PHOTOS)
        },

        'location': {
          'x': window.util.randomNumber(0, document.querySelector('.map').clientWidth),
          'y': window.util.randomNumber(130, 630)
        }
      };
    }
    return arr;
  };

  var adverts = getNewArrow();
  window.data = {
    adverts: adverts
  };
})();
