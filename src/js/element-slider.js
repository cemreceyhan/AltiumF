// Element slider for products
const prevButtonFeatured = document.getElementById('prev-featured');
const nextButtonFeatured = document.getElementById('next-featured');
const galleryFeatured = document.getElementById('gallery-featured');

// Element slider for events
const prevButtonEvents = document.getElementById('prev-events');
const nextButtonEvents = document.getElementById('next-events');
const galleryEvents = document.getElementById('gallery-events');

// Element slider for partners
const prevButtonPartners = document.getElementById('prev-partners');
const nextButtonPartners = document.getElementById('next-partners');
const galleryPartners = document.getElementById('gallery-partners');

const products = [
  {
    id: 0,
    src: 'images/brands/products/1.png',
    alt: 'product',
    title: 'Product 1',
    subtitle: 'Product 1 subtitle',
    tag: 'New',
  },
  {
    id: 1,
    src: 'images/brands/products/2.png',
    alt: 'product',
    title: 'Product 2',
    subtitle: 'Product 2 subtitle',
    tag: '',
  },
  {
    id: 2,
    src: 'images/brands/products/3.png',
    alt: 'product',
    title: 'Product 3',
    subtitle: 'Product 3 subtitle',
    tag: '',
  },
  {
    id: 3,
    src: 'images/brands/products/1.png',
    alt: 'product',
    title: 'Product 4',
    subtitle: 'Product 4 subtitle',
    tag: '',
  },
  {
    id: 4,
    src: 'images/brands/products/2.png',
    alt: 'product',
    title: 'Product 5',
    subtitle: 'Product 5 subtitle',
    tag: '',
  },
  {
    id: 5,
    src: 'images/brands/products/3.png',
    alt: 'product',
    title: 'Product 6',
    subtitle: 'Product 6 subtitle',
    tag: '',
  },
];

const events = [
  {
    id: 0,
    title: 'Event 1',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 1,
    title: 'Event 2',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 2,
    title: 'Event 3',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 3,
    title: 'Event 4',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 4,
    title: 'Event 5',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 5,
    title: 'Event 6',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 6,
    title: 'Event 6',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
  {
    id: 7,
    title: 'Event 7',
    tag: 'Webinar',
    date: 'Online / 20 Feb 2024',
    alt: 'event',
  },
];

const partners = [
  {
    id: 0,
    src: 'images/brands/1.png',
    alt: 'partner',
  },
  {
    id: 1,
    src: 'images/brands/2.png',
    alt: 'partner',
  },
  {
    id: 2,
    src: 'images/brands/3.png',
    alt: 'partner',
  },
  {
    id: 3,
    src: 'images/brands/4.png',
    alt: 'partner',
  },
  {
    id: 4,
    src: 'images/brands/5.png',
    alt: 'partner',
  },
  {
    id: 5,
    src: 'images/brands/6.png',
    alt: 'partner',
  },
  {
    id: 6,
    src: 'images/brands/5.png',
    alt: 'partner',
  },
  {
    id: 7,
    src: 'images/brands/6.png',
    alt: 'partner',
  },
  {
    id: 8,
    src: 'images/brands/7.png',
    alt: 'partner',
  },
  {
    id: 9,
    src: 'images/brands/8.png',
    alt: 'partner',
  },
  {
    id: 10,
    src: 'images/brands/9.png',
    alt: 'partner',
  },
  {
    id: 11,
    src: 'images/brands/10.png',
    alt: 'partner',
  },
];

const createProductElements = (container) => {
  let element;
  products.forEach((item) => {
    element = document.createElement('div');
    element.classList.add(
      'roundedBorderBox',
      'group',
      'relative',
      'col-span-3',
      'flex',
      'items-center',
      'justify-center',
      'duration-300',
      'hover:border-redish',
      'shrink-0',
      'h-[570px]',
      'md:w-[387px]',
      'w-[calc(100%-1px)]',
    );

    let productHeader = document.createElement('div');

    productHeader.classList.add(
      'absolute',
      'top-16',
      'left-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'text-center',
    );
    element.appendChild(productHeader);

    let title = document.createElement('h3');
    title.textContent = item.title;
    title.classList.add('text-primary', 'font-extrabold');
    productHeader.appendChild(title);

    let tag = document.createElement('span');
    tag.textContent = item.tag;
    tag.classList.add(
      'text-redish',
      'font-bold',
      'text-sm',
      'absolute',
      'top-5',
      'left-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
    );
    element.appendChild(tag);

    let subtitle = document.createElement('p');
    subtitle.textContent = item.subtitle;
    subtitle.classList.add('font-light', 'opacity-50');
    productHeader.appendChild(subtitle);

    let img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.classList.add(
      'duration-300',
      'group-hover:scale-110',
      'object-contain',
      'h-[300px]',
      'w-[300px]',
    );
    element.appendChild(img);

    let button = document.createElement('button');
    button.textContent = 'Explore Product';
    button.classList.add(
      'absolute',
      'bottom-10',
      'left-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'text-redish',
      'opacity-0',
      'duration-300',
      'group-hover:opacity-100',
    );
    element.appendChild(button);

    container.appendChild(element);
  });
  return element;
};

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
    );

    let tag = document.createElement('div');
    tag.classList.add(
      'flex',
      'items-center',
      'text-xs',
      'justify-center',
      'relative',
      'border',
      'px-4',
      'py-1',
      'gap-2',
      'rounded-lg',
      'text-redish',
      'border-redish',
    );
    element.appendChild(tag);

    let tagIcon = document.createElement('span');
    tagIcon.classList.add(
      'w-3',
      'h-3',
      'mt-[2px]',
      'rounded-full',
      'bg-redish',
    );
    tag.appendChild(tagIcon);

    let tagText = document.createElement('span');
    tagText.textContent = item.tag;
    tag.appendChild(tagText);

    let date = document.createElement('span');
    date.textContent = item.date;
    element.appendChild(date);

    let title = document.createElement('h3');
    title.textContent = item.title;
    title.classList.add('font-bold', 'w-5/6');
    element.appendChild(title);

    let imgContainer = document.createElement('div');
    imgContainer.classList.add(
      'absolute',
      'scale-75',
      '-right-16',
      'top-0',
      '-translate-y-1/4',
      '-z-10',
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

const createPartnerElements = (container) => {
  let element;

  partners.forEach((item) => {
    element = document.createElement('div');
    element.classList.add(
      'roundedBorderBox',
      'group',
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'duration-300',
      'hover:border-redish',
      'shrink-0',
      'h-[200px]',
      'md:w-[200px]',
      'w-[calc(100%-1px)]',
    );

    let img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.classList.add(
      'duration-300',
      'group-hover:scale-110',
      'object-contain',
      'h-[300px]',
      'w-[300px]',
    );
    element.appendChild(img);

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
  createProductElements,
  products,
  galleryFeatured,
  prevButtonFeatured,
  nextButtonFeatured,
);

elementSlider(
  createEventElements,
  events,
  galleryEvents,
  prevButtonEvents,
  nextButtonEvents,
);

elementSlider(
  createPartnerElements,
  partners,
  galleryPartners,
  prevButtonPartners,
  nextButtonPartners,
);
