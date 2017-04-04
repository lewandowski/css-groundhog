import $ from '../js-common-components/dollar';
import { debounce } from '../js-common-components/utils';

function fetchData(select) {
  const rq = { url: '/assets/data/search_results.json',
    onLoad: (e) => {
      console.log('fetch data');
      const options = (JSON.parse(e.target.responseText)).options;
      if (options.length > 0) {
        for (let i = 0; i < options.length; i++) {
          const opt = document.createElement('li');
          opt.value = options[i].value;
          opt.innerHTML = options[i].value;
          select.appendChild(opt);
        }
        select.classList.remove('expandable');
        select.classList.add('is-expanded');
      }
    },
  };

  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', rq.onLoad.bind(this));

  xhr.open('GET', rq.url);
  xhr.send();
}


const initData = () => {
  $('input').forEach(el => {
    const ul = el.parentNode.appendChild(document.createElement('ul'));
    ul.classList.add('search__results');
    ul.classList.add('expandable');
    el.addEventListener('keyup', debounce((ev) => {
      ul.innerHTML = '';
      console.log(ev);
      fetchData(ul);
    }, 250));
    el.addEventListener('blur', (e) => {
      console.log(e);
      ul.innerHTML = '';
      ul.classList.remove('is-expanded');
    });
  });
};

initData();
