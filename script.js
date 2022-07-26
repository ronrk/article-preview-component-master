'use strict';

const shareBtn = document.querySelector('.icon-share');
const shareEl = document.querySelector('.share');

shareBtn.addEventListener('click', () => {
  shareEl.classList.toggle('hide');
});
