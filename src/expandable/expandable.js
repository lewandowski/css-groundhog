import $ from '../js-common-components/dollar';
require('../js-common-components/accordion');

const toggleClass = 'is-active';

const init = () => {
  $('.expandable__trigger').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        el.closest('.expandable').classList.toggle(toggleClass);
      });
      el.setAttribute('data-initialized', true);
    }
  });

  $('.expandable--subnav').forEach(el => {
    const text = $('.is-current', el)[0].textContent;
    $('.expandable__trigger', el)[0].textContent = text;
  });
};

init();
