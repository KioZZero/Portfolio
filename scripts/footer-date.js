document.addEventListener('DOMContentLoaded', () => {
  const footerText = document.getElementById('footer-text');
  if (!footerText) return;

  const currentYear = new Date().getFullYear();
  footerText.textContent = `© ${currentYear} My Portfolio. All rights reserved.`;
});
