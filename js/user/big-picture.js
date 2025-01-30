import { renderComments} from './card.js';
import {isEscapeKey} from '../util.js';


const newBody = document.body;
const bigPictureElement = document.querySelector('.big-picture');
const closeButtonElement = bigPictureElement.querySelector('.cancel');

const showBigPhoto = (photo) => {
  bigPictureElement.querySelector ('.big-picture__img img').setAttribute ('src', photo.url);
  bigPictureElement.querySelector ('.likes-count').textContent = photo.likes;
  bigPictureElement.querySelector ('.social__caption').textContent = photo.description;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const toggleClasses = (willBeOpened = true) => {
  bigPictureElement.classList.toggle('hidden', !willBeOpened);
  newBody.classList.toggle('modal-open', willBeOpened);
};

const openModal = (picture) => {
  toggleClasses(true);
  showBigPhoto(picture);
  renderComments(picture.comments);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeModal() {
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onCloseButtonClick = closeModal;
closeButtonElement.addEventListener('click', onCloseButtonClick);

export {openModal};
