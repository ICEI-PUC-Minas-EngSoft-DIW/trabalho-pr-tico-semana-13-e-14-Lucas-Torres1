const API_BASE = 'http://localhost:3001/itens';
const FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="#e0e0e0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="#666">imagem não encontrada</text></svg>`);
async function fetchAll(){ const r=await fetch(API_BASE); if(!r.ok) throw new Error('Falha ao carregar itens'); return r.json(); }
async function fetchById(id){ const r=await fetch(`${API_BASE}/${id}`); if(!r.ok) throw new Error('Item não encontrado'); return r.json(); }

const itens = {
  "origem-trap": {
    id: "origem-trap",
    titulo: "Origem do Trap",
    destaque: true,
    resumo: "Como o Trap surgiu nos EUA e virou fenômeno global.",
    descricao:
      "O Trap surgiu nos Estados Unidos no início dos anos 2000, principalmente no sul, com artistas como T.I., Gucci Mane e Young Jeezy. O nome vem das 'trap houses', locais onde ocorriam atividades ilegais e que inspiraram as letras. O gênero evoluiu misturando batidas eletrônicas com influências do hip-hop e hoje é uma das principais vertentes musicais globais.",
    imagem: "./images/origemtrap.png",
    imagemAlt: "Representação da origem do Trap",
    info: [
      { label: "Região de origem", value: "Sul dos EUA" },
      { label: "Período", value: "Início dos anos 2000" },
      { label: "Pioneiros", value: "T.I., Gucci Mane, Young Jeezy" },
      { label: "Características", value: "808 forte, hi-hats rápidos, bass pesado" },
      { label: "Influência global", value: "Popularidade em diversos países e subgêneros" }
    ]
  },

  "artistas-alta": {
    id: "artistas-alta",
    titulo: "Artistas em Alta",
    destaque: true,
    resumo: "Nomes que impulsionam o Trap nacional.",
    descricao:
      "No Brasil, nomes como Matuê, Teto, Veigh, Yunk Vino, Japa e KayBlack estão entre os principais representantes do Trap moderno. Eles misturam influências do rap americano com a sonoridade local, criando produções que conquistam milhões de ouvintes nas plataformas digitais.",
    imagem: "./images/fototrapers.PNG",
    imagemAlt: "Artistas brasileiros de Trap",
    info: [
      { label: "Cenário", value: "Brasil" },
      { label: "Destaques", value: "Matuê, Teto, Veigh, Yunk Vino, Japa, KayBlack" },
      { label: "Plataformas", value: "Spotify, YouTube Music, Deezer" },
      { label: "Tendência", value: "Fusão de estilos e colaborações" },
      { label: "Produção", value: "Beats modernos e estética forte" }
    ],
    midiaEmbed: [
      {
        album: "https://open.spotify.com/embed/album/3lXVOBlBz0s2iun2ocA5Gn?utm_source=generator",
        faixas: [
          "https://open.spotify.com/embed/track/4zVaPRho7i7z68Au6gVAmz?utm_source=generator",
          "https://open.spotify.com/embed/track/78LW2UJ7LSnHKwIWjmpXR0?utm_source=generator",
          "https://open.spotify.com/embed/track/5lXxagbzU5cMzoZqjlGmga?utm_source=generator"
        ]
      },
      {
        album: "https://open.spotify.com/embed/album/3VGvkH5X8bhjIV0rSohaVU?utm_source=generator",
        faixas: [
          "https://open.spotify.com/embed/track/0GsQzTpegvifzQZ4wXsCZ2?utm_source=generator",
          "https://open.spotify.com/embed/track/0HWYFn8L5lLLz9zKGnga5h?utm_source=generator&theme=0",
          "https://open.spotify.com/embed/track/70D4ZYmLC8Kxxw4rGthU0Q?utm_source=generator"
        ]
      },
      {
        album: "https://open.spotify.com/embed/album/6ehm0SMBBoSxH8oSrFXre6?utm_source=generator&theme=0",
        faixas: [
          "https://open.spotify.com/embed/track/2XymTaHTrQWDEuSyhfZvqF?utm_source=generator",
          "https://open.spotify.com/embed/track/5oI9blwsXC8AkTWw6wASY8?utm_source=generator",
          "https://open.spotify.com/embed/track/0bV0LtjtZH76gD0ujPYS3n?utm_source=generator&theme=0"
        ]
      },
      {
        album: "https://open.spotify.com/embed/album/6Y6PHaGPDkAYVuOxGfISi0?utm_source=generator",
        faixas: [
          "https://open.spotify.com/embed/track/5JX23868UTT3DBgj7i5yrK?utm_source=generator&theme=0",
          "https://open.spotify.com/embed/track/0vrUXMImjUJ511YAJrVo3d?utm_source=generator"
        ]
      }
    ]
  },

  "top-20": {
    id: "top-20",
    titulo: "Top 20 Trap Brasil",
    destaque: false,
    resumo: "Artistas brasileiros mais ouvidos do gênero Trap nas plataformas digitais.",
    descricao:
      "Confira abaixo os principais nomes do Trap nacional e suas canções mais escutadas nas plataformas digitais.",
    imagem: "./images/top20.jpg",
    imagemAlt: "Ranking dos mais ouvidos",
    info: [
      { label: "Fonte", value: "Spotify, YouTube Music e RapMídia" },
      { label: "Atualização", value: "Outubro de 2025" },
      { label: "Critério", value: "Número de streams e popularidade geral" }
    ],
    topArtistas: [
      { artista: "Bin", musica: "Saturno" },
      { artista: "Oruam", musica: "Lei Anti O.R.U.A.M" },
      { artista: "Veigh", musica: "Novo Balanço" },
      { artista: "Filipe Ret", musica: "Chefe do crime perfeito" },
      { artista: "MC Cabelinho", musica: "X1" },
      { artista: "Orochi", musica: "Balão" },
      { artista: "L7nnon", musica: "Freio da blazer" },
      { artista: "KayBlack", musica: "Licor 43" },
      { artista: "WIU", musica: "Coração de Gelo" },
      { artista: "Matuê", musica: "Kenny G" },
      { artista: "Teto", musica: "Fim de Semana no Rio" },
      { artista: "Japa", musica: "Dejavu" },
      { artista: "Yunk Vino", musica: "Leans pt.2" },
      { artista: "Sidoka", musica: "Louis V menina linda" },
      { artista: "Ngc Daddy", musica: "Glockada" },
      { artista: "Dfideliz", musica: "Confissões pt1" },
      { artista: "Jovem Dex", musica: "Nav" },
      { artista: "Kawe", musica: "Jordan" },
      { artista: "MD Chefe", musica: "Tiffany" },
      { artista: "Borges", musica: "AK do flamengo" }
    ]
  }
};

