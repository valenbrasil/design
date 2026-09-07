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

**O GitLab é a origem.** Todo trabalho é commitado e empurrado para lá. Dali
saem duas coisas automaticamente: o site publicado e uma cópia de segurança no
GitHub. Ninguém empurra para o GitHub diretamente.

```
    você  ──push──►  GitLab  ──CI──►  https://design.valenbrasil.com
                       │
                       └──espelho──►  GitHub (cópia de segurança)
```

| | |
|---|---|
| **Origem** | https://gitlab.com/valenbrasil/design |
| **Site** | https://design.valenbrasil.com |
| **Backup** | https://github.com/valenbrasil/design — espelho, não se edita direto |

### Como o site é publicado

O site é estático: não há build nem framework, os arquivos do repositório já
são o site. A cada push na branch padrão, o `.gitlab-ci.yml` roda um job que
copia tudo para `public/` — exceto `.git`, `.github`, `.gitlab-ci.yml` e
`.claude` — e o GitLab Pages serve esse diretório. O job leva cerca de 12
segundos e falha explicitamente se o `index.html` não chegar.

O endereço final é `https://design.valenbrasil.com`, definido como *primary
domain*: quem entrar pelo endereço interno do GitLab
(`valenbrasil.gitlab.io/design`) é redirecionado para ele, então há um
endereço só, e *Force HTTPS* garante o cadeado em todo acesso. O certificado é
da Let's Encrypt, emitido e renovado automaticamente pelo GitLab.

No DNS (gerenciado no Cloudflare) existe um único registro para isso:

| Tipo | Nome | Valor | Proxy |
|---|---|---|---|
| `CNAME` | `design` | `valenbrasil.gitlab.io` | **DNS only** |

O proxy do Cloudflare precisa ficar desligado (nuvem cinza). Ligado, o GitLab
não consegue emitir o certificado e o acesso pode entrar em laço de
redirecionamento.

As páginas trazem `<meta name="robots" content="noindex, nofollow,
noarchive">`: o guia é material interno e não deve aparecer em buscadores. Os
três kits em `ui_kits/` carregam a meta duas vezes — no `<head>` externo e
dentro do template que o carregador injeta —, porque eles substituem o
documento inteiro ao rodar e uma tag só no head externo seria descartada antes
de um rastreador que executa JavaScript vê-la. Não há `robots.txt` com
`Disallow` de propósito: bloquear o rastreamento impediria o buscador de ler o
`noindex`, que é justamente o que remove a página do índice.

### Acesso ao site

O site pede uma senha antes de mostrar o conteúdo (`guia/gate.js`, carregado
por todas as páginas). Nos três kits em `ui_kits/` o script entra no template
interno, não no `<head>` externo, porque o carregador substitui o documento
inteiro ao rodar. O desbloqueio vale para a aba (`sessionStorage`), então não
se digita a senha a cada página.

**Isto não é proteção de conteúdo, e é importante não confundir.** O site é
estático: o conteúdo inteiro chega ao navegador junto com a verificação, então
quem abrir o código-fonte ou desligar o JavaScript vê tudo sem digitar nada.
Serve para o endereço não ficar escancarado a quem tropeça nele — é uma porta
fechada, não um cofre. Guardamos o SHA-256 da senha em vez do texto, o que
evita entregá-la a quem abre o código-fonte por curiosidade, mas não muda nada
quanto ao conteúdo.

Se algum dia o material precisar de proteção real, os dois caminhos com
autenticação no servidor são: restringir o Pages a membros do projeto
(*Settings → General → Visibility → Pages*, trocar para `Only project
members`), ou pôr o Cloudflare Access na frente do domínio — este último exige
ligar o proxy do Cloudflare, que hoje está desligado por causa do certificado.

Para trocar a senha, gere o hash e substitua `HASH_SENHA` em `guia/gate.js`:

```
echo -n "nova-senha" | sha256sum
```

### Como funciona a cópia no GitHub

Um *push mirror* configurado no GitLab (*Settings → Repository → Mirroring
repositories*) replica a branch padrão para o GitHub a cada push, autenticando
com um token de acesso do GitHub.

Duas coisas a saber no dia a dia:

- O GitLab limita a sincronização a uma a cada ~5 minutos. Dois pushes
  seguidos podem levar alguns minutos para aparecer no GitHub — é limite de
  frequência, não erro.
