// ===============================
//  S O R U   B A N K A S I
// ===============================
const questions = [
  {
    id: 1,
    unit: "Limit",
    level: "Kolay",
    question: "lim (x→3) (x² - 9) / (x - 3) ifadesinin sonucu nedir?",
    options: { O: "3", N: "6", U: "5", R: "9" },
    correct: "N",
    hints: [
      "Payı çarpanlara ayır.",
      "x² - 9 = (x - 3)(x + 3).",
      "Sadeleştirme yap.",
      "x yerine 3 yaz."
    ],
    partialSolution: "Sadeleştirme sonrası x + 3 kalır.",
    fullSolution: "3 + 3 = 6."
  },

  {
    id: 2,
    unit: "Türev",
    level: "Orta",
    question: "f(x) = x³ - 6x fonksiyonunun türevinin köklerinden biri nedir?",
    options: { O: "0", N: "1", U: "2", R: "3" },
    correct: "U",
    hints: [
      "Önce türev al.",
      "f'(x) = 3x² - 6.",
      "3x² - 6 = 0 çöz.",
      "x² = 2 → x = ±√2."
    ],
    partialSolution: "Köklerden biri √2’dir.",
    fullSolution: "Yaklaşık 1.41 → en yakın seçenek 2."
  },

  {
    id: 3,
    unit: "İntegral",
    level: "Kolay",
    question: "∫ 4x dx ifadesinin sonucu nedir?",
    options: { O: "2x² + C", N: "4x² + C", U: "x² + C", R: "8x + C" },
    correct: "O",
    hints: [
      "xⁿ → xⁿ⁺¹/(n+1).",
      "4x → 4 * x²/2.",
      "4/2 = 2.",
      "Sonucu yaz."
    ],
    partialSolution: "4x → 2x².",
    fullSolution: "2x² + C."
  },

  {
    id: 4,
    unit: "Fonksiyonlar",
    level: "Kolay",
    question: "f(x) = 2x + 1 fonksiyonunun f(5) değeri nedir?",
    options: { O: "9", N: "11", U: "7", R: "12" },
    correct: "N",
    hints: [
      "x yerine 5 yaz.",
      "2×5 = 10.",
      "10 + 1 = 11.",
      "Sonucu yaz."
    ],
    partialSolution: "f(5) = 2(5) + 1.",
    fullSolution: "Sonuç 11."
  },

  {
    id: 5,
    unit: "Trigonometri",
    level: "Kolay",
    question: "sin(45°) kaçtır?",
    options: { O: "√2/2", N: "1/2", U: "√3/2", R: "1" },
    correct: "O",
    hints: [
      "45° özel açıdır.",
      "sin(45°) = cos(45°).",
      "Değer √2/2’dir.",
      "Sonucu yaz."
    ],
    partialSolution: "sin(45°) = √2/2.",
    fullSolution: "Doğru cevap √2/2."
  },

  {
    id: 6,
    unit: "Limit",
    level: "Orta",
    question: "lim (x→∞) (3x + 2) / (x - 5) sonucu nedir?",
    options: { O: "3", N: "0", U: "∞", R: "1" },
    correct: "O",
    hints: [
      "Baskın terimler x’li olanlardır.",
      "3x / x = 3.",
      "Sabitler limitte önemsizdir.",
      "Sonucu yaz."
    ],
    partialSolution: "Baskın oran 3’tür.",
    fullSolution: "Limit 3."
  },

  {
    id: 7,
    unit: "Türev",
    level: "Orta",
    question: "f(x) = √x fonksiyonunun türevi nedir?",
    options: { O: "1/(2√x)", N: "√x", U: "2√x", R: "1/x" },
    correct: "O",
    hints: [
      "√x = x^(1/2).",
      "Türev: (1/2)x^(-1/2).",
      "x^(-1/2) = 1/√x.",
      "Sonucu yaz."
    ],
    partialSolution: "f'(x) = 1/(2√x).",
    fullSolution: "Doğru cevap budur."
  },

  {
    id: 8,
    unit: "İntegral",
    level: "Orta",
    question: "∫ (2x + 3) dx sonucu nedir?",
    options: { O: "x² + 3x + C", N: "2x² + 3x + C", U: "x² + C", R: "2x² + C" },
    correct: "O",
    hints: [
      "Her terimi ayrı integral al.",
      "2x → x².",
      "3 → 3x.",
      "Sonucu yaz."
    ],
    partialSolution: "x² + 3x + C.",
    fullSolution: "Doğru sonuç budur."
  },

  {
    id: 9,
    unit: "Fonksiyonlar",
    level: "Orta",
    question: "f(x) = x² - 4 fonksiyonunun köklerinden biri nedir?",
    options: { O: "2", N: "4", U: "-4", R: "-2" },
    correct: "O",
    hints: [
      "x² - 4 = 0.",
      "x² = 4.",
      "x = ±2.",
      "Pozitif olanı seç."
    ],
    partialSolution: "Kökler ±2.",
    fullSolution: "Doğru seçenek 2."
  },

  {
    id: 10,
    unit: "Trigonometri",
    level: "Orta",
    question: "cos(60°) kaçtır?",
    options: { O: "1/2", N: "√3/2", U: "1", R: "0" },
    correct: "O",
    hints: [
      "60° özel açıdır.",
      "cos(60°) = 1/2.",
      "sin(30°) ile aynıdır.",
      "Sonucu yaz."
    ],
    partialSolution: "cos(60°) = 1/2.",
    fullSolution: "Doğru cevap 1/2."
  },

  {
    id: 11,
    unit: "Cebir",
    level: "Kolay",
    question: "2x - 5 = 9 denkleminin çözümü nedir?",
    options: { O: "7", N: "5", U: "6", R: "4" },
    correct: "U",
    hints: [
      "5’i karşıya at.",
      "2x = 14.",
      "x = 7.",
      "Sonucu yaz."
    ],
    partialSolution: "x = 7.",
    fullSolution: "Doğru seçenek 7 → U."
  },

  {
    id: 12,
    unit: "Logaritma",
    level: "Orta",
    question: "log₂(8) kaçtır?",
    options: { O: "2", N: "3", U: "4", R: "1" },
    correct: "N",
    hints: [
      "8 = 2³.",
      "log₂(2³) = 3.",
      "Taban aynı.",
      "Sonucu yaz."
    ],
    partialSolution: "3.",
    fullSolution: "Doğru cevap 3."
  },

  {
    id: 13,
    unit: "Diziler",
    level: "Orta",
    question: "aₙ = 3n + 1 dizisinin 5. terimi nedir?",
    options: { O: "13", N: "16", U: "19", R: "10" },
    correct: "O",
    hints: [
      "n yerine 5 yaz.",
      "3×5 = 15.",
      "15 + 1 = 16.",
      "Sonucu yaz."
    ],
    partialSolution: "a₅ = 16.",
    fullSolution: "Doğru seçenek 16 → O."
  },

  {
    id: 14,
    unit: "Analitik",
    level: "Orta",
    question: "(2,3) ve (6,7) noktaları arasındaki uzaklık nedir?",
    options: { O: "4", N: "2√2", U: "6", R: "8" },
    correct: "O",
    hints: [
      "Formül: √((x2-x1)² + (y2-y1)²).",
      "Farklar 4 ve 4.",
      "4² + 4² = 32.",
      "√32 = 4√2 → en yakın 4."
    ],
    partialSolution: "Uzaklık 4√2 ≈ 5.65.",
    fullSolution: "En yakın seçenek 4."
  },

  {
    id: 15,
    unit: "Limit",
    level: "Zor",
    question: "lim (x→0) sin(x)/x kaçtır?",
    options: { O: "1", N: "0", U: "∞", R: "x" },
    correct: "O",
    hints: [
      "Özel bir limittir.",
      "sin(x)/x → 1.",
      "x radyan olmalı.",
      "Sonucu yaz."
    ],
    partialSolution: "Limit 1.",
    fullSolution: "Doğru cevap 1."
  },

  {
    id: 16,
    unit: "Türev",
    level: "Zor",
    question: "f(x) = eˣ fonksiyonunun türevi nedir?",
    options: { O: "eˣ", N: "1", U: "x·eˣ", R: "ln(x)" },
    correct: "O",
    hints: [
      "eˣ’in türevi kendisidir.",
      "Bu özel bir kuraldır.",
      "Her x için geçerlidir.",
      "Sonucu yaz."
    ],
    partialSolution: "f'(x) = eˣ.",
    fullSolution: "Doğru cevap eˣ."
  },

  {
    id: 17,
    unit: "İntegral",
    level: "Zor",
    question: "∫ 1/x dx sonucu nedir?",
    options: { O: "ln|x| + C", N: "1/(x²) + C", U: "x + C", R: "x² + C" },
    correct: "O",
    hints: [
      "1/x’in integrali ln|x|’tir.",
      "Mutlak değer unutma.",
      "Bu özel bir integraldir.",
      "Sonucu yaz."
    ],
    partialSolution: "ln|x| + C.",
    fullSolution: "Doğru cevap budur."
  },

  {
    id: 18,
    unit: "Fonksiyonlar",
    level: "Zor",
    question: "f(x) = 1/(x-2) fonksiyonunun tanım kümesi nedir?",
    options: { O: "x ≠ 2", N: "x ≠ 0", U: "x > 2", R: "x < 2" },
    correct: "O",
    hints: [
      "Payda 0 olamaz.",
      "x - 2 = 0 → x = 2.",
      "Bu değer hariç tüm reel sayılar.",
      "Sonucu yaz."
    ],
    partialSolution: "x ≠ 2.",
    fullSolution: "Doğru cevap x ≠ 2."
  },

  {
    id: 19,
    unit: "Trigonometri",
    level: "Zor",
    question: "tan(45°) kaçtır?",
    options: { O: "1", N: "0", U: "√3", R: "1/√3" },
    correct: "O",
    hints: [
      "45° özel açıdır.",
      "sin(45°) = cos(45°).",
      "tan = sin/cos = 1.",
      "Sonucu yaz."
    ],
    partialSolution: "tan(45°) = 1.",
    fullSolution: "Doğru cevap 1."
  },

  {
    id: 20,
    unit: "Cebir",
    level: "Zor",
    question: "x² - 5x + 6 = 0 denkleminin köklerinden biri nedir?",
    options: { O: "2", N: "3", U: "5", R: "6" },
    correct: "O",
    hints: [
      "Çarpanlara ayır.",
      "(x-2)(x-3).",
      "Kökler 2 ve 3.",
      "Seçeneklerden biri 2."
    ],
    partialSolution: "Kökler 2 ve 3.",
    fullSolution: "Doğru seçenek 2."
  }
];









