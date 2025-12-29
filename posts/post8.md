# Como Estruturar Melhor as Pastas da Sua Landing Page

Quando você está criando uma landing page estática com HTML, CSS e JavaScript puro, a organização dos arquivos pode parecer um detalhe menor. Mas acredite: uma estrutura bem pensada faz toda a diferença na manutenção, escalabilidade e até no tempo de desenvolvimento.

Neste artigo, vou compartilhar uma estrutura simples, técnica e prática que uso nos meus projetos. É aquela abordagem que funciona tanto para uma landing page de produto quanto para um portfólio pessoal.

## A Estrutura Base

Aqui está a organização que recomendo para landing pages estáticas:

```
landing-page/
├── assets/
│   ├── icons/
│   ├── img/
│   └── css/
│       └── style.css
├── js/
│   ├── main.js
│   └── modules/
│       ├── scroll.js
│       ├── form.js
│       └── animations.js
└── index.html
```

Vamos destrinchar cada parte e entender o porquê dessa organização.

## A Pasta Assets: Centralizando Recursos Estáticos

A pasta `assets/` é o coração dos seus recursos estáticos. A ideia aqui é simples: tudo que não é código executável fica centralizado.

### Por que separar icons de img?

```
assets/
├── icons/
│   ├── logo.svg
│   ├── arrow-down.svg
│   └── social/
│       ├── github.svg
│       └── linkedin.svg
└── img/
    ├── hero-bg.jpg
    ├── product-screenshot.png
    └── team/
        ├── founder.jpg
        └── cto.jpg
```

A separação entre `icons/` e `img/` pode parecer desnecessária no início, mas tem seus motivos práticos. Ícones geralmente são SVGs pequenos, reutilizáveis e que você vai referenciar múltiplas vezes. Já as imagens são arquivos maiores, frequentemente em formatos como JPG ou PNG, e representam conteúdo visual único.

Essa separação facilita na hora de implementar otimizações. Por exemplo, você pode aplicar lazy loading apenas nas imagens da pasta `img/`, enquanto os ícones críticos em `icons/` podem ser carregados imediatamente ou até inline no HTML.

### CSS dentro de assets? Sim.

Colocar o CSS dentro de `assets/css/` ao invés de uma pasta `css/` na raiz mantém a coerência: recursos estáticos ficam juntos. Se amanhã você decidir adicionar fontes customizadas, basta criar `assets/fonts/` e pronto.

```css
/* assets/css/style.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
  --primary: #2563eb;
  --text: #1e293b;
  --bg: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Para projetos maiores, você pode subdividir em `base.css`, `components.css` e `layout.css`, mas para uma landing page, um único arquivo bem organizado resolve.

## JavaScript: Modularização Sem Frameworks

A pasta `js/` merece atenção especial. Mesmo sem usar frameworks, você pode (e deve) escrever JavaScript modular.

```
js/
├── main.js
└── modules/
    ├── scroll.js
    ├── form.js
    └── animations.js
```

### O papel do main.js

O `main.js` é o orquestrador. Ele importa os módulos e inicializa as funcionalidades:

```javascript
// js/main.js
import { initSmoothScroll } from './modules/scroll.js';
import { initFormValidation } from './modules/form.js';
import { initAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initFormValidation();
  initAnimations();
});
```

### Módulos especializados

Cada módulo tem uma responsabilidade clara:

```javascript
// js/modules/scroll.js
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
```

Essa modularização traz benefícios imediatos: código mais testável, mais fácil de debugar e de reutilizar em outros projetos.

## O index.html: Simplicidade na Raiz

O `index.html` fica na raiz por convenção e praticidade. Servidores web procuram por esse arquivo automaticamente, e manter ele na raiz simplifica o deploy.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Landing Page</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
  <header>
    <img src="./assets/icons/logo.svg" alt="Logo">
  </header>
  
  <main>
    <section class="hero">
      <h1>Transforme sua ideia em realidade</h1>
      <img src="./assets/img/hero-bg.jpg" alt="Hero">
    </section>
  </main>

  <script type="module" src="./js/main.js"></script>
</body>
</html>
```

Note o `type="module"` no script. Isso habilita o uso de `import/export` sem precisar de bundlers.

## Quando Expandir essa Estrutura

Para landing pages simples, essa estrutura é suficiente. Mas conforme o projeto cresce, você pode precisar adicionar:

**Para múltiplas páginas:**
```
├── pages/
│   ├── about.html
│   └── contact.html
```

**Para componentes reutilizáveis:**
```
├── components/
│   ├── header.html
│   └── footer.html
```

**Para dados dinâmicos:**
```
├── data/
│   └── testimonials.json
```

## Boas Práticas de Nomenclatura

Algumas convenções que tornam o projeto mais profissional:

- Use kebab-case para nomes de arquivos: `hero-section.js`, não `heroSection.js`
- Seja descritivo: `product-features.jpg` é melhor que `img-2.jpg`
- Agrupe arquivos relacionados em subpastas quando fizer sentido
- Prefixe arquivos temporários ou de teste com `_` ou `.` para ignorá-los facilmente

## Performance e Otimização

Essa estrutura também facilita otimizações:

```javascript
// js/modules/lazyload.js
export function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}
```

Com arquivos separados por responsabilidade, você pode implementar code splitting manual: carregar `animations.js` apenas se o usuário scrollar além do fold, por exemplo.

## Conclusão

Uma boa estrutura de pastas não é sobre seguir regras rígidas, mas sobre criar um sistema que faça sentido para você e sua equipe. A estrutura que apresentei aqui equilibra simplicidade com profissionalismo e funciona bem tanto para projetos pessoais quanto comerciais.

O mais importante é manter a consistência. Escolha uma abordagem e siga ela em todos os seus projetos. Com o tempo, essa organização se torna segunda natureza, e você ganha velocidade sem sacrificar qualidade.

E lembre-se: começar simples não significa ficar simples. Essa estrutura pode evoluir conforme seu projeto cresce, mantendo sempre a base sólida que você construiu desde o início.

---

**Dica final:** Crie um template pessoal com essa estrutura e use ele como ponto de partida para novos projetos. Você vai economizar tempo e manter um padrão consistente em todo seu portfólio.

Quer ver mais conteúdo sobre desenvolvimento front-end? Acompanhe o [FrontStack](https://frontstack.pages.dev) para dicas práticas e tutoriais detalhados.