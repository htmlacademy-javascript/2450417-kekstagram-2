import { isEscapeKey } from './util.js';
import './big-picture.js';
import {resetValidation, validate} from './hashtegs-validation.js';
const body = document.body;
const form = document.querySelector('.img-upload__form');
const filename = form.filename;
const editingModal = form.querySelector('.img-upload__overlay');
const closeModal = () => form.reset();
const isFocusText = () =>
  [form.hashtags, form.description].includes(document.activeElement);
const onDocumentEscape = (evt) => {
  if (isEscapeKey(evt) && !isFocusText()) {
    evt.preventDefault();
    closeModal();
  }
};
const classToggle = () => {
  editingModal.classList.toggle('hidden');
  body.classList.toggle('modal-open');
};
filename.addEventListener('change', (evt) => {
  evt.preventDefault();
  classToggle();
  document.addEventListener('keydown', onDocumentEscape);
});
form.addEventListener('reset', () => {
  classToggle();
  document.removeEventListener('keydown', onDocumentEscape);
  resetValidation();
});
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validate()) {
    closeModal();
  }
});
