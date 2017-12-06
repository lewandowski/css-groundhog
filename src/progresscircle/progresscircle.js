import $ from '../js-common-components/dollar';

const circleCircumference = 1514;

const init = () => {
  $('.progresscircle[data-progress]')
    .forEach((circle) => {
      const progress = circle.getAttribute('data-progress');
      const c = circle.querySelector('.progresscircle__progress');
      c.style['stroke-dashoffset'] = circleCircumference - (circleCircumference / 100 * progress);
    });
};

init();
