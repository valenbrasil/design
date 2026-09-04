# Toast

Notificação flutuante (card com sombra `lg`) para confirmações rápidas — não se auto-posiciona nem se auto-fecha; a página que a usa controla exibição e temporização. Tons: `neutral` (padrão), `success`, `danger`.

```jsx
<Toast tone="success" title="Processo criado" description="O laudo entrou na etapa de documentação." onClose={() => setToast(false)} />
```