// ===============================
//  D E Ğ İ Ş K E N L E R
// ===============================

let currentQuestionIndex = 0;
let stepIndex = 0;
let locked = false;
let lockTime = 20;

let totalQuestions = questions.length;
let currentNumber = 1;
let correctCount = 0;
let wrongCount = 0;

const unitEl = document.getElementById("unit");
const questionTextEl = document.getElementById("question-text");
const levelEl = document.getElementById("level");
const stepsEl = document.getElementById("steps");

const optionsBox = document.getElementById("options-box");

const showStepBtn = document.getElementById("show-step-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");

const timerEl = document.getElementById("timer");

const counterEl = document.getElementById("question-counter");
const correctCounterEl = document.getElementById("correct-counter");
const wrongCounterEl = document.getElementById("wrong-counter");


// ===============================
//  S O R U   Y Ü K L E M E
// ===============================

function loadRandomQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];

    unitEl.textContent = q.unit;
    questionTextEl.textContent = q.question;
    levelEl.textContent = "Zorluk: " + q.level;

    stepsEl.innerHTML = "";
    optionsBox.innerHTML = "";
    stepIndex = 0;
    timerEl.textContent = "";

    showStepBtn.disabled = true;

    counterEl.textContent = `Soru ${currentNumber} / ${totalQuestions}`;

    createOptionCards(q);
}


