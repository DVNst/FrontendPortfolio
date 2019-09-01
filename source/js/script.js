'use strict';

(function() {
  document.body.onload = function() {
    var noJS = document.querySelectorAll('.no-js');
    var mainNavToggle = document.querySelector('.main-nav__toggle');

    noJS.forEach(function(item) {
      item.classList.remove('no-js');
    });
    mainNavToggle.classList.add('main-nav__toggle--closed');

    mainNavToggle.addEventListener('click', function(e) {
      e.preventDefault;
      mainNavToggle.classList.toggle('main-nav__toggle--closed');
    });
  }
})();