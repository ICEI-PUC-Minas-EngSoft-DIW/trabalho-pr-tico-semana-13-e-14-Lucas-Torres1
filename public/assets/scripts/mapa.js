mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXN0b3JyZXMxIiwiYSI6ImNtaTJmaDB2ZzE3dXgybHB3bjB6bnF0ZG0ifQ.Lki7_9GegxTpKFQkOOJUaw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [-46.633309, -23.55052],
  zoom: 11
});

let eventos = [];
let ultimoId = 0;

async function buscarEventos() {
  try {
    const resposta = await fetch('http://localhost:3000/eventos');
    if (!resposta.ok) {
      throw new Error('Erro ao buscar eventos: ' + resposta.status);
    }
    const eventosApi = await resposta.json();
    eventos = eventosApi || [];
    ultimoId = eventos.length ? Math.max(...eventos.map(e => e.id || 0)) : 0;
    console.log('Eventos carregados da API:', eventos);
    renderizarMarcadores();
    renderizarLista();
  } catch (erro) {
    console.error(erro);
    alert('Não foi possível carregar os eventos. Verifique o JSON Server.');
  }
}

document.addEventListener('DOMContentLoaded', buscarEventos);

const listaEventos = document.getElementById('listaEventos');
const form = document.getElementById('eventoForm');
const btnLimpar = document.getElementById('limparEventos');

function limparMarcadoresDoMapa() {
  const markers = document.querySelectorAll('.mapboxgl-marker');
  markers.forEach(m => m.remove());
}

function renderizarMarcadores() {
  limparMarcadoresDoMapa();

  eventos.forEach(evento => {
    if (evento.longitude == null || evento.latitude == null) return;

    const popupHtml = `
      <strong>${evento.nome}</strong><br>
      ${evento.artista || ''}<br>
      ${evento.local || ''}<br>
      ${evento.data ? new Date(evento.data).toLocaleDateString('pt-BR') : ''}<br>
      <span style="font-size: 0.8rem; color: #1DB954;">${evento.genero || ''}</span>
    `;

    new mapboxgl.Marker()
      .setLngLat([evento.longitude, evento.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(popupHtml))
      .addTo(map);
  });
}

function renderizarLista() {
  listaEventos.innerHTML = '';

  if (!eventos.length) {
    listaEventos.innerHTML = '<li class="list-group-item bg-dark text-light">Nenhum evento cadastrado.</li>';
    return;
  }

  eventos.forEach(evento => {
    const li = document.createElement('li');
    li.className = 'list-group-item bg-dark text-light d-flex justify-content-between align-items-start';

    li.innerHTML = `
      <div>
        <div class="fw-bold">${evento.nome}
          <span class="badge badge-genre">${evento.genero || ''}</span>
        </div>
        <small>${evento.artista || ''} • ${evento.local || ''}</small><br>
        <small>${evento.data ? new Date(evento.data).toLocaleDateString('pt-BR') : ''}</small>
      </div>
      <div>
        <button class="btn btn-sm btn-outline-info me-2" data-id="${evento.id}" data-acao="focar">Ver no mapa</button>
        <button class="btn btn-sm btn-outline-danger" data-id="${evento.id}" data-acao="excluir">Excluir</button>
      </div>
    `;

    listaEventos.appendChild(li);
  });
}

listaEventos.addEventListener('click', (e) => {
  const botao = e.target.closest('button');
  if (!botao) return;

  const id = Number(botao.dataset.id);
  const acao = botao.dataset.acao;
  const evento = eventos.find(ev => ev.id === id);
  if (!evento) return;

  if (acao === 'focar') {
    map.flyTo({
      center: [evento.longitude, evento.latitude],
      zoom: 14,
      essential: true
    });
  }

  if (acao === 'excluir') {
    if (confirm(`Tem certeza que deseja excluir o evento "${evento.nome}"?`)) {
      eventos = eventos.filter(ev => ev.id !== id);
      renderizarMarcadores();
      renderizarLista();
    }
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const artista = document.getElementById('artista').value.trim();
  const data = document.getElementById('data').value;
  const genero = document.getElementById('genero').value.trim();
  const latitude = parseFloat(document.getElementById('latitude').value);
  const longitude = parseFloat(document.getElementById('longitude').value);
  const local = document.getElementById('local').value.trim();

  if (!nome || !artista || !data || !genero || isNaN(latitude) || isNaN(longitude) || !local) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

  ultimoId++;
  const novoEvento = {
    id: ultimoId,
    nome,
    artista,
    data,
    genero,
    latitude,
    longitude,
    local
  };

  eventos.push(novoEvento);

  renderizarMarcadores();
  renderizarLista();

  form.reset();
});

btnLimpar.addEventListener('click', () => {
  if (confirm('Deseja remover todos os eventos da tela?')) {
    eventos = [];
    renderizarMarcadores();
    renderizarLista();
  }
});
