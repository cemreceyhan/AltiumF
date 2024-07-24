import { navList } from '../data/mega-menu.json';

const headerBar = document.querySelector('#header-main nav');
const megaMenu = document.getElementById('mega-menu');
const megaMenuSub = document.getElementById('mega-sub');
const megaMenuSide = document.getElementById('mega-side');
const toUpButton = document.getElementById('to-up');
const body = document.querySelector('body');

const currentRoute = window.location.pathname.split('/').pop();

const createNavItem = (item) => {
  const navItem = document.createElement('a');
  if (item.link === currentRoute) {
    navItem.classList.add('text-secondary');
  }
  navItem.href = item.link;
  navItem.textContent = item.title;
  navItem.classList.add(
    'hover:text-secondary',
    'hover:cursor-pointer',
    'text-center',
  );
  return navItem;
};

const createSideMenuItem = (subItem) => {
  const li = document.createElement('li');
  li.classList.add(
    'flex',
    'items-center',
    'justify-between',
    'hover:text-secondary',
    'hover:cursor-pointer',
    'first:pt-0',
    'last:pb-0',
    'py-4',
  );
  li.innerHTML = `
    <a href="#" class="deneme">${subItem.title}</a>
    <i class="fi fi-ts-angle-small-right pt-2"></i>
  `;
  return li;
};

const createSubMenu = (subSubItem) => {
  const div = document.createElement('div');
  div.classList.add('space-y-4');
  const h3 = document.createElement('h3');
  h3.classList.add('text-secondary', 'font-semibold');
  h3.textContent = subSubItem.title;
  const ul = document.createElement('ul');
  ul.classList.add('space-y-3', 'text-primary');
  subSubItem.list.forEach((listItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = listItem.link;
    a.textContent = listItem.title;
    li.appendChild(a);
    ul.appendChild(li);
  });
  div.appendChild(h3);
  div.appendChild(ul);
  return div;
};
navList.forEach((item) => {
  const navItem = createNavItem(item);

  let timeoutId;
  navItem.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    if (item.list) {
      megaMenu.classList.add('animate-fade-in-down');
      megaMenu.classList.remove('animate-fade-out-up', 'hidden');
    }
  });

  megaMenu.addEventListener('mouseleave', () => {
    megaMenu.classList.add('animate-fade-out-up');
    timeoutId = setTimeout(() => {
      megaMenu.classList.add('hidden');
    }, 500);
  });

  headerBar.appendChild(navItem);

  navItem.addEventListener('mouseover', () => {
    megaMenuSide.innerHTML = '';
    if (item.list) {
      item.list.forEach((subItem) => {
        const li = createSideMenuItem(subItem);
        megaMenuSide.appendChild(li);

        li.addEventListener('mouseover', () => {
          megaMenuSub.innerHTML = '';
          subItem.list.forEach((subSubItem) => {
            const div = createSubMenu(subSubItem);
            megaMenuSub.appendChild(div);
          });
        });
      });
    }
  });

  if (!item.list) {
    navItem.addEventListener('mouseover', () => {
      megaMenu.classList.add('hidden');
    });
  }
});

// MEGA MENU SECTION END

window.addEventListener('load', () => {
  toUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toUpButton.classList.remove('hidden');
  } else {
    toUpButton.classList.add('hidden');
  }
});

// MOBILE MENU SECTION START

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');
const bar3 = document.getElementById('bar-3');

mobileMenuButton.addEventListener('click', () => {
  if (mobileMenu.dataset.megaMenu === 'closed') {
    mobileMenu.dataset.megaMenu = 'open';
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    body.classList.add('overflow-hidden');
    bar1.classList.add(
      'transform',
      'rotate-[50deg]',
      'translate-y-[5px]',
      'bg-primary',
    );
    bar2.classList.add('opacity-0');
    bar3.classList.add(
      'transform',
      '-rotate-[50deg]',
      '-translate-y-[5px]',
      'bg-primary',
    );
  } else {
    mobileMenu.dataset.megaMenu = 'closed';
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    body.classList.remove('overflow-hidden');
    bar1.classList.remove('transform', 'rotate-[50deg]', 'translate-y-[5px]');
    bar2.classList.remove('opacity-0');
    bar3.classList.remove('transform', '-rotate-[50deg]', '-translate-y-[5px]');
  }

  const openTabs = mobileMenu.querySelectorAll('.sub-ul:not(.hidden)');
  openTabs.forEach((tab) => {
    tab.classList.add('hidden');
    const icon = tab.previousSibling.querySelector('i');
    icon.classList.remove('fi-ts-angle-small-up');
    icon.classList.add('fi-ts-angle-small-down');
  });
});

