const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 2 + 1;
  this.speedX = Math.random() * 0.5 - 0.25;
  this.speedY = Math.random() * 0.5 - 0.25;
}

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
  if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
  if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
};

Particle.prototype.draw = function () {
  ctx.fillStyle = 'rgba(0, 153, 255, 0.6)';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

