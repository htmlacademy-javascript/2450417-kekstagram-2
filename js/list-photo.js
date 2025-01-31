import {debounce, getSortRandom} from './util.js';
import {renderThumbnails, clearThumbnails} from './user/thumbnails.js';

const RANDOM_PHOTO_AMOUNT = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

const filtersContainer = document.querySelector('.img-filters');
const [defaultButtonElement, randomButtonElement, discussedButtonElement] = filtersContainer.querySelectorAll('.img-filters__button');

let activeFilter = defaultButtonElement;

const toggleButtons = (button) => {
  activeFilter.classList.remove(ACTIVE_CLASS);
  button.classList.add(ACTIVE_CLASS);
  activeFilter = button;
};
let pictures = [];
const selectFilter = () => {
  clearThumbnails();

  const sortPhotosByComments = (picA, picB) => picB.comments.length - picA.comments.length;
  let filteredData = [];

  switch (activeFilter) {
    case randomButtonElement:
      filteredData = pictures
        .toSorted(getSortRandom)
        .slice(0, RANDOM_PHOTO_AMOUNT);
      break;
    case discussedButtonElement:
      filteredData = pictures.toSorted(sortPhotosByComments);
      break;
    default:
      filteredData = pictures;
  }
  renderThumbnails(filteredData);
};
const debounceFilterRender = debounce(selectFilter);
const onFilterChange = (evt) => {

  const targetButton = evt.target;
  if (activeFilter === targetButton) {
    return;
  }

  toggleButtons(targetButton);
  debounceFilterRender();
};


const sortPhotos = (picturesData) => {
  filtersContainer.classList.remove('img-filters--inactive');

  filtersContainer.addEventListener('click',onFilterChange);

  pictures = picturesData;
};

export {sortPhotos};
