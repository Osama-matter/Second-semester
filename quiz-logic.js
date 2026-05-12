/**
 * quiz-logic.js
 * Core logic for WebPrep Study Platform
 */

// Helper to escape HTML tags in strings
function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

// ============================================================
// GLOBAL STATE
// ============================================================
let state = {
    history: JSON.parse(localStorage.getItem('webprep_history') || '[]'),
    currentPage: 'dashboard',
    
    // Practice Session
    practice: {
        active: false,
        questions: [],
        currentIdx: 0,
        answers: [], // { qId: id, correct: bool, userAns: any }
        timer: null,
        timeLeft: 30,
        isTimed: false
    },
    
    // Exam Session
    exam: {
        active: false,
        questions: [],
        currentIdx: 0,
        answers: [],
        timer: null,
        timeLeft: 0,
        isComplete: false
    },

    // Flashcards
    flashcards: {
        deck: [],
        currentIdx: 0,
        flipped: false
    }
};

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    initFilters();
    initSidebar();
    initExtraPages();
    
    // Handle mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light');
            const isLight = document.body.classList.contains('light');
            themeToggle.textContent = isLight ? '◑ Toggle Dark' : '◑ Toggle Light';
            localStorage.setItem('webprep_theme', isLight ? 'light' : 'dark');
        });
        
        // Restore theme
        if (localStorage.getItem('webprep_theme') === 'light') {
            document.body.classList.add('light');
            themeToggle.textContent = '◑ Toggle Dark';
        }
    }
});

function initSidebar() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('data-page');
            goPage(page);
            
            // Update active state
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Close sidebar on mobile
            document.getElementById('sidebar').classList.remove('open');
        });
    });
}

function initFilters() {
    const topicSelects = [
        document.getElementById('filterTopic'), 
        document.getElementById('flashTopic'),
        document.getElementById('examTopic')
    ];
    topicSelects.forEach(sel => {
        if (!sel) return;
        TOPICS.forEach(topic => {
            const opt = document.createElement('option');
            opt.value = topic;
            opt.textContent = topic;
            sel.appendChild(opt);
        });
    });
}

