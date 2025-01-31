const Scale = {
  DEFAULT: 100,
  STEP: 25,
  MIN: 25,
};

const photoPreviewElement = document.querySelector('.img-upload__preview > img ');
const buttonBiggerElement = document.querySelector('.scale__control--bigger');
const buttonSmallerElement = document.querySelector('.scale__control--smaller');
const outputScaleElement = document.querySelector('.scale__control--value');

let scaleNumber = parseInt(outputScaleElement.value, 10);

const onChangeScale = (value) => {
  outputScaleElement.value = `${value}%`;
  photoPreviewElement.style.transform = `scale(${ value / 100})`;
  scaleNumber = value;
};

const onScaleIncreaseClick = () => {
  if(scaleNumber < Scale.DEFAULT){
    scaleNumber += Scale.STEP;
    onChangeScale(scaleNumber);
  }
};
const onScaleDecreaseClick = () => {
  if(scaleNumber > Scale.MIN){
    scaleNumber -= Scale.STEP;
    onChangeScale(scaleNumber);
  }
};
buttonBiggerElement.addEventListener('click', onScaleIncreaseClick);
buttonSmallerElement.addEventListener('click', onScaleDecreaseClick);

const resetScale = () => {
  photoPreviewElement.style.removeProperty('transform');
  scaleNumber = Scale.DEFAULT;
  outputScaleElement.value = `${Scale.DEFAULT}%`;
};
const restoreScale = () => {
  onChangeScale(scaleNumber);
};
export{resetScale, restoreScale};
