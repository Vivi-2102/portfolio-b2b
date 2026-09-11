"Projeto da disciplina laboratorio web"🚀 Portfólio Agência B2B — Showcase de Clientes

Projeto de Portfólio Digital para uma Agência de Desenvolvimento Web B2B, desenvolvido como parte da disciplina de Laboratório Web.

A aplicação apresenta o site de uma agência de tecnologia fictícia, com foco em uma experiência moderna, responsiva e acessível, utilizando HTML5 semântico, CSS3 com abordagem Mobile-First e JavaScript modular.

O projeto também possui integração com uma API REST, utilizada para carregar dinamicamente os dados exibidos na seção de depoimentos e clientes.

🌐 Acesse o Projeto Online
**[Clique aqui para acessar a aplicação
online](https://vivi-2102.github.io/portfolio-b2b/)**

O projeto está disponível para visualização pelo GitHub Pages:

🔗 Acessar a aplicação online

🎨 Protótipo no Figma

O layout, a identidade visual e os breakpoints responsivos foram desenvolvidos com base no protótipo criado no Figma.

🔗 Acessar o protótipo no Figma

🛠️ Tecnologias e Ferramentas
HTML5 Semântico — estrutura e acessibilidade da aplicação
CSS3 — responsividade, Mobile-First, Flexbox e Grid
JavaScript ES6+ — interações, módulos e consumo de API
JSONPlaceholder API — fornecimento de dados para os depoimentos
Git e GitHub — versionamento e hospedagem do projeto
Figma — prototipação e definição visual
🌐 Integração com a API

A seção de Testimonials / Clientes consome dados dinamicamente da API REST gratuita JSONPlaceholder.

Endpoint
https://jsonplaceholder.typicode.com/users
Regra de negócio

A aplicação:

Realiza uma requisição fetch() para o endpoint /users.
Recebe a lista de usuários em formato JSON.
Utiliza somente os 5 primeiros resultados.
Converte os dados recebidos em cards de depoimentos.
Exibe as informações no carrossel da seção de Testimonials.
Dados utilizados
Informação exibida	Propriedade da API
Empresa	company.name
Depoimento / Slogan	company.catchPhrase + company.bs
Responsável	name
Cidade	address.city
📁 Estrutura do Projeto
├── src/
│   ├── css/
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── customers.css
│   │   ├── discover.css
│   │   ├── events.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── nav.css
│   │   ├── speed.css
│   │   ├── styles.css
│   │   ├── testimonials.css
│   │   └── tools.css
│   │
│   ├── icons/
│   │   └── # Ícones SVG e assets vetoriais
│   │
│   ├── img/
│   │   └── # Imagens e avatares do projeto
│   │
│   └── js/
│       ├── nav.js
│       └── testimonials.js
│
├── index.html
├── script.js
└── README.md
🗂️ Organização dos Arquivos
index.html

Contém a estrutura principal da aplicação utilizando HTML5 semântico.

script.js

Arquivo JavaScript principal responsável por inicializar os módulos da aplicação.

src/js/nav.js

Responsável pelo funcionamento do menu responsivo e suas interações.

src/js/testimonials.js

Responsável pelo consumo da API, criação dos cards e funcionamento do carrossel de depoimentos.

src/css/

Contém os estilos organizados por responsabilidade e por seção da página.

📱 Responsividade

O projeto utiliza uma abordagem Mobile-First, adaptando o layout para diferentes tamanhos de tela.

Principais recursos utilizados:

Flexbox
CSS Grid
Media Queries
Variáveis CSS
Layouts adaptáveis
Menu responsivo
Carrossel horizontal
Breakpoints para tablet e desktop
♿ Acessibilidade

Foram aplicadas práticas de acessibilidade durante o desenvolvimento:

✅ Uso de elementos HTML5 semânticos
✅ alt em imagens relevantes
✅ aria-label em controles
✅ aria-expanded no menu mobile
✅ aria-controls para relacionar o botão ao menu
✅ Estados :focus-visible
✅ Suporte a prefers-reduced-motion
✅ Hierarquia adequada de títulos (h1, h2 e h3)
✅ Critérios de Qualidade
✅ HTML5 semântico
✅ Layout responsivo
✅ Abordagem Mobile-First
✅ CSS organizado por componentes e seções
✅ JavaScript modular
✅ Integração com API REST
✅ Tratamento de erros da API
✅ Acessibilidade
✅ Validação HTML/CSS
✅ Organização de arquivos
✅ Versionamento com Git
📌 Observações

Os dados apresentados na seção de Testimonials são obtidos da API JSONPlaceholder, que fornece dados fictícios para fins de desenvolvimento e demonstração.

As imagens de avatar utilizadas nos cards são carregadas externamente.

O projeto foi desenvolvido com foco em uma experiência visual próxima ao protótipo criado no Figma, mantendo adaptações para diferentes tamanhos de tela.

👩‍💻 Desenvolvimento

Projeto desenvolvido como atividade acadêmica da disciplina de Laboratório Web.

📄 Licença

Este projeto foi desenvolvido para fins educacionais e acadêmicos.