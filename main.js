const panels = document.querySelectorAll('.panel');

// Función para alternar la clase 'open' en el panel al hacer clic
function toggleOpen() {
  this.classList.toggle('open');

  // Cerrar los demás paneles abiertos
  panels.forEach(panel => {
    if (panel !== this) {
      panel.classList.remove('open');
    }
  });
}

// Función para alternar la clase 'open-active' después de la transición
function toggleActive(e) {
  // Se verifica si la propiedad 'flex' está involucrada en la transición
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Agregar el evento click a cada panel para activar la función toggleOpen
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Agregar el evento transitionend a cada panel para activar la función toggleActive
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
