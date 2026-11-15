function switchTab(tabName, btnEl) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("tab-" + tabName).classList.add("active");
  btnEl.classList.add("active");
}

const canvas = document.getElementById("chemCanvas");
const ctx = canvas.getContext("2d");
let labState = {
  liquidColor: "#38bdf8",
  gasActive: false,
  precipColor: null,
  wave: 0,
};
let bubbles = Array.from({ length: 28 }, () => ({
  x: 145 + Math.random() * 90,
  y: 150 + Math.random() * 30,
  r: 2 + Math.random() * 3.5,
  s: 1 + Math.random() * 1.8,
}));
let smoke = Array.from({ length: 18 }, () => ({
  x: 185 + Math.random() * 10,
  y: 75,
  r: 4 + Math.random() * 5,
  a: 1,
}));

function animateLab() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  labState.wave += 0.08;

  ctx.fillStyle = "#475569";
  ctx.fillRect(165, 198, 50, 22);
  ctx.fillStyle = "#94a3b8";
  ctx.fillRect(186, 190, 8, 8);

  const flameH = 18 + Math.sin(labState.wave * 2.5) * 4;
  ctx.beginPath();
  ctx.moveTo(182, 190);
  ctx.quadraticCurveTo(190, 190 - flameH * 1.6, 198, 190);
  ctx.fillStyle = "#f97316";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(186, 190);
  ctx.quadraticCurveTo(190, 190 - flameH, 194, 190);
  ctx.fillStyle = "#fde047";
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(175, 80);
  ctx.lineTo(175, 110);
  ctx.lineTo(135, 175);
  ctx.quadraticCurveTo(135, 185, 148, 185);
  ctx.lineTo(232, 185);
  ctx.quadraticCurveTo(245, 185, 245, 175);
  ctx.lineTo(205, 110);
  ctx.lineTo(205, 80);
  ctx.closePath();
  ctx.clip();

  ctx.fillStyle = labState.liquidColor;
  ctx.beginPath();
  ctx.moveTo(130, 140);
  for (let x = 130; x <= 250; x += 5) {
    ctx.lineTo(x, 138 + Math.sin(x * 0.1 + labState.wave) * 3);
  }
  ctx.lineTo(250, 190);
  ctx.lineTo(130, 190);
  ctx.fill();

  if (labState.precipColor) {
    ctx.fillStyle = labState.precipColor;
    ctx.fillRect(130, 174, 120, 15);
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  bubbles.forEach((b) => {
    b.y -= b.s;
    if (b.y < 140) {
      b.y = 182;
      b.x = 148 + Math.random() * 84;
    }
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(175, 75);
  ctx.lineTo(175, 110);
  ctx.lineTo(135, 175);
  ctx.quadraticCurveTo(135, 185, 148, 185);
  ctx.lineTo(232, 185);
  ctx.quadraticCurveTo(245, 185, 245, 175);
  ctx.lineTo(205, 110);
  ctx.lineTo(205, 75);
  ctx.stroke();

  smoke.forEach((s) => {
    s.y -= labState.gasActive ? 1.5 : 0.7;
    s.x += Math.sin(s.y * 0.1) * 0.6;
    s.a -= 0.015;
    if (s.a <= 0) {
      s.y = 75;
      s.x = 185 + Math.random() * 10;
      s.a = 0.8;
    }
    ctx.fillStyle = labState.gasActive
      ? `rgba(56, 189, 248, ${s.a})`
      : `rgba(226, 232, 240, ${s.a * 0.5})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateLab);
}
animateLab();

const topicList = document.getElementById("topic-list");
const quizSelect = document.getElementById("quiz-topic-select");

bookChapters.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<small style="color:#64748b">${item.chapter}</small><br>${item.title}`;
  li.onclick = () => openLesson(index, li);
  topicList.appendChild(li);

  const opt = document.createElement("option");
  opt.value = index;
  opt.textContent = `${item.chapter}: ${item.title}`;
  quizSelect.appendChild(opt);
});

function openLesson(index, liElement) {
  document
    .querySelectorAll("#topic-list li")
    .forEach((el) => el.classList.remove("active"));
  liElement.classList.add("active");

  const data = bookChapters[index];
  document.getElementById("chapter-badge").textContent = data.chapter;
  document.getElementById("lesson-title").textContent = data.title;
  document.getElementById("lesson-body").innerHTML = data.content;
  document.getElementById("lab-desc").textContent = data.labDesc;

  labState.liquidColor = "#38bdf8";
  labState.precipColor = null;
  labState.gasActive = false;
  document.getElementById("lab-eq").textContent =
    "Reaksiya tenglamasi shu yerda chiqadi";

  const btns = document.getElementById("lab-btns");
  btns.innerHTML = "";
  data.buttons.forEach((b) => {
    const btn = document.createElement("button");
    btn.textContent = b.label;
    btn.onclick = () => {
      labState.liquidColor = b.color;
      labState.precipColor =
        b.ph !== "0%" && b.pc !== "transparent" ? b.pc : null;
      labState.gasActive = b.gas;
      document.getElementById("lab-eq").textContent = b.eq;
    };
    btns.appendChild(btn);
  });
}

if (document.querySelector("#topic-list li")) {
  document.querySelector("#topic-list li").click();
}

let currentQuiz = [],
  qIndex = 0,
  score = 0;

function startQuiz() {
  currentQuiz = bookChapters[quizSelect.value].quiz;
  qIndex = 0;
  score = 0;
  document.getElementById("quiz-area").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const qData = currentQuiz[qIndex];
  document.getElementById("quiz-progress").textContent =
    `Savol: ${qIndex + 1} / ${currentQuiz.length}`;
  document.getElementById("quiz-score").textContent = `Ball: ${score}`;
  document.getElementById("quiz-question").textContent = qData.q;
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("next-q-btn").style.display = "none";

  const optsDiv = document.getElementById("quiz-options");
  optsDiv.innerHTML = "";
  qData.opts.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.textContent = optText;
    btn.onclick = () => {
      document.querySelectorAll(".opt-btn").forEach((b) => (b.disabled = true));
      const fb = document.getElementById("quiz-feedback");
      if (i === qData.ans) {
        btn.classList.add("correct");
        score += 10;
        fb.style.color = "#16a34a";
        fb.textContent = "To'g'ri javob! +10 ball";
      } else {
        btn.classList.add("wrong");
        document
          .querySelectorAll(".opt-btn")
          [qData.ans].classList.add("correct");
        fb.style.color = "#dc2626";
        fb.textContent = `Noto'g'ri. To'g'ri javob: ${qData.opts[qData.ans]}`;
      }
      document.getElementById("quiz-score").textContent = `Ball: ${score}`;
      document.getElementById("next-q-btn").style.display = "inline-block";
    };
    optsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  qIndex++;
  if (qIndex < currentQuiz.length) showQuestion();
  else {
    document.getElementById("quiz-question").textContent =
      `O'yin tugadi! Natija: ${score} / ${currentQuiz.length * 10} ball`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("next-q-btn").style.display = "none";
  }
}

function askAI() {
  const input = document.getElementById("ai-input");
  const text = input.value.trim();
  if (!text) return;

  const chatBox = document.getElementById("chat-messages");
  chatBox.innerHTML += `<div class="message user">${text}</div>`;
  input.value = "";

  const q = text.toLowerCase();
  let bestAnswer = null,
    maxMatches = 0;

  aiKnowledge.forEach((item) => {
    let matches = 0;
    item.keys.forEach((k) => {
      if (q.includes(k)) matches++;
    });
    if (matches > maxMatches) {
      maxMatches = matches;
      bestAnswer = item.answer;
    }
  });

  let reply = "";
  if (bestAnswer) {
    reply = bestAnswer;
  } else if (
    q.includes("rahmat") ||
    q.includes("raxmat") ||
    q.includes("tashakkur")
  ) {
    reply =
      "Arzimaydi, sog' bo'ling! Yana kimyo fanidan savollaringiz bo'lsa, bemalol yozing.";
  } else if (q.includes("salom") || q.includes("assalom")) {
    reply =
      "Va alaykum assalom! 8-sinf kimyo darsligi bo'yicha qanday savolingiz bor?";
  } else {
    reply =
      "Kechirasiz, bu savol bo'yicha aniq ma'lumot topa olmadim. Kislorod, vodorod, oksidlar, asoslar, kislotalar, tuzlar yoki davriy qonun haqida so'rab ko'ring!";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<div class="message bot">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 300);
}
