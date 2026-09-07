# Valen Brasil — Guia do Design System

Referência única de marca, fundamentos visuais, componentes e telas para os
três produtos da Valen Brasil: o **website institucional** (valenbrasil.com),
o **blog** (blog.valenbrasil.com) e o **painel interno** de gestão de laudos.

## Sobre

**Valen Brasil Gestão Empresarial Ltda.** — avaliação imobiliária em Itajaí,
Santa Catarina, desde 2020. Equipe de arquitetos, engenheiros e corretores.

| | |
|---|---|
| **Empresa** | Valen Brasil Gestão Empresarial Ltda. Avaliação imobiliária em Itajaí, Santa Catarina, desde 2020. Equipe de arquitetos, engenheiros e corretores. |
| **Base técnica** | Tailwind + shadcn/ui. Contrato canônico de variáveis, escala de espaçamento Tailwind, ícones Lucide. |
| **Regra número 1** | O sistema é **exclusivamente claro**. Não existe tema escuro nem seção de fundo escuro em nenhum produto. |

## Onde o projeto vive e como publica

**O GitLab é a origem.** Todo trabalho é commitado e empurrado para lá; o
GitHub existe apenas como cópia de segurança, alimentada automaticamente.

| | |
|---|---|
| **Origem** | https://gitlab.com/valenbrasil/design — é para cá que se empurra |
| **Backup** | https://github.com/valenbrasil/design — espelho, não se edita direto |
| **Site** | design.valenbrasil.com |

O site é estático: não há build, os arquivos do repositório já são o site. O
`.gitlab-ci.yml` reúne tudo em `public/` a cada push na branch padrão e o
GitLab Pages serve esse diretório. O `.github/workflows/pages.yml` faz o
equivalente no GitHub e serve de contingência enquanto a origem não publica.

### Estado da configuração

O desenho acima é o alvo. Nem tudo está ligado — o que falta depende de ações
no painel do GitLab e no DNS, não do código deste repositório:

| Item | Estado | O que falta |
|---|---|---|
| Código nas duas plataformas | pronto | — |
| CI do GitLab (`.gitlab-ci.yml`) | escrito e validado pelo linter do GitLab | verificação de identidade da conta em https://gitlab.com/-/identity_verification, sem a qual nenhum job roda |
| Espelhamento GitLab → GitHub | **não configurado** | *Settings → Repository → Mirroring repositories*, direção **Push**, destino `https://github.com/valenbrasil/design.git`, autenticando com um token do GitHub |
| Visibilidade do Pages | privado | *Settings → General → Visibility → Pages*, se o site deve ser público |
| Domínio `design.valenbrasil.com` | **DNS inexistente** | cadastrar o domínio em *Settings → Pages → New Domain* e criar os dois registros que o GitLab indicar: um `CNAME` para `valenbrasil.gitlab.io` e um `TXT` de verificação |

Enquanto o CI do GitLab estiver bloqueado, o site publicado é o do GitHub
Pages, em https://valenbrasil.github.io/design/.

## Estrutura do repositório

```
README.md               este arquivo — guia completo
index.html              o guia publicado: página única com todos os componentes
styles.css              ponto de entrada único; só @imports
guia/                   react.min.js, react-dom.min.js, ds-bundle.js — o que a página do guia carrega
.gitlab-ci.yml          publicação no GitLab Pages (origem)
.github/workflows/      publicação no GitHub Pages (backup)
tokens/                 colors, typography, spacing, radius, shadows, motion, fonts, base
components/             29 primitivas — .jsx + .d.ts (contrato de props) + .prompt.md
  core/                 Avatar, Badge, Button, Card, Icon, IconButton, Logo, Separator, Tag
  data/                 Accordion, StatCard, Table
  feedback/             Alert, Dialog, Progress, Skeleton, Toast, Tooltip
  forms/                Checkbox, Field, Input, Radio, Select, Switch, Textarea
  navigation/           Breadcrumb, NavItem, Pagination, Tabs
ui_kits/                website, blog, dashboard (+ login) — HTMLs interativos
  website/              HomeHero.jsx, HomeSections.jsx, SiteChrome.jsx, index.html
  blog/                 BlogChrome.jsx, BlogFeed.jsx, PostView.jsx, index.html
  dashboard/            DashShell.jsx, DashOverview.jsx, DashLaudos.jsx, DashNova.jsx, Login.jsx, index.html, login.html
assets/                 valen-logo.png, valen-icone.png
  icons/                os 46 ícones Lucide usados pelo sistema, sem CDN externo
handoff/                README.md e globals.css prontos para o projeto Next
```

