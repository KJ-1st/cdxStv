let currentStep = 1;
const totalSteps = 5;

const steps = Array.from(document.querySelectorAll(".step"));
const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progressBar.style.width = `${progress}%`;
}

function showStep(stepNumber) {
  steps.forEach(s => s.classList.remove("active"));
  const el = document.getElementById(`step${stepNumber}`);
  if (!el) return;
  el.classList.add("active");
  el.scrollTop = 0;
  updateProgressBar();
}

document.getElementById("yesBtn").addEventListener("click", () => {
  currentStep = 2;
  showStep(currentStep);
});

document.getElementById("next2").addEventListener("click", () => {
  currentStep = 3;
  showStep(currentStep);
});

document.getElementById("next3").addEventListener("click", () => {
  currentStep = 4;
  showStep(currentStep);
});

document.getElementById("next4").addEventListener("click", () => {
  currentStep = 5;
  showStep(currentStep);
});

document.getElementById("restart").addEventListener("click", () => {
  currentStep = 1;
  noStage = 0;
  noArea.innerHTML = "";
  showStep(currentStep);
});



/* Non flow */
const noBtn = document.getElementById("noBtn");
const noArea = document.getElementById("noArea");
let noStage = 0;

noBtn.addEventListener("click", () => {
  noArea.innerHTML = "";

  if (noStage === 0) {
    noArea.innerHTML = `<button class="btn primary" id="sureBtn">t sur ?</button>`;
    document.getElementById("sureBtn").addEventListener("click", () => {
      noStage = 1;
      noBtn.click();
    });
  } else {
    noArea.innerHTML = `
      <p class="text" style="margin-top:10px;">t un caca arrête de niaiser 😤</p>
      <button class="btn ghost" id="backBtn">OK 😅</button>
    `;
    document.getElementById("backBtn").addEventListener("click", () => {
      noStage = 0;
      noArea.innerHTML = "";
    });
  }
});

showStep(currentStep);

const heartsBtn = document.getElementById("hearts-btn");

heartsBtn.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

