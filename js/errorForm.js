const templateSubmitErr = document.querySelector('#error').content.querySelector('.error');
export const renderErrorForm = () => {
  const newErrorTemplate = templateSubmitErr.cloneNode(true);
  const errorButton = newErrorTemplate.querySelector('.error__button');
  const innerTemplate = newErrorTemplate.querySelector('.error__inner');
  document.querySelector('body').append(newErrorTemplate);

  const onButtonClickError = () => {
    removeError();

  };
  const onCloseError = (evt) => {
    evt.preventDefault();
    if (! innerTemplate.contains(evt.target)) {
      removeError();
    }
  };

  function onEscapeError(evt) {
    if ((evt.key === 'Escape')){
      evt.stopPropagation();
      evt.preventDefault();
      removeError();
    }
  }


  document.addEventListener('click', onCloseError);
  errorButton.addEventListener('click',onButtonClickError);
  document.addEventListener('keydown', onEscapeError);

  function removeError() {
    document.removeEventListener('keydown', onEscapeError);
    document.removeEventListener('click', onCloseError);
    newErrorTemplate.remove();
  }
};
//