// ===============================
//  O N U R   K A R T L A R I
// ===============================

function createOptionCards(q) {
    Object.keys(q.options).forEach(letter => {
        const card = document.createElement("div");
        card.className = "option-card";
        card.dataset.option = letter;
        card.textContent = `${letter}) ${q.options[letter]}`;

        card.addEventListener("click", () => handleAnswer(letter, card));

        optionsBox.appendChild(card);
    });
}


// ===============================
//  C E V A P   K O N T R O L Ü
// ===============================

function handleAnswer(selected, card) {
    const q = questions[currentQuestionIndex];

    const allCards = document.querySelectorAll(".option-card");

    allCards.forEach(c => c.classList.add("option-disabled"));

    if (selected === q.correct) {
        card.classList.add("option-correct");
        correctCount++;
        correctCounterEl.textContent = `Doğru: ${correctCount}`;
    } else {
        card.classList.add("option-wrong");
        wrongCount++;
        wrongCounterEl.textContent = `Yanlış: ${wrongCount}`;
    }

    showStepBtn.disabled = false;
}


// ===============================
//  Ç Ö Z Ü M   A D I M L A R I
// ===============================

function showStep() {
    if (locked) return;

    const q = questions[currentQuestionIndex];
    let text = "";

    if (stepIndex < q.hints.length) {
        text = q.hints[stepIndex];
    } else if (stepIndex === q.hints.length) {
        text = q.partialSolution;
    } else if (stepIndex === q.hints.length + 1) {
        text = q.fullSolution;
    } else {
        showStepBtn.disabled = true;
        return;
    }

    const p = document.createElement("p");
    p.textContent = text;
    stepsEl.appendChild(p);

    stepIndex++;

    if (stepIndex > q.hints.length + 1) {
        showStepBtn.disabled = true;
        return;
    }

    lockButton();
}


// ===============================
//  B U T O N   K İ L İ D İ
// ===============================

function lockButton() {
    locked = true;
    showStepBtn.disabled = true;

    let timeLeft = lockTime;
    timerEl.textContent = `${timeLeft} saniye bekle`;

    const interval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `${timeLeft} saniye bekle`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            locked = false;
            showStepBtn.disabled = false;
            timerEl.textContent = "";
        }
    }, 1000);
}


// ===============================
//  S O N R A K İ   S O R U
// ===============================

function nextQuestion() {
    currentNumber++;
    loadRandomQuestion();
}

nextQuestionBtn.addEventListener("click", nextQuestion);
showStepBtn.addEventListener("click", showStep);


// İlk soruyu yükle
loadRandomQuestion();
