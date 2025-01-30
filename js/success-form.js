const successTemplate = document.querySelector('#success').content.querySelector('.success');
const renderSuccessForm = () => {

  const newSuccessTemplateElement = successTemplate.cloneNode(true);
  const successButtonElement = newSuccessTemplateElement.querySelector('.success__button');
  const newSuccessSection = newSuccessTemplateElement.querySelector('.success__inner');
  document.querySelector('body').append(newSuccessTemplateElement);


  const onCloseSuccess = (evt) => {
    if (! newSuccessSection.contains(evt.target)) {
      removeForm();
    }
  };
  const onEscapeSuccess = (evt) => {
    if ((evt.key === 'Escape')) {
      removeForm();
    }
  };
  const onButtonClick = () => {
    removeForm();
  };
  successButtonElement.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click',onCloseSuccess);

  function removeForm() {
    successButtonElement.removeEventListener('click', onButtonClick);
    document.removeEventListener('keydown', onEscapeSuccess,);
    document.removeEventListener('click', onCloseSuccess);

    newSuccessTemplateElement.remove();
  }
};

export {renderSuccessForm};
