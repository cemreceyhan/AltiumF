const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const gallery = document.getElementById('gallery');

let currentImage = 0;

const images = [
  {
    id: 0,
    src: 'images/blog/1.jpeg',
    alt: 'Image 1',
  },
  {
    id: 1,
    src: 'images/blog/2.jpeg',
    alt: 'Image 2',
  },
  {
    id: 2,
    src: 'images/blog/4.jpeg',
    alt: 'Image 3',
  },
];

function imageSlider(images, container, prevButton, nextButton) {
  let currentImage = 0;
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i].src;
    img.alt = images[i].alt;
    img.classList.add(
      'h-full',
      'h-[calc(100%+150px)]',
      'w-full',
      'object-cover',
    );
    img.style.transform = `-translateX(${100 * i}%)`;
    container.appendChild(img);
  }

  prevButton.addEventListener('click', () => {
    if (currentImage > 0) {
      currentImage--;
      container.style.transform = `translateX(-${100 * currentImage}%)`;
    } else {
      currentImage = images.length - 1;
      container.style.transform = `translateX(-${100 * currentImage}%)`;
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentImage < images.length - 1) {
      currentImage++;
      container.style.transform = `translateX(-${100 * currentImage}%)`;
    } else {
      currentImage = 0;
      container.style.transform = `translateX(-${100 * currentImage}%)`;
    }
  });

  let sliderIntervalId = null;
  let sliderTimer = 5000;

  const startSlider = () => {
    sliderIntervalId = setInterval(() => {
      if (currentImage < images.length - 1) {
        currentImage++;
        container.style.transform = `translateX(-${100 * currentImage}%)`;
      } else {
        currentImage = 0;
        container.style.transform = `translateX(-${100 * currentImage}%)`;
      }
    }, sliderTimer);
  };

  const stopSlider = () => {
    clearInterval(sliderIntervalId);
    sliderIntervalId = null;
  };

  window.addEventListener('load', startSlider);
  container.addEventListener('mouseenter', stopSlider);
  container.addEventListener('mouseleave', startSlider);
}

imageSlider(images, gallery, prevButton, nextButton);
