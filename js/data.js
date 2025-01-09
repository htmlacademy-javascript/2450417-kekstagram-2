import {getRandomElement} from './util.js';
import {getRandomInteger} from './util.js';

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

const DESCRIPTION = [
  'Поймал дзен',
  'В самое сердце',
  'Можно лучше',
  'Почти получилось',
  'Мне нравится',
  'Крутой ракурс'
];

const CommentQty = {
  MIN: 0,
  MAX: 30
};

const LikeQty = {
  MIN: 15,
  MAX: 200
};
const PhotoIdQty = {
  MIN: 1,
  MAX: 25
};
const commentIdQty = {
  MIN: 1,
  MAX: 1000
};

const createIdGenerator = (min, max) => {
  const storesId = [];
  for (let i = min; i <= max; i++) {
    storesId.push(i); // Заполняем массив числами от min до max
  }
  return () => {
    const randomIndex = Math.floor(Math.random() * storesId.length);
    return storesId.splice(randomIndex, 1)[0]; // Удаляем и возвращаем случайный ID
  };
};

const getPhotoId = createIdGenerator(PhotoIdQty);

const getCommentId = createIdGenerator(commentIdQty);

const createComment = () => ({
  id: getCommentId(),
  avatar: getRandomElement(USER_AVATAR),
  message: getRandomElement(USER_MESSAGES),
  name:getRandomElement(USER_NAME),
});

const createPhoto = () => {
  const id = getPhotoId();
  const countComment = getRandomInteger (CommentQty.MIN, CommentQty.MAX);
  const comment = Array.from({ length: countComment }, createComment);
  return {
    id,
    url: `photo/${id}.jpg`,
    description: getRandomElement (DESCRIPTION),
    likes: getRandomInteger (LikeQty.MIN, LikeQty.MAX),
    comment
  };
};

createPhoto();
export {createPhoto};
