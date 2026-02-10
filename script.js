// ===================================
// CONFIGURAÇÃO - ADICIONE SUAS PÁGINAS WIKI AQUI
// ===================================

// POSTS QUE APARECEM NA HOME (escolha apenas 5)
const HOME_POSTS = [
  "intro.md",
  "arabica/especie-arabica.md",
  "post3.md",
  "post4.md",
  "post5.md"
];

// TODOS OS POSTS (para busca e navegação completa)
const ALL_SECTIONS = [
  "intro.md",
  "arabica/especie-arabica.md",
  "teste.md",
  "post4.md",
  "post5.md",
  "post6.md",
  "post7.md",
  "post8.md",
  "post9.md",
  "post10.md"
];

// ===================================
// CÓDIGO DA WIKI
// ===================================

async function fetchMD(file) {
  try {
    const response = await fetch(`sections/${file}`);
    if (!response.ok) throw new Error('Página não encontrada');
    return await response.text();
  } catch (error) {
    console.error(`Erro ao carregar ${file}:`, error);
    return `# Erro ao carregar página\n\nVerifique se o arquivo ${file} existe na pasta /sections/`;
  }
}

const params = new URLSearchParams(location.search);
const file = params.get("file");
const search = params.get("search");

const listView = document.getElementById("list-view");
const postView = document.getElementById("post-view");
const searchView = document.getElementById("search-view");

function show(view) {
  [listView, postView, searchView].forEach(v => v.style.display = "none");
  view.style.display = "block";
}

// ----- VISUALIZAÇÃO DE PÁGINA -----
if (file) {
  show(postView);

  fetchMD(file).then(md => {
    const html = marked.parse(md);
    document.getElementById("content").innerHTML = DOMPurify.sanitize(html);
  });

// ----- BUSCA -----
} else if (search !== null) {
  show(searchView);

  const input = document.getElementById("q");
  const results = document.getElementById("results");
  input.value = search;

  let data = [];

  // Usa ALL_SECTIONS para indexar TUDO na busca
  Promise.all(
    ALL_SECTIONS.map(async f => {
      const md = await fetchMD(f);
      const title = md.match(/^#\s(.+)/m)?.[1] || f.replace('.md', '');
      return { 
        file: f, 
        title: title,
        text: md.toLowerCase() 
      };
    })
  ).then(d => {
    data = d;
    doSearch();
  });

  input.addEventListener("input", () => {
    const searchValue = input.value;
    history.replaceState(null, "", `?search=${encodeURIComponent(searchValue)}`);
    doSearch();
  });

  function doSearch() {
    const q = input.value.toLowerCase().trim();
    results.innerHTML = "";

    if (!q) {
      results.innerHTML = '<li style="color: #999;">Digite para buscar marcas, métodos, origens...</li>';
      return;
    }

    const matches = data.filter(p => p.text.includes(q));

    if (matches.length === 0) {
      results.innerHTML = '<li style="color: #999;">Nenhum resultado encontrado. Tente termos como: Pilão, V60, Arábica, Torrefação.</li>';
      return;
    }

    matches.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="?file=${encodeURIComponent(p.file)}">${p.title}</a>`;
      results.appendChild(li);
    });
  }

// ----- LISTA DE PÁGINAS (HOME) -----
} else {
  show(listView);

  const ul = document.getElementById("posts");

  // Usa HOME_POSTS para mostrar apenas 5 selecionados
  Promise.all(
    HOME_POSTS.map(async f => {
      const md = await fetchMD(f);
      const title = md.match(/^#\s(.+)/m)?.[1] || f.replace('.md', '');
      return { file: f, title: title };
    })
  ).then(sections => {
    ul.innerHTML = "";
    sections.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="?file=${encodeURIComponent(p.file)}">${p.title}</a>`;
      ul.appendChild(li);
    });
  });
}