Tabela de referência rápida ("onde está cada coisa"):

| Arquivo | Conteúdo |
|---|---|
| `index.html` | O guia publicado — página única, com os componentes renderizados ao vivo |
| `styles.css` | Ponto de entrada único; só `@import`s |
| `tokens/` | colors, typography, spacing, radius, shadows, motion, fonts, base |
| `components/` | 29 primitivas — `.jsx` + `.d.ts` (contrato de props) + `.prompt.md` |
| `ui_kits/` | website, blog, dashboard (+ login) — HTMLs interativos |
| `assets/` | Logo, selo e os 46 ícones Lucide usados pelo sistema |
| `guia/` | React e o bundle de componentes que a página do guia carrega |
| `handoff/` | `README.md` e `globals.css` prontos para o projeto Next |
| `README.md` | Guia completo: contexto, conteúdo, fundamentos, iconografia, índice |

## Marca

### Logo e uso

Dois arquivos, nunca redesenhados: o lettering completo
(`assets/valen-logo.png`) e o selo circular
(`assets/valen-icone.png`).

Regras:

1. Nunca redesenhe, recrie em SVG/CSS, nem aproxime o lettering com outra
   fonte. Use sempre o arquivo de `assets/`.
2. Nunca aplique fundo colorido atrás do lettering, nem recorte o respiro
   interno da marca.
3. Tamanho mínimo do selo: 16px. Abaixo disso as três barras deixam de ser
   legíveis.
4. Não gire, não distorça a proporção, não troque o verde por outra cor.

O logo funciona sobre três fundos: branco (`--surface-page`), cinza-claro
(`--surface-subtle`) e verde-claro (`--sage-50`).

## Conteúdo e tom

Português do Brasil. Técnico, sóbrio e tranquilizador — vende segurança e
responsabilidade técnica, nunca urgência.

**Escreva assim**

- "Contamos com uma equipe multidisciplinar." — a empresa fala em **nós**.
- "Descubra o valor do seu imóvel." — o cliente é **você**.
- "Entrega em 3 dias úteis." — prazos e preços concretos.
- "Laudo de Avaliação Completo", "NBR 14653", "RRT/ART" — termos técnicos com
  maiúscula.
- CTA no imperativo curto: "Solicite sua avaliação".

**Não escreva assim**

- Nada de "eu" — a marca nunca fala na primeira pessoa do singular.
- Nada de urgência artificial: "imperdível", "últimas vagas", contagem
  regressiva.
- Nada de exclamação em copy de produto.
- Nada de emoji, em nenhum produto.
- Nada de promessa sem número: "rápido", "o melhor preço".

**Estrutura padrão de seção:** eyebrow de uma palavra em caixa alta → título
curto em capitalização de frase → subtítulo em minúsculas que continua a
frase. Exemplo: "AVALIAÇÃO" → "Avaliação de Imóveis" → "aplicável em
diferentes contextos".

## Fundamentos visuais

### Cores

Verde sage `#73945F` e cinza `#C8CBC6` foram extraídos pixel a pixel do logo.
Todo o resto deriva deles. Valores completos em `tokens/colors.css`.

**Verde sage — a cor da marca** (`--sage-50` a `--sage-900`):

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#f4f7f1` | `#e7ede2` | `#cfdcc6` | `#b2c6a4` | `#93ae81` | `#73945f` | `#5e7c4c` | `#4a633c` | `#3a4e30` | `#2c3a25` |

`--primary` = 500 · hover = 600 · texto verde = 700 · fundo de destaque = 50.

**Neutros** (`--neutral-0` a `--neutral-950`), cinza levemente esverdeado:

| 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `#fff` | `#fafaf9` | `#f3f4f2` | `#e6e8e4` | `#c8cbc6` | `#a6aaa4` | `#82867f` | `#61645e` | `#464843` | `#2b2d29` | `#141613` | `#0a0b09` |

Texto 900 forte / 700 corpo / 500 secundário · borda 200 sutil / 300 controle
· fundo alternado 50.

**Semânticas** (cada uma com tom `50` de fundo e `500`/`700` de texto/ícone):
`success` (entregue), `warning` (em vistoria), `danger` (atrasado), `info`
(judicial).

**As três superfícies permitidas:** branco (`--surface-page`, fundo padrão),
cinza-claro (`--surface-subtle`, seção alternada) e verde-claro
(`--surface-contrast`, destaque pontual).

