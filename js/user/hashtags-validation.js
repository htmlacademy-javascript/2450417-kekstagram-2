import { isUniqueArray } from '../util';

const formElement = document.querySelector('.img-upload__form');

const Hashtags = {
  MAX_COUNT: 5,
  MAX_LENGTH: 20,
  ALLOWED_SYMBOLS: /^#[a-zа-яё0-9]{1,19}$/,
  START_SYMBOL_ERROR: 'Хэштег должен начинаться с символа #',
  HASHTAGS_ONLY_ERROR: 'Хэштег не может состоять только из #',
  MAX_LENGTH_ERROR: 'Максимальная длина хэштега 20 символов',
  REUSE_HASHTAGS_ERROR: 'Хэштеги повторяются',
  MAX_COUNT_ERROR: 'Максимальное количество хэштегов 5',
  SYMBOLS_ERROR: 'Хэштег должен состоять только из букв и чисел',
};
const Description = {
  MAX_LENGTH: 140,
};

let errorMessage = '';

const validateHashtags = (value) => {
  if (!value.length) {
    return true;
  }

  const tags = value.trim().toLowerCase().split(/\s+(?=#)/);

  if (tags.length > Hashtags.MAX_COUNT) {
    errorMessage = Hashtags.MAX_COUNT_ERROR;
    return false;
  }

  if (!isUniqueArray(tags)) {
    errorMessage = Hashtags.REUSE_HASHTAGS_ERROR;
    return false;
  }

  return tags.every((tag) => {
    if (tag[0] !== '#') {
      errorMessage = Hashtags. START_SYMBOL_ERROR;
      return false;
    }

    if (tag === '#') {
      errorMessage = Hashtags.HASHTAGS_ONLY_ERROR;
      return false;
    }

    if (tag.length > Hashtags.MAX_LENGTH) {
      errorMessage = Hashtags.MAX_LENGTH_ERROR;
      return false;
    }

    if (!Hashtags.ALLOWED_SYMBOLS.test(tag)) {
      errorMessage = Hashtags.SYMBOLS_ERROR;
      return false;
    }
    return true;
  });
};

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();
pristine.addValidator(formElement.hashtags, validateHashtags, () => errorMessage);

pristine.addValidator(
  formElement.description,
  (value) => value.length <= Description.MAX_LENGTH,
  `Максимальная длина комментария ${Description.MAX_LENGTH} символов`
);

export { validate, resetValidation };

