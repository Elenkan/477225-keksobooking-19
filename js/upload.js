'use strict';
(function () {
  var URL_UPLOAD = 'https://js.dump.academy/keksobooking';

  var errorMsgTemplate = document.querySelector('#error').content.querySelector('.error');
  var getErrorMsg = function () {
    var errorMsg = errorMsgTemplate.cloneNode(true);
    var errorMsgClose = function () {
      errorMsg.classList.add('hidden');
    };
    var closeButton = errorMsg.querySelector('.error__button');
    mainSpace.appendChild(errorMsg);
    closeButton.addEventListener('click', function () {
      errorMsgClose();
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        errorMsgClose();
      }
    });
    document.addEventListener('click', function () {
      errorMsgClose();
    });
  };

  window.upload = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.addEventListener('error', function () {
      onError(getErrorMsg());
    });

    xhr.open('POST', URL_UPLOAD);
    xhr.send(data);
  };

  var successMsgTemplate = document.querySelector('#success').content.querySelector('.success');
  var mainSpace = document.querySelector('main');
  var getSuccessMsg = function () {
    var successMsg = successMsgTemplate.cloneNode(true);
    var successMsgClose = function () {
      successMsg.classList.add('hidden');
    };
    mainSpace.appendChild(successMsg);
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        successMsgClose();
      }
    });
    document.addEventListener('click', function () {
      successMsgClose();
    });
  };


  window.pageStatus.mainForm.addEventListener('submit', function (evt) {
    window.upload(new FormData(window.pageStatus.mainForm), function () {
      getSuccessMsg();
      window.pageStatus.mainForm.reset();
      window.pageStatus.mainForm.classList.add('ad-form--disabled');
      window.pageStatus.formClose();
      window.pageStatus.mapClose();
      window.filter.hideElement();
    });
    evt.preventDefault();
  });
})();
