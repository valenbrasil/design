# Icon

Ícone Lucide (traço 2px) colorido por `currentColor`, renderizado via CSS `mask-image`. `name` é o nome kebab-case do ícone no Lucide (ex. `"arrow-right"`, `"shield-check"`). Nunca cole SVG à mão — use sempre este componente.

Os SVGs vêm de `assets/icons/` no próprio repositório (extraídos do `lucide-static@0.428.0`) — sem requisição a CDN. `BASE` respeita `window.__VALEN_ICON_BASE`, que páginas fora da raiz definem antes de carregar o componente. Num projeto Next.js real, troque por `lucide-react` (ver handoff/README.md); a prop `name` viraria o componente do ícone importado.

```jsx
<Icon name="shield-check" size={20} style={{ color: "var(--sage-600)" }} />
```
