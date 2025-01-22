const shownCount = document.querySelector('.social__comment-shown-count');
const totalCount = document.querySelector('.social__comment-total-count');
const list = document.querySelector('.social__comments');
const listItem = list.querySelector('.social__comment');

const createComment = (comment) => {
  const item = listItem.cloneNode(true);
  const img = item.querySelector('.social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  item.querySelector('.social__text').textContent = comment.message;
  return item;
};

const renderComments = (comments) => {
  shownCount.textContent = comments.length;
  totalCount.textContent = comments.length;
  list.append(...comments.map(createComment));
};

export {renderComments};
