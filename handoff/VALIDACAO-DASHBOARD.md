# Validação do dashboard com a operação

O painel de gestão de laudos em `ui_kits/dashboard/` **não corresponde a um
produto existente**. Ele foi composto a partir do vocabulário da empresa
(laudo, vistoria, PTAM, NBR 14653, prazo) e de um fluxo plausível, não de um
sistema em uso nem de entrevistas com quem opera.

Isso não o torna inútil — ele mostra o design system aplicado a uma interface
densa, que é onde os componentes são mais exigidos. Mas **nada nele deve ser
tratado como requisito** antes de passar por quem faz o trabalho.

Este documento existe para que essa validação tenha um roteiro, em vez de
ficar como uma pendência vaga.

## Quem precisa responder

Quem hoje conduz um laudo do pedido à entrega — não quem gerencia à distância.
De preferência mais de uma pessoa, porque o processo real costuma variar entre
quem executa.

## O que perguntar, tela por tela

### Visão geral (`DashOverview`)

As quatro métricas no topo são **laudos no mês**, **vistorias agendadas**,
**ticket médio** e **prazo médio**.

- Essas quatro são as que você olharia primeiro de manhã? Qual sobra? Qual
  falta?
- "Prazo médio" está medido de quando a quando — da contratação à entrega, ou
  da vistoria à entrega?
- O aviso de laudo com prazo vencido aparece com destaque. Um laudo atrasado é
  exceção rara ou acontece toda semana? Isso muda se ele merece esse espaço.

### Lista de laudos (`DashLaudos`)

As colunas são **nº, imóvel, tipo, prazo, status**.

- O número `VB-2026-114` é um formato real ou inventado? Se real, como é
  gerado?
- Falta alguma coluna que você usa para achar um laudo: cliente, responsável
  técnico, cidade, valor?
- Os filtros oferecidos são por tipo e status. Você filtra por outra coisa?

### Estados do laudo

O fluxo desenhado é **Documentação → Em vistoria → Em análise → Entregue**,
mais **Atrasado** e **Judicial**.

- Esses estados existem? Com esses nomes?
- Falta algum: aguardando pagamento, aguardando documento do cliente,
  em revisão, cancelado, reprovado?
- Um laudo volta de estado alguma vez? A tela hoje assume que só avança.

### Detalhe do processo (`LaudoDetail`)

Mostra as etapas da avaliação numa linha do tempo.

- As três etapas (documentação, vistoria técnica, elaboração) cobrem o
  trabalho, ou há passos invisíveis aqui — pesquisa de mercado, ART/RRT,
  revisão por outro profissional, entrega formal?
- Quem precisa ver esse detalhe: só a equipe, ou o cliente também?

### Nova avaliação (`DashNova`)

- Os campos pedidos são os que você realmente precisa no início? O que
  costuma faltar e atrasa o processo?
- Quem abre um laudo: quem atende o cliente, ou quem vai executar?

### Agenda de vistorias

- A agenda hoje é uma lista. Vocês precisam de calendário, deslocamento entre
  imóveis, ou quem é o responsável por cada vistoria?

## Como registrar o resultado

Para cada resposta que divergir do desenhado, anote **o que é diferente** e
**o que acontece hoje na prática**. Duas frases bastam.

Com isso em mãos, o dashboard vira ou um protótipo corrigido, ou a base de um
briefing para desenvolvimento — e deixa de ser uma peça bonita cuja fidelidade
ninguém conferiu.

## O que NÃO é objetivo desta validação

- Discutir cores, espaçamentos ou tipografia. Isso vem do design system e já
  está definido.
- Decidir tecnologia. A questão aqui é o processo, não a implementação.
