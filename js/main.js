let currentCommentId = 1;
const getCommentId = () => currentCommentId++;
const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const USER_NAME = [
  'Иван',
  'Мария',
  'Анна',
  'Виктор',
  'Юлия',
  'Павел',
  'Алена'
];
const USER_AVATAR = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];
let currentPhotoId = 1;
const getPhotoId = () => currentPhotoId++;
const Description = [
  'Поймал дзен',
  'В самое сердце',
  'Можно лучше',
  'Почти получилось',
  'Мне нравится',
  'Крутой ракурс'
];
const getRandomInteger = (a,b) => {
  const lower = Math.ceil (Math.min(a,b));
  const upper = Math.floor (Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const creatComment = () => ({
  id: getCommentId (),
  avatar: getRandomElement (USER_AVATAR),
  message: getRandomElement (USER_MESSAGES),
  name:getRandomElement (USER_NAME),
});
const creatPhoto = () => {
  const id = getPhotoId ();
  const countComment = getRandomInteger (0, 30);
  const comment = Array.from({ length: countComment }, creatComment);
  return {
    id,
    url: 'photo/{id}.jpg',
    description: getRandomElement (Description),
    likes: getRandomInteger (15,200),
    comment
  };
};
creatPhoto();
