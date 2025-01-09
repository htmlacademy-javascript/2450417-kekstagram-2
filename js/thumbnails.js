import { createPhoto } from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const photos = createPhoto(25);

const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const thumbnail = template.cloneNode(true);
  thumbnail.dataset.id = photo.id;
  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  fragment.appendChild(thumbnail);
});

container.appendChild(fragment);
export {container};
