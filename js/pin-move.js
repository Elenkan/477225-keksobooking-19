'use strict';
(function () {


  window.pageStatus.mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinate = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoordinate.x - moveEvt.clientX,
        y: startCoordinate.y - moveEvt.clientY
      };

      startCoordinate = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var mainPinY = window.pageStatus.mainPin.offsetTop - shift.y;
      var mainPinX = window.pageStatus.mainPin.offsetLeft - shift.x;

      if (mainPinY > 630) {
        mainPinY = 630;
      } else if (mainPinY < 130) {
        mainPinY = 130;
      }
    var widthMap = document.querySelector('.map').offsetWidth - document.querySelector('.map').offsetLeft;
      if (mainPinX < 0) {
        mainPinX = 0;
      } else if (mainPinX > widthMap) {
        mainPinX = widthMap;
      }


      window.pageStatus.mainPin.style.top = mainPinY + 'px';
      window.pageStatus.mainPin.style.left = mainPinX + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
