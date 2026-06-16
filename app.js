// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== RENDER YEAR CARDS =====
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderYears() {
  const grid = document.getElementById('yearsGrid');
  if (!grid) return;
  grid.innerHTML = PAPERS.map((paper, pi) => `
    <div class="year-card" id="paper-${pi}">
      <div class="year-card-header" onclick="toggleCard(${pi})">
        <div class="year-tag">
          <span class="year-pill">${paper.year}</span>
          <div>
            <div class="year-title">Internet / Web Technology</div>
            <div class="year-code">${paper.code}</div>
          </div>
        </div>
        <span class="year-chevron">▼</span>
      </div>
      <div class="year-card-body">
        ${paper.sections.map((sec, si) => `
          <div class="q-section">
            <div class="q-section-title">${escapeHtml(sec.title)}</div>
            ${sec.questions.map((q, qi) => `
              <div class="q-item" id="q-${pi}-${si}-${qi}">
                <div class="q-item-header" onclick="toggleQ(${pi},${si},${qi})">
                  <span class="q-num">Q${qi+1}</span>
                  <span>${escapeHtml(q.q)}</span>
                  <span class="q-marks">[${q.marks}M]</span>
                </div>
                <div class="q-ans">
                  <span class="q-ans-label">✓ Answer</span>
                  <pre>${escapeHtml(q.ans)}</pre>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleCard(pi) {
  const card = document.getElementById(`paper-${pi}`);
  card.classList.toggle('open');
}

function toggleQ(pi, si, qi) {
  const item = document.getElementById(`q-${pi}-${si}-${qi}`);
  item.classList.toggle('open');
}

// ===== RENDER TOPICS =====
function renderTopics() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = TOPICS.map(t => `
    <div class="topic-card" style="--tc-color:${t.color}">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-name">${escapeHtml(t.name)}</div>
      <div class="topic-desc">${escapeHtml(t.desc)}</div>
      <div class="topic-tags">${t.tags.map(tag => `<span class="topic-tag">${escapeHtml(tag)}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ===== RENDER MCQ BANK =====
function renderMcqs(filter) {
  const list = document.getElementById('mcqList');
  const filtered = filter === 'all' ? MCQS : MCQS.filter(m => m.cat === filter);
  list.innerHTML = filtered.map((m, i) => `
    <div class="mcq-card" data-cat="${m.cat}">
      <div class="mcq-top">
        <span class="mcq-badge ${m.cat}">${m.cat.toUpperCase()}</span>
        <span class="mcq-q">${escapeHtml(m.q)}</span>
      </div>
      <div class="mcq-opts">
        ${m.opts.map((opt, oi) => `
          <div class="mcq-opt${oi === m.ans ? ' correct' : ''}">
            ${oi === m.ans ? '✓ ' : ''}${escapeHtml(opt)}
          </div>
        `).join('')}
      </div>
      <div class="mcq-year">📅 Year: ${m.year}</div>
    </div>
  `).join('');
}

// ===== FILTER BUTTONS =====
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderMcqs(this.dataset.filter);
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.year-card, .topic-card, .mcq-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navItems.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderYears();
  renderTopics();
  renderMcqs('all');
  initFilters();
  initScrollReveal();
  initActiveNav();
});