- Como o GitHub é atualizado pelo espelho e não por você, um clone local pode
  achar que há commits pendentes até rodar `git fetch`. Não há.

O `.github/workflows/pages.yml` continua no repositório e publica a mesma
coisa em https://valenbrasil.github.io/design/, servindo de contingência caso
o GitLab fique indisponível.

### Estado da configuração

Tudo abaixo está ativo e verificado:

| Item | Estado |
|---|---|
| CI do GitLab publicando | ativo |
| Domínio `design.valenbrasil.com` | verificado, com certificado emitido |
| *Primary domain* + *Force HTTPS* | ativos |
| Visibilidade do Pages | público |
| `noindex` nas cinco páginas | ativo |
| Espelhamento GitLab → GitHub | ativo |

## Estrutura do repositório

```
README.md               este arquivo — guia completo
index.html              o guia publicado: página única com todos os componentes
styles.css              ponto de entrada único; só @imports
guia/                   react.min.js, react-dom.min.js, ds-bundle.js, gate.js — o que as páginas carregam
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
  icons/                os 49 ícones Lucide usados pelo sistema, sem CDN externo
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
| `assets/` | Logo, selo e os 49 ícones Lucide usados pelo sistema |
| `guia/` | React, o bundle de componentes e a tela de senha |
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

`--primary` = 500 · hover = 600 · texto verde = 600 (`--text-brand`) · fundo
de destaque = 50.

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

> **Contraste sobre branco:** 500 = 3,43:1 (reprova AA para texto pequeno),
> 600 = 4,70:1 (passa), 700 = 6,69:1 (folgado). Por isso `--text-brand` é o
> **600**: é o tom mais claro que ainda passa. Use o 700 quando quiser mais
> margem — texto pequeno sobre fundo tonal, por exemplo. O 500 fica para fundo
> de botão (com texto branco), ícones e elementos gráficos, nunca para texto
> sobre branco.

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

**Core** — Button, IconButton, Icon, Badge, Tag, Card, Separator, Avatar, Logo.

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

Duas continuam abertas e dependem de material ou de pessoas de fora do
repositório. As outras duas foram fechadas e ficam registradas para quem
encontrar a versão antiga deste texto.

### Abertas

1. **Fontes.** Jost, Manrope e JetBrains Mono são aproximações servidas pelo
   Google Fonts. Os arquivos originais do site (Framer) nunca foram
   fornecidos, e `framerusercontent.com` não é alcançável de onde o sistema
   foi montado.

   Para fechar: abra valenbrasil.com no navegador, DevTools → Network →
   filtro **Font**, recarregue e baixe os `.woff2` que aparecerem. Ponha-os em
   `assets/fonts/` e troque o `@import` de `tokens/fonts.css` por blocos
   `@font-face` apontando para eles. **Nenhum outro token muda** — os papéis
   tipográficos em `tokens/typography.css` referenciam as famílias por nome.

   Se as famílias reais forem outras (e não Jost/Manrope/JetBrains Mono),
   ajuste também `--font-display`, `--font-sans` e `--font-mono` no mesmo
   arquivo.

2. **Dashboard.** Não existe produto correspondente hoje. O fluxo de gestão de
   laudos é composição original: usa o vocabulário certo, mas nada nele foi
   confirmado com quem executa o trabalho.

   Para fechar: `handoff/VALIDACAO-DASHBOARD.md` traz o roteiro de perguntas,
   tela por tela, para levar a quem conduz um laudo do pedido à entrega.

### Fechadas

3. **Preset shadcn `b3acDp3htA`** — *resolvida*. O ID não é resolvível
   publicamente, o que deixava em aberto se o `globals.css` bateria com o que
   o CLI do shadcn gera. Conferido: as 33 variáveis do contrato canônico estão
   todas declaradas em `handoff/globals.css`, e não há bloco `.dark`. O que
   sobra são variáveis próprias da marca, que não conflitam.

4. **Website e blog são reconstruções** — *não é defeito, é escopo*. Os
   repositórios de origem (`valen-design`, `valen-blog`) só tinham README, de
   modo que nenhum valor foi derivado de código: as telas reproduzem o
   conteúdo com fidelidade, não o pixel. Quem comparar com o site publicado
   vai encontrar diferenças de layout, e isso é esperado.
