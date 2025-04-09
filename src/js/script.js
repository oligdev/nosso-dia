const inicioRelacao = new Date("2025-01-05T00:00:00");
const tempoDiv = document.getElementById("tempo");

function atualizaTempo() {
  const agora = new Date();
  const diff = agora - inicioRelacao;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  tempoDiv.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💖`;
}

atualizaTempo();
setInterval(atualizaTempo, 1000);

// Controle da música
const musica = document.getElementById("musica");
const botao = document.getElementById("btn-musica");

botao.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    botao.textContent = "🎵";
  } else {
    musica.pause();
    botao.textContent = "▶️";
  }
});

// Reproduzir a música na primeira interação do usuário
document.addEventListener('DOMContentLoaded', () => {
  const playOnClick = () => {
    musica.play().catch(() => {}); // tenta tocar
    document.removeEventListener('click', playOnClick); // remove o ouvinte após tocar
  };
  document.addEventListener('click', playOnClick);
});


// Corações caindo
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("heart");
  coracao.textContent = "💜";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(coracao);

  setTimeout(() => coracao.remove(), 5000);
}

setInterval(criarCoracao, 300);

// Clique para ampliar imagem
const imagens = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const fechar = document.getElementById("fechar");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

fechar.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === fechar) {
    lightbox.style.display = "none";
  }
});
