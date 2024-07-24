import contentGallery from '../data/content-gallery.json';
import { updateCurrentImage, imageSlider, currentImage } from './image-slider';

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const gallery = document.getElementById('gallery');
const contentGalleryContainer = document.getElementById('content-gallery');

// IMAGE SLIDER AND CONTENT GALLERY SECTION START

// CHANGE HERE TO USE THE IMAGE SLIDER FUNCTION
const images = contentGallery.map((item) => ({ src: item.src }));

// contentGallery properties are id, title, description, url, src

imageSlider(
  images, // Content gallery might be an array of objects with src property
  gallery, // The container element
  prevButton, // The previous button element
  nextButton, // The next button element
);

let selectedContent = 0;
let contentRenderCallback = null; // This is a function that will be called when the selected content is updated

export const updateSelectedContent = (index) => {
  selectedContent = index;
  if (contentRenderCallback) {
    contentRenderCallback();
  }
};

const contentPreview = document.createElement('div');
contentPreview.classList.add('space-y-4');
const h1 = document.createElement('h1');
const button = document.createElement('button');
const i = document.createElement('i');
const div = document.createElement('div');

const imgContainer = document.createElement('div');
imgContainer.classList.add(
  'absolute',
  'left-1/2',
  'scale-125',
  '-z-10',
  'hidden',
  '2xl:block',
);
const img1 = document.createElement('img');
img1.classList.add('-mb-20', '-ml-8');
img1.src = 'images/detail2.png';
const img2 = document.createElement('img');
img2.src = 'images/detail1.png';
imgContainer.appendChild(img1);
imgContainer.appendChild(img2);

h1.classList.add(
  'text-[32px]/[130%]',
  'md:text-[36px]/[130%]',
  'xl:text-[44px]/[130%]',
  '2xl:text-[64px]/[130%]',
);
h1.textContent = contentGallery[0].title;
const p = document.createElement('p');
p.textContent = contentGallery[0].description;

button.classList.add(
  'pb-1',
  'shrink-0',
  'text-redish',
  'font-normal',
  'relative',
  'self-start',
  'group',
);
button.textContent = 'Read More';
i.classList.add(
  'fi',
  'fi-rs-arrow-small-right',
  'text-xl',
  'absolute',
  'right-0',
  'top-1/2',
  '-translate-y-1/2',
  'mt-[2px]',
  'group-hover:opacity-100',
  'group-hover:-right-7',
  'opacity-0',
  'duration-500',
);
div.classList.add(
  'absolute',
  'duration-500',
  'h-[1px]',
  'w-full',
  'bg-redish',
  'bottom-0',
  'left-0',
  'group-hover:w-[calc(100%+23px)]',
);
button.appendChild(i);
button.appendChild(div);
contentPreview.appendChild(h1);
contentPreview.appendChild(p);
contentPreview.appendChild(button);

const selectableContents = document.createElement('div');
selectableContents.classList.add(
  'roundedBox',
  '!space-y-0',
  'text-[14px]/[141%]',
  'text-primary',
  '!px-3',
  'hidden',
  '2xl:flex',
  'divide',
  'divide-x',
);

contentGallery.forEach((content) => {
  const button = document.createElement('button');
  button.classList.add(
    'group',
    'relative',
    'hover:text-redish',
    'duration-500',
    'min-w-16',
    'focus:outline-none',
    'active:outline-none',
    'px-3',
    selectedContent === content.id && 'active',
  );
  button.textContent = content.title;
  const span = document.createElement('span');
  span.classList.add(
    selectedContent === content.id ? 'opacity-100' : 'opacity-0',
    'group-hover:opacity-100',
    'absolute',
    'left-1/2',
    '-translate-x-1/2',
    '-bottom-3',
    'w-2',
    'h-2',
    'bg-redish',
    'rounded-full',
    'duration-500',
  );
  button.appendChild(span);

  button.addEventListener('click', () => {
    updateCurrentImage(content.id);
    selectedContent = currentImage;
    selectableContents.childNodes.forEach((child) => {
      child.classList.remove('active');
      child.childNodes[1].classList.remove('opacity-100');
      child.childNodes[1].classList.add('opacity-0');
    });
    button.classList.add('active');
    span.classList.remove('opacity-0');
    span.classList.add('opacity-100');
    contentPreview.childNodes[0].textContent =
      contentGallery[selectedContent].title;
    contentPreview.childNodes[1].textContent =
      contentGallery[selectedContent].description;
    contentPreview.childNodes[2].addEventListener('click', () => {
      window.location.href = contentGallery[selectedContent].url;
    });
  });

  selectableContents.appendChild(button);

  const updateUi = () => {
    const selectedContentNode = selectableContents.childNodes[currentImage];
    selectableContents.childNodes.forEach((child) => {
      child.classList.remove('active');
      child.childNodes[1].classList.remove('opacity-100');
      child.childNodes[1].classList.add('opacity-0');
    });
    selectedContentNode.classList.add('active');
    selectedContentNode.childNodes[1].classList.remove('opacity-0');

    selectedContentNode.childNodes[1].classList.add('opacity-100');
    const selectedContentData = contentGallery[currentImage];
    contentPreview.childNodes[0].textContent = selectedContentData.title;
    contentPreview.childNodes[1].textContent = selectedContentData.description;
    contentPreview.childNodes[2].addEventListener('click', () => {
      window.location.href = selectedContentData.url;
    });
  };
  nextButton.addEventListener('click', updateUi);
  prevButton.addEventListener('click', updateUi);
});

contentGalleryContainer.appendChild(contentPreview);
contentGalleryContainer.appendChild(selectableContents);
contentGalleryContainer.appendChild(imgContainer);

// IMAGE SLIDER AND CONTENT GALLERY SECTION END