const createMobileMenu = (list) => {
  const ul = document.createElement('ul');
  ul.classList.add('overflow-y-auto', 'flex-1');
  list.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.link || '#';
    a.textContent = item.title;
    a.classList.add(
      'text-primary',
      'hover:cursor-pointer',
      'flex',
      'items-center',
      'py-2',
      'px-1',
      'border-b',
      'hover:border-tertiary',
      'hover:bg-light-200/60',
      'hover:duration-500',
    );
    const i = document.createElement('i');
    i.classList.add(
      'fi',
      'fi-ts-angle-small-down',
      'text-primary',
      'text-xl',
      'ml-2',
      '-rotate-90',
    );
    if (!item.list) {
      a.appendChild(i);
    }
    li.appendChild(a);
    if (item.list) {
      a.classList.add(
        'text-primary',
        'hover:cursor-pointer',
        'flex',
        'items-center',
        'py-2',
        'px-1',
        'border-b',
        'hover:border-tertiary',
        'hover:bg-light-200/60',
        'hover:duration-500',
      );
      const iEl = document.createElement('i');
      iEl.classList.add(
        'fi',
        'fi-ts-angle-small-down',
        'text-primary',
        'text-xl',
        'ml-2',
        'mt-1',
      );
      a.appendChild(iEl);
      const subUl = createMobileMenu(item.list);
      subUl.classList.add('hidden');
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const openTabs = ul.querySelectorAll('.sub-ul:not(.hidden)');
        openTabs.forEach((tab) => {
          if (tab !== subUl) {
            tab.classList.add('hidden');
            const icon = tab.previousSibling.querySelector('i');
            icon.classList.remove('fi-ts-angle-small-up');
            icon.classList.add('fi-ts-angle-small-down');
          }
        });
        if (subUl.classList.contains('hidden')) {
          subUl.classList.remove('hidden');
          i.classList.remove('fi-ts-angle-small-down');
          i.classList.add('fi-ts-angle-small-up');
        } else {
          subUl.classList.add('hidden');
          i.classList.remove('fi-ts-angle-small-up');
          i.classList.add('fi-ts-angle-small-down');
        }
      });
      subUl.classList.add('sub-ul');
      li.appendChild(subUl);
    }
    ul.appendChild(li);
  });
  ul.classList.add('pl-4');
  return ul;
};

const mobileMenuList = createMobileMenu(navList);
mobileMenu.appendChild(mobileMenuList);

const openModal = (element) => {
  element.classList.remove('hidden');
  body.classList.add('overflow-hidden');
};

const closeModal = (element) => {
  element.classList.add('hidden');
  body.classList.remove('overflow-hidden');
};

// ALTIUM SELECT COUNTRY MODAL START

const welcomeModal = document.getElementById('welcome-modal');
const welcomeModalCloseButton = welcomeModal.querySelector('#close-button');
const modalSelectInput = welcomeModal.querySelector('select');

const handleModalInputChange = () => {
  if (modalSelectInput.value !== 'default') {
    localStorage.setItem('welcome', 'selected');
    closeModal(welcomeModal);
  }
};

modalSelectInput.addEventListener('change', handleModalInputChange);

window.addEventListener('load', () => {
  const welcome = localStorage.getItem('welcome');
  if (!welcome) {
    openModal(welcomeModal);
    return;
  }
  if (welcome === 'closed') {
    openModal(welcomeModal);
  } else {
    closeModal(welcomeModal);
  }
});

const handleModalCloseButtonClick = () => {
  localStorage.setItem('welcome', 'closed');
  welcomeModal.classList.add('hidden');
  body.classList.remove('overflow-hidden');
};

welcomeModalCloseButton.addEventListener('click', handleModalCloseButtonClick);

// ALTIUM SELECT COUNTRY MODAL END

// BASKET DESKTOP SECTION START

const basketButton = document.getElementById('basket');
const basketModal = document.getElementById('basket-modal');
const basketCloseButton = document.getElementById('close-basket');

basketButton.addEventListener('click', () => {
  openModal(basketModal);
});

basketCloseButton.addEventListener('click', () => {
  closeModal(basketModal);
});

window.addEventListener('click', (event) => {
  if (event.target === basketModal) {
    closeModal(basketModal);
  }
});

// BASKET DESKTOP SECTION END

// BASKET MOBILE SECTION START

const basketMobileButton = document.getElementById('basket-mobile');
const basketMobileModal = document.getElementById('basket-modal-mobile');
const basketMobileCloseButton = document.getElementById('close-basket-mobile');

basketMobileButton.addEventListener('click', () => {
  openModal(basketMobileModal);
});

basketMobileCloseButton.addEventListener('click', () => {
  closeModal(basketMobileModal);
});

window.addEventListener('click', (event) => {
  if (event.target === basketMobileModal) {
    closeModal(basketMobileModal);
  }
});

// BASKET MOBILE SECTION END
