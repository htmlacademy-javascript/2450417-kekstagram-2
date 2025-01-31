const templateSubmitErr = document.querySelector('#error').content.querySelector('.error');
const renderErrorForm = () => {
  const newErrorTemplateElement = templateSubmitErr.cloneNode(true);
  const errorButtonElement = newErrorTemplateElement.querySelector('.error__button');
  const innerTemplateElement = newErrorTemplateElement.querySelector('.error__inner');
  document.querySelector('body').append(newErrorTemplateElement);

  const onErrorButtonClick = () => {
    removeError();

  };
  const onDocumentClick = (evt) => {
    evt.preventDefault();
    if (! innerTemplateElement.contains(evt.target)) {
      removeError();
    }
  };

  const onEscapeKey = (evt) => {
    if ((evt.key === 'Escape')){
      evt.stopPropagation();
      evt.preventDefault();
      removeError();
    }
  };


  document.addEventListener('click', onDocumentClick);
  errorButtonElement.addEventListener('click',onErrorButtonClick);
  document.addEventListener('keydown', onEscapeKey);

  function removeError() {
    document.removeEventListener('keydown', onEscapeKey);
    document.removeEventListener('click', onDocumentClick);
    newErrorTemplateElement.remove();
  }
};

export {renderErrorForm};