> **Contraste:** o verde 500 sobre branco não atinge AA para texto pequeno.
> Texto verde usa sempre o 700; o 500 fica para fundo de botão (com texto
> branco), ícones e elementos gráficos.

### Tipografia

Jost para títulos, Manrope para leitura e interface, JetBrains Mono para
dados técnicos.

| Token | Tamanho | Uso |
|---|---|---|
| `--text-6xl` | 3.75rem | Display de hero |
| `--text-5xl` | 3rem | H1 de página |
| `--text-4xl` | 2.25rem | H2 de seção |
| `--text-2xl` | 1.5rem | H3, título de painel |
| `--text-xl` | 1.25rem | H4, título de card |
| `--text-base` | 1rem | Corpo |
| `--text-sm` | 0.875rem | Interface, rótulos, tabela |
| `--text-xs` | 0.75rem | Eyebrow em caixa alta |

Papéis prontos em `tokens/typography.css` (`--type-display`, `--type-h1` a
`--type-h4`, `--type-body*`, `--type-label`, `--type-eyebrow`,
`--type-mono`) combinam família, peso, tamanho e altura de linha em uma única
declaração `font:`.

### Espaçamento e grid

Escala Tailwind: 1 unidade = 0,25rem.

| Token | Valor | Uso |
|---|---|---|
| `--container-max` | 1200px | Largura do site e do dashboard |
| `--container-narrow` | 720px | Coluna de leitura |
| `--gutter` | 1.5rem | Respiro lateral |
| `--section-y` | 6rem | Respiro vertical entre seções |
| `--control-h-sm/md/lg` | 2 / 2.5 / 3rem | Altura de botões e campos |

### Forma, sombra e movimento

**Raios:** `sm` 6px (recortes finos) · controle 8px (botões/campos) · card
12px · modal 16px · imagem 20px · pílula (badges/tags/pills).

**Elevação:** `xs` repouso · `sm` · `md` hover · `lg` toast · `xl` modal.

**Movimento e estados:**

| Situação | Duração | Comportamento |
|---|---|---|
| Cor de controle | 120ms | Botão sólido escurece um passo (500 → 600) |
| Hover / toggle | 200ms | Card clicável sobe 2px e ganha sombra md |
| Accordion, modal | 320ms | "+" gira 45° para virar "×" |
| Entrada de seção | 600ms | Fade suave, sem deslocamento grande |
| Press | 120ms | `scale(0.985)`, sem mudança de cor |
| Foco | — | Borda `--ring` + anel de 3px a 28% |
| Desabilitado | — | `opacity: .45`, cursor not-allowed |

Easing padrão `--ease-out` = `cubic-bezier(.16,1,.3,1)`. Sem bounce, sem
elástico, sem parallax.

### Iconografia

Lucide, o set padrão do shadcn. Traço 2px, colorido por `currentColor`.
Nunca cole SVG à mão; use sempre o componente `Icon`
(`components/core/Icon.jsx`).

## Componentes

29 primitivas em `components/`, cada uma com `.jsx` (implementação),
`.d.ts` (contrato de props) e `.prompt.md` (spec curta em pt-BR para uso por
agentes de IA).

**Core** — Button, IconButton, Badge, Tag, Card, Separator, Avatar, Logo.

| Componente | Descrição |
|---|---|
| `Avatar` | Círculo com foto ou iniciais do nome. |
| `Badge` | Rótulo pequeno e arredondado para status ou categoria. |
| `Button` | Botão de ação com 6 variantes e ícones opcionais. |
| `Card` / `CardHeader` | Contêiner de conteúdo com borda, raio e sombra mínima. |
| `Icon` | Ícone Lucide colorido por `currentColor`. |
| `IconButton` | Botão quadrado apenas com ícone e `aria-label`. |
| `Logo` | Marca oficial a partir dos arquivos em `assets/`. |
| `Separator` | Linha divisória, simples ou com label central. |
| `Tag` | Etiqueta removível para filtros e categorias. |

**Formulários** — rótulo sempre acima do campo, nunca placeholder no lugar de
rótulo.

| Componente | Descrição |
|---|---|
| `Checkbox` | Caixa de seleção controlada ou não controlada. |
| `Field` | Envolve um controle com rótulo, obrigatoriedade, dica ou erro. |
| `Input` | Campo de texto de uma linha com ícone opcional. |
| `Radio` | Grupo de opções de escolha única. |
| `Select` | Seletor nativo estilizado. |
| `Switch` | Alternador on/off para preferências binárias. |
| `Textarea` | Campo de texto multilinha. |

