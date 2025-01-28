import {savePhotos} from './user/photo-state.js';
import { renderThumbnails } from './user/thumbnails.js';
import './form.js';
import {getData} from './server.js';
import {renderError} from './util.js';
import {sortPhotos} from './list-photo.js';
import './user/user-pictures.js';
getData ()
  .then((photos) => {
    sortPhotos(photos);
    savePhotos(photos);
    renderThumbnails(photos);
  })
  .catch(renderError);
//
