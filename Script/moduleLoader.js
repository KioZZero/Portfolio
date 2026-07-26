/* Sidebar module */

var isSidebarModuleVisible = false;

function renderSidebarModule() {
  document.getElementById('sidebar-module-container').innerHTML = sidebarData.html;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = document.querySelector(`.sidebar a[href="${currentPath}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function toggleSidebarModule() {
  isSidebarModuleVisible = !isSidebarModuleVisible;
  
  const container = document.getElementById('sidebar-module-container');

  if (isSidebarModuleVisible) {
    renderSidebarModule();
    console.log("Sidebar module opened");
  } else {
    container.innerHTML = '';
    console.log("Sidebar module closed");
  }
}

/* Theme module */

var isThemeModuleVisible = false;

function renderThemeModule() {
  document.getElementById('theme-module-container').innerHTML = themeData.html;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = document.querySelector(`.theme a[href="${currentPath}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function toggleThemeModule() {
  isThemeModuleVisible = !isThemeModuleVisible;
  
  const container = document.getElementById('theme-module-container');

  if (isThemeModuleVisible) {
    renderThemeModule();
    console.log("Theme module opened");
  } else {
    container.innerHTML = '';
    console.log("Theme module closed");
  }
}


/* Language module */

var isLanguageModuleVisible = false;

function renderLanguageModule() {
  document.getElementById('language-module-container').innerHTML = languageData.html;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = document.querySelector(`.theme a[href="${currentPath}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function toggleLanguageModule() {
  isLanguageModuleVisible = !isLanguageModuleVisible;
  
  const container = document.getElementById('language-module-container');

  if (isLanguageModuleVisible) {
    renderLanguageModule();
    console.log("Language module opened");
  } else {
    container.innerHTML = '';
    console.log("Language module closed");
  }
}