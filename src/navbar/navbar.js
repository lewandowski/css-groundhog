import $ from '../js-common-components/dollar';
import { debounce } from '../js-common-components/utils';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';

const inputField = document.querySelector('.inputfield--search');

function clearResults(select) {
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
}

function createListElement(result, opts) {
  const opt = document.createElement('li');
  const link = document.createElement('a');
  link.setAttribute('href', result[opts.url]);
  link.classList.add('search__results__link');
  link.textContent = result[opts.title];
  opt.appendChild(link);
  return opt;
}

function fetchResults(select, searchData, params, opts) {
  if (!window.Promise) {
    window.Promise = Promise;
  }

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
        elements
          .forEach((el) => select.appendChild(el));
      });
    });
}

const getfunc = (keyCode, indexOfSelected, length) => {
  switch (keyCode) {
    case 38:
      return (((indexOfSelected - 1) % length) + length) % length;
    default:
      return (((indexOfSelected + 1) % length) + length) % length;
  }
};

const getnumb = (keyCode, searchResultLinks) => {
  switch (keyCode) {
    case 38:
      return searchResultLinks.length - 1;
    default:
      return 0;
  }
};

const handleKeydown = (ev) => {
  if (inputField.classList.contains('has-focus') && (ev.keyCode === 40 || ev.keyCode === 38)) {
    ev.preventDefault();
    ev.stopPropagation();
    const searchResults = document.querySelector('.search__results');
    const selectedLink = searchResults.querySelector('a:focus');

    const searchResultLinks = searchResults.querySelectorAll('a');
    searchResultLinks[(getnumb(ev.keyCode, searchResultLinks))].focus();

    if (selectedLink) {
      const indexOfSelected = Array.prototype.indexOf.call(searchResultLinks, selectedLink) || 0;
      searchResultLinks[getfunc(ev.keyCode, indexOfSelected, searchResultLinks.length)].focus();
    }
  }
  return false;
};

const initSearch = () => {
  $('.js-search:not([action=""])').forEach(el => {
    const form = el.parentNode;
    const ul = form.appendChild(document.createElement('ul'));
    ul.addEventListener('click', (e) => e.stopPropagation());
    ul.classList.add('search__results');

    const searchData = form.dataset.results || form.action;
    const opts = {
      title: form.dataset.titleprop || 'title',
      url: form.dataset.urlprop || 'url',
      maxresults: parseInt(form.dataset.maxresults, 10) || 10,
      resultskey: form.dataset.resultskey || 'results',
    };

    inputField.addEventListener('keyup', debounce(() => {
      const params = $('input', form)
        .map(input => `${input.name}=${input.value}`)
        .join('&');
      fetchResults(ul, searchData, params, opts);
      inputField.classList.add('has-focus');
    }, 150));

    document.body.addEventListener('click', () => {
      inputField.classList.remove('has-focus');
    });

    document.body.addEventListener('keydown', handleKeydown);
  });
};

const getSize = () => {
  const size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
  return size.replace(/[\W]/g, '');
};

const init = () => {
  $('.expandable__trigger.nav__link').forEach(el => {
    el.addEventListener('click', (ev) => {
      const size = getSize();
      if (size === 'widescreen') {
        ev.stopImmediatePropagation();
      }
    });
  });
};

initSearch();
init();
