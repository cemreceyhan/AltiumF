import { navList } from './data/mega-menu.json';
import VanillaCalendar from 'vanilla-calendar-pro';

const headerBar = document.querySelector('#header-main nav');
const megaMenu = document.getElementById('mega-menu');
const megaMenuSub = document.getElementById('mega-sub');
const megaMenuSide = document.getElementById('mega-side');

const currentRoute = window.location.pathname.split('/').pop();
const options = {
  settings: {
    visibility: {
      theme: 'light',
    },
  },
  CSSClasses: {
    calendar: 'calendar-wrapper',
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();

const createNavItem = (item) => {
  const navItem = document.createElement('a');
  if (item.link === currentRoute) {
    navItem.classList.add('text-secondary');
  }
  navItem.href = item.link;
  navItem.textContent = item.title;
  navItem.classList.add('hover:text-secondary', 'hover:cursor-pointer');
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
    megaMenu.classList.add('animate-fade-in-down');
    megaMenu.classList.remove('animate-fade-out-up', 'hidden');
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
    item.sideMenuList.forEach((subItem) => {
      const li = createSideMenuItem(subItem);
      megaMenuSide.appendChild(li);

      li.addEventListener('mouseover', () => {
        megaMenuSub.innerHTML = '';
        subItem.subMenu.forEach((subSubItem) => {
          const div = createSubMenu(subSubItem);
          megaMenuSub.appendChild(div);
        });
      });
    });
  });
});