function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function createEl(tag, className, html) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

function renderHome() {
  const lista = Object.values(itens);
  const destaques = lista.filter(i => i.destaque);
  renderCarousel(destaques);
  renderCards(lista);
}

function renderCarousel(itemsArr) {
  const indicators = document.getElementById("carouselIndicators");
  const inner = document.getElementById("carouselInner");
  if (!indicators || !inner) return;
  indicators.innerHTML = "";
  inner.innerHTML = "";

  itemsArr.forEach((item, i) => {
    const li = createEl("button");
    li.type = "button";
    li.dataset.bsTarget = "#destaquesCarousel";
    li.dataset.bsSlideTo = i;
    if (i === 0) li.classList.add("active");
    indicators.appendChild(li);

    const slide = createEl("div", `carousel-item ${i === 0 ? "active" : ""}`);
    const img = createEl("img", "d-block w-100");
    img.src = item.imagem;
    img.alt = item.imagemAlt;
    img.style.maxHeight = "420px";
    img.style.objectFit = "cover";
    img.onerror = function(){ this.onerror=null; this.src = FALLBACK_IMG; };

    const caption = createEl(
      "div",
      "carousel-caption d-none d-md-block bg-blur",
      `<h5>${item.titulo}</h5><p>${item.resumo}</p><a href="detalhes.html?id=${item.id}" class="btn btn-sm btn-light">Ver detalhes</a>`
    );

    slide.appendChild(img);
    slide.appendChild(caption);
    inner.appendChild(slide);
  });
}

