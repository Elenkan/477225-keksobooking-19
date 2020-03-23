'use strict';
(function () {
  var URL_UPLOAD = 'https://js.dump.academy/keksobooking';
  var resetForm = document.querySelector('.ad-form__reset');

  var errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  var getErrorMessage = function () {
    var errorMessage = errorMessageTemplate.cloneNode(true);
    var errorMessageClose = function () {
      errorMessage.classList.add('hidden');
    };
    var closeButton = errorMessage.querySelector('.error__button');
    mainSpace.appendChild(errorMessage);
    closeButton.addEventListener('click', function () {
      errorMessageClose();
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        errorMessageClose();
      }
    });
    document.addEventListener('click', function () {
      errorMessageClose();
    });
  };

  window.upload = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.addEventListener('error', function () {
      onError(getErrorMessage());
    });

    xhr.open('POST', URL_UPLOAD);
    xhr.send(data);
  };

  var successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  var mainSpace = document.querySelector('main');
  var getSuccessMessage = function () {
    var successMessage = successMessageTemplate.cloneNode(true);
    var successMessageClose = function () {
      successMessage.classList.add('hidden');
    };
    mainSpace.appendChild(successMessage);
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        successMessageClose();
      }
    });
    document.addEventListener('click', function () {
      successMessageClose();
    });
  };


  window.pageStatus.mainForm.addEventListener('submit', function (evt) {
    window.upload(new FormData(window.pageStatus.mainForm), function () {
      getSuccessMessage();
      window.pageStatus.mainForm.reset();
      window.pageStatus.mainForm.classList.add('ad-form--disabled');
      window.pageStatus.formClose();
      window.pageStatus.mapClose();
      window.filter.hideElement();
      window.pageStatus.mainPin.addEventListener('mousedown', window.pageStatus.onMainPinLeftClick);
      window.pageStatus.mainPin.addEventListener('keydown', window.pageStatus.onMainPinEnterPress);
      window.filter.filterBox.reset();
    });
    evt.preventDefault();
  });
  resetForm.addEventListener('click', function () {
    window.pageStatus.mainForm.reset();
    window.pageStatus.mainForm.classList.add('ad-form--disabled');
    window.pageStatus.formClose();
    window.pageStatus.mapClose();
    window.filter.hideElement();
    window.pageStatus.mainPin.addEventListener('mousedown', window.pageStatus.onMainPinLeftClick);
    window.pageStatus.mainPin.addEventListener('keydown', window.pageStatus.onMainPinEnterPress);
    window.filter.filterBox.reset();
  });
})();
