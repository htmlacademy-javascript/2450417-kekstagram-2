const shownCount = document.querySelector('.social__comment-shown-count');
const totalCount = document.querySelector('.social__comment-total-count');
const list = document.querySelector('.social__comments');
const listItem = list.querySelector('.social__comment');
const loaderButton = document.querySelector('.comments-loader');
const PACK_SIZE = 5;

let currentComments = [];

const createComment = (comment) => {
  const item = listItem.cloneNode(true);
  const img = item.querySelector('.social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  item.querySelector('.social__text').textContent = comment.message;
  return item;
};

const onLoaderButtonClick = () => {
  const shownComments = list.childElementCount;
  let endOfSlice = shownComments + PACK_SIZE;
  const isAllCommentsShown = endOfSlice >= currentComments.length;
  endOfSlice = isAllCommentsShown ? currentComments.length : endOfSlice;
  const commentsSlice = currentComments.slice(shownComments, endOfSlice);
  list.append(...commentsSlice.map(createComment));
  shownCount.textContent = endOfSlice;
  loaderButton.classList.toggle('hidden', isAllCommentsShown);
};

loaderButton.addEventListener('click', onLoaderButtonClick);

export const renderComments = (comments) => {
  list.innerHTML = '';
  totalCount.textContent = comments.length;
  currentComments = comments;
  loaderButton.click();
};

