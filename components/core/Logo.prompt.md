# Logo

Marca oficial da Valen Brasil a partir dos arquivos em `assets/` — nunca redesenhe em SVG/CSS. `variant="full"` (padrão) usa o lettering completo, `"icon"` usa o selo circular. `base` é o prefixo de caminho até a pasta `assets/` (útil quando o componente é usado em páginas aninhadas). `height` em px, padrão 28.

Atenção: os nomes de arquivo padrão do componente (`assets/valen-logo.png`, `assets/valen-icone.png`) não coincidem com os arquivos de marca deste repositório (`assets/logo-valen-brasil.png`, `assets/selo-valen-brasil.png`) — ajuste os nomes de arquivo (ou o componente) antes de usar em produção.

```jsx
<Logo variant="full" height={28} base="/" />
```
