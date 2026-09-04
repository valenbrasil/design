# Dialog

Modal centralizado com overlay (`--overlay`), título, descrição opcional, corpo livre (`children`) e rodapé de ações (`footer`, alinhado à direita). `open` (padrão `true`) controla a visibilidade — quando `false`, o componente retorna `null`. Sem `onClose`, o botão "×" não aparece.

```jsx
<Dialog open={aberto} title="Nova avaliação" onClose={() => setAberto(false)} footer={<Button onClick={salvar}>Salvar</Button>}>
  <Field label="Cliente"><Input /></Field>
</Dialog>
```
