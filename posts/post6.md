# Git, GitHub e VSCode: Ferramentas Essenciais para Front-End

Se você está começando no desenvolvimento front-end, precisa dominar duas ferramentas fundamentais: Git/GitHub para controle de versão e VSCode para escrever código. Este guia vai te mostrar tudo que você precisa saber para começar.

## Por Que Essas Ferramentas São Essenciais?

### Git e GitHub

Imagine que você está desenvolvendo um site. Faz mudanças, algo quebra, e você quer voltar para versão que funcionava. Ou você trabalha em equipe e precisa que todos editem o mesmo código sem conflitos. **Git resolve isso**.

GitHub é onde você hospeda seus projetos Git na nuvem. É o portfólio público de todo desenvolvedor. Empresas olham seu GitHub antes de te contratar.

### VSCode

Você pode escrever código em qualquer editor de texto. Mas VSCode tem recursos que aumentam sua produtividade em 10x: autocomplete inteligente, preview de cores, integração com Git, extensões poderosas, terminal integrado.

É grátis, rápido, e usado por milhões de desenvolvedores no mundo todo.

## História das Ferramentas

### Git: Criado por Linus Torvalds (2005)

Linus Torvalds, o criador do Linux, estava frustrado com ferramentas de controle de versão existentes. Em 2005, ele criou Git em questão de semanas.

Git é **distribuído**: cada desenvolvedor tem cópia completa do histórico do projeto. É **rápido**: operações são locais, não precisam de servidor. É **confiável**: praticamente impossível perder código.

Hoje, Git é padrão da indústria. Praticamente todo projeto de software usa Git.

### GitHub: Fundado em 2008

Tom Preston-Werner, Chris Wanstrath e PJ Hyett criaram GitHub para facilitar colaboração em projetos Git. Era difícil compartilhar código Git antes.

GitHub adicionou interface visual, pull requests, issues, wiki. Transformou Git em plataforma social para desenvolvedores.

Microsoft comprou GitHub em 2018 por 7.5 bilhões de dólares. Hoje tem mais de 100 milhões de desenvolvedores.

### VSCode: Lançado pela Microsoft (2015)

Microsoft lançou Visual Studio Code em 2015 como editor open source. Baseado em Electron (JavaScript + HTML + CSS), roda em Windows, Mac e Linux.

Cresceu rapidamente. Em 2021, já era o editor mais usado do mundo, ultrapassando Sublime Text, Atom, Vim.

**Por que?** Extensões, performance, integração com terminal e Git, IntelliSense (autocomplete inteligente), gratuito.

## Git: Fundamentos

### O Que É Git?

Git é sistema de controle de versão. Ele salva "snapshots" do seu projeto ao longo do tempo. Você pode:

- Ver histórico de mudanças
- Voltar para qualquer versão anterior
- Criar branches (ramificações) para testar coisas
- Mesclar trabalho de várias pessoas

### Conceitos Básicos

**Repository (repositório)**: Pasta do projeto versionada pelo Git

**Commit**: Snapshot do projeto num momento específico. Como "salvar versão".

**Branch**: Linha independente de desenvolvimento. Branch principal é geralmente `main` ou `master`.

**Remote**: Versão do repositório em servidor (GitHub, GitLab).

**Clone**: Copiar repositório remoto para seu computador.

**Push**: Enviar commits locais para remoto.

**Pull**: Baixar commits do remoto para local.

### Estados dos Arquivos

Git tem três estados para arquivos:

1. **Working Directory**: Arquivos que você está editando
2. **Staging Area**: Arquivos marcados para próximo commit
3. **Repository**: Commits salvos permanentemente

Fluxo: Edita arquivo → `git add` (staging) → `git commit` (repository)

## GitHub: Fundamentos

### O Que É GitHub?

GitHub é plataforma web que hospeda repositórios Git. Adiciona recursos de colaboração:

- Interface visual para navegar código
- Pull Requests para revisar código antes de mesclar
- Issues para rastrear bugs e tarefas
- Actions para CI/CD (automação)
- GitHub Pages para hospedar sites estáticos
- Discussions, Wiki, Projects

### Fluxo Básico GitHub

1. Cria repositório no GitHub
2. Clona para seu computador
3. Faz mudanças localmente
4. Commita mudanças
5. Faz push para GitHub
6. Outras pessoas podem ver, clonar, contribuir

### Perfil GitHub como Portfólio

Seu perfil GitHub mostra:

- Projetos públicos que você criou
- Contribuições em projetos open source
- Frequência de commits (gráfico de contribuições)
- Linguagens que você usa
- READMEs dos seus projetos

Recrutadores olham isso. Um GitHub ativo impressiona.

## VSCode: Fundamentos

### Interface do VSCode

**Explorer**: Árvore de arquivos do projeto (lado esquerdo)

