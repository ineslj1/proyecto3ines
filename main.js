import { footer } from './src/components/footer/footer';
import { populateGallery } from './src/components/gallery/gallery';
import { header } from './src/components/header/header';
import { links } from './src/data/navLinks';
import './style.css';

const UNSPLASH_API = 'https://api.unsplash.com/';
const USER_KEY = 'ozAt0h0qcEqfiT1ieUs-gkTP-RUQjIwvvO9aaqhabug';
const mainGallery = document.createElement('main');
const body = document.querySelector('body');
const noImagesMessage = document.createElement('h2');
body.append(header('/assets/logo.png', 'Proyecto3Ines', links));
body.append(mainGallery);
body.append(footer());
const searchInput = document.querySelector('input');
const firstLoad = () => {
  fetch(UNSPLASH_API + 'photos?per_page=20&client_id=' + USER_KEY)
    .then((res) => {
      return res.json();
    })
    .then((res) => populateGallery(mainGallery, res));
};

const searchPics = (apiUrl, key, query) => {
  if (query) {
    fetch(`${apiUrl}search/photos?query=${query}&client_id=${key}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((bodyRes) => {
        console.log(bodyRes);
        if (bodyRes.total === 0) {
          noImagesMessage.innerHTML =
            'No se encontraron imágenes que coincidan con tu búsqueda 🫢 <br>';
          body.insertBefore(noImagesMessage, mainGallery);
          mainGallery.innerHTML = '';
        } else {
          console.log(noImagesMessage);
          noImagesMessage.remove();
          return populateGallery(mainGallery, bodyRes.results);
        }
      })
      .catch((err) => {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'Error found' + err;
        mainGallery.prepend(errorMessage);
      });
  }
};

searchInput.addEventListener('change', (e) =>
  searchPics(UNSPLASH_API, USER_KEY, e.target.value)
);

firstLoad(UNSPLASH_API, USER_KEY);
// getPics(UNSPLASH_API, USER_KEY, galleryImages);
