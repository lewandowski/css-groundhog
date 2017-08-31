import $ from '../js-common-components/dollar';
require('../js-common-components/accordion');

const toggleClass = 'is-active';

const handler = (el) => (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  el.closest('.expandable').classList.toggle(toggleClass);
};

const init = () => {
  $('.expandable__trigger').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('click', handler(el));
      el.setAttribute('data-initialized', true);
    }
  });
};

init();
