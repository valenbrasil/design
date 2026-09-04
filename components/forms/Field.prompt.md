# Field

Envolve um controle de formulário (Input, Select, Textarea…) com rótulo, asterisco de obrigatório e uma mensagem de `hint` ou `error` (error tem prioridade). Regra do sistema: rótulo sempre acima do campo — nunca use placeholder como rótulo.

```jsx
<Field label="E-mail" htmlFor="email" required>
  <Input id="email" type="email" iconLeft="mail" />
</Field>
```
