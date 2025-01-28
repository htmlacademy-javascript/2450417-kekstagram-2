const getRandomInteger = (a,b) => {
  const lower = Math.ceil (Math.min(a,b));
  const upper = Math.floor (Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getSortRandom = () => getRandomInteger(-1, 1);


const isEscapeKey = (evt) => evt.key === 'Escape';
const isUniqueArray = (array) => new Set(array).size === array.length;

const REMOVE_MESSAGE_TIMEOUT = 5000;
const errorLoadDataTemplate = document.querySelector('#data-error').content;
const body = document.body;
const errorLoadDataArea = body.querySelector('.data-error');

const renderError = () => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  body.append(errorArea);
  setTimeout(() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeoutDelay);
  };
}

export {getRandomInteger,isEscapeKey,isUniqueArray,renderError,debounce,getSortRandom};

