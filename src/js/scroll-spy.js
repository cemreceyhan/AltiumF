const scrollSpyContainer = document.querySelector('main');
const scrollSpyItems = document.getElementById('scroll-spy-items');
const generalInformation = document.getElementById('general-information');

const scrollSpyTitles = [
  ...scrollSpyContainer.querySelectorAll('h1'),
  ...scrollSpyContainer.querySelectorAll('h2'),
];

scrollSpyTitles.forEach((title, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = title.textContent;
  listItem.setAttribute('data-scroll-spy', index);
  scrollSpyItems.appendChild(listItem);
});

const scrollSpyItemsList = scrollSpyItems.querySelectorAll('li');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.getAttribute('data-scroll-spy');
        console.log(index);
        scrollSpyItemsList.forEach((item) => {
          item.classList.remove('active');
        });
        scrollSpyItemsList[index].classList.add('active');
      }
    });
  },
  { threshold: 0.1, rootMargin: '-510px' },
);

scrollSpyTitles.forEach((title) => {
  observer.observe(title);
});

scrollSpyItemsList.forEach((item) => {
  item.addEventListener('click', () => {
    const index = item.getAttribute('data-scroll-spy');
    scrollSpyTitles[index].scrollIntoView({ behavior: 'smooth' });
  });
});
