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
`unpkg.com/lucide-static` — funciona para visualizar os kits em `ui_kits/`,
mas depende de rede em tempo de execução. Num projeto Next.js real, troque a
implementação de `Icon` para renderizar o componente correspondente de
`lucide-react` (import dinâmico por nome, ou um mapa `{ "arrow-right":
ArrowRight, ... }`), mantendo a mesma prop `name`.

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

Copie `assets/logo-valen-brasil.png` e `assets/selo-valen-brasil.png`. O
componente `Logo` (`components/core/Logo.jsx`) espera por padrão os nomes
`assets/valen-logo.png` e `assets/valen-icone.png` — ajuste o componente ou
renomeie os arquivos ao integrar, para os dois lados baterem.

## Regras não negociáveis

Ver a lista completa (7 regras) em "Handoff para desenvolvedores" no
`readme.md` da raiz. As duas mais fáceis de violar por acidente:

- Somente superfícies claras — nunca crie `.dark` nem use `neutral-900` como
  fundo de seção.
- Verde é acento, não fundo — reserve `--sage-500` para botão primário,
  ícones, links, badges, progresso e estado ativo de navegação.
