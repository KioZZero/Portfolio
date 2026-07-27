const translation = {
  en: {
    welcome: "Welcome to my portfolio!",
    description: "My name is Niels and I am a junior developer from Lyon.",
    projects_title: "My Projects",
    projects_desc: "Here are a few projects I'm proud to share.",
    link_projects: "Projects",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Light",
    theme_dark: "Dark",
    theme_accent: "Accent",
    lang_french: "French",
    lang_english: "English",
    lang_german: "German",
    lang_spanish: "Spanish"
  },
  fr: {
    welcome: "Bienvenue sur mon portfolio !",
    description: "Je m'appelle Niels et je suis un développeur junior de Lyon.",
    projects_title: "Mes projets",
    projects_desc: "Voici quelques projets dont je suis fier.",
    link_projects: "Projets",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Clair",
    theme_dark: "Sombre",
    theme_accent: "Accent",
    lang_french: "Français",
    lang_english: "Anglais",
    lang_german: "Allemand",
    lang_spanish: "Espagnol"
  },
  es: {
    welcome: "¡Bienvenido a mi portafolio!",
    description: "Me llamo Niels y soy un desarrollador junior de Lyon.",
    projects_title: "Mis proyectos",
    projects_desc: "Aquí hay algunos proyectos de los que estoy orgulloso.",
    link_projects: "Proyectos",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Claro",
    theme_dark: "Oscuro",
    theme_accent: "Accent",
    lang_french: "Francés",
    lang_english: "Inglés",
    lang_german: "Alemán",
    lang_spanish: "Español"
  },
  de: {
    welcome: "Willkommen in meinem Portfolio!",
    description: "Ich heiße Niels und bin ein Junior-Entwickler aus Lyon.",
    projects_title: "Meine Projekte",
    projects_desc: "Hier sind einige Projekte, auf die ich stolz bin.",
    link_projects: "Projekte",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Hell",
    theme_dark: "Dunkel",
    theme_accent: "Akzent",
    lang_french: "Französisch",
    lang_english: "Englisch",
    lang_german: "Deutsch",
    lang_spanish: "Spanisch"
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

document.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = localStorage.getItem('site_language');
    if (saved && actualLanguage.includes(saved)) {
      language = saved;
    }
  } catch (e) {}
  updatePageText();
});

const originalChangeLanguage = changeLanguage;
changeLanguage = function(newTongue) {
  originalChangeLanguage(newTongue);
  try { localStorage.setItem('site_language', language); } catch (e) {}
};
