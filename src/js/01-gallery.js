// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const myGalleryList = document.querySelector(".gallery");
const galleryMarkup = galleryItems
.map(({ preview, original, description }) => `<li class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image" 
src="${preview}" 
alt="${description}" />
</a>
</li>`).join("");
myGalleryList.insertAdjacentHTML("beforeend", galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    captionSelector: "img",
    captionDelay: 250,
    captionsData: "alt",
    scrollZoom: false,
    fadeSpeed: 500,
    showCounter: false,
});
//console.log(galleryItems);

