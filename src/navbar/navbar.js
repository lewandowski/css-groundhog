import $ from '../js-common-components/dollar';
import { debounce } from '../js-common-components/utils';


function clearResults(select) {
  const emptySearchResults = select;
  emptySearchResults.classList.remove('is-expanded');
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
}

function createListElement(result, opts) {
  console.log(result, opts);
  const opt = document.createElement('li');
  const link = document.createElement('a');
  link.setAttribute('href', result[opts.url]);
  link.textContent = result[opts.title];
  opt.appendChild(link);
  return opt;
}

function fetchResults(select, searchData, params, opts) {
  fetch(`${searchData}?${params}`)
    .catch(() => '{ results: [] }')
    .then(res => res.json())
    .then((searchResults) => {
      const results = searchResults[opts.resultskey];
      if (!results) {
        return;
      }
      const trimmedresults = results.slice(0, opts.maxresults);
      const elements = trimmedresults.map(el => createListElement(el, opts));
      window.requestAnimationFrame(() => {
        clearResults(select);
        select.classList.add('expandable', 'is-expanded');
        elements
          .forEach((el) => select.appendChild(el));
      });
    });
}

const initData = () => {
  $('.js-search').forEach(el => {
    const form = el.parentNode;
    const ul = form.appendChild(document.createElement('ul'));
    const searchData = form.action;
    ul.classList.add('search__results', 'expandable');
    const opts = {
      title: form.dataset.titleprop || 'title',
      url: form.dataset.urlprop || 'url',
      maxresults: parseInt(form.dataset.maxresults) || 10,
      resultskey: form.dataset.resultskey || 'results',
    };
    el.addEventListener('keyup', debounce(() => {
      const params = $('input', form)
        .map(input => `${input.name}=${input.value}`)
        .join('&');
      fetchResults(ul, searchData, params, opts);
    }, 150));
    el.addEventListener('blur', () => {
      clearResults(ul);
    });
  });
};

initData();
