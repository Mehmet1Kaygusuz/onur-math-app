// ===============================
//  S O R U   B A N K A S I
// ===============================

const questions = [
  {
    id: 1,
    unit: "Limit",
    level: "Kolay",
    question: "lim (x→3) (x² - 9) / (x - 3) nedir?",
    correctAnswer: "6",
    wrongAnswers: ["3", "5", "9"],
    hints: ["Çarpanlara ayır.", "Sadeleştir.", "x yerine 3 yaz."],
    partialSolution: "x+3 kalır.",
    fullSolution: "6"
  },
  {
    id: 2,
    unit: "Türev",
    level: "Orta",
    question: "f'(x)=3x²-6 köklerinden biri?",
    correctAnswer: "√2",
    wrongAnswers: ["0", "1", "3"],
    hints: ["0'a eşitle.", "x²=2."],
    partialSolution: "±√2",
    fullSolution: "√2"
  },
  {
    id: 3,
    unit: "İntegral",
    level: "Kolay",
    question: "∫ 4x dx",
    correctAnswer: "2x² + C",
    wrongAnswers: ["4x² + C", "x² + C", "8x + C"],
    hints: ["Güç artır."],
    partialSolution: "2x²",
    fullSolution: "2x² + C"
  },
  {
    id: 4,
    unit: "Fonksiyon",
    level: "Kolay",
    question: "f(x)=2x+1, f(5)?",
    correctAnswer: "11",
    wrongAnswers: ["9", "7", "12"],
    hints: ["Yerine yaz."],
    partialSolution: "10+1",
    fullSolution: "11"
  },
  {
    id: 5,
    unit: "Trigonometri",
    level: "Kolay",
    question: "sin(45°)?",
    correctAnswer: "√2/2",
    wrongAnswers: ["1/2", "√3/2", "1"],
    hints: ["Özel açı"],
    partialSolution: "√2/2",
    fullSolution: "√2/2"
  },
  {
    id: 6,
    unit: "Limit",
    level: "Orta",
    question: "lim x→∞ (3x+2)/(x-5)",
    correctAnswer: "3",
    wrongAnswers: ["0", "∞", "1"],
    hints: ["Baskın terim"],
    partialSolution: "3",
    fullSolution: "3"
  },
  {
    id: 7,
    unit: "Türev",
    level: "Orta",
    question: "√x türevi?",
    correctAnswer: "1/(2√x)",
    wrongAnswers: ["√x", "2√x", "1/x"],
    hints: ["x^(1/2)"],
    partialSolution: "1/(2√x)",
    fullSolution: "1/(2√x)"
  },
  {
    id: 8,
    unit: "İntegral",
    level: "Orta",
    question: "∫ (2x+3) dx",
    correctAnswer: "x² + 3x + C",
    wrongAnswers: ["2x² + C", "x² + C", "2x² + 3x + C"],
    hints: ["Ayrı al"],
    partialSolution: "x²+3x",
    fullSolution: "x²+3x+C"
  },
  {
    id: 9,
    unit: "Fonksiyon",
    level: "Orta",
    question: "x²-4 kök?",
    correctAnswer: "2",
    wrongAnswers: ["4", "-4", "-2"],
    hints: ["±2"],
    partialSolution: "±2",
    fullSolution: "2"
  },
  {
    id: 10,
    unit: "Trigonometri",
    level: "Orta",
    question: "cos(60°)?",
    correctAnswer: "1/2",
    wrongAnswers: ["√3/2", "1", "0"],
    hints: ["Özel açı"],
    partialSolution: "1/2",
    fullSolution: "1/2"
  },
  {
    id: 11,
    unit: "Cebir",
    level: "Kolay",
    question: "2x-5=9",
    correctAnswer: "7",
    wrongAnswers: ["5", "6", "4"],
    hints: ["+5"],
    partialSolution: "2x=14",
    fullSolution: "7"
  },
  {
    id: 12,
    unit: "Log",
    level: "Orta",
    question: "log₂(8)",
    correctAnswer: "3",
    wrongAnswers: ["2", "4", "1"],
    hints: ["2³"],
    partialSolution: "3",
    fullSolution: "3"
  },
  {
    id: 13,
    unit: "Dizi",
    level: "Orta",
    question: "aₙ=3n+1, n=5",
    correctAnswer: "16",
    wrongAnswers: ["13", "19", "10"],
    hints: ["3*5"],
    partialSolution: "15+1",
    fullSolution: "16"
  },
  {
    id: 14,
    unit: "Analitik",
    level: "Orta",
    question: "mesafe (2,3)-(6,7)",
    correctAnswer: "4√2",
    wrongAnswers: ["4", "6", "8"],
    hints: ["√32"],
    partialSolution: "≈5.65",
    fullSolution: "4√2"
  },
  {
    id: 15,
    unit: "Limit",
    level: "Zor",
    question: "lim x→0 sinx/x",
    correctAnswer: "1",
    wrongAnswers: ["0", "∞", "x"],
    hints: ["Özel limit"],
    partialSolution: "1",
    fullSolution: "1"
  },
  {
    id: 16,
    unit: "Türev",
    level: "Zor",
    question: "e^x türevi?",
    correctAnswer: "e^x",
    wrongAnswers: ["1", "x·e^x", "lnx"],
    hints: ["Kendisi"],
    partialSolution: "e^x",
    fullSolution: "e^x"
  },
  {
    id: 17,
    unit: "İntegral",
    level: "Zor",
    question: "∫1/x dx",
    correctAnswer: "ln|x| + C",
    wrongAnswers: ["1/x²", "x", "x²"],
    hints: ["Özel"],
    partialSolution: "ln|x|",
    fullSolution: "ln|x|+C"
  },
  {
    id: 18,
    unit: "Fonksiyon",
    level: "Zor",
    question: "1/(x-2) tanım",
    correctAnswer: "x ≠ 2",
    wrongAnswers: ["x ≠ 0", "x>2", "x<2"],
    hints: ["Payda"],
    partialSolution: "2 olmaz",
    fullSolution: "x≠2"
  },
  {
    id: 19,
    unit: "Trig",
    level: "Zor",
    question: "tan45",
    correctAnswer: "1",
    wrongAnswers: ["0", "√3", "1/√3"],
    hints: ["sin=cos"],
    partialSolution: "1",
    fullSolution: "1"
  },
  {
    id: 20,
    unit: "Cebir",
    level: "Zor",
    question: "x²-5x+6",
    correctAnswer: "2",
    wrongAnswers: ["3", "5", "6"],
    hints: ["(x-2)(x-3)"],
    partialSolution: "2,3",
    fullSolution: "2"
  }
];


