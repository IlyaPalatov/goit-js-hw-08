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


gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const imageSrc = e.target.dataset.source;
  const imageAlt = e.target.alt;


  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${imageSrc}" alt="${imageAlt}" class="modal__image">
    </div>
  `);

  instance.show();
});