**Editor**: Onde você escreve código (centro)

**Terminal**: Linha de comando integrada (parte inferior)

**Extensions**: Instalar plugins (ícone de quadrados no lado esquerdo)

**Source Control**: Git integrado (ícone de branch)

**Search**: Buscar em todos arquivos do projeto

**Debug**: Debugger integrado para JavaScript

### Atalhos Essenciais

**Ctrl + P** (Cmd + P no Mac): Abrir arquivo rapidamente

**Ctrl + Shift + P**: Paleta de comandos (acessa tudo)

**Ctrl + B**: Esconder/mostrar sidebar

**Ctrl + J**: Esconder/mostrar terminal

**Ctrl + `**: Abrir terminal

**Ctrl + /**: Comentar/descomentar linha

**Alt + Cima/Baixo**: Mover linha para cima/baixo

**Ctrl + D**: Selecionar próxima ocorrência da palavra

**Shift + Alt + Cima/Baixo**: Duplicar linha

### Extensões Essenciais para Front-End

**Live Server**: Preview automático de HTML no navegador

**Prettier**: Formata código automaticamente

**ESLint**: Encontra erros no JavaScript

**Auto Rename Tag**: Renomeia tag HTML de abertura e fechamento junto

**Bracket Pair Colorizer**: Colore parênteses/colchetes correspondentes

**GitLens**: Git superpoderoso no VSCode

**Path Intellisense**: Autocomplete de caminhos de arquivo

**CSS Peek**: Vai direto para definição CSS ao clicar em classe

## Práticas Essenciais

### Git Best Practices

**1. Commits frequentes e pequenos**

Não espere fazer mudanças gigantes para commitar. Commite cada funcionalidade pequena. Se algo quebra, é mais fácil achar onde.

```
❌ Ruim: "mudanças gerais no site"
✅ Bom: "adiciona botão de contato no header"
```

**2. Mensagens de commit claras**

Use imperativo: "adiciona", "corrige", "remove", não "adicionado", "adicionando".

```
✅ add contact form validation
✅ fix mobile menu overflow
✅ remove unused CSS classes
```

**3. Use branches**

Nunca trabalhe direto na `main`. Crie branch para cada feature ou correção:

```bash
git checkout -b feature/novo-footer
# trabalha no footer
git commit -m "add new footer design"
git checkout main
git merge feature/novo-footer
```

**4. Pull antes de push**

Sempre faça `git pull` antes de `git push` para evitar conflitos.

**5. .gitignore**

Crie arquivo `.gitignore` para não versionar arquivos desnecessários:

```
node_modules/
.env
.DS_Store
*.log
```

### VSCode Best Practices

**1. Use Workspace**

Abra pasta do projeto, não arquivos individuais. VSCode funciona melhor com contexto completo.

**2. Configure Prettier**

Instale Prettier, configure para formatar ao salvar:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

**3. Use Terminal Integrado**

Não precisa sair do VSCode. Terminal está ali embaixo. Rode comandos Git, npm, etc.

**4. Snippets**

Crie snippets para código repetitivo. Exemplo: digita `html5`, aperta Tab, gera boilerplate HTML completo.

**5. Split Editor**

Trabalhe com múltiplos arquivos lado a lado. Arraste arquivo para lado direito do editor.

## Exercícios Básicos

### Exercício 1: Primeiro Repositório Git

**Objetivo**: Criar repositório local e fazer commits

```bash
# Cria pasta do projeto
mkdir meu-primeiro-projeto
cd meu-primeiro-projeto

# Inicializa Git
git init

# Cria arquivo HTML
echo "<!DOCTYPE html><html><body><h1>Olá Git</h1></body></html>" > index.html

# Verifica status
git status

# Adiciona para staging
git add index.html

# Faz commit
git commit -m "add initial HTML file"

# Vê histórico
git log
```

**Resultado esperado**: Você tem repositório Git com 1 commit.

### Exercício 2: Conectar com GitHub

**Objetivo**: Colocar projeto local no GitHub

```bash
# 1. Cria repositório no GitHub (via web interface)
# 2. Copia URL do repositório

# Adiciona remote
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git

# Envia para GitHub
git push -u origin main

# Verifica no navegador que código está lá
```

**Resultado esperado**: Seu código está no GitHub, visível publicamente.

### Exercício 3: Clone e Modificação

**Objetivo**: Clonar repositório, modificar, fazer push

```bash
# Clone repositório (use qualquer repo público seu)
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

# Modifica arquivo
echo "<p>Nova linha</p>" >> index.html

# Verifica mudança
git diff

# Adiciona e commita
git add index.html
git commit -m "add new paragraph"

