const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const listItems = images.map(({ url, alt }) => {
  return `<li  class="gallery-item"><a href="#"><img src="${url}" alt="${alt}" width="420" height="250"></a></li>`;
});

const markup = listItems.join("");
galleryRef.insertAdjacentHTML("afterbegin", markup);

const styleGallery = `
display: flex;
gap: 20px;
justify-content: center;
list-style: none`;

galleryRef.style.cssText = styleGallery;
