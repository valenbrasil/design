# Tabs

Grupo de abas (`role="tablist"`), controlado via `value`+`onChange` ou não controlado via `defaultValue` (primeira aba por padrão). Cada item pode ter um `count` mostrado ao lado do rótulo. Variantes: `underline` (padrão, linha inferior verde na aba ativa) ou `pill` (fundo cinza com aba ativa em cartão branco).

```jsx
<Tabs items={[{ value: "todos", label: "Todos", count: 24 }, { value: "atrasados", label: "Atrasados", count: 3 }]} />
```
