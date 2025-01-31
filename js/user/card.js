const PACK_SIZE = 5;

const shownCountElement = document.querySelector('.social__comment-shown-count');
const totalCountElement = document.querySelector('.social__comment-total-count');
const listElement = document.querySelector('.social__comments');
const listItemElement = listElement.querySelector('.social__comment');
const loaderButtonElement = document.querySelector('.comments-loader');

let currentComments = [];

const createComment = (comment) => {
  const item = listItemElement.cloneNode(true);
  const imgElement = item.querySelector('.social__picture');
  imgElement.src = comment.avatar;
  imgElement.alt = comment.name;
  item.querySelector('.social__text').textContent = comment.message;
  return item;
};

const onLoaderButtonClick = () => {
  const shownComments = listElement.childElementCount;
  let endOfSlice = shownComments + PACK_SIZE;
  const isAllCommentsShown = endOfSlice >= currentComments.length;
  endOfSlice = isAllCommentsShown ? currentComments.length : endOfSlice;
  const commentsSlice = currentComments.slice(shownComments, endOfSlice);
  listElement.append(...commentsSlice.map(createComment));
  shownCountElement.textContent = endOfSlice;
  loaderButtonElement.classList.toggle('hidden', isAllCommentsShown);
};

loaderButtonElement.addEventListener('click', onLoaderButtonClick);

const renderComments = (comments) => {
  listElement.innerHTML = '';
  totalCountElement.textContent = comments.length;
  currentComments = comments;
  loaderButtonElement.click();
};

export{renderComments};