// ============================================================
// NAVIGATION
// ============================================================
function goPage(pageId) {
    state.currentPage = pageId;
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.add('active');
    
    if (pageId === 'dashboard') initDashboard();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ============================================================
// DASHBOARD LOGIC
// ============================================================
function initDashboard() {
    const history = state.history;
    const totalSolved = history.length;
    const correctOnes = history.filter(h => h.correct).length;
    const accuracy = totalSolved > 0 ? Math.round((correctOnes / totalSolved) * 100) : 0;
    
    document.getElementById('totalSolved').textContent = totalSolved;
    document.getElementById('correctCount').textContent = correctOnes;
    document.getElementById('overallAccuracy').textContent = totalSolved > 0 ? accuracy + '%' : '—';
    
    // Topic performance
    const topicStats = {};
    TOPICS.forEach(t => topicStats[t] = { total: 0, correct: 0 });
    
    history.forEach(h => {
        const q = QUESTIONS.find(q => q.id === h.qId);
        if (q && topicStats[q.topic]) {
            topicStats[q.topic].total++;
            if (h.correct) topicStats[q.topic].correct++;
        }
    });
    
    const topicBars = document.getElementById('topicBars');
    const weakList = document.getElementById('weakTopics');
    const strongList = document.getElementById('strongTopics');
    
    if (topicBars) {
        topicBars.innerHTML = '';
        weakList.innerHTML = '';
        strongList.innerHTML = '';
        
        TOPICS.forEach(t => {
            const stats = topicStats[t];
            const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            
            // Bar
            const row = document.createElement('div');
            row.className = 'topic-bar-row';
            row.innerHTML = `
                <div class="topic-bar-label">
                    <span>${t}</span>
                    <button class="btn-text" onclick="startTopicPractice('${t}')" title="Practice All Questions in this Topic">Practice All ↗</button>
                    <span>${pct}%</span>
                </div>
                <div class="topic-bar-track">
                    <div class="topic-bar-fill" style="width: ${pct}%; background: ${getColorForPct(pct)}"></div>
                </div>
            `;
            topicBars.appendChild(row);
            
            // Weak/Strong Tags
            if (stats.total > 0) {
                const tag = document.createElement('span');
                tag.className = `tag ${pct < 60 ? 'weak' : pct > 85 ? 'strong' : 'neutral'}`;
                tag.textContent = t;
                if (pct < 70) weakList.appendChild(tag);
                else if (pct > 80) strongList.appendChild(tag);
            }
        });
        
        if (weakList.innerHTML === '') weakList.innerHTML = '<span class="tag neutral">None yet! Keep practicing.</span>';
        if (strongList.innerHTML === '') strongList.innerHTML = '<span class="tag neutral">None yet! Keep practicing.</span>';
    }
}

function getColorForPct(pct) {
    if (pct < 50) return 'var(--red)';
    if (pct < 80) return 'var(--yellow)';
    return 'var(--green)';
}

// ============================================================
// PRACTICE LOGIC
// ============================================================
function startQuickPractice(type) {
    goPage('practice');
    let filtered = [];
    
    if (type === 'random') {
        filtered = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else if (type === 'mistakes') {
        const history = state.history;
        const wrongIds = [...new Set(history.filter(h => !h.correct).map(h => h.qId))];
        filtered = QUESTIONS.filter(q => wrongIds.includes(q.id)).sort(() => 0.5 - Math.random()).slice(0, 10);
        if (filtered.length === 0) {
            alert("No mistakes found! Great job.");
            return;
        }
    } else if (type === 'weak') {
        // Logic for weak topics based on history
        const history = state.history;
        const topicStats = {};
        TOPICS.forEach(t => topicStats[t] = { total: 0, correct: 0 });
        history.forEach(h => {
            const q = QUESTIONS.find(q => q.id === h.qId);
            if (q) {
                topicStats[q.topic].total++;
                if (h.correct) topicStats[q.topic].correct++;
            }
        });
        const weakTopics = TOPICS.filter(t => {
            const s = topicStats[t];
            return s.total > 0 && (s.correct / s.total) < 0.7;
        });
        filtered = QUESTIONS.filter(q => weakTopics.includes(q.topic)).sort(() => 0.5 - Math.random()).slice(0, 10);
        if (filtered.length === 0) filtered = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else if (type === 'untried') {
        const triedIds = state.history.map(h => h.qId);
        filtered = QUESTIONS.filter(q => !triedIds.includes(q.id)).sort(() => 0.5 - Math.random()).slice(0, 10);
        if (filtered.length === 0) filtered = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
    }
    
    setupPracticeSession(filtered);
}

function startPractice() {
    const topic = document.getElementById('filterTopic').value;
    const subtopic = document.getElementById('filterSubtopic').value;
    const diff = document.getElementById('filterDiff').value;
    const type = document.getElementById('filterType').value;
    const count = document.getElementById('filterCount').value;
    
    let filtered = QUESTIONS.filter(q => {
        const topicMatch = topic === 'all' || q.topic === topic;
        const subtopicMatch = subtopic === 'all' || q.subtopic === subtopic;
        const diffMatch = diff === 'all' || q.difficulty === diff;
        const typeMatch = type === 'all' || q.type === type;
        return topicMatch && subtopicMatch && diffMatch && typeMatch;
    });
    
    filtered.sort(() => 0.5 - Math.random());
    if (count !== 'all') filtered = filtered.slice(0, parseInt(count));
    
    if (filtered.length === 0) {
        alert("No questions match your filters!");
        return;
    }
    
    state.practice.isTimed = document.getElementById('timedMode').checked;
    setupPracticeSession(filtered);
}

function setupPracticeSession(questions) {
    state.practice.questions = questions;
    state.practice.currentIdx = 0;
    state.practice.answers = [];
    state.practice.active = true;
    
    document.getElementById('practiceSetup').style.display = 'none';
    document.getElementById('practiceResults').style.display = 'none';
    document.getElementById('practiceSession').style.display = 'block';
    
    showPracticeQuestion();
}

function showPracticeQuestion() {
    const q = state.practice.questions[state.practice.currentIdx];
    const total = state.practice.questions.length;
    
    // Progress
    document.getElementById('qProgress').textContent = `Q ${state.practice.currentIdx + 1} / ${total}`;
    document.getElementById('progressFill').style.width = ((state.practice.currentIdx + 1) / total * 100) + '%';
    
    // Meta
    document.getElementById('qTopic').textContent = q.topic;
    document.getElementById('qDiff').textContent = q.difficulty;
    document.getElementById('qDiff').className = `q-diff ${q.difficulty}`;
    document.getElementById('qType').textContent = q.type;
    
    // Text
    let text = q.question;
    if (q.type === 'output' || q.type === 'code') {
        text = text.replace(/```([\s\S]*?)```/g, '<div class="code-block">$1</div>');
    } else {
        text = escapeHTML(text);
    }
    document.getElementById('qText').innerHTML = text;
    
    // Options
    const optionsEl = document.getElementById('qOptions');
    optionsEl.innerHTML = '';
    
    if (q.type === 'mcq') {
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span> ${escapeHTML(opt)}`;
            btn.onclick = () => selectOption(i);
            optionsEl.appendChild(btn);
        });
    } else if (q.type === 'tf') {
        const wrap = document.createElement('div');
        wrap.className = 'tf-btns';
        ['True', 'False'].forEach((val, i) => {
            const btn = document.createElement('button');
            btn.className = 'tf-btn';
            btn.textContent = val;
            btn.onclick = () => selectOption(val.toLowerCase() === 'true');
            wrap.appendChild(btn);
        });
        optionsEl.appendChild(wrap);
    } else if (q.type === 'fill' || q.type === 'output' || q.type === 'code') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.placeholder = 'Type your answer here...';
        input.id = 'fillInput';
        optionsEl.appendChild(input);
        
        const subBtn = document.createElement('button');
        subBtn.className = 'btn-primary';
        subBtn.style.marginTop = '1rem';
        subBtn.textContent = 'Submit Answer';
        subBtn.onclick = () => selectOption(document.getElementById('fillInput').value.trim());
        optionsEl.appendChild(subBtn);
    }
    
    // Reset feedback
    document.getElementById('qFeedback').style.display = 'none';
    document.getElementById('qActions').innerHTML = '';
    
    // Timer
    if (state.practice.isTimed) {
        startPracticeTimer();
    }
}

function startPracticeTimer() {
    clearInterval(state.practice.timer);
    state.practice.timeLeft = 30;
    const display = document.getElementById('timerDisplay');
    const val = document.getElementById('timerVal');
    display.style.display = 'block';
    val.textContent = state.practice.timeLeft;
    
    state.practice.timer = setInterval(() => {
        state.practice.timeLeft--;
        val.textContent = state.practice.timeLeft;
        if (state.practice.timeLeft <= 0) {
            clearInterval(state.practice.timer);
            selectOption(null); // Time out
        }
    }, 1000);
}

function selectOption(ans) {
    clearInterval(state.practice.timer);
    const q = state.practice.questions[state.practice.currentIdx];
    let isCorrect = false;
    
    if (q.type === 'mcq') {
        isCorrect = (ans === q.answer);
    } else if (q.type === 'tf') {
        isCorrect = (ans === q.answer);
    } else if (q.type === 'fill' || q.type === 'output' || q.type === 'code') {
        isCorrect = (String(ans).toLowerCase() === String(q.answer).toLowerCase());
    }
    
    state.practice.answers.push({ qId: q.id, correct: isCorrect, userAns: ans });
    
    // Save to history
    state.history.push({ qId: q.id, correct: isCorrect, date: new Date().toISOString() });
    localStorage.setItem('webprep_history', JSON.stringify(state.history));
    
    showFeedback(isCorrect, q);
}

function showFeedback(correct, q) {
    const feedbackEl = document.getElementById('qFeedback');
    feedbackEl.style.display = 'block';
    feedbackEl.className = `q-feedback ${correct ? 'correct' : 'wrong'}`;
    
    let html = `<strong>${correct ? '✨ Correct!' : '❌ Incorrect'}</strong>`;
    if (!correct) {
        let correctStr = q.type === 'mcq' ? q.options[q.answer] : q.answer;
        html += `<div class="explanation">The correct answer was: <strong>${correctStr}</strong></div>`;
    }
    if (q.explanation) {
        html += `<div class="explanation">${q.explanation}</div>`;
    }
    feedbackEl.innerHTML = html;
    
    // Actions
    const actionsEl = document.getElementById('qActions');
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-primary';
    const isLast = state.practice.currentIdx === state.practice.questions.length - 1;
    nextBtn.textContent = isLast ? 'View Results' : 'Next Question →';
    nextBtn.onclick = () => {
        if (isLast) endPractice();
        else {
            state.practice.currentIdx++;
            showPracticeQuestion();
        }
    };
    actionsEl.appendChild(nextBtn);
}

function endPractice() {
    state.practice.active = false;
    clearInterval(state.practice.timer);
    
    document.getElementById('practiceSession').style.display = 'none';
    document.getElementById('practiceResults').style.display = 'block';
    
    const correctCount = state.practice.answers.filter(a => a.correct).length;
    const total = state.practice.answers.length;
    document.getElementById('practiceScoreNum').textContent = `${correctCount}/${total}`;
    
    // Performance breakdown
    const breakdown = document.getElementById('resultsBreakdown');
    breakdown.innerHTML = '';
    const accuracy = Math.round((correctCount / total) * 100);
    
    const msg = accuracy >= 80 ? "🔥 Excellent Work!" : accuracy >= 50 ? "👍 Good Effort!" : "📚 Keep Studying!";
    breakdown.innerHTML = `<h3 style="color:var(--accent)">${msg}</h3><p style="color:var(--text2)">You achieved ${accuracy}% accuracy in this session.</p>`;
}

function resetPractice() {
    document.getElementById('practiceResults').style.display = 'none';
    document.getElementById('practiceSetup').style.display = 'block';
    goPage('practice');
}

function reviewPractice() {
    const panel = document.getElementById('reviewPanel');
    panel.style.display = 'block';
    panel.innerHTML = '<h3>Detailed Review</h3>';
    
    state.practice.answers.forEach((ans, i) => {
        const q = QUESTIONS.find(item => item.id === ans.qId);
        const item = document.createElement('div');
        item.className = `review-item ${ans.correct ? 'correct-review' : 'wrong-review'}`;
        
        let userDisplay = ans.userAns === null ? 'Timed Out' : (q.type === 'mcq' ? q.options[ans.userAns] : ans.userAns);
        let correctDisplay = q.type === 'mcq' ? q.options[q.answer] : q.answer;

        item.innerHTML = `
            <div class="review-status ${ans.correct ? 'c' : 'w'}">${ans.correct ? '✓ CORRECT' : '✗ WRONG'}</div>
            <div style="font-size:0.9rem;margin-bottom:0.5rem"><strong>Q${i+1}:</strong> ${q.question}</div>
            <div style="font-size:0.8rem;color:var(--text2)">Your Answer: <span style="color:${ans.correct ? 'var(--green)' : 'var(--red)'}">${userDisplay}</span></div>
            ${!ans.correct ? `<div style="font-size:0.8rem;color:var(--text2)">Correct Answer: <span style="color:var(--green)">${correctDisplay}</span></div>` : ''}
        `;
        panel.appendChild(item);
    });
}

// ============================================================
// EXAM LOGIC
// ============================================================
function startExam() {
    const topic = document.getElementById('examTopic').value;
    const count = document.getElementById('examCount').value === 'all' ? 999 : parseInt(document.getElementById('examCount').value);
    const timeLimit = parseInt(document.getElementById('examTime').value);
    const mix = document.getElementById('examMix').value;
    
    let pool = QUESTIONS;
    if (topic !== 'all') {
        pool = QUESTIONS.filter(q => q.topic === topic);
    }

    let filtered = [];
    if (mix === 'balanced' && topic === 'all') {
        // Try to take equal questions from each topic
        const perTopic = Math.ceil(count / TOPICS.length);
        TOPICS.forEach(t => {
            const tQs = pool.filter(q => q.topic === t).sort(() => 0.5 - Math.random()).slice(0, perTopic);
            filtered.push(...tQs);
        });
        filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, Math.min(count, pool.length));
    } else {
        filtered = [...pool].sort(() => 0.5 - Math.random()).slice(0, Math.min(count, pool.length));
    }
    
    if (filtered.length === 0) {
        alert("No questions found for this topic!");
        return;
    }

    state.exam.questions = filtered;
    state.exam.currentIdx = 0;
    state.exam.answers = new Array(count).fill(undefined);
    state.exam.active = true;
    state.exam.isComplete = false;
    state.exam.timeLeft = timeLimit * 60;
    
    document.getElementById('examSetup').style.display = 'none';
    document.getElementById('examResults').style.display = 'none';
    document.getElementById('examSession').style.display = 'block';
    
    initExamNav();
    showExamQuestion();
    
    if (timeLimit > 0) {
        startExamTimer();
    } else {
        document.getElementById('examTimer').textContent = 'No Limit';
    }
}

function startExamTimer() {
    clearInterval(state.exam.timer);
    const timerEl = document.getElementById('examTimer');
    
    state.exam.timer = setInterval(() => {
        state.exam.timeLeft--;
        
        const m = Math.floor(state.exam.timeLeft / 60);
        const s = state.exam.timeLeft % 60;
        timerEl.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
        
        if (state.exam.timeLeft < 300) timerEl.classList.add('low');
        
        if (state.exam.timeLeft <= 0) {
            clearInterval(state.exam.timer);
            submitExam();
        }
    }, 1000);
}

function initExamNav() {
    const dots = document.getElementById('examDots');
    dots.innerHTML = '';
    state.exam.questions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'exam-dot';
        dot.textContent = i + 1;
        dot.onclick = () => jumpToExamQuestion(i);
        dots.appendChild(dot);
    });
}

function showExamQuestion() {
    const idx = state.exam.currentIdx;
    const q = state.exam.questions[idx];
    
    document.getElementById('examProgress').textContent = `${idx + 1} / ${state.exam.questions.length}`;
    
    // Update dots
    const dots = document.querySelectorAll('.exam-dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('current');
        if (i === idx) dot.classList.add('current');
        if (state.exam.answers[i] !== undefined) dot.classList.add('answered');
    });
    
    const card = document.getElementById('examCard');
    let qText = q.question;
    if (q.type === 'output' || q.type === 'code') {
        qText = qText.replace(/```([\s\S]*?)```/g, '<div class="code-block">$1</div>');
    } else {
        qText = escapeHTML(qText);
    }

    card.innerHTML = `
        <div class="q-meta">
            <span class="q-topic">${q.topic}</span>
            <span class="q-type">${q.type}</span>
        </div>
        <div class="q-text">${qText}</div>
        <div class="q-options" id="examOptions"></div>
    `;
    
    const optionsEl = document.getElementById('examOptions');
    const savedAns = state.exam.answers[idx];
    
    if (q.type === 'mcq') {
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = `option-btn ${savedAns === i ? 'selected' : ''}`;
            btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span> ${escapeHTML(opt)}`;
            btn.onclick = () => {
                state.exam.answers[idx] = i;
                showExamQuestion();
            };
            optionsEl.appendChild(btn);
        });
    } else if (q.type === 'tf') {
        const wrap = document.createElement('div');
        wrap.className = 'tf-btns';
        [true, false].forEach(val => {
            const btn = document.createElement('button');
            btn.className = `tf-btn ${savedAns === val ? 'selected' : ''}`;
            btn.textContent = val ? 'True' : 'False';
            btn.onclick = () => {
                state.exam.answers[idx] = val;
                showExamQuestion();
            };
            wrap.appendChild(btn);
        });
        optionsEl.appendChild(wrap);
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.value = savedAns || '';
        input.onchange = (e) => { state.exam.answers[idx] = e.target.value; };
        optionsEl.appendChild(input);
    }
}

function examNav(dir) {
    const nextIdx = state.exam.currentIdx + dir;
    if (nextIdx >= 0 && nextIdx < state.exam.questions.length) {
        state.exam.currentIdx = nextIdx;
        showExamQuestion();
    }
}

function jumpToExamQuestion(idx) {
    state.exam.currentIdx = idx;
    showExamQuestion();
}

function submitExam() {
    if (!state.exam.isComplete) {
        const unanswered = state.exam.answers.filter(a => a === undefined).length;
        if (unanswered > 0 && state.exam.timeLeft > 0) {
            if (!confirm(`You have ${unanswered} unanswered questions. Submit anyway?`)) return;
        }
    }
    
    clearInterval(state.exam.timer);
    state.exam.active = false;
    state.exam.isComplete = true;
    
    document.getElementById('examSession').style.display = 'none';
    document.getElementById('examResults').style.display = 'block';
    
    // Scoring
    let correct = 0;
    const breakdown = {};
    TOPICS.forEach(t => breakdown[t] = { total: 0, correct: 0 });
    
    state.exam.questions.forEach((q, i) => {
        const userAns = state.exam.answers[i];
        let isCorrect = false;
        
        if (q.type === 'mcq' || q.type === 'tf') isCorrect = (userAns === q.answer);
        else isCorrect = (String(userAns).toLowerCase() === String(q.answer).toLowerCase());
        
        if (isCorrect) {
            correct++;
            breakdown[q.topic].correct++;
        }
        breakdown[q.topic].total++;
        
        // Save to general history
        state.history.push({ qId: q.id, correct: isCorrect, date: new Date().toISOString() });
    });
    
    localStorage.setItem('webprep_history', JSON.stringify(state.history));
    
    const total = state.exam.questions.length;
    const pct = Math.round((correct / total) * 100);
    
    document.getElementById('examScoreNum').textContent = `${pct}%`;
    document.getElementById('examScoreLabel').textContent = `You got ${correct} out of ${total} questions correct.`;
    
    // Topic breakdown in results
    const breakEl = document.getElementById('examBreakdown');
    breakEl.innerHTML = '<div class="breakdown-grid"></div>';
    const grid = breakEl.querySelector('.breakdown-grid');
    
    Object.entries(breakdown).forEach(([topic, stats]) => {
        if (stats.total === 0) return;
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="score">${stats.correct}/${stats.total}</div>
            <div class="label">${topic}</div>
        `;
        grid.appendChild(item);
    });
}

function reviewExam() {
    const reviewEl = document.getElementById('examReview');
    reviewEl.style.display = 'block';
    reviewEl.innerHTML = '<h3>Detailed Exam Review</h3>';
    
    state.exam.questions.forEach((q, i) => {
        const userAns = state.exam.answers[i];
        let isCorrect = false;
        if (q.type === 'mcq' || q.type === 'tf') isCorrect = (userAns === q.answer);
        else isCorrect = (String(userAns).toLowerCase() === String(q.answer).toLowerCase());

        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct-review' : 'wrong-review'}`;
        
        let userDisplay = userAns === undefined ? 'Skipped' : (q.type === 'mcq' ? q.options[userAns] : userAns);
        let correctDisplay = q.type === 'mcq' ? q.options[q.answer] : q.answer;

        item.innerHTML = `
            <div class="review-status ${isCorrect ? 'c' : 'w'}">${isCorrect ? '✓ CORRECT' : '✗ WRONG'}</div>
            <div style="font-size:0.9rem;margin-bottom:0.5rem"><strong>Q${i+1}:</strong> ${q.question}</div>
            <div style="font-size:0.8rem;color:var(--text2)">Your Answer: <span style="color:${isCorrect ? 'var(--green)' : 'var(--red)'}">${userDisplay}</span></div>
            ${!isCorrect ? `<div style="font-size:0.8rem;color:var(--text2)">Correct Answer: <span style="color:var(--green)">${correctDisplay}</span></div>` : ''}
            ${q.explanation ? `<div class="explanation" style="font-size:0.8rem;margin-top:0.5rem">${q.explanation}</div>` : ''}
        `;
        reviewEl.appendChild(item);
    });
}

// ============================================================
// FLASHCARDS LOGIC
// ============================================================
function startFlash() {
    const topic = document.getElementById('flashTopic').value;
    let filtered = QUESTIONS.filter(q => q.topic === topic || topic === 'all');
    
    state.flashcards.deck = filtered.sort(() => 0.5 - Math.random());
    state.flashcards.currentIdx = 0;
    state.flashcards.flipped = false;
    
    document.getElementById('flashDeck').style.display = 'block';
    showFlashcard();
}

function showFlashcard() {
    const idx = state.flashcards.currentIdx;
    const q = state.flashcards.deck[idx];
    
    if (!q) return;
    
    document.getElementById('flashcard').classList.remove('flipped');
    state.flashcards.flipped = false;
    
    document.getElementById('flashQuestion').innerHTML = q.question;
    let correctStr = q.type === 'mcq' ? q.options[q.answer] : q.answer;
    document.getElementById('flashAnswer').innerHTML = `<strong>Answer:</strong><br>${correctStr}<br><br><small>${q.explanation || ''}</small>`;
    
    document.getElementById('flashCount').textContent = `${idx + 1} / ${state.flashcards.deck.length}`;
}

function flipCard() {
    state.flashcards.flipped = !state.flashcards.flipped;
    document.getElementById('flashcard').classList.toggle('flipped', state.flashcards.flipped);
}

function flashNav(dir) {
    const nextIdx = state.flashcards.currentIdx + dir;
    if (nextIdx >= 0 && nextIdx < state.flashcards.deck.length) {
        state.flashcards.currentIdx = nextIdx;
        showFlashcard();
    }
}

function rateFlash(rating) {
    // Optional logic to track flashcard mastery
    flashNav(1);
}

// ============================================================
// EXTRA PAGES & TOPIC PRACTICE
// ============================================================
function startTopicPractice(topic) {
    const filtered = QUESTIONS.filter(q => q.topic === topic).sort(() => 0.5 - Math.random());
    state.practice.isTimed = false;
    goPage('practice');
    setupPracticeSession(filtered);
}

function initExtraPages() {
    // Populate Finals
    const finalsEl = document.getElementById('finalsContent');
    if (finalsEl) {
        finalsEl.innerHTML = `
            <div class="finals-grid">
                <div class="final-card">
                    <h3>Model Exam A</h3>
                    <p>Balanced mix of 50 questions across all topics. Recommended for final week.</p>
                    <button class="btn-primary" onclick="startFinalModel(50, 'balanced')">Start Model A</button>
                </div>
                <div class="final-card">
                    <h3>Model Exam B</h3>
                    <p>Intensive 75 questions with focus on Web Technologies and Networks.</p>
                    <button class="btn-primary" onclick="startFinalModel(75, 'random')">Start Model B</button>
                </div>
                <div class="final-card">
                    <h3>The Ultimate Marathon</h3>
                    <p>100 questions randomized. Test your endurance and comprehensive knowledge.</p>
                    <button class="btn-primary" onclick="startFinalModel(100, 'random')">Start Marathon</button>
                </div>
            </div>
        `;
    }

    // Populate Notes
    const notesEl = document.getElementById('notesContent');
    if (notesEl) {
        notesEl.innerHTML = `
            <div class="notes-container">
                <div class="note-box">
                    <h4>📝 High-Priority Concepts</h4>
                    <ul>
                        <li><strong>HTML:</strong> Always use semantic tags. <select> for dropdowns, <textarea> for multiline.</li>
                        <li><strong>CSS:</strong> ID (#) has higher priority than Class (.). Box-model is key.</li>
                        <li><strong>JS:</strong> document.getElementById() is essential. innerHTML vs innerText matters.</li>
                        <li><strong>PHP:</strong> Runs server-side. Global arrays like $_GET and $_POST.</li>
                    </ul>
                </div>
                <div class="note-box">
                    <h4>💡 Exam Strategy</h4>
                    <ul>
                        <li>Read the question type (MCQ, TF, Fill) before answering.</li>
                        <li>In "Output" questions, trace the variable values line-by-line.</li>
                        <li>For "Matching" questions, use elimination to find the best fit.</li>
                        <li>Watch the timer! Don't spend more than 1 minute on easy questions.</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

function startFinalModel(count, mix) {
    goPage('exam');
    document.getElementById('examCount').value = count;
    document.getElementById('examMix').value = mix;
    document.getElementById('examTime').value = count; // 1 min per q
    startExam();
}

function updateSubtopics() {
    const topic = document.getElementById('filterTopic').value;
    const subSelect = document.getElementById('filterSubtopic');
    if (!subSelect) return;
    
    subSelect.innerHTML = '<option value="all">All Subtopics</option>';
    
    let subtopics = [];
    if (topic === 'all') {
        subtopics = [...new Set(QUESTIONS.map(q => q.subtopic).filter(Boolean))];
    } else {
        subtopics = [...new Set(QUESTIONS.filter(q => q.topic === topic).map(q => q.subtopic).filter(Boolean))];
    }
    
    subtopics.sort().forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.textContent = sub;
        subSelect.appendChild(opt);
    });
}
