const fileField = document.querySelector('.img-upload__input');
const previewPhoto = document.querySelector('.img-upload__preview img');
const photoPreviewEffects = document.querySelectorAll('.effects__preview');
const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

fileField.addEventListener('change', () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.some(() => fileName.endsWith(fileExt));
  if (matches) {
    const url = URL.createObjectURL(file);
    previewPhoto.src = url;
    photoPreviewEffects.forEach(
      (it) => (it.style.backgroundImage = `url(${url})`));
  }
});

