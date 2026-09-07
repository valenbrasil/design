# Handoff para desenvolvedores

Guia rápido para começar um projeto Next.js novo a partir deste design system.

## 1. Inicializar o projeto

```
pnpm dlx shadcn@latest init --preset b3acDp3htA --template next
```

> **Atenção:** o ID de preset `b3acDp3htA` não é resolvível publicamente — ver
> "Pendências conhecidas" no `readme.md` da raiz do repositório. O sistema foi
> escrito contra o **contrato canônico de variáveis do shadcn** (os mesmos
> nomes que o CLI do shadcn sempre gera: `--background`, `--primary`,
> `--border` etc.), não contra este preset específico. Se o preset não
> resolver, rode `pnpm dlx shadcn@latest init --template next` (sem
> `--preset`) e compare o `app/globals.css` gerado com o deste pacote antes de
> substituir — os nomes de variável devem bater.

## 2. Trocar o globals.css

Depois do init, substitua o `app/globals.css` gerado pelo `handoff/globals.css`
deste repositório. Ele mantém todo o contrato de variáveis do shadcn e só troca
os valores pelos da marca Valen Brasil (verde sage, neutros, tipografia,
raios). Não adiciona bloco `.dark` — o sistema é exclusivamente claro.

## 3. Instalar os ícones

```
pnpm add lucide-react
```

Os componentes deste pacote usam um componente `Icon` que resolve ícones do
Lucide por nome (ex. `name="arrow-right"`). Na versão de referência
(`components/core/Icon.jsx`), isso é feito via `mask-image` apontando para
`assets/icons/`, que acompanha o repositório — são os 49 ícones efetivamente
usados pelo sistema, extraídos do `lucide-static@0.428.0`. Nenhuma requisição
de rede em tempo de execução. Páginas fora da raiz definem
`window.__VALEN_ICON_BASE` antes de carregar o bundle para corrigir o caminho
relativo.

Num projeto Next.js real, troque a implementação de `Icon` para renderizar o
componente correspondente de `lucide-react` (um mapa `{ "arrow-right":
ArrowRight, ... }`), mantendo a mesma prop `name`.

Atenção a um nome: `file-signature` foi renomeado para `file-pen-line` no
Lucide. O repositório entrega os dois arquivos, mas em código novo use
`file-pen-line`.

## 4. Copiar tokens e componentes

Copie as pastas `tokens/` e `components/` deste repositório para o projeto:

- `tokens/` — pode ficar como está e ser importado por `styles.css`, ou ter
  seus valores absorvidos diretamente no `globals.css` (já feito em
  `handoff/globals.css` para as variáveis do contrato shadcn).
- `components/` — copie mantendo a estrutura de subpastas
  (`core/data/feedback/forms/navigation`) e os imports relativos entre
  arquivos continuam funcionando sem alteração.
- Cada componente tem um `.d.ts` (contrato de props) e um `.prompt.md`
  (descrição curta em pt-BR, pensada para um agente de IA usar o componente
  corretamente sem precisar ler o código-fonte).

## 5. Assets de marca

Copie `assets/valen-logo.png` (lettering completo) e `assets/valen-icone.png`
(selo circular) preservando os nomes — são exatamente os que o componente
`Logo` (`components/core/Logo.jsx`) usa por padrão. Se a pasta `assets/` ficar
em outro caminho no projeto, passe o prefixo pela prop `base` em vez de
renomear os arquivos.

## Regras não negociáveis

Ver a lista completa (7 regras) em "Handoff para desenvolvedores" no
`readme.md` da raiz. As duas mais fáceis de violar por acidente:

- Somente superfícies claras — nunca crie `.dark` nem use `neutral-900` como
  fundo de seção.
- Verde é acento, não fundo — reserve `--sage-500` para botão primário,
  ícones, links, badges, progresso e estado ativo de navegação.
