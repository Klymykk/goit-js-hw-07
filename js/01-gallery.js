import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

const item = galleryItems.map( ({preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  }).join(" ");
  gallery.insertAdjacentHTML("beforeend", item);

  gallery.addEventListener("click", onClick);

  function onClick(event){
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(`
      <img
        class="gallery__image"
        src="${event.target.dataset.source}" 
        alt="${event.target.alt}"
      />`)
    instance.show()
    document.addEventListener("keydown", event => {
      event.preventDefault();
    
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }

