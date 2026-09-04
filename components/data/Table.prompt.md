# Table

Tabela de dados simples, sem paginação nem ordenação embutidas (combine com Pagination). Cada coluna tem `key`, `label`, `align` opcional e um `render(row)` opcional para células customizadas (ex. um Badge de status); sem `render`, mostra `row[key]` diretamente.

```jsx
<Table
  columns={[{ key: "id", label: "ID" }, { key: "status", label: "Status", render: (r) => <Badge>{r.status}</Badge> }]}
  rows={[{ id: "VB-2026-114", status: "Em vistoria" }]}
/>
```
