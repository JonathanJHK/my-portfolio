# Jonathan Heidy Kinjo — Portfólio

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-22-41B883)](https://primeng.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployed-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

Portfólio profissional desenvolvido para apresentar minha trajetória, experiências, competências e projetos de desenvolvimento de software.

O projeto foi construído com foco em **performance, acessibilidade, responsividade, organização de código e SEO**, utilizando Angular com prerenderização das principais páginas.

### 🔗 Acesse o portfólio

**[jonathan-kinjo.pages.dev](https://jonathan-kinjo.pages.dev/)**

---

## 📖 Sobre o projeto

Este portfólio foi desenvolvido como uma aplicação Angular para reunir, de forma clara e objetiva:

- minha trajetória profissional;
- projetos profissionais e técnicos;
- tecnologias e competências;
- experiência com Front-end, Back-end, APIs, bancos de dados e BI;
- links para GitHub, LinkedIn e currículo.

Além da apresentação visual, o projeto também foi utilizado para aplicar práticas modernas do ecossistema Angular, otimização de carregamento, acessibilidade e SEO técnico.

---

## ✨ Funcionalidades

- Página inicial responsiva
- Apresentação profissional e resumo da trajetória
- Seção de experiências profissionais
- Seção de tecnologias e competências
- Projetos selecionados
- Página com listagem completa de projetos
- Página de detalhes para cada projeto
- Galeria de imagens dos projetos
- Links para repositórios relacionados
- Download do currículo
- Links para LinkedIn, GitHub e e-mail
- Página 404 personalizada
- Navegação acessível por teclado
- Layout adaptado para dispositivos móveis

---

## 🔍 SEO e performance

O projeto possui algumas otimizações voltadas para indexação e compartilhamento:

- Server-Side Rendering / Prerender
- páginas de projetos prerenderizadas
- títulos e descriptions dinâmicos
- URL canônica por página
- Open Graph
- metadados para compartilhamento em redes sociais
- `robots.txt`
- `sitemap.xml`
- integração com Google Search Console
- imagens otimizadas
- lazy loading
- rotas carregadas sob demanda

As páginas de projetos são geradas durante o build a partir dos dados cadastrados na aplicação, permitindo que mecanismos de busca recebam o conteúdo e os metadados diretamente no HTML.

---

## ♿ Acessibilidade

Durante o desenvolvimento também foram aplicadas práticas de acessibilidade, como:

- HTML semântico
- hierarquia adequada de títulos
- textos alternativos em imagens
- navegação por teclado
- estados de foco visíveis
- skip link para o conteúdo principal
- suporte a `prefers-reduced-motion`
- contraste adequado entre texto e fundo
- atributos ARIA quando necessários

---

## 🛠️ Tecnologias

### Front-end

- Angular 22
- TypeScript
- RxJS
- PrimeNG 22
- PrimeIcons
- Tailwind CSS 4

### Angular

- Standalone Components
- Signals
- Lazy Loading
- Angular Router
- `NgOptimizedImage`
- SSR / Prerender
- gerenciamento dinâmico de metadados

### Qualidade e ferramentas

- Vitest
- Prettier
- Git
- GitHub
- Lighthouse
- Google Search Console

### Deploy

- Cloudflare Pages

---

## 📁 Estrutura do projeto

```text
src/
├── app/
│   ├── core/
│   │   ├── data/
│   │   ├── models/
│   │   └── services/
│   │
│   ├── features/
│   │   ├── home/
│   │   └── projects/
│   │
│   ├── layout/
│   │
│   ├── shared/
│   │   └── components/
│   │
│   ├── theme/
│   │
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.routes.server.ts
│
├── index.html
├── main.ts
├── main.server.ts
└── styles.css

public/
├── documents/
├── images/
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

A aplicação foi organizada por responsabilidades, separando dados e serviços compartilhados das funcionalidades específicas de cada área.

---

## 🚀 Executando localmente

### Pré-requisitos

Tenha instalado:

- Node.js 22
- npm 11

O projeto também possui um arquivo `.nvmrc`, então, utilizando NVM:

```bash
nvm use
```

### 1. Clone o repositório

```bash
git clone https://github.com/JonathanJHK/my-portfolio.git
```

### 2. Entre na pasta

```bash
cd my-portfolio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm start
```

A aplicação estará disponível em:

```text
http://localhost:4200
```

---

## 📦 Build de produção

Para gerar o build:

```bash
npm run build
```

Os arquivos de produção serão gerados dentro de:

```text
dist/
```

O processo também realiza a prerenderização das rotas configuradas no projeto.

---

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

Os testes utilizam **Vitest**.

---

## 🌐 Deploy

O portfólio está publicado utilizando **Cloudflare Pages**.

Branch utilizada para produção:

```text
main
```

Após alterações e push para o repositório, uma nova versão pode ser publicada pelo fluxo configurado no Cloudflare Pages.

---

## 📌 Projetos apresentados

Atualmente o portfólio apresenta projetos relacionados a diferentes contextos, incluindo:

- plataforma de gestão para fisioterapia;
- plataforma de cadastro e monitoramento de ocorrências de incêndio;
- sistema Full Stack para gestão de estoque e emissão de notas fiscais.

Cada projeto possui uma página própria com contexto, tecnologias utilizadas, minha participação, desafios e imagens da aplicação.

---

## 👨‍💻 Autor

**Jonathan Heidy Kinjo**

Engenheiro de Software e Desenvolvedor Web.

- [LinkedIn](https://www.linkedin.com/in/jonathanhkinjo)
- [GitHub](https://github.com/JonathanJHK)
- [Portfólio](https://jonathan-kinjo.pages.dev/)

---

## 📄 Observação

Este repositório contém o código-fonte do meu portfólio pessoal.

Os projetos apresentados no site possuem contextos e níveis de disponibilidade diferentes. Alguns foram desenvolvidos em ambientes profissionais e, por isso, determinadas informações, códigos ou identificações foram adaptados ou omitidos.
