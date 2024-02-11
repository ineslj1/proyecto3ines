import { createCard } from '../galleryCard/galleryCard';
import './gallery.css';

export const populateGallery = (gallery, listOfImages) => {
  gallery.innerHTML = '';
  for (const image of listOfImages) {
    createCard(gallery, image);
  }
};
