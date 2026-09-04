# Logo

Marca oficial da Valen Brasil a partir dos arquivos em `assets/` — nunca redesenhe em SVG/CSS. `variant="full"` (padrão) usa o lettering completo, `"icon"` usa o selo circular. `base` é o prefixo de caminho até a pasta `assets/` (útil quando o componente é usado em páginas aninhadas). `height` em px, padrão 28.

Os nomes padrão do componente (`assets/valen-logo.png`, `assets/valen-icone.png`) correspondem aos arquivos entregues em `assets/`. Ao mover a pasta de lugar, ajuste `base` em vez de renomear os arquivos.

```jsx
<Logo variant="full" height={28} base="/" />
```