**Feedback** — aviso inline, notificação, progresso e modal; fundo tonal,
nunca borda colorida à esquerda.

| Componente | Descrição |
|---|---|
| `Alert` | Aviso inline com fundo tonal e ícone. |
| `Dialog` | Modal centralizado com overlay, título e rodapé de ações. |
| `Progress` | Barra de progresso linear. |
| `Skeleton` | Placeholder de carregamento com shimmer. |
| `Toast` | Notificação flutuante com ícone e botão de fechar. |
| `Tooltip` | Dica contextual no hover/foco. |

**Navegação** — abas, trilha, paginação e item de sidebar.

| Componente | Descrição |
|---|---|
| `Breadcrumb` | Trilha de navegação hierárquica. |
| `NavItem` | Item de navegação lateral com ícone e contador. |
| `Pagination` | Paginação numerada com setas anterior/próxima. |
| `Tabs` | Grupo de abas, variante underline ou pill. |

**Dados** — tabela e accordion.

| Componente | Descrição |
|---|---|
| `Accordion` | Lista de perguntas/respostas que expande uma por vez. |
| `StatCard` | Cartão de métrica com valor em destaque e variação. |
| `Table` | Tabela de dados com colunas configuráveis. |

## Produtos

### Website institucional

valenbrasil.com — hero, garantias, tipos de avaliação, aplicações, processo,
equipe, história, blog, FAQ e chamada final. Composição em
`ui_kits/website/` (`HomeHero.jsx`, `HomeSections.jsx`, `SiteChrome.jsx`).
Tela completa: [`ui_kits/website/index.html`](ui_kits/website/index.html).

### Blog

blog.valenbrasil.com — feed com destaque, últimos artigos filtráveis, seções
por tag e página de artigo. Composição em `ui_kits/blog/`
(`BlogChrome.jsx`, `BlogFeed.jsx`, `PostView.jsx`). Tela completa:
[`ui_kits/blog/index.html`](ui_kits/blog/index.html).

### Dashboard

Painel interno de gestão de laudos: visão geral, lista com filtros, detalhe
do processo, agenda de vistorias e login. Composição em `ui_kits/dashboard/`
(`DashShell.jsx`, `DashOverview.jsx`, `DashLaudos.jsx`, `DashNova.jsx`,
`Login.jsx`). Painel completo:
[`ui_kits/dashboard/index.html`](ui_kits/dashboard/index.html) · login:
[`ui_kits/dashboard/login.html`](ui_kits/dashboard/login.html).

## Handoff para desenvolvedores

Next.js + Tailwind + shadcn/ui. O pacote completo está em
[`handoff/`](handoff/README.md).

```
pnpm dlx shadcn@latest init --preset b3acDp3htA --template next
```

Depois do init, substitua o `app/globals.css` gerado por
`handoff/globals.css` — ele mantém todo o contrato de variáveis do shadcn e
só troca os valores pelos da marca. Ícones: `pnpm add lucide-react`.

### Regras não negociáveis

1. Somente superfícies claras. Não crie `.dark`, não use `neutral-900` como
   fundo de seção. Para destacar, `bg-sage-50` com texto `text-sage-800`.
2. Verde é acento, não fundo: botão primário, ícones, links, badges,
   progresso, estado ativo de navegação.
3. Máximo dois fundos por página, mais o verde-claro pontual.
4. Cards: branco, borda 1px, raio 12px, sombra mínima. Sem gradiente, sem
   borda colorida só à esquerda.
5. Sem emoji, sem ilustração vetorial desenhada à mão, sem imagem gerada.
6. Logo sempre do arquivo original.
7. Conteúdo em pt-BR, "nós" para a empresa e "você" para o cliente.

## Pendências conhecidas

1. **Fontes.** Jost, Manrope e JetBrains Mono são aproximações do Google
   Fonts — os arquivos originais do site (Framer) não foram fornecidos. Com
   os WOFF2 reais, a troca é imediata em `tokens/fonts.css`.
2. **Preset shadcn `b3acDp3htA`.** O ID não é resolvível publicamente; o
   sistema foi escrito contra o contrato canônico do shadcn. Comparar com o
   `globals.css` gerado no primeiro projeto real.
3. **Repositórios vazios.** `valen-design` e `valen-blog` só têm README —
   nenhum valor foi derivado de código. Website e blog são reconstruções
   fiéis de conteúdo, não cópias pixel-perfect.
4. **Dashboard.** Não existe produto correspondente hoje; o fluxo de gestão
   de laudos é composição original e precisa de validação da operação.
