let popup = document.getElementById('popup-window'),
    popupToggle = document.getElementById('popup-btn'),
    popupClose = document.querySelector('.close-popup');

    popupToggle.onclick = function() {
      popup.style.display="block";
    };

    popupClose.onclick = function () {
      popup.style.display="none";
    };

    window.onclick = function (e) {
      if(e.target == popup) {
      popup.style.display="none";
      };
    };