document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) {
    return;
  }

  const loader = document.getElementById('projects-loader');
  if (loader) {
    loader.setAttribute('aria-hidden', 'false');
  }

  const skeletonCount = 2;
  const skeletons = [];
  for (let i = 0; i < skeletonCount; i++) {
    const s = document.createElement('div');
    s.className = 'project-card skeleton-card';
    s.innerHTML = projectTemplates && projectTemplates.skeletonCard ? projectTemplates.skeletonCard : '<div style="height:140px;background:linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.06));border-radius:12px;margin-bottom:12px"></div><div style="height:18px;width:60%;background:rgba(0,0,0,0.04);border-radius:6px;margin-bottom:8px"></div><div style="height:12px;width:90%;background:rgba(0,0,0,0.03);border-radius:6px"></div>';
    skeletons.push(s);
    grid.appendChild(s);
  }

  const dataUrl = new URL('projectData.json', window.location.href).href;
  console.log('Loading projects from', dataUrl);

  function renderProjects(data) {
    skeletons.forEach(s => s.remove());
    if (loader) loader.setAttribute('aria-hidden', 'true');
    grid.innerHTML = '';

    data.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';

      const img = document.createElement('img');
      img.src = project.image || '../Resources/pattern.png';
      img.alt = project.title || '';
      img.className = 'project-image';

      const h3 = document.createElement('h3');
      h3.textContent = project.title || '';

      const p = document.createElement('p');
      p.textContent = project.description || '';

      const a = document.createElement('a');
      a.className = 'page-link project-link';
      a.href = project.url || '#';
      a.textContent = 'Discover the project';

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(a);

      grid.appendChild(card);
    });
  }

  fetch(dataUrl)
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(data => renderProjects(data))
    .catch(err => {
      console.warn('Fetch failed, attempting file fallback for project data', err);

      if (window.__projectData && Array.isArray(window.__projectData)) {
        console.log('Using in-page fallback project data');
        renderProjects(window.__projectData);
        return;
      }

      const fallbackSrc = new URL('projectData.js', window.location.href).href;
      console.log('Attempting to load fallback script:', fallbackSrc);
      const s = document.createElement('script');
      s.src = fallbackSrc;
      s.onload = () => {
        if (window.__projectData && Array.isArray(window.__projectData)) {
          renderProjects(window.__projectData);
        } else {
          console.error('Fallback script loaded but no window.__projectData found');
          skeletons.forEach(s => s.remove());
          if (loader) loader.setAttribute('aria-hidden', 'true');
          grid.innerHTML = projectTemplates && projectTemplates.errorMessage ? projectTemplates.errorMessage : '<p style="grid-column:1/-1;color:var(--text-color)">Could not load projects.</p>';
        }
      };
      s.onerror = () => {
        console.error('Failed to load fallback script from', fallbackSrc);
        skeletons.forEach(s => s.remove());
        if (loader) loader.setAttribute('aria-hidden', 'true');
        grid.innerHTML = projectTemplates && projectTemplates.errorMessage ? projectTemplates.errorMessage : '<p style="grid-column:1/-1;color:var(--text-color)">Could not load projects.</p>';
      };
      document.head.appendChild(s);
    });
});
