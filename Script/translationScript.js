const translation = {
  en: {
    welcome: "Welcome to my portfolio !",
    description: "This is a simple vanilla JS i18n example."
  },
  fr: {
    welcome: "Bienvenue sur mon portfolio !",
    description: "Ceci est un exemple i18n simple en JS vanilla."
  },
  es: {
    welcome: "¡Bienvenido a mi portfolio !",
    description: "Este es un ejemplo simple de i18n en JS vanilla."
  },
  de: {
    welcome: "Willkommen auf meiner portfolio !",
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
  <button onclick="changeLanguage('en')">EN</button>
  <button onclick="changeLanguage('fr')">FR</button>
  <button onclick="changeLanguage('es')">ES</button>
  <button onclick="changeLanguage('de')">DE</button>

  <h1 data-i18n="welcome">Welcome to my website!</h1>

  <script src="script.js"></script>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      updatePageText();
    });
  </script>
*/