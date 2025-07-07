// Galería: mostrar todas las imágenes extra al hacer clic en "Mostrar más", y volver a ocultar al hacer clic en "Mostrar menos"
window.toggleGallery = function () {
  const extraImages = Array.from(document.querySelectorAll('#galeria-extra img'));
  const btn = document.getElementById('toggle-gallery');

  if (!btn.dataset.index) btn.dataset.index = '0';

  let index = parseInt(btn.dataset.index, 10);
  const batchSize = 6;

  if (btn.dataset.state === 'collapsed') {
    const toShow = extraImages.slice(0, extraImages.length);
    toShow.forEach(img => img.classList.remove('hidden'));

    btn.textContent = 'Mostrar menos';
    btn.dataset.state = 'expanded';
  } else {
    extraImages.forEach(img => img.classList.add('hidden'));
    btn.textContent = 'Mostrar más';
    btn.dataset.state = 'collapsed';
    btn.dataset.index = '0';
  }
};

// Inicializa la galería extra: oculta todas menos las primeras 3 y muestra el contenedor si hay imágenes
document.addEventListener('DOMContentLoaded', function () {
  const extraImages = Array.from(document.querySelectorAll('#galeria-extra img'));
  const btn = document.getElementById('toggle-gallery');

  extraImages.forEach((img, index) => {
    if (index < 3) {
      img.classList.remove('hidden');
    } else {
      img.classList.add('hidden');
    }
  });

  if (extraImages.length > 0) {
    document.getElementById('galeria-extra').classList.remove('hidden');
    if (btn) {
      btn.style.display = extraImages.length > 3 ? 'block' : 'none';
      btn.dataset.index = '3';
      btn.dataset.state = 'collapsed';
    }
  }

  showCategory('diversiones');
});
// Toggle menú móvil en navbar
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});