'use strict';

const teamList = document.querySelector('.faq__list');

const firstTeamItem = document.querySelector('.faq__item');
firstTeamItem.classList.add('faq__item--active');


teamList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('faq__question')) {
    containsClass('faq__item--active', e.target.parentNode);
  }
}
);

function containsClass(className, event) {
  if (event.classList.contains(className))
    event.classList.remove(className);
  else {
    clearClass(className);
    event.classList.add(className);
  }
}