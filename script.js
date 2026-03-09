// Partículas fantasmas flutuando (mantido)
function createGhostParticle() {
  const particle = document.createElement('div');
  particle.className = 'ghost-particle';
  
  const size = Math.random() * 8 + 4;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
  particle.style.animationDelay = Math.random() * 5 + 's';
  
  document.getElementById('particles').appendChild(particle);
  
  setTimeout(() => particle.remove(), 30000);
}

setInterval(createGhostParticle, 400);

// Fantasmas seguindo o mouse
const ghosts = document.querySelectorAll('.ghost-cursor');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Suporte touch (mobile)
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
  }
});

function animateGhosts() {
  ghosts.forEach((ghost, index) => {
    // Cada fantasma tem uma "atraso" e velocidade diferente
    const delay = index * 0.15 + 0.1;
    const speed = 0.04 + index * 0.015;
    
    const currentX = parseFloat(ghost.style.left || mouseX) || mouseX;
    const currentY = parseFloat(ghost.style.top  || mouseY) || mouseY;
    
    const targetX = mouseX - (ghost.offsetWidth / 2);
    const targetY = mouseY - (ghost.offsetHeight / 2);
    
    const newX = currentX + (targetX - currentX) * speed;
    const newY = currentY + (targetY - currentY) * speed;
    
    ghost.style.left = newX + 'px';
    ghost.style.top  = newY + 'px';
    
    // Leve rotação divertida
    const rot = Math.sin(Date.now() * 0.001 + index) * 10;
    ghost.style.transform = `rotate(${rot}deg)`;
  });
  
  requestAnimationFrame(animateGhosts);
}

animateGhosts();

// Clique no botão (mantido)
document.querySelector('.btn').addEventListener('click', () => {
  alert("Ligação sendo encaminhada para a central de contenção mais próxima...\n\n...não desligue, o Slimer já está com saudade!");
});