# Envia para GitHub
git push
```

**Resultado esperado**: Mudança aparece no GitHub.

### Exercício 4: Branches

**Objetivo**: Criar branch, fazer mudanças, mesclar

```bash
# Cria e muda para nova branch
git checkout -b melhoria-design

# Modifica arquivo
echo "<style>body { background: lightblue; }</style>" >> index.html

# Commita na branch
git add index.html
git commit -m "add background color"

# Volta para main
git checkout main

# Mescla branch
git merge melhoria-design

# Push
git push
```

**Resultado esperado**: Mudanças da branch estão na main.

### Exercício 5: VSCode + Git Integration

**Objetivo**: Usar Git dentro do VSCode

1. Abre projeto no VSCode: `code .`
2. Modifica `index.html`
3. Vai em Source Control (ícone de branch no lado esquerdo)
4. Vê arquivos modificados
5. Clica em + ao lado do arquivo (staging)
6. Escreve mensagem de commit no campo acima
7. Clica em ✓ (commit)
8. Clica em ... (três pontos) → Push

**Resultado esperado**: Commit feito sem usar terminal.

### Exercício 6: Desfazendo Mudanças

**Objetivo**: Aprender a voltar atrás

```bash
# Modifica arquivo (erro de propósito)
echo "ERRO PROPOSITAL" >> index.html

# Desfaz mudanças não commitadas
git checkout -- index.html

# Ou, se já fez staging:
git add index.html
git reset HEAD index.html
git checkout -- index.html
```

**Resultado esperado**: Arquivo volta ao estado anterior.

### Exercício 7: VSCode Snippets e Live Server

**Objetivo**: Usar ferramentas de produtividade VSCode

1. Instala extensão Live Server
2. Cria `index.html` vazio
3. Digita `!` e aperta Tab → HTML5 boilerplate aparece
4. Clica com botão direito no arquivo → "Open with Live Server"
5. Navegador abre automaticamente
6. Modifica HTML, salva
7. Navegador atualiza automaticamente

**Resultado esperado**: Workflow rápido de desenvolvimento.

### Exercício 8: .gitignore

**Objetivo**: Ignorar arquivos desnecessários

```bash
# Cria arquivo que não deve ser versionado
echo "senha_secreta=12345" > .env

# Cria .gitignore
echo ".env" > .gitignore

# Verifica status
git status
# .env não aparece

# Adiciona .gitignore
git add .gitignore
git commit -m "add gitignore"
```

**Resultado esperado**: Arquivo sensível não vai para Git.

## Workflow Completo: Projeto Real

Vamos simular desenvolvimento de landing page do zero:

### Passo 1: Setup

```bash
# Cria pasta
mkdir landing-page-produto
cd landing-page-produto

# Inicializa Git
git init

# Abre no VSCode
code .
```

### Passo 2: Estrutura Básica

Cria arquivos no VSCode:

**index.html**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Produto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Landing Page</h1>
    <script src="script.js"></script>
</body>
</html>
```

**style.css**
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}
```

**script.js**
```javascript
console.log('Site carregado');
```

### Passo 3: Primeiro Commit

```bash
git add .
git commit -m "initial project setup"
```

### Passo 4: Cria Repositório no GitHub

1. Vai no GitHub → New Repository
2. Nome: `landing-page-produto`
3. Create repository
4. Copia comandos de conexão:

```bash
git remote add origin https://github.com/SEU-USUARIO/landing-page-produto.git
git push -u origin main
```

### Passo 5: Desenvolve Header

Cria branch:

```bash
git checkout -b feature/header
```

Edita `index.html`, adiciona header:

```html
<header>
    <nav>
        <h1>Logo</h1>
        <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
    </nav>
</header>
```

Commita:

```bash
git add index.html
git commit -m "add header navigation"
```

### Passo 6: Mescla na Main

```bash
git checkout main
git merge feature/header
git push
```

### Passo 7: Repete Processo para Footer

```bash
git checkout -b feature/footer
# ... desenvolve footer
git add .
git commit -m "add footer section"
git checkout main
git merge feature/footer
git push
```

### Passo 8: Deploy no GitHub Pages

No GitHub, vai em Settings → Pages → Source: main branch → Save

Site fica disponível em: `https://SEU-USUARIO.github.io/landing-page-produto`

## Comandos Git - Resumo

### Configuração Inicial

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Comandos Básicos

```bash
git init                    # Inicia repositório
git status                  # Vê status dos arquivos
git add arquivo.txt         # Adiciona arquivo ao staging
git add .                   # Adiciona todos arquivos
git commit -m "mensagem"    # Cria commit
git log                     # Vê histórico de commits
git diff                    # Vê mudanças não commitadas
```

### Branches

```bash
git branch                  # Lista branches
git branch nome-branch      # Cria branch
git checkout nome-branch    # Muda para branch
git checkout -b nova-branch # Cria e muda para branch
git merge outra-branch      # Mescla branch na atual
git branch -d nome-branch   # Deleta branch
```

