import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const imgMarkup = createImgMarkup();

gallery.insertAdjacentHTML('beforeend', imgMarkup);


function createImgMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
 }).join('');
};

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
 event.preventDefault(); 
if (!event.target.classList.contains('gallery__image')) {
  return
  };
  
const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}">`,
  {
    onClose: () => {
      window.removeEventListener('keydown', onEscape)
    }
  }
)
instance.show();  
  window.addEventListener('keydown', onEscape)
  function onEscape(event) {
    if (event.code === 'Escape') {
      instance.close();
      console.log(event.code)
   }
 } 
}