function renderCards(itemsArr) {
  const container = document.getElementById("cardsContainer");
  if (!container) return;
  container.innerHTML = "";

  itemsArr.forEach(item => {
    const col = createEl("div", "col-12 col-sm-6 col-lg-4");
    const card = createEl("div", "card bg-dark text-white h-100 p-3");

    const imgLink = createEl("a", "d-block text-decoration-none");
    imgLink.href = `detalhes.html?id=${item.id}`;

    const img = createEl("img", "img-cover mb-3");
    img.src = item.imagem;
    img.alt = item.imagemAlt;
    img.onerror = function(){ this.onerror=null; this.src = FALLBACK_IMG; };
    imgLink.appendChild(img);
    card.appendChild(imgLink);

    const title = createEl(
      "h3",
      "h5 mt-2",
      `<a class="text-white text-decoration-none" href="detalhes.html?id=${item.id}">${item.titulo}</a>`
    );

    const desc = createEl("p", "", item.descricao);

    card.appendChild(title);
    card.appendChild(desc);
    col.appendChild(card);
    container.appendChild(col);
  });
}

function renderDetalhes() {
  const id = getQueryId();
  const item = itens[id];
  const titulo = document.getElementById("titulo-item");
  const infoC = document.getElementById("info-container");

  if (!item || !infoC) return;
  if (titulo) titulo.textContent = item.titulo;

  const col1 = createEl("div", "col-12");
  const card1 = createEl("div", "card bg-dark text-white p-4");

  const img = createEl("img", "img-cover mb-3");
  img.src = item.imagem;
  img.alt = item.imagemAlt;
  img.onerror = function(){ this.onerror=null; this.src = FALLBACK_IMG; };
  card1.appendChild(img);

  const desc = createEl("p", "", item.descricao);
  card1.appendChild(desc);

  if (item.id === "origem-trap") {
    const extra = createEl(
      "p",
      "mt-3",
      `Ganhou popularidade nos Estados Unidos em meados de 2007 com o surgimento de vários grupos de rap e rappers como Gucci Mane, OJ da Juiceman e produtores como Drumma Boy, Shawty Redd e DJ Zaytoven, Logo depois surgiu Lex Luger com a produtora 808 Mafia, ganhando sucesso internacional em 2016. O trap da música eletrônica se originou ao movimento hip-hop que inspirou vários DJ de electronic dance music. O estilo é caracterizado por ritmo calmo há agressivo e som que incorpora a caixa de ritmos Roland TR-808, bumbos sub-baixo, em tempo duplo, em tempo triplo e outros tempos mais rápidos de divisão chimbais, sintetizadores em camadas, e cordas cinematográficas, sendo estes elementos muito utilizados no house music e suas vertentes, O trap chegou finalmente ao rap brasileiro em 2014, através do álbum Cores & Valores do grupo Racionais MC's; o álbum foi finalizado no Quad Recording Studios NYC (o mesmo utilizado por artistas como 2Pac e Biggie) e trouxe não só batidas diferentes, como letras que abordavam temas como: ostentação, o bem estar, a recuperação dos principais membros do grupo, e até amor. O novo estilo não agradou muitos fãs antigos do grupo, acostumados com Boom Bap e letras cruas; no entanto, isso não impediu o crescimento do subgênero no país, já que a partir deste ponto de partida, artistas como: Naio Rezende, Jé Santiago, Dfideliz, Matuê e Raffa Moreira dentre outros começaram a incorporar elementos do gênero em suas músicas. A fusão do trap com influências do funk carioca, do pop e da música eletrônica brasileira resultou em um estilo autêntico e inovador, No Brasil, nomes como: Matuê, Leozin, Big Rush, Teto, Veigh, Xamã etc. Contribuíram com a adaptação do trap ao contexto brasileiro. A popularidade de músicas como De Peça em Peça e Foi Bom deram início à uma era de ouro para o gênero no país. À medida que o Trap foi crescendo no Brasil, foram surgindo outros nomes como: Sidoka, Massaru, PK, Djonga, foram trazendo uma variedade de estilos e abordagens. Em junho deste ano, conseguiu um feito inédito: desbancar pela primeira vez o sertanejo como ritmo mais ouvido na playlist Top Brasil da plataforma Spotify, que reúne as principais músicas escutadas no país... E você pode conferir algumas do estilo trap na aba <a href="detalhes.html?id=artistas-alta" class="text-warning fw-bold text-decoration-underline">Artistas em Destaque</a>.`
    );
    card1.appendChild(extra);
  }

  if (item.midiaEmbed) {
    item.midiaEmbed.forEach(a => {
      const alb = createEl("iframe", "w-100 rounded mb-3");
      alb.src = a.album;
      alb.height = "352";
      alb.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      alb.frameBorder = "0";
      card1.appendChild(alb);

      a.faixas.forEach(fx => {
        const f = createEl("iframe", "w-100 rounded mb-3 musica");
        f.src = fx;
        f.height = "152";
        f.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        f.frameBorder = "0";
        card1.appendChild(f);
      });
    });
  }

  if (item.topArtistas) {
    const ol = createEl("ol", "list-group");
    item.topArtistas.forEach((obj, index) => {
      const li = createEl(
        "li",
        "list-group-item bg-transparent text-white d-flex justify-content-between align-items-center"
      );
      li.innerHTML = `<span>${index + 1}. ${obj.artista}</span><span>🎵 ${obj.musica}</span>`;
      ol.appendChild(li);
    });
    card1.appendChild(createEl("h3", "h5 mt-4", "🎧 Top 20 Artistas de Trap do Brasil"));
    card1.appendChild(ol);
  }

  col1.appendChild(card1);
  infoC.appendChild(col1);
}

