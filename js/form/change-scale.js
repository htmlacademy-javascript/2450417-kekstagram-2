const DEFAULT_SCALE = 100;
const STEP_SCALE = 25;
const MIN_SCALE = 25;

const photoPreview = document.querySelector('.img-upload__preview > img ');
const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const outputScale = document.querySelector('.scale__control--value');

let scaleNumber = parseInt(outputScale.value, 10);

const onChangeScale = (value) => {
  outputScale.value = `${value}%`;
  photoPreview.style.transform = `scale(${ value / 100})`;
};

const onIncreaseStep = () => {
  if(scaleNumber < DEFAULT_SCALE){
    scaleNumber += STEP_SCALE;
    onChangeScale(scaleNumber);
  }
};
const onDecreaseStep = () => {
  if(scaleNumber > MIN_SCALE){
    scaleNumber -= STEP_SCALE;
    onChangeScale(scaleNumber);
  }
};
buttonBigger.addEventListener('click', onIncreaseStep);
buttonSmaller.addEventListener('click', onDecreaseStep);

export const resetScale = () => photoPreview.style.removeProperty('transform');
//
