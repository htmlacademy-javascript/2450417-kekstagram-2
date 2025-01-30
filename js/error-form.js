const templateSubmitErr = document.querySelector('#error').content.querySelector('.error');
const renderErrorForm = () => {
  const newErrorTemplateElement = templateSubmitErr.cloneNode(true);
  const errorButtonElement = newErrorTemplateElement.querySelector('.error__button');
  const innerTemplateElement = newErrorTemplateElement.querySelector('.error__inner');
  document.querySelector('body').append(newErrorTemplateElement);

  const onButtonClickError = () => {
    removeError();

  };
  const onCloseError = (evt) => {
    evt.preventDefault();
    if (! innerTemplateElement.contains(evt.target)) {
      removeError();
    }
  };

  const onEscapeError = (evt) => {
    if ((evt.key === 'Escape')){
      evt.stopPropagation();
      evt.preventDefault();
      removeError();
    }
  };


  document.addEventListener('click', onCloseError);
  errorButtonElement.addEventListener('click',onButtonClickError);
  document.addEventListener('keydown', onEscapeError);

  function removeError() {
    document.removeEventListener('keydown', onEscapeError);
    document.removeEventListener('click', onCloseError);
    newErrorTemplateElement.remove();
  }
};

export {renderErrorForm};
