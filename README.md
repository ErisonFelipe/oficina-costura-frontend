# Linha & Ponto — Frontend

Site institucional da oficina de costura **Linha & Ponto**, desenvolvido com React 18, Vite, TypeScript e Tailwind CSS.

## 🎨 Sobre o projeto

Website moderno e minimalista para uma oficina de costura profissional, com foco em:
- Design elegante e artesanal
- Experiência de usuário fluida
- Responsividade completa (desktop e mobile)
- Performance otimizada

## 🚀 Tecnologias

- **React 18** — Biblioteca de UI
- **Vite** — Build tool e dev server
- **TypeScript** — Tipagem estática
- **Tailwind CSS** — Estilização utilitária

## 📁 Estrutura

\`\`\`
src/
├── components/
│   ├── layout/        # Header, Footer
│   └── ui/            # Button, SectionLabel
├── data/              # Dados mockados (services, contact)
├── sections/          # Seções da página (Hero, Services, About...)
├── types/             # Tipagens TypeScript
├── App.tsx
├── main.tsx
└── index.css
\`\`\`

## 🛠️ Como rodar o projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
\`\`\`bash
# Clonar o repositório
git clone <URL_DO_REPO>
cd oficina-costura

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
\`\`\`

O servidor estará disponível em \`http://localhost:5173\`.

### Build para produção
\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📜 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| \`npm run dev\` | Inicia o servidor de desenvolvimento |
| \`npm run build\` | Gera build de produção |
| \`npm run preview\` | Pré-visualiza o build |
| \`npm run lint\` | Executa o ESLint |

## 🎨 Identidade Visual

- **Fundo principal:** #FAF7F2 (off-white)
- **Fundo secundário:** #F5EDE6 (bege claro)
- **Cor de destaque:** #C67B5C (terracota)
- **Texto principal:** #2C2825 (marrom escuro)
- **Tipografia:** Playfair Display (títulos) + Inter (corpo)

## 📦 Deploy

\`\`\`bash
# Vercel
npm i -g vercel
vercel

# Netlify
npm run build
# arrastar a pasta dist/ no painel do Netlify
\`\`\`

## 🔗 Repositórios relacionados

- **Frontend:** este repositório
- **Backend:** _(link será adicionado futuramente)_

## 📄 Licença

Todos os direitos reservados © Linha & Ponto — Oficina de Costura
