const fileFieldElement = document.querySelector('.img-upload__input');
const previewPhotoElement = document.querySelector('.img-upload__preview img');
const photoPreviewEffectsElement = document.querySelectorAll('.effects__preview');
const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

fileFieldElement.addEventListener('change', () => {
  const file = fileFieldElement.files[0];
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.some(() => fileName.endsWith(fileExt));
  if (matches) {
    const url = URL.createObjectURL(file);
    previewPhotoElement.src = url;
    photoPreviewEffectsElement.forEach(
      (it) => (it.style.backgroundImage = `url(${url})`));
  }
});
