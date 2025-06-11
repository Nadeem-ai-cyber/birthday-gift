const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 80; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1,
    twinkle: Math.random() * 0.05 + 0.01
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffffcc";
    ctx.fill();
    star.radius += star.twinkle * (Math.random() > 0.5 ? 1 : -1);
    if (star.radius < 0) star.radius = 0;
  }
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}
animate();

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 1200);

// Show greeting box briefly
window.addEventListener("load", () => {
  const msg = document.getElementById("messageBox");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
});

// Surprise content reveal
document.getElementById("surpriseBtn").addEventListener("click", () => {
  const box = document.getElementById("surpriseContent");
  box.style.display = box.style.display === "block" ? "none" : "block";
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
