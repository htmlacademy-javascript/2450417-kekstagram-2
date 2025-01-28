const FROM_ZERO_TO_HUNDRED = createSliderData();
const FROM_ZERO_TO_ONE = createSliderData(0, 1, 0.1);

export const Effect = {
  none: {
    slider: FROM_ZERO_TO_HUNDRED,
  },

  chrome: {
    slider: FROM_ZERO_TO_ONE,
    filter: (value) => `grayscale(${value})`,
  },

  sepia: {
    slider: FROM_ZERO_TO_ONE,
    filter: (value) => `sepia(${value})`,
  },

  marvin: {
    slider: FROM_ZERO_TO_HUNDRED,
    filter: (value) => `invert(${value}%)`,
  },

  phobos: {
    slider: createSliderData(0, 3, 0.1),
    filter: (value) => `blur(${value}px)`
  },

  heat: {
    slider: createSliderData(1, 3, 0.1),
    filter: (value) => `brightness(${value})`
  }
};
const form = document.querySelector('.img-upload__form');
const effectsList = form.querySelector('.effects__list');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const sliderElement = form.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');

const changeEvent = new Event('change');
const customSlider = noUiSlider.create(sliderElement, {
  ...Effect.none.slider,
  connect: 'lower',
});
function createSliderData(min = 0, max = 100, step = 1, start = max) {
  return {
    range: {
      min,
      max,
    },
    start,
    step,
  };
}
sliderContainer.hidden = true;
effectsList.addEventListener('change', () => {
  const effect = form.effect.value;
  sliderContainer.hidden = effect === 'none';
  const nextOptions = Effect[effect].slider;
  customSlider.updateOptions(nextOptions);

});
customSlider.on('update', () => {
  const value = customSlider.get();
  form['effect-level'].value = Number(value);
  const currentEffect = form.effect.value;
  const filter = Effect[currentEffect].filter;
  if (currentEffect === 'none') {
    return image.style.removeProperty('filter');
  }
  image.style.filter = filter(value);
});
const resetEffect = () => {
  form.effect.value = 'none';
  effectsList.dispatchEvent(changeEvent);
};
export {resetEffect};
//
