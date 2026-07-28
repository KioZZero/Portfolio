const translation = {
  en: {
    welcome: "Welcome to my portfolio!",
    description: "My name is Niels and I am a junior developer from Lyon.",
    discover: "Here you can discover a few highlights from my work and projects.",
    explore_projects: "Explore my projects",
    back_to_home: "Back to home",
    loading_projects: "Loading projects…",
    projects_error: "Could not load projects.",
    project_discover: "Discover the project",
    page_title_projects: "Projects",
    page_title_home: "Portfolio",
    module_themes: "Themes",
    module_links: "Links",
    module_languages: "Languages",
    link_projects: "Projects",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Light",
    theme_dark: "Dark",
    theme_accent: "Accent",
    theme_light_title: "Light theme",
    theme_dark_title: "Dark theme",
    theme_accent_title: "Accent theme",
    toggle_links: "Links",
    toggle_themes: "Themes",
    toggle_languages: "Languages",
    lang_french: "French",
    lang_english: "English",
    lang_german: "German",
    lang_spanish: "Spanish"
  },
  fr: {
    welcome: "Bienvenue sur mon portfolio !",
    description: "Je m'appelle Niels et je suis un développeur junior de Lyon.",
    discover: "Vous pouvez découvrir ici quelques-uns des points forts de mon travail et de mes projets.",
    explore_projects: "Explorer mes projets",
    back_to_home: "Retour à l'accueil",
    loading_projects: "Chargement des projets…",
    projects_error: "Impossible de charger les projets.",
    project_discover: "Découvrir le projet",
    page_title_projects: "Projets",
    page_title_home: "Portfolio",
    module_themes: "Thèmes",
    module_links: "Liens",
    module_languages: "Langues",
    link_projects: "Projets",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Clair",
    theme_dark: "Sombre",
    theme_accent: "Accent",
    theme_light_title: "Thème clair",
    theme_dark_title: "Thème sombre",
    theme_accent_title: "Thème accent",
    toggle_links: "Liens",
    toggle_themes: "Thèmes",
    toggle_languages: "Langues",
    lang_french: "Français",
    lang_english: "Anglais",
    lang_german: "Allemand",
    lang_spanish: "Espagnol"
  },
  es: {
    welcome: "¡Bienvenido a mi portafolio!",
    description: "Me llamo Niels y soy un desarrollador junior de Lyon.",
    discover: "Aquí puedes descubrir algunos de los aspectos más destacados de mi trabajo y mis proyectos.",
    explore_projects: "Explorar mis proyectos",
    back_to_home: "Volver al inicio",
    loading_projects: "Cargando proyectos…",
    projects_error: "No se pudieron cargar los proyectos.",
    project_discover: "Descubrir el proyecto",
    page_title_projects: "Proyectos",
    page_title_home: "Portafolio",
    module_themes: "Temas",
    module_links: "Enlaces",
    module_languages: "Idiomas",
    link_projects: "Proyectos",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Claro",
    theme_dark: "Oscuro",
    theme_accent: "Accent",
    theme_light_title: "Tema claro",
    theme_dark_title: "Tema oscuro",
    theme_accent_title: "Tema de acento",
    toggle_links: "Enlaces",
    toggle_themes: "Temas",
    toggle_languages: "Idiomas",
    lang_french: "Francés",
    lang_english: "Inglés",
    lang_german: "Alemán",
    lang_spanish: "Español"
  },
  de: {
    welcome: "Willkommen in meinem Portfolio!",
    description: "Ich heiße Niels und bin ein Junior-Entwickler aus Lyon.",
    discover: "Hier können Sie einige Highlights aus meiner Arbeit und meinen Projekten entdecken.",
    explore_projects: "Meine Projekte entdecken",
    back_to_home: "Zurück zur Startseite",
    loading_projects: "Projekte werden geladen…",
    projects_error: "Projekte konnten nicht geladen werden.",
    project_discover: "Projekt entdecken",
    page_title_projects: "Projekte",
    page_title_home: "Portfolio",
    module_themes: "Themen",
    module_links: "Links",
    module_languages: "Sprachen",
    link_projects: "Projekte",
    link_linkedin: "LinkedIn",
    link_github: "Github",
    link_instagram: "Instagram",
    link_youtube: "YouTube",
    theme_light: "Hell",
    theme_dark: "Dunkel",
    theme_accent: "Akzent",
    theme_light_title: "Helles Thema",
    theme_dark_title: "Dunkles Thema",
    theme_accent_title: "Akzent-Thema",
    toggle_links: "Links",
    toggle_themes: "Themen",
    toggle_languages: "Sprachen",
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
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = i18n(key);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (key) {
      el.setAttribute("title", i18n(key));
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (key) {
      el.setAttribute("alt", i18n(key));
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (key) {
      el.setAttribute("aria-label", i18n(key));
    }
  });

  const titleElement = document.querySelector("title[data-i18n]");
  if (titleElement) {
    document.title = i18n(titleElement.getAttribute("data-i18n"));
  }
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
