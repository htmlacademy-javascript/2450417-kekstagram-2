const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const renderSuccessForm = () => {

  const newSuccessTemplateElement = successTemplateElement.cloneNode(true);
  const successButtonElement = newSuccessTemplateElement.querySelector('.success__button');
  const newSuccessSectionElement = newSuccessTemplateElement.querySelector('.success__inner');
  document.querySelector('body').append(newSuccessTemplateElement);


  const onSuccessOutsideClick = (evt) => {
    if (! newSuccessSectionElement.contains(evt.target)) {
      removeForm();
    }
  };
  const onSuccessEscapeKeydown = (evt) => {
    if ((evt.key === 'Escape')) {
      removeForm();
    }
  };
  const onButtonClick = () => {
    removeForm();
  };
  successButtonElement.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onSuccessEscapeKeydown);
  document.addEventListener('click',onSuccessOutsideClick);

  function removeForm() {
    successButtonElement.removeEventListener('click', onButtonClick);
    document.removeEventListener('keydown', onSuccessEscapeKeydown,);
    document.removeEventListener('click', onSuccessOutsideClick);

    newSuccessTemplateElement.remove();
  }
};

export {renderSuccessForm};
