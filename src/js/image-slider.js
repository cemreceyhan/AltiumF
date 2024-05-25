export let currentImage = 0;
let renderCallback = null;

export function updateCurrentImage(index) {
  currentImage = index;
  if (renderCallback) {
    renderCallback();
  }
}

export function imageSlider(images, container, prevButton, nextButton) {
  for (let i = 0; i < images.length; i++) {
    const { src } = images[i];
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('h-full', 'w-full', 'object-cover');
    img.style.transform = `-translateX(${100 * i}%)`;
    container.appendChild(img);
  }

  container.style.transform = `translateX(-${100 * currentImage}%)`; // Initial position

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

  // let sliderIntervalId = null;
  // const sliderTimer = 10000;

  // const startSlider = () => {
  //   sliderIntervalId = setInterval(() => {
  //     if (currentImage < images.length - 1) {
  //       currentImage++;
  //       container.style.transform = `translateX(-${100 * currentImage}%)`;
  //     } else {
  //       currentImage = 0;
  //       container.style.transform = `translateX(-${100 * currentImage}%)`;
  //     }
  //   }, sliderTimer);
  // };

  // const stopSlider = () => {
  //   clearInterval(sliderIntervalId);
  //   sliderIntervalId = null;
  // };

  // window.addEventListener('load', startSlider);
  // container.addEventListener('mouseenter', stopSlider);
  // container.addEventListener('mouseleave', startSlider);

  renderCallback = (c) => {
    container.style.transform = `translateX(-${100 * currentImage}%)`;
  };
}
