const themeData = {
  html: `
    <nav class="module-container">
      <h2 data-i18n="module_themes">Themes</h2>
      <section id="module-object-container" class="theme-options">
        <button class="module-link theme-option theme-light" data-theme="light" title="Light theme" aria-label="Light theme" data-i18n-title="theme_light_title" data-i18n-aria-label="theme_light_title" data-i18n="theme_light">Light</button>
        <button class="module-link theme-option theme-dark" data-theme="dark" title="Dark theme" aria-label="Dark theme" data-i18n-title="theme_dark_title" data-i18n-aria-label="theme_dark_title" data-i18n="theme_dark">Dark</button>
        <button class="module-link theme-option theme-accent" data-theme="accent" title="Accent theme" aria-label="Accent theme" data-i18n-title="theme_accent_title" data-i18n-aria-label="theme_accent_title" data-i18n="theme_accent">Accent</button>
      </section>
    </nav> `
};

const sidebarData = {
  html: `
    <nav class="module-container">
      <h2 data-i18n="module_links">Links</h2>
      <section id="module-object-container" class="links-list">
        <a class="module-link" href="https://github.com/KioZZero" target="_blank">
          <img class="link-icon" src="../Resources/icons/github.svg" alt="" aria-hidden="true" onerror="this.style.display='none'" style="width:24px;height:24px;margin-right:8px;object-fit:contain">
          <span class="link-label" data-i18n="link_github">Github</span>
        </a>
      </section>
    </nav>  `
};

const languageData = {
  html: `
    <nav class="module-container">
      <h2 data-i18n="module_languages">Languages</h2>
      <section id="module-object-container" class="language-list">
        <button class="module-link language-option" data-lang="fr"><img class="language-flag" src="../Resources/flags/fr.svg" alt="FR" onerror="this.style.display='none'" style="width:20px;height:14px;margin-right:8px;object-fit:cover"><span class="language-label" data-i18n="lang_french">French</span></button>
        <button class="module-link language-option" data-lang="en"><img class="language-flag" src="../Resources/flags/en.svg" alt="EN" onerror="this.style.display='none'" style="width:20px;height:14px;margin-right:8px;object-fit:cover"><span class="language-label" data-i18n="lang_english">English</span></button>
        <button class="module-link language-option" data-lang="de"><img class="language-flag" src="../Resources/flags/de.svg" alt="DE" onerror="this.style.display='none'" style="width:20px;height:14px;margin-right:8px;object-fit:cover"><span class="language-label" data-i18n="lang_german">German</span></button>
        <button class="module-link language-option" data-lang="es"><img class="language-flag" src="../Resources/flags/es.svg" alt="ES" onerror="this.style.display='none'" style="width:20px;height:14px;margin-right:8px;object-fit:cover"><span class="language-label" data-i18n="lang_spanish">Spanish</span></button>
      </section>
    </nav>  `
};

const projectTemplates = {
  skeletonCard: `
    <div class="project-skeleton-visual"></div>
    <div class="project-skeleton-line short"></div>
    <div class="project-skeleton-line long"></div>
  `,
  errorMessage: `<p class="error-message" data-i18n="projects_error">Could not load projects.</p>`
};