const successTemplate = document.querySelector('#success').content.querySelector('.success');
export const renderSuccessForm = () => {

  const newSuccessTemplate = successTemplate.cloneNode(true);
  const successButton = newSuccessTemplate.querySelector('.success__button');
  const newSuccessSection = newSuccessTemplate.querySelector('.success__inner');
  document.querySelector('body').append(newSuccessTemplate);


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
  successButton.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click',onCloseSuccess);

  function removeForm() {
    successButton.removeEventListener('click', onButtonClick);
    document.removeEventListener('keydown', onEscapeSuccess,);
    document.removeEventListener('click', onCloseSuccess);

    newSuccessTemplate.remove();
  }
};
