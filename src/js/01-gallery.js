// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');


function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"  
              data-source="${original}" 
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}

gallery.innerHTML = createGalleryItems(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250,});