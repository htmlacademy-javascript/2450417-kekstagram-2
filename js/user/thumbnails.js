import { openModal } from './big-picture';
import { getPhotoById } from './photo-state';

const templateElement = document.querySelector('#picture').content.querySelector('.picture');
const containerElement = document.querySelector('.pictures');

const createThumbnails = (photo) => {
  const thumbnail = templateElement.cloneNode(true);
  const imageElement = thumbnail.querySelector('.picture__img');

  thumbnail.dataset.id = photo.id;
  imageElement.src = photo.url;
  imageElement.alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};
const renderThumbnails = (photos) => containerElement.append(...photos.map(createThumbnails));

containerElement.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if (thumbnail === null) {
    return;
  }
  evt. preventDefault();
  const id = Number(thumbnail.dataset.id);
  const photo = getPhotoById(id);
  if(!photo) {
    return;
  }
  openModal (photo);
});

const clearThumbnails = () => containerElement.querySelectorAll('.picture').forEach((item) => {
  item.remove();
});

export {renderThumbnails, clearThumbnails};

