import { renderComments} from './card.js';
import {isEscapeKey} from '../util.js';


const newBody = document.body;
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

const showBigPhoto = (photo) => {
  bigPicture.querySelector ('.big-picture__img img').setAttribute ('src', photo.url);
  bigPicture.querySelector ('.likes-count').textContent = photo.likes;
  bigPicture.querySelector ('.social__caption').textContent = photo.description;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const toggleClasses = (willBeOpened = true) => {
  bigPicture.classList.toggle('hidden', !willBeOpened);
  newBody.classList.toggle('modal-open', willBeOpened);
};

function openModal(picture) {
  toggleClasses(true);
  showBigPhoto(picture);
  renderComments(picture.comments);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onCloseButtonClick = closeModal;
closeButton.addEventListener('click', onCloseButtonClick);

export {openModal};