### Remoto (GitHub)

```bash
git clone URL               # Clona repositório remoto
git remote add origin URL   # Adiciona remote
git push origin main        # Envia para GitHub
git pull origin main        # Baixa do GitHub
git push -u origin main     # Primeira vez (configura upstream)
```

### Desfazendo Coisas

```bash
git checkout -- arquivo     # Desfaz mudanças não staged
git reset HEAD arquivo      # Remove do staging
git revert commit-hash      # Reverte commit (cria novo)
git reset --hard HEAD~1     # Volta 1 commit (CUIDADO)
```

## Checklist: Dominando Git, GitHub e VSCode

Use este checklist para verificar seu progresso:

### Git Básico

- [ ] Instalei Git no meu computador
- [ ] Configurei nome e email globalmente
- [ ] Entendo o que é repositório, commit, branch
- [ ] Sei usar `git init`, `git add`, `git commit`
- [ ] Sei ver histórico com `git log`
- [ ] Sei verificar status com `git status`
- [ ] Sei criar e trocar de branches
- [ ] Sei mesclar branches com `git merge`
- [ ] Sei desfazer mudanças não commitadas

### GitHub

- [ ] Criei conta no GitHub
- [ ] Criei meu primeiro repositório no GitHub
- [ ] Conectei repositório local com GitHub (`git remote add`)
- [ ] Fiz push de código para GitHub
- [ ] Sei clonar repositórios de outras pessoas
- [ ] Configurei foto e bio no perfil GitHub
- [ ] Criei README.md em pelo menos um projeto
- [ ] Sei fazer fork de projetos

### VSCode

- [ ] Instalei VSCode
- [ ] Configurei aparência (tema, fonte) do meu gosto
- [ ] Instalei extensões: Live Server, Prettier, ESLint
- [ ] Sei abrir projetos (pasta inteira, não arquivos soltos)
- [ ] Uso terminal integrado regularmente
- [ ] Sei usar Git dentro do VSCode (Source Control)
- [ ] Uso atalhos de teclado básicos (Ctrl+P, Ctrl+Shift+P)
- [ ] Sei usar split editor para ver múltiplos arquivos
- [ ] Configurei format on save com Prettier

### Workflow Completo

- [ ] Criei projeto front-end do zero com Git
- [ ] Fiz pelo menos 10 commits em projeto pessoal
- [ ] Usei branches para desenvolver features
- [ ] Coloquei projeto no GitHub
- [ ] Fiz deploy de site no GitHub Pages
- [ ] Colaborei com outra pessoa (pull request ou merge)
- [ ] Criei .gitignore para projeto
- [ ] Resolvi conflito de merge (mesmo que simples)

### Práticas Avançadas

- [ ] Escrevo mensagens de commit claras e descritivas
- [ ] Commito frequentemente (mudanças pequenas)
- [ ] Sempre faço pull antes de push
- [ ] Uso branches para tudo, não trabalho direto na main
- [ ] Reviso diff antes de commitar
- [ ] Mantenho README atualizado nos projetos
- [ ] Tenho pelo menos 3 projetos públicos no GitHub

## Recursos para Continuar Aprendendo

### Documentação Oficial

- **Git**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com/
- **VSCode Docs**: https://code.visualstudio.com/docs

### Tutoriais Interativos

- **Learn Git Branching**: https://learngitbranching.js.org/ (EXCELENTE para visualizar branches)
- **GitHub Learning Lab**: Tutoriais práticos no próprio GitHub
- **VSCode Can Do That?**: Workshop sobre recursos avançados

### Cheat Sheets

- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **VSCode Keyboard Shortcuts**: Ctrl+K Ctrl+S dentro do VSCode

### Vídeos

- Busque "Git Tutorial for Beginners" no YouTube
- Canais como Traversy Media, Fireship, The Net Ninja têm ótimos tutoriais

## Conclusão

Git, GitHub e VSCode são as ferramentas mais importantes para qualquer desenvolvedor front-end moderno. Elas parecem complexas no início, mas com prática diária, se tornam segunda natureza.

**Git** te dá superpoderes: trabalhar sem medo de quebrar código, experimentar em branches, voltar no tempo.

**GitHub** é seu portfólio público, seu backup na nuvem, sua rede social profissional.

**VSCode** aumenta sua velocidade de desenvolvimento com autocomplete, extensões, integração total com Git.

Dedique tempo para dominar essas ferramentas. Pratique os exercícios deste post. Use o checklist para medir seu progresso.

Em poucas semanas, você estará usando Git e VSCode naturalmente, sem pensar. E seu GitHub estará cheio de projetos verdes (commits frequentes).

Bom código!