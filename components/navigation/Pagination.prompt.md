# Pagination

Paginação numerada (1..total) com setas anterior/próxima via IconButton; os botões de extremidade desabilitam automaticamente nas bordas (`page <= 1` / `page >= total`).

```jsx
<Pagination page={2} total={8} onChange={setPage} />
```