// ===============================
//  KOD (DEĞİŞTİRME)
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

    createOptions(q);
}

function loadRandomQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    loadQuestion();
}

function createOptions(q) {
    const letters = ["O", "N", "U", "R"];
    const answers = [q.correctAnswer, ...q.wrongAnswers];
    const shuffled = answers.sort(() => Math.random() - 0.5);

    let correctLetter = "";

    letters.forEach((letter, i) => {
        const card = document.createElement("div");
        card.className = "option-card";

        const answer = shuffled[i];

        if (answer === q.correctAnswer) {
            correctLetter = letter;
        }

        card.textContent = `${letter}) ${answer}`;
        card.addEventListener("click", () => handleAnswer(letter, card));

        optionsBox.appendChild(card);
    });

    q.correct = correctLetter;
}

function handleAnswer(selected, card) {
    const q = questions[currentQuestionIndex];
    const cards = document.querySelectorAll(".option-card");

    cards.forEach(c => c.classList.add("option-disabled"));

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

function showStep() {
    if (locked) return;

    const q = questions[currentQuestionIndex];
    let text = "";

    if (stepIndex < q.hints.length) text = q.hints[stepIndex];
    else if (stepIndex === q.hints.length) text = q.partialSolution;
    else if (stepIndex === q.hints.length + 1) text = q.fullSolution;
    else return;

    const p = document.createElement("p");
    p.textContent = text;
    stepsEl.appendChild(p);

    stepIndex++;
    lockButton();
}

function lockButton() {
    locked = true;
    showStepBtn.disabled = true;

    let time = lockTime;
    timerEl.textContent = `${time} saniye bekle`;

    const interval = setInterval(() => {
        time--;
        timerEl.textContent = `${time} saniye bekle`;

        if (time <= 0) {
            clearInterval(interval);
            locked = false;
            showStepBtn.disabled = false;
            timerEl.textContent = "";
        }
    }, 1000);
}

function nextQuestion() {
    if (currentNumber >= totalQuestions) {
        alert("Test bitti!");
        return;
    }

    currentNumber++;
    loadRandomQuestion();
}

nextQuestionBtn.addEventListener("click", nextQuestion);
showStepBtn.addEventListener("click", showStep);

loadRandomQuestion();