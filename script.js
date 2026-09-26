// Oculta el aviso "¡Factura Válida!" a los 3 segundos, con fundido suave
setTimeout(() => {
  const toast = document.querySelector('.toast');
  if (toast) {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 500); // quita del DOM tras el fade
  }
}, 3000);
