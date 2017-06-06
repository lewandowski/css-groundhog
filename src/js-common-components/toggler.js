import $ from './dollar';

const toggleClass = 'is-active';

$('[data-target]').forEach(el => {
  el.addEventListener('click', (ev) => {
    if ($(el.dataset.target)[0]) {
      ev.preventDefault();
      ev.stopPropagation();
      $(el.dataset.target)[0].classList.toggle(toggleClass);
    }
  });
});
