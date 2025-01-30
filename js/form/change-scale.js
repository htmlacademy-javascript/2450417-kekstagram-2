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
};

const onIncreaseStep = () => {
  if(scaleNumber < Scale.DEFAULT){
    scaleNumber += Scale.STEP;
    onChangeScale(scaleNumber);
  }
};
const onDecreaseStep = () => {
  if(scaleNumber > Scale.MIN){
    scaleNumber -= Scale.STEP;
    onChangeScale(scaleNumber);
  }
};
buttonBiggerElement.addEventListener('click', onIncreaseStep);
buttonSmallerElement.addEventListener('click', onDecreaseStep);

const resetScale = () => photoPreviewElement.style.removeProperty('transform');

export{resetScale};
