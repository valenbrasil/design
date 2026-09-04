# Radio

Grupo de opções de escolha única (`role="radiogroup"`). Cada opção pode ser uma string simples ou `{ value, label, hint }`. Controlado via `value`+`onChange` ou não controlado via `defaultValue`. `orientation` empilha verticalmente (padrão) ou em linha (`"row"`).

```jsx
<Radio name="tipo" options={[{ value: "ptam", label: "PTAM" }, { value: "completo", label: "Laudo Completo" }]} />
```
