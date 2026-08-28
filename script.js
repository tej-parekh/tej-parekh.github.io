const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const dialog = document.querySelector('#lightbox');
const dialogImage = document.querySelector('#lightbox-image');
const dialogCaption = document.querySelector('#lightbox-caption');
const closeButton = document.querySelector('.lightbox-close');

if (dialog && dialogImage) {
  document.querySelectorAll('.media img').forEach((image) => {
    image.addEventListener('click', () => {
      const figure = image.closest('figure');
      const caption = figure?.querySelector('figcaption')?.textContent?.trim() || '';
      dialogImage.src = image.currentSrc || image.src;
      dialogImage.alt = image.alt;
      dialogCaption.textContent = caption;
      dialog.showModal();
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const box = dialog.getBoundingClientRect();
    const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
    if (outside) dialog.close();
  });
  dialog.addEventListener('close', () => {
    dialogImage.removeAttribute('src');
  });
}
