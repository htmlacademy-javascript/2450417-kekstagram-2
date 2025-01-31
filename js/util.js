const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTemplateElement = document.querySelector('#data-error').content;
const body = document.body;
const errorLoadDataAreaElement = body.querySelector('.data-error');

const getRandomInteger = (min,max) => {
  const lower = Math.ceil (Math.min(min,max));
  const upper = Math.floor (Math.max(min,max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getSortRandom = () => getRandomInteger(-1, 1);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isUniqueArray = (arrays) => new Set(arrays).size === arrays.length;

const renderError = () => {
  const errorArea = errorLoadDataTemplateElement.cloneNode(true);
  body.append(errorArea);
  setTimeout(() => {
    errorLoadDataAreaElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeoutDelay);
  };
};

export {getRandomInteger,isEscapeKey,isUniqueArray,renderError,debounce,getSortRandom};

