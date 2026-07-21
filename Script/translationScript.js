const translation = {
  en: {
    welcome: "Welcome to my website!",
    description: "This is a simple vanilla JS i18n example."
  },
  fr: {
    welcome: "Bienvenue sur mon site web !",
    description: "Ceci est un exemple i18n simple en JS vanilla."
  },
  es: {
    welcome: "¡Bienvenido a mi sitio web!",
    description: "Este es un ejemplo simple de i18n en JS vanilla."
  },
  de: {
    welcome: "Willkommen auf meiner Website!",
    description: "Dies ist ein einfaches Vanilla-JS-i18n-Beispiel."
  }
};

let language = "en";
const actualLanguage = ["en", "fr", "es", "de"];

function changeLanguage(newTongue) {
  if (actualLanguage.includes(newTongue)) {
    language = newTongue;
    updatePageText();
  }
}

function i18n(key) {
  language = language ?? "en";
  return translation[language]?.[key] ?? key;
}

function updatePageText() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18n(key);
  });
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>i18n Demo</title>
</head>
<body>

  <button onclick="changeLanguage('en')">EN</button>
  <button onclick="changeLanguage('fr')">FR</button>
  <button onclick="changeLanguage('es')">ES</button>
  <button onclick="changeLanguage('de')">DE</button>

  <hr>

  <h1 data-i18n="welcome">Welcome to my website!</h1>
  <p data-i18n="description">This is a simple vanilla JS i18n example.</p>

  <script src="script.js"></script>
  <script>
    // Translate the page once DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      updatePageText();
    });
  </script>
</body>
</html>

*/