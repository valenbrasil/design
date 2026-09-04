# Icon

Ícone Lucide (traço 2px) colorido por `currentColor`, renderizado via CSS `mask-image`. `name` é o nome kebab-case do ícone no Lucide (ex. `"arrow-right"`, `"shield-check"`). Nunca cole SVG à mão — use sempre este componente.

Dependência externa: busca cada SVG em tempo de execução em `https://unpkg.com/lucide-static@0.428.0/icons/` — exige rede no navegador. Num projeto Next.js real, troque por `lucide-react` (ver handoff/README.md); a prop `name` viraria o componente do ícone importado.

```jsx
<Icon name="shield-check" size={20} style={{ color: "var(--sage-600)" }} />
```
