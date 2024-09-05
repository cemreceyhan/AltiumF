// Element slider for events
const prevButtonEvents = document.getElementById('prev-events');
const nextButtonEvents = document.getElementById('next-events');
const galleryEvents = document.getElementById('gallery-events');

const events = [
  {
    id: 0,
    title: 'Across The Ocean',
    desc: 'We went across the ocean! As of April 1st, Altium has officially acquired NexusScientific, a Boston-based distributo…',
    alt: 'event',
  },
  {
    id: 1,
    title: 'Altium Acquires DSP – Sırbia',
    desc: 'Welcome “DSP Chromatography”​ d.o.o. to the Altium family!For more than two decades DSP Chromatography...',
    alt: 'event',
  },
  {
    id: 2,
    title: 'Major shareholder of the Phase Holographic Imaging (PHI) company.',
    desc: 'We are proud to announce that we became the major shareholder of the Phase Holographic Imaging ...',
    alt: 'event',
  },
  {
    id: 3,
    title: 'Across The Ocean',
    desc: 'We went across the ocean! As of April 1st, Altium has officially acquired NexusScientific, a Boston-based distributo…',
    alt: 'event',
  },
];
const createEventElements = (container) => {
  let element;

  events.forEach((item) => {
    element = document.createElement('div');
    element.classList.add(
      'roundedBorderBox',
      'overflow-hidden',
      'relative',
      'flex',
      'flex-col',
      'items-start',
      'gap-6',
      'text-primary',
      'md:w-[387px]',
      'w-[calc(100%-1px)]',
      'shrink-0',
      'group',
      'duration-500',
      'hover:border-redish',
      'hover:bg-redish',
      'hover:text-white',
      '!py-14',
      'bg-white',
    );

    let title = document.createElement('h3');
    title.textContent = item.title;
    title.classList.add('font-bold', 'w-5/6', 'group-hover:text-white');
    element.appendChild(title);

    let desc = document.createElement('span');
    desc.classList.add('text-primary', 'group-hover:text-white', 'mt-6');
    desc.textContent = item.desc;
    element.appendChild(desc);

    let button = document.createElement('button');
    button.classList.add(
      'text-redish',
      'font-bold',
      'underline',
      'underline-offset-8',
      'text-primary',
      'group-hover:text-white',
      'absolute',
      'bottom-12',
      'mt-6',
    );
    button.textContent = 'Learn more';
    element.appendChild(button);

    let imgContainer = document.createElement('div');
    imgContainer.classList.add(
      'absolute',
      'scale-100',
      '-right-16',
      'top-0',
      'z-[-10]',
      'group-hover:opacity-20',
      'duration-500',
    );
    element.appendChild(imgContainer);

    let img1 = document.createElement('img');
    img1.src = 'images/detail2.png';
    img1.classList.add('-mb-20', '-ml-8');
    imgContainer.appendChild(img1);

    let img2 = document.createElement('img');
    img2.src = 'images/detail1.png';
    imgContainer.appendChild(img2);

    container.appendChild(element);
  });
  return element;
};

function elementSlider(
  elementCreator,
  items,
  container,
  prevButton,
  nextButton,
) {
  let currentElement = 0;

  let displayingItemsCount;

  displayingItemsCount =
    window.innerWidth < 768
      ? items.length - 1
      : window.innerWidth > 1636
        ? items.length - 4
        : window.innerWidth > 1024 && window.innerWidth < 1366
          ? items.length - 2
          : window.innerWidth > 1366 && window.innerWidth < 1636
            ? items.length - 3
            : items.length - 2;

  const element = elementCreator(container);

  let gap = 34;

  prevButton.addEventListener('click', () => {
    if (currentElement > 0) {
      currentElement--;
      container.style.transform = `translateX(-${(element.clientWidth + gap) * currentElement}px)`;
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentElement < displayingItemsCount) {
      currentElement++;
      container.style.transform = `translateX(-${(element.clientWidth + gap) * currentElement}px)`;
    } else {
      currentElement = 0;
      container.style.transform = `translateX(-${(element.clientWidth + gap) * currentElement}px)`;
    }
  });
}

elementSlider(
  createEventElements,
  events,
  galleryEvents,
  prevButtonEvents,
  nextButtonEvents,
);
