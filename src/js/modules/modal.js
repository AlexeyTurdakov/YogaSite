function modal() {
  'use strict';
  
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    knowMore = document.querySelectorAll('.description-btn');

  function callModalWindow() {
    if (overlay.style.display == 'block') {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    } else {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
  }

  more.addEventListener('click', callModalWindow);
  knowMore.forEach(item => item.addEventListener('click', callModalWindow));
  close.addEventListener('click', callModalWindow);
}

export default modal;
