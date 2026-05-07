/* app.js - shared UI + responsive normalization (content-safe)
   - Adds platform topbar + lecture breadcrumbs/progress/prev-next where possible
   - Wraps non-script body content into .ss-wrap/.ss-content
   - Makes tables scrollable, embeds responsive, and adds mobile disclosures
*/
(function(){
  'use strict';
  try{ window.__SS_APP__ = true; }catch(_){}

  const LECTURES = [
    { name: "Home",                file: "index.html",                          cat: "Portal" },
    { name: "SAD Study Notes",      file: "SAD-study-notes.html",                cat: "System Design" },
    { name: "SAD Exam Solutions",   file: "SAD-Revision-and-Exam-Solutions (1).html", cat: "System Design" },
    { name: "HTML Lectures",        file: "HTML_Lecture_Summary_Updated.html",   cat: "Web Dev" },
    { name: "CSS Lectures",         file: "Css.html",                           cat: "Web Dev" },
    { name: "JavaScript",           file: "Js.html",                            cat: "Web Dev" },
    { name: "JS Summary",           file: "Jssummary.html",                     cat: "Web Dev" },
    { name: "PHP Dashboard",        file: "php_lecture_dashboard_styled.html",   cat: "Web Dev" },
    { name: "PHP Cookies/Sessions", file: "php-cookies-sessions-dashboard.html", cat: "Web Dev" },
    { name: "PHP File Handling",    file: "php-file-handling-study.html",       cat: "Web Dev" },
    { name: "Networking",           file: "network_lecture_study_complete.html", cat: "Networking" },
    { name: "Business Admin",       file: "business-admin-study-guide.html",    cat: "Business" },
    { name: "Missing Topics",       file: "missing-topics.html",                cat: "Portal" },
  ];

  const doc = document;
  const root = doc.documentElement;

  function getCurrentFile(){
    const raw = (window.location.pathname.split('/').pop() || 'index.html');
    return decodeURIComponent(raw);
  }

  function setTheme(theme){
    root.setAttribute('data-theme', theme);
    try{ localStorage.setItem('ss-theme', theme); }catch(_){}
  }

  function initTheme(){
    const existing = root.getAttribute('data-theme');
    if(existing === 'dark' || existing === 'light') return;
    let saved = null;
    try{ saved = localStorage.getItem('ss-theme'); }catch(_){}
    if(saved === 'dark' || saved === 'light'){ setTheme(saved); return; }
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }

  function el(tag, attrs, children){
    const node = doc.createElement(tag);
    if(attrs){
      for(const [k,v] of Object.entries(attrs)){
        if(v == null) continue;
        if(k === 'class') node.className = v;
        else if(k === 'html') node.innerHTML = v;
        else if(k === 'text') node.textContent = v;
        else node.setAttribute(k, String(v));
      }
    }
    if(children){
      for(const c of children) node.appendChild(c);
    }
    return node;
  }

  function mountTopbar(){
    if(doc.querySelector('.ss-topbar')) return;
    // Remove legacy injected nav (portal-nav.js) if it already ran.
    try{
      const legacy = doc.getElementById('pnav-wrap');
      if(legacy) legacy.remove();
    }catch(_){}
    const currentFile = getCurrentFile();
    const current = LECTURES.find(l => l.file === currentFile);
    const sub = current ? `${current.cat} • ${current.name}` : currentFile;

    const brand = el('a', { class:'ss-brand', href:'index.html' }, [
      el('div', { class:'ss-mark', text:'S' }),
      el('div', { class:'ss-brand-text' }, [
        el('b', { text:'Study Portal' }),
        el('span', { text: sub }),
      ])
    ]);

    const themeBtn = el('button', { class:'ss-btn ss-icon-btn', type:'button', title:'Toggle theme', 'aria-label':'Toggle theme', text:'☾' });
    themeBtn.addEventListener('click', () => {
      const t = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(t);
      themeBtn.textContent = (t === 'light') ? '☀' : '☾';
      doc.body.classList.toggle('ss-theme-light', t === 'light');
    });

    const topbar = el('header', { class:'ss-topbar' }, [
      brand,
      el('div', { class:'ss-spacer' }),
      el('a', { class:'ss-btn', href:'index.html', title:'Home' , text:'Home' }),
      themeBtn
    ]);

    doc.body.prepend(topbar);
    // Ensure content doesn't go under fixed topbar
    try{ doc.body.style.paddingTop = 'var(--ss-topbar-h)'; }catch(_){}
    themeBtn.textContent = (root.getAttribute('data-theme') === 'light') ? '☀' : '☾';
  }

  function wrapBodyContent(){
    if(doc.querySelector('.ss-content')) return;
    const wrap = el('div', { class:'ss-wrap' });
    const main = el('main', { class:'ss-content', id:'ss-content' });

    const nodes = Array.from(doc.body.childNodes);
    for(const n of nodes){
      if(n.nodeType === 1){
        const tag = n.tagName.toLowerCase();
        if(tag === 'script' || tag === 'style' || tag === 'link') continue;
        if(n.classList && (n.classList.contains('ss-topbar') || n.classList.contains('ss-lecturebar'))) continue;
      }
      if(n.nodeType === 3 && !n.textContent.trim()) continue;
      main.appendChild(n);
    }

    wrap.appendChild(main);
    doc.body.appendChild(wrap);
  }

  function ensureTableWrappers(){
    const tables = Array.from(doc.querySelectorAll('.ss-content table, main table, table'));
    for(const t of tables){
      if(t.closest('.ss-table')) continue;
      const wrapper = el('div', { class:'ss-table' });
      t.parentNode.insertBefore(wrapper, t);
      wrapper.appendChild(t);
    }
  }

  function ensureEmbedWrappers(){
    const embeds = Array.from(doc.querySelectorAll('.ss-content iframe, .ss-content embed, .ss-content object, main iframe, main embed, main object, iframe, embed, object'));
    for(const e of embeds){
      if(e.closest('.ss-embed')) continue;
      const wrapper = el('div', { class:'ss-embed' });
      e.parentNode.insertBefore(wrapper, e);
      wrapper.appendChild(e);
    }
  }

  function addLectureBar(){
    if(doc.querySelector('.ss-lecturebar')) return;
    // Remove legacy injected nav (portal-nav.js) if it already ran.
    try{
      const legacy = doc.getElementById('pnav-wrap');
      if(legacy) legacy.remove();
    }catch(_){}
    const currentFile = getCurrentFile();
    const idx = LECTURES.findIndex(l => l.file === currentFile);
    if(idx < 0 || currentFile === 'index.html') return;

    const current = LECTURES[idx];
    const prev = idx > 0 ? LECTURES[idx - 1] : null;
    const next = idx < LECTURES.length - 1 ? LECTURES[idx + 1] : null;

    const bc = el('nav', { class:'ss-bc', 'aria-label':'Breadcrumbs' }, [
      el('a', { href:'index.html', text:'Home' }),
      el('span', { text:'/' }),
      el('span', { text: current.cat }),
      el('span', { text:'/' }),
      el('b', { text: current.name }),
    ]);

    const progress = el('div', { class:'ss-progress', title:'Lecture progress' }, [ el('i') ]);
    const prevBtn = el('a', { class:'ss-btn', href: prev ? prev.file : '#', text:'← Prev' });
    const nextBtn = el('a', { class:'ss-btn primary', href: next ? next.file : '#', text:'Next →' });
    if(!prev) prevBtn.setAttribute('aria-disabled','true');
    if(!next) nextBtn.setAttribute('aria-disabled','true');

    const bar = el('div', { class:'ss-lecturebar' }, [
      el('div', { class:'ss-wrap' }, [
        bc,
        progress,
        prevBtn,
        nextBtn
      ])
    ]);

    doc.body.insertBefore(bar, doc.body.firstChild.nextSibling);

    const fill = progress.querySelector('i');
    function updateProgress(){
      const docH = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
      const winH = window.innerHeight || 1;
      const max = Math.max(1, docH - winH);
      const p = Math.max(0, Math.min(1, window.scrollY / max));
      fill.style.width = (p * 100).toFixed(1) + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive:true });
    updateProgress();
  }

  function mobileDisclosures(){
    // Content-safe: convert large "section-like" blocks into optional disclosures on small screens
    if(!window.matchMedia || !window.matchMedia('(max-width: 768px)').matches) return;
    const candidates = Array.from(doc.querySelectorAll('main section, main article, .ss-content section, .ss-content article'));
    for(const sec of candidates){
      if(sec.closest('.ss-disclosure')) continue;
      const heading = sec.querySelector('h2, h3');
      if(!heading) continue;
      const button = el('button', { type:'button' });
      button.appendChild(el('span', { text: heading.textContent.trim().slice(0, 80) }));
      button.appendChild(el('span', { text:'▾', 'aria-hidden':'true' }));
      const body = el('div');
      while(sec.firstChild){
        body.appendChild(sec.firstChild);
      }
      const shell = el('div', { class:'ss-disclosure' }, [button, body]);
      sec.parentNode.replaceChild(shell, sec);
      body.style.display = 'none';
      button.addEventListener('click', () => {
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        button.lastChild.textContent = isOpen ? '▾' : '▴';
      });
    }
  }

  function mountFooter(){
    if(doc.querySelector('.ss-footer')) return;
    const footer = el('footer', { class:'ss-footer' }, [
      el('div', { class:'ss-wrap' }, [
        el('div', { html: `© ${new Date().getFullYear()} Study Portal • <a href="index.html">Back to home</a>` })
      ])
    ]);
    doc.body.appendChild(footer);
  }

  function mountBackToHome(){
    const currentFile = getCurrentFile();
    if(currentFile === 'index.html') return;
    if(doc.querySelector('.ss-home-fab')) return;
    const fab = el('a', { class:'ss-home-fab', href:'index.html', title:'Back to home' }, [
      el('i', { text:'🏠' }),
      el('span', { text:'Home' })
    ]);
    doc.body.appendChild(fab);
  }

  function boot(){
    initTheme();
    // Always apply safe responsive normalization (does not change theme/colors).
    doc.body.classList.add('ss-responsive');
    const hasNativeChrome = !!doc.querySelector(
      '.sidebar, #sidebar, .ham-btn, #hamBtn, .topbar, .layout, nav.sidebar, header.topbar'
    );
    const hasPortalCss = !!doc.querySelector('link[rel="stylesheet"][href$="portal.css"],link[rel="stylesheet"][href*="portal.css?"]');
    if(hasPortalCss) doc.body.classList.add('ss-portal');

    // Decide whether it's safe to apply platform base styles without overwriting
    // "paper/light" standalone pages.
    function isLikelyLightPage(){
      try{
        const bg = getComputedStyle(doc.body).backgroundColor || '';
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if(!m) return false;
        const r = Number(m[1]) / 255;
        const g = Number(m[2]) / 255;
        const b = Number(m[3]) / 255;
        // Simple perceived luminance
        const lum = (0.2126*r + 0.7152*g + 0.0722*b);
        return lum > 0.80;
      }catch(_){
        return false;
      }
    }

    const allowPlatformBase = hasPortalCss || !isLikelyLightPage();

    if(!hasNativeChrome){
      if(allowPlatformBase) doc.body.classList.add('ss-platform');
      wrapBodyContent();
      mountTopbar();
      addLectureBar();
      mobileDisclosures();
      mountFooter();
      mountBackToHome();
    }else{
      // If the page already has its own sidebar/topbar/hamburger, avoid injecting
      // another navigation layer. Still keep responsive normalization.
      if(allowPlatformBase) doc.body.classList.add('ss-platform');
      try{
        const legacy = doc.getElementById('pnav-wrap');
        if(legacy) legacy.remove();
      }catch(_){}
    }

    ensureTableWrappers();
    ensureEmbedWrappers();
    mountBackToHome();
  }

  if(doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
