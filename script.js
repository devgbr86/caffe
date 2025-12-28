// ===================================
// CONFIGURAÇÃO - ADICIONE SEUS POSTS AQUI
// ===================================
const POSTS = [
  "post6.md",
  "post5.md",
  "post4.md",
  "post3.md",
  "post2.md",
  "post1.md"
];

// ===================================
// CÓDIGO DO BLOG
// ===================================

async function fetchMD(file) {
  try {
    // Caminho relativo correto para GitHub Pages
    const response = await fetch(`posts/${file}`);
    if (!response.ok) throw new Error('Post não encontrado');
    return await response.text();
  } catch (error) {
    console.error(`Erro ao carregar ${file}:`, error);
    return `# Erro ao carregar post\n\nVerifique se o arquivo ${file} existe na pasta /posts/`;
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

// ----- POST -----
if (file) {
  show(postView);

  fetchMD(file).then(md => {
    const html = marked.parse(md);
    document.getElementById("content").innerHTML = DOMPurify.sanitize(html);
  });

// ----- SEARCH -----
} else if (search !== null) {
  show(searchView);

  const input = document.getElementById("q");
  const results = document.getElementById("results");
  input.value = search;

  let data = [];

  Promise.all(
    POSTS.map(async f => {
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
      results.innerHTML = '<li style="color: #999;">...</li>';
      return;
    }

    const matches = data.filter(p => p.text.includes(q));

    if (matches.length === 0) {
      results.innerHTML = '<li style="color: #999;">Nenhum resultado encontrado.</li>';
      return;
    }

    matches.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="?file=${encodeURIComponent(p.file)}">${p.title}</a>`;
      results.appendChild(li);
    });
  }

// ----- LISTA -----
} else {
  show(listView);

  const ul = document.getElementById("posts");

  Promise.all(
    POSTS.map(async f => {
      const md = await fetchMD(f);
      const title = md.match(/^#\s(.+)/m)?.[1] || f.replace('.md', '');
      return { file: f, title: title };
    })
  ).then(posts => {
    ul.innerHTML = "";
    posts.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="?file=${encodeURIComponent(p.file)}">${p.title}</a>`;
      ul.appendChild(li);
    });
  });
}