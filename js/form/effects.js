const SliderRange = {
  ZERO_TO_HUNDRED: { range: { min: 0, max: 100 }, start: 100, step: 1 },
  ZERO_TO_ONE: { range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  ZERO_TO_THREE: { range: { min: 0, max: 3 }, start: 3, step: 0.1 },
  ONE_TO_THREE: { range: { min: 1, max: 3 }, start: 3, step: 0.1 },
};

const Effect = {
  none: {
    slider: SliderRange.ZERO_TO_HUNDRED,
  },

  chrome: {
    slider: SliderRange.ZERO_TO_ONE,
    filter: (value) => `grayscale(${value})`,
  },

  sepia: {
    slider: SliderRange.ZERO_TO_ONE,
    filter: (value) => `sepia(${value})`,
  },

  marvin: {
    slider: SliderRange.ZERO_TO_HUNDRED,
    filter: (value) => `invert(${value}%)`,
  },

  phobos: {
    slider: SliderRange.ZERO_TO_THREE,
    filter: (value) => `blur(${value}px)`
  },

  heat: {
    slider: SliderRange.ZERO_TO_THREE,
    filter: (value) => `brightness(${value})`
  }
};
const formElement = document.querySelector('.img-upload__form');
const effectsListElement = formElement.querySelector('.effects__list');
const sliderContainer = formElement.querySelector('.img-upload__effect-level');
const sliderElement = formElement.querySelector('.effect-level__slider');
const imgUploadElement = document.querySelector('.img-upload__preview img');

const changeEvent = new Event('change');
const customSlider = noUiSlider.create(sliderElement, {
  ...Effect.none.slider,
  connect: 'lower',
});

sliderContainer.hidden = true;
effectsListElement.addEventListener('change', () => {
  const effect = formElement.effect.value;
  sliderContainer.hidden = effect === 'none';
  const nextOptions = Effect[effect].slider;
  customSlider.updateOptions(nextOptions);

});
customSlider.on('update', () => {
  const value = customSlider.get();
  formElement['effect-level'].value = Number(value);
  const currentEffect = formElement.effect.value;
  const filter = Effect[currentEffect].filter;
  if (currentEffect === 'none') {
    return imgUploadElement.style.removeProperty('filter');
  }
  imgUploadElement.style.filter = filter(value);
});
const resetEffect = () => {
  formElement.effect.value = 'none';
  effectsListElement.dispatchEvent(changeEvent);
};
export {Effect,resetEffect};

