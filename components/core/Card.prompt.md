# Card / CardHeader

Contêiner branco com borda 1px, raio `--radius-card` e sombra mínima (sem gradiente, sem borda colorida à esquerda). Tons: `default`, `subtle`, `brand`, `contrast`. Com `interactive`, sobe 2px e ganha sombra `md` no hover. `CardHeader` compõe eyebrow + título + ação (ex. um Badge) no topo do card.

```jsx
<Card interactive>
  <CardHeader eyebrow="Serviço" title="Laudo Completo" action={<Badge tone="brand">3 dias</Badge>} />
  <p>Determinação do valor de mercado do imóvel.</p>
</Card>
```
