document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('button[data-id]');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const id = button.getAttribute('data-id');
      const content = document.getElementById(`content-${id}`);
      const icon = document.getElementById(`icon-${id}`);

      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
});
