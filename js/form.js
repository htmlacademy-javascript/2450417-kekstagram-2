import { isEscapeKey } from './util.js';
import './user/big-picture.js';
import {resetValidation, validate} from './user/hashtegs-validation.js';
import {resetScale} from './form/change-scale.js';
import {resetEffect} from './form/effects.js';
import {sendData} from './server.js';
import {renderSuccessForm} from './successForm.js';
import {renderErrorForm} from './errorForm.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const filename = form.filename;
const editingModal = form.querySelector('.img-upload__overlay');
const formSubmitButton = document.querySelector('.img-upload__submit');
const isErrorOpened = () => document.querySelector('.error') !== null;

const disableSubmitButton = () => {
  formSubmitButton.disabled = true;

};
const enableSubmitButton = () => {
  formSubmitButton.disabled = false;
};
const closeModal = () => form.reset();

const isFocusText = () =>
  [form.hashtags, form.description].includes(document.activeElement);

const onDocumentEscape = (evt) => {
  if (isEscapeKey(evt) && !isErrorOpened() && !isFocusText()) {
    evt.preventDefault();
    closeModal();
  }
};
const toggleClass = () => {
  editingModal.classList.toggle('hidden');
  body.classList.toggle('modal-open');
};
filename.addEventListener('change', (evt) => {
  evt.preventDefault();
  toggleClass();
  document.addEventListener('keydown', onDocumentEscape);
});
form.addEventListener('reset', () => {
  toggleClass();
  document.removeEventListener('keydown', onDocumentEscape);
  resetValidation();
  resetScale();
  resetEffect();
});
form.addEventListener('submit', (evt) => {
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

