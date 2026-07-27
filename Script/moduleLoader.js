var isSidebarModuleVisible = false;

function showModule(container, html) {
  container.innerHTML = html;
  const module = container.querySelector('.module-container');
  if (module) {
    module.classList.remove('module-exit');
    module.classList.add('module-enter');
    module.getBoundingClientRect();
    module.classList.add('module-enter-active');
  }
  return module;
}

function closeModule(container) {
  const module = container.querySelector('.module-container');
  if (module) {
    module.classList.remove('module-enter-active');
    module.classList.remove('module-enter');
    module.classList.add('module-exit');
    module.addEventListener('transitionend', () => {
      if (container.contains(module)) {
        container.innerHTML = '';
      }
    }, { once: true });
  } else {
    container.innerHTML = '';
  }
}

function renderSidebarModule() {
  const container = document.getElementById('sidebar-module-container');
  showModule(container, sidebarData.html);

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = document.querySelector(`.sidebar a[href="${currentPath}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
  if (typeof updatePageText === 'function') updatePageText();
}

function getSettingsParams() {
  const params = new URLSearchParams();
  try {
    const theme = localStorage.getItem('site_theme');
    const lang = localStorage.getItem('site_language');
    if (theme) params.set('theme', theme);
    if (lang) params.set('lang', lang);
  } catch (e) {}
  try {
    const cache = readWindowNameCache();
    if (!params.has('theme') && cache.site_theme) params.set('theme', cache.site_theme);
    if (!params.has('lang') && cache.site_language) params.set('lang', cache.site_language);
  } catch (e) {}
  return params;
}

function readWindowNameCache() {
  try {
    const raw = window.name || '';
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function writeWindowNameCache(data) {
  try {
    const existing = readWindowNameCache();
    const merged = Object.assign({}, existing, data);
    window.name = JSON.stringify(merged);
  } catch (e) {}
}

function updateLocationHash() {
  try {
    const params = getSettingsParams();
    const hash = params.toString();
    const base = window.location.pathname + window.location.search;
    if (history.replaceState) {
      history.replaceState(null, '', hash ? base + '#' + hash : base);
    } else {
      window.location.hash = hash;
    }
  } catch (e) {}
  appendSettingsHashToLocalLinks();
}

function appendSettingsHashToLocalLinks() {
  try {
    const params = getSettingsParams();
    const hash = params.toString() ? '#' + params.toString() : '';
    const anchors = document.querySelectorAll('a[href]');
    anchors.forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (/^https?:|^mailto:|^tel:/i.test(href)) return;
      const cleanHref = href.split('#')[0];
      if (cleanHref === '') return;
      a.setAttribute('href', cleanHref + hash);
    });
  } catch (e) {}
}

function toggleSidebarModule() {
  isSidebarModuleVisible = !isSidebarModuleVisible;
  const container = document.getElementById('sidebar-module-container');

  if (isSidebarModuleVisible) {
    renderSidebarModule();
    appendSettingsHashToLocalLinks();
    console.log("Sidebar module opened");
  } else {
    closeModule(container);
    console.log("Sidebar module closed");
  }
}

var isThemeModuleVisible = false;

function renderThemeModule() {
  const container = document.getElementById('theme-module-container');
  showModule(container, themeData.html);

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = document.querySelector(`.theme a[href="${currentPath}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
  if (typeof updatePageText === 'function') updatePageText();
}

function toggleThemeModule() {
  isThemeModuleVisible = !isThemeModuleVisible;
  const container = document.getElementById('theme-module-container');

  if (isThemeModuleVisible) {
    renderThemeModule();
    appendSettingsHashToLocalLinks();
    console.log("Theme module opened");
  } else {
    closeModule(container);
    console.log("Theme module closed");
  }
}

function applyTheme(name) {
  const root = document.documentElement;
  const themes = {
    light: {
        '--background-color': '#f5f7ff',
        '--text-color': '#172033',
        '--glass-color': '#22304f',
        '--glass-color-transparent': 'rgba(34, 48, 79, 0.14)',
        '--accent-color': '#6d8bff',
        '--accent-soft': 'rgba(109, 139, 255, 0.16)'
    },
    dark: {
        '--background-color': '#0b0f14',
        '--text-color': '#e6eef8',
        '--glass-color': '#0f1724',
        '--glass-color-transparent': 'rgba(255,255,255,0.06)',
        '--accent-color': '#7aa2ff',
        '--accent-soft': 'rgba(122,162,255,0.12)'
    },
    accent: {
        '--background-color': '#fff8f2',
        '--text-color': '#2b2b2b',
        '--glass-color': '#5b6fb3',
        '--glass-color-transparent': 'rgba(91,111,179,0.12)',
        '--accent-color': '#ff8a65',
        '--accent-soft': 'rgba(255,138,101,0.12)'
    }
  };
  const vars = themes[name] || themes.light;
  Object.keys(vars).forEach(k => root.style.setProperty(k, vars[k]));
  try { localStorage.setItem('site_theme', name); } catch (e) {}
}

const originalRenderThemeModule = renderThemeModule;
renderThemeModule = function() {
  originalRenderThemeModule();
  const container = document.getElementById('theme-module-container');
  const buttons = container.querySelectorAll('.theme-option');
  buttons.forEach(b => {
    b.addEventListener('click', () => {
      const t = b.getAttribute('data-theme') || 'light';
      applyTheme(t);
      try { writeWindowNameCache({ site_theme: t }); } catch (e) {}
      updateLocationHash();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = localStorage.getItem('site_theme');
    if (saved) applyTheme(saved);
  } catch (e) {}
});


var isLanguageModuleVisible = false;

function renderLanguageModule() {
  const container = document.getElementById('language-module-container');
  showModule(container, languageData.html);

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = document.querySelector(`.theme a[href="${currentPath}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
  if (typeof updatePageText === 'function') updatePageText();
}

function toggleLanguageModule() {
  isLanguageModuleVisible = !isLanguageModuleVisible;
  const container = document.getElementById('language-module-container');

  if (isLanguageModuleVisible) {
    renderLanguageModule();
    const buttons = container.querySelectorAll('.language-option');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-lang') || 'en';
        if (typeof changeLanguage === 'function') {
          changeLanguage(code);
          document.documentElement.lang = code;
          if (typeof updatePageText === 'function') updatePageText();
          try { localStorage.setItem('site_language', code); } catch (e) {}
          writeWindowNameCache({ site_language: code });
          updateLocationHash();
        }
      });
    });
    console.log("Language module opened");
  } else {
    closeModule(container);
    console.log("Language module closed");
  }
}

function parseSettingsFromHash() {
  try {
    const h = (location.hash || '').replace(/^#/, '');
    if (h) {
      const params = new URLSearchParams(h);
      return { theme: params.get('theme'), lang: params.get('lang') };
    }
    return readWindowNameCache();
  } catch (e) { return {}; }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    const fromHash = parseSettingsFromHash();
    const savedTheme = localStorage.getItem('site_theme');
    const savedLang = localStorage.getItem('site_language');

    const theme = fromHash.theme || savedTheme;
    const lang = fromHash.lang || savedLang;

    if (theme) {
      applyTheme(theme);
      try { localStorage.setItem('site_theme', theme); } catch (e) {}
      writeWindowNameCache({ site_theme: theme });
    }
    if (lang) {
      if (typeof changeLanguage === 'function') changeLanguage(lang);
      document.documentElement.lang = lang;
      if (typeof updatePageText === 'function') updatePageText();
      try { localStorage.setItem('site_language', lang); } catch (e) {}
      writeWindowNameCache({ site_language: lang });
    }
  } catch (e) {}
  appendSettingsHashToLocalLinks();
});