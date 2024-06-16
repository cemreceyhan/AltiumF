const scrollSpyContainer = document.querySelector('main');
const generalInformation = document.getElementById('general-information');
const scrollSpyItems = document.getElementById('scroll-spy-items');
const scrollSpyTitles = scrollSpyContainer.querySelectorAll('h2');

scrollSpyTitles.forEach((title, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = title.textContent;
  listItem.classList.add('cursor-pointer', 'py-4');
  scrollSpyItems.appendChild(listItem);
});
const scrollSpyItemsList = scrollSpyItems.querySelectorAll('li');

const scrollSpyItemsArray = Array.from(scrollSpyItemsList);
const scrollSpyItemsArrayLength = scrollSpyItemsArray.length;
const scrollSpyItemsArrayOffset = scrollSpyItemsArray.map((_, idx) => {
  return document.querySelector(`[data-scroll-spy="${idx}"]`).offsetTop;
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const scrollSpyItemsArrayOffsetLength = scrollSpyItemsArrayOffset.length;
  for (let i = 0; i < scrollSpyItemsArrayOffsetLength; i++) {
    if (scrollPosition >= scrollSpyItemsArrayOffset[i] - 200) {
      scrollSpyItemsArray.forEach((item) => {
        item.classList.remove('active');
      });
      scrollSpyItemsArray[i].classList.add('active');
    }
  }
});
if (scrollSpyItemsArray.length > 0) {
  scrollSpyItemsArray[0].classList.add('active');
}

scrollSpyItemsArray.forEach((item, index) => {
  item.addEventListener('click', () => {
    window.scrollTo({
      top: scrollSpyItemsArrayOffset[index] - 100,
      behavior: 'smooth',
    });
  });
});
