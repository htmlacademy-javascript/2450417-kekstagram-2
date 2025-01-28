import {debounce, getSortRandom} from './util.js';
import {renderThumbnails, clearThumbnails} from './user/thumbnails.js';
const RANDOM_PHOTO_AMOUNT = 10;
const filtersContainer = document.querySelector('.img-filters');
const [defaultButton, randomButton, discussedButton] = filtersContainer.querySelectorAll('.img-filters__button');
let activeFilter = defaultButton;
const ACTIVE_CLASS = 'img-filters__button--active';

const toggleButtons = (button) => {
  activeFilter.classList.remove(ACTIVE_CLASS);
  button.classList.add(ACTIVE_CLASS);
  activeFilter = button;
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
const sortPhotosByComments = (picA, picB) => picB.comments.length - picA.comments.length;
let pictures = [];
function selectFilter() {
  clearThumbnails();
  let filteredData = [];

  switch (activeFilter) {
    case randomButton:
      filteredData = pictures
        .toSorted(getSortRandom)
        .slice(0, RANDOM_PHOTO_AMOUNT);
      break;
    case discussedButton:
      filteredData = pictures.toSorted(sortPhotosByComments);
      break;
    default:
      filteredData = pictures;
  }
  renderThumbnails(filteredData);

}

function sortPhotos (picturesData) {
  filtersContainer.classList.remove('img-filters--inactive');

  filtersContainer.addEventListener('click',onFilterChange);

  pictures = picturesData;
}
export {sortPhotos};
//
