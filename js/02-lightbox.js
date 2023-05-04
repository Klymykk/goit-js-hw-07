import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const item = galleryItems.map( ({preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
}).join(" ");

gallery.insertAdjacentHTML("beforeend", item);

new SimpleLightbox(".gallery a", {
  captionsData:"alt",
  captionDelay: 250,
});




