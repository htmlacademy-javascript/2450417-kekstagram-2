import { createPhoto } from './data.js';
import {renderThumbnails} from './thumbnails.js';
import { savePhotos } from './photo-state.js';
import './form.js';

const photo = createPhoto(25);
savePhotos(photo);
renderThumbnails(photo);