function mergeById(baseArr, apiArr){
  const map = new Map();
  baseArr.forEach(i => map.set(i.id, i));
  apiArr.forEach(i => { if (!map.has(i.id)) map.set(i.id, i); });
  return Array.from(map.values());
}

async function renderHomeCombined(){
  const locais = Object.values(itens);
  try{
    const api = await fetchAll();
    const lista = mergeById(locais, Array.isArray(api) ? api : []);
    const destaques = lista.filter(i => i && i.destaque);
    renderCarousel(destaques);
    renderCards(lista);
  }catch{
    renderCarousel(locais.filter(i=>i.destaque));
    renderCards(locais);
  }
}

async function renderDetalhesHybrid(){
  const id = getQueryId();
  if(!id) return;
  const local = itens[id];
  if (local) { renderDetalhes(); return; }
  try{
    const item = await fetchById(id);
    const titulo = document.getElementById("titulo-item");
    const infoC = document.getElementById("info-container");
    if (!item || !infoC) return;
    if (titulo) titulo.textContent = item.titulo || '(sem título)';
    infoC.innerHTML = "";
    const col1 = createEl("div", "col-12");
    const card1 = createEl("div", "card bg-dark text-white p-4");
    const img = createEl("img", "img-cover mb-3");
    img.src = item.imagem || FALLBACK_IMG;
    img.alt = item.imagemAlt || "";
    img.onerror = function(){ this.onerror=null; this.src = FALLBACK_IMG; };
    card1.appendChild(img);
    const pDesc = createEl("p", "", item.descricao || "");
    card1.appendChild(pDesc);
    col1.appendChild(card1);
    infoC.appendChild(col1);
  }catch{}
}

document.addEventListener("DOMContentLoaded", async () => {
  if (document.getElementById("cardsContainer")) await renderHomeCombined();
  if (document.getElementById("info-container")) await renderDetalhesHybrid();
});