import { isEscapeKey } from './util.js';
import {resetValidation, validate} from './user/hashtags-validation.js';
import {resetScale} from './form/change-scale.js';
import { restoreScale } from './form/change-scale.js';
import {resetEffect} from './form/effects.js';
import {sendData} from './server.js';
import {renderSuccessForm} from './success-form.js';
import {renderErrorForm} from './error-form.js';

const bodyElement = document.body;
const formElement = document.querySelector('.img-upload__form');
const filenameElement = formElement.filename;
const editingModalElement = formElement.querySelector('.img-upload__overlay');
const formSubmitButtonElement = document.querySelector('.img-upload__submit');
const isErrorOpened = () => document.querySelector('.error') !== null;

const disableSubmitButton = () => {
  formSubmitButtonElement.disabled = true;

};
const enableSubmitButton = () => {
  formSubmitButtonElement.disabled = false;
};
const closeModal = () => formElement.reset();

const isFocusText = () =>
  [formElement.hashtags, formElement.description].includes(document.activeElement);

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && !isErrorOpened() && !isFocusText()) {
    evt.preventDefault();
    closeModal();
  }
};
const toggleClass = () => {
  editingModalElement.classList.toggle('hidden');
  bodyElement.classList.toggle('modal-open');
};
filenameElement.addEventListener('change', (evt) => {
  evt.preventDefault();
  toggleClass();
  document.addEventListener('keydown', onDocumentEscapeKeydown);
});
formElement.addEventListener('reset', () => {
  toggleClass();
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
  resetValidation();
  resetScale();
  restoreScale();
  resetEffect();
});
formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = validate();
  if (isValid) {
    disableSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        renderSuccessForm();
        closeModal();
      })
      .catch(renderErrorForm)
      .finally (enableSubmitButton);
  }
});

