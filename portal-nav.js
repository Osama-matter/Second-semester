/**
 * portal-nav.js
 * Drop <script src="portal-nav.js"></script> into any lecture page.
 * Injects a sticky top nav bar + prev/next navigation automatically.
 * Does NOT modify existing content.
 */
(function(){
'use strict';

// If the new shared platform system is present, do nothing (avoid double navbars).
try{
  if (typeof window !== 'undefined' && window.__SS_APP__) return;
  const hasAppScript = !!document.querySelector('script[src$="app.js"],script[src*="app.js?"]');
  const hasGlobalCss = !!document.querySelector('link[rel="stylesheet"][href$="global.css"],link[rel="stylesheet"][href*="global.css?"]');
  if (hasAppScript || hasGlobalCss) return;
}catch(_){}

const LECTURES=[
  {name:"SAD Study Notes",        file:"SAD-study-notes.html",                        cat:"System Design",  icon:"📝"},
  {name:"SAD Exam Solutions",     file:"SAD-Revision-and-Exam-Solutions (1).html",     cat:"System Design",  icon:"✅"},
  {name:"HTML Lectures",          file:"HTML_Lecture_Summary_Updated.html",             cat:"Web Dev",        icon:"🏷️"},
  {name:"CSS Lectures",           file:"Css.html",                                     cat:"Web Dev",        icon:"🎨"},
  {name:"JavaScript",             file:"Js.html",                                      cat:"Web Dev",        icon:"⚡"},
  {name:"JS Summary",             file:"Jssummary.html",                               cat:"Web Dev",        icon:"📖"},
  {name:"PHP File Handling",      file:"php-file-handling-study.html",                 cat:"Web Dev",        icon:"🐘"},
  {name:"Network Lectures",       file:"network_lecture_study_complete.html",           cat:"Networking",     icon:"📡"},
  {name:"Business Admin",         file:"business-admin-study-guide.html",               cat:"Business",       icon:"📊"},
];

/* ── Detect current lecture ─────────────────────────────── */
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
const currentIdx  = LECTURES.findIndex(l => decodeURIComponent(currentFile) === decodeURIComponent(l.file));
const current     = LECTURES[currentIdx];
const prev        = currentIdx > 0 ? LECTURES[currentIdx - 1] : null;
const next        = currentIdx < LECTURES.length - 1 ? LECTURES[currentIdx + 1] : null;

/* ── Inject CSS ──────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
#pnav-wrap *{box-sizing:border-box;font-family:'Inter',-apple-system,sans-serif}
#pnav-bar{
  position:sticky;top:0;z-index:99999;
  background:rgba(13,13,26,.92);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  border-bottom:1px solid rgba(99,102,241,.2);
  display:flex;align-items:center;gap:10px;
  padding:0 18px;height:54px;
  font-size:13px;
}
#pnav-bar.light{background:rgba(245,245,255,.92);border-color:rgba(99,102,241,.15)}
#pnav-logo{display:flex;align-items:center;gap:8px;color:#818cf8;font-weight:700;text-decoration:none;white-space:nowrap}
#pnav-logo span{font-size:18px}
#pnav-title{color:#a5b4fc;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px}
#pnav-bar.light #pnav-title{color:#4f46e5}
#pnav-right{margin-left:auto;display:flex;align-items:center;gap:7px;flex-shrink:0}
.pnav-btn{
  display:inline-flex;align-items:center;gap:5px;
  padding:5px 12px;border-radius:7px;font-size:12px;font-weight:600;
  cursor:pointer;border:1px solid rgba(99,102,241,.25);
  color:#a5b4fc;background:rgba(99,102,241,.1);
  text-decoration:none;white-space:nowrap;
  transition:all .2s;
}
.pnav-btn:hover{background:rgba(99,102,241,.25);color:#c7d2fe;border-color:rgba(99,102,241,.4)}
.pnav-btn.home{background:rgba(99,102,241,.15);border-color:rgba(99,102,241,.3)}
.pnav-btn.theme{background:transparent;border:1px solid rgba(255,255,255,.1);color:#c7d2fe;padding:5px 9px}
#pnav-bar.light .pnav-btn{color:#4f46e5;background:rgba(99,102,241,.08);border-color:rgba(99,102,241,.2)}
#pnav-bar.light .pnav-btn:hover{background:rgba(99,102,241,.18)}
#pnav-bottom{
  display:flex;align-items:center;justify-content:space-between;gap:10px;
  padding:10px 18px;
  background:rgba(22,33,62,.7);
  border-bottom:1px solid rgba(255,255,255,.05);
  font-size:12px;flex-wrap:wrap;
}
#pnav-bottom.light{background:rgba(237,237,255,.8);border-color:rgba(99,102,241,.1)}
#pnav-bc{display:flex;align-items:center;gap:6px;color:#64748b;flex-wrap:wrap}
#pnav-bc a{color:#818cf8;text-decoration:none}
#pnav-bc a:hover{color:#c7d2fe}
#pnav-bar.light #pnav-bc a{color:#4f46e5}
#pnav-actions{display:flex;gap:7px;flex-wrap:wrap}
#pnav-panel{
  position:fixed;top:54px;left:0;width:240px;height:calc(100vh - 54px);
  background:#13131f;border-right:1px solid rgba(99,102,241,.15);
  z-index:99998;overflow-y:auto;transform:translateX(-100%);
  transition:transform .3s cubic-bezier(.4,0,.2,1);
  display:flex;flex-direction:column;
}
#pnav-panel.light{background:#ededff;border-color:rgba(99,102,241,.2)}
#pnav-panel.open{transform:translateX(0)}
#pnav-panel-head{padding:14px 16px;border-bottom:1px solid rgba(99,102,241,.1);font-size:13px;font-weight:700;color:#818cf8;display:flex;align-items:center;justify-content:space-between}
#pnav-panel-close{background:none;border:none;color:#64748b;font-size:18px;cursor:pointer;padding:0}
.pnav-ns{padding:8px 14px 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b}
.pnav-ni{display:flex;align-items:center;gap:8px;padding:7px 14px;font-size:12.5px;color:#64748b;cursor:pointer;transition:all .2s;text-decoration:none;border-left:2px solid transparent}
.pnav-ni:hover{color:#c7d2fe;background:rgba(99,102,241,.08)}
.pnav-ni.cur{color:#818cf8;background:rgba(99,102,241,.12);border-left-color:#6366f1}
#pnav-panel.light .pnav-ni{color:#6b7280}
#pnav-panel.light .pnav-ni:hover{color:#4f46e5;background:rgba(99,102,241,.06)}
#pnav-panel.light .pnav-ni.cur{color:#4f46e5;background:rgba(99,102,241,.1)}
#pnav-ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:99997;backdrop-filter:blur(3px)}
#pnav-ov.show{display:block}
@media(max-width:600px){
  #pnav-title{display:none}
  #pnav-bottom{padding:8px 12px}
  .pnav-btn{padding:4px 9px;font-size:11px}
}
`;

const styleEl = document.createElement('style');
styleEl.textContent = css;
document.head.appendChild(styleEl);

/* ── Link portal.css if present ──────────────────────────── */
if(!document.querySelector('link[href="portal.css"]')){
  // We don't force portal.css on existing pages to avoid conflicts
}

/* ── Build HTML ──────────────────────────────────────────── */
const catColor = {
  'System Design':'#6366f1','Web Dev':'#06b6d4',
  'Networking':'#f59e0b','Business':'#10b981'
};
const catIcon  = {
  'System Design':'📐','Web Dev':'💻','Networking':'📡','Business':'💼'
};

// Sidebar panel items
let panelItems = '';
let lastCat = '';
LECTURES.forEach((l,i)=>{
  if(l.cat !== lastCat){
    panelItems += `<div class="pnav-ns">${catIcon[l.cat]||'📚'} ${l.cat}</div>`;
    lastCat = l.cat;
  }
  panelItems += `<a href="${l.file}" class="pnav-ni${i===currentIdx?' cur':''}">${l.icon} ${l.name}</a>`;
});
panelItems += `<div class="pnav-ns">📋 Reports</div>
<a href="missing-topics.html" class="pnav-ni">⚠️ Missing Topics</a>
<a href="index.html" class="pnav-ni">🏠 Dashboard</a>`;

// Breadcrumb
const bcCat = current ? current.cat : '';
const bcName = current ? current.name : decodeURIComponent(currentFile);

const wrap = document.createElement('div');
wrap.id = 'pnav-wrap';
wrap.innerHTML = `
<div id="pnav-ov" onclick="pnavClose()"></div>
<div id="pnav-panel">
  <div id="pnav-panel-head">📚 All Lectures <button id="pnav-panel-close" onclick="pnavClose()">✕</button></div>
  ${panelItems}
</div>
<div id="pnav-bar">
  <button class="pnav-btn" onclick="pnavToggle()" style="padding:5px 9px" title="All Lectures">☰</button>
  <a href="index.html" id="pnav-logo"><span>🎓</span> StudyPortal</a>
  <span style="color:#334155;font-size:11px">/</span>
  <span id="pnav-title">${bcCat ? `<span style="color:${catColor[bcCat]||'#818cf8'}">${catIcon[bcCat]||'📚'} ${bcCat}</span> › ` : ''}${bcName}</span>
  <div id="pnav-right">
    ${prev ? `<a href="${prev.file}" class="pnav-btn" title="Previous: ${prev.name}">← Prev</a>` : ''}
    ${next ? `<a href="${next.file}" class="pnav-btn" title="Next: ${next.name}">Next →</a>` : ''}
    <a href="index.html" class="pnav-btn home">🏠</a>
    <button class="pnav-btn theme" onclick="pnavTheme()" id="pnav-theme-btn">🌙</button>
  </div>
</div>
<div id="pnav-bottom">
  <div id="pnav-bc">
    <a href="index.html">🏠 Home</a>
    ${bcCat ? `<span style="color:#475569">/</span><span style="color:${catColor[bcCat]||'#818cf8'}">${bcCat}</span>` : ''}
    ${bcName !== bcCat ? `<span style="color:#475569">/</span><span style="color:#94a3b8">${bcName}</span>` : ''}
  </div>
  <div id="pnav-actions">
    ${prev ? `<a href="${prev.file}" class="pnav-btn">← ${prev.icon} ${prev.name}</a>` : ''}
    ${next ? `<a href="${next.file}" class="pnav-btn">→ ${next.icon} ${next.name}</a>` : ''}
  </div>
</div>
`;

/* ── Insert before body content ─────────────────────────── */
document.body.style.marginTop = '0';
document.body.insertBefore(wrap, document.body.firstChild);

/* ── Theme ──────────────────────────────────────────────── */
function applyTheme(t){
  const isDark = t === 'dark';
  document.getElementById('pnav-bar').classList.toggle('light', !isDark);
  document.getElementById('pnav-bottom').classList.toggle('light', !isDark);
  document.getElementById('pnav-panel').classList.toggle('light', !isDark);
  const btn = document.getElementById('pnav-theme-btn');
  if(btn) btn.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('pnav-theme', t);
}
window.pnavTheme = function(){
  const cur = localStorage.getItem('pnav-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
};
applyTheme(localStorage.getItem('pnav-theme') || 'dark');

/* ── Panel toggle ───────────────────────────────────────── */
window.pnavToggle = function(){
  document.getElementById('pnav-panel').classList.toggle('open');
  document.getElementById('pnav-ov').classList.toggle('show');
};
window.pnavClose = function(){
  document.getElementById('pnav-panel').classList.remove('open');
  document.getElementById('pnav-ov').classList.remove('show');
};

/* ── Progress indicator ─────────────────────────────────── */
if(currentIdx >= 0){
  const prog = document.createElement('div');
  prog.style.cssText = 'position:fixed;top:54px;left:0;right:0;height:2px;background:rgba(99,102,241,.15);z-index:99998';
  const fill = document.createElement('div');
  const pct  = Math.round(((currentIdx+1)/LECTURES.length)*100);
  fill.style.cssText = `height:100%;width:${pct}%;background:linear-gradient(90deg,#6366f1,#06b6d4);transition:width .8s ease`;
  prog.appendChild(fill);
  document.body.insertBefore(prog, wrap.nextSibling);
}

})();
