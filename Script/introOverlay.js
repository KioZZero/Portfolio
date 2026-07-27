document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('intro-overlay')
  if (overlay) {
    console.log('ok');
    overlay.addEventListener('animationend', () => overlay.remove())
  }
})