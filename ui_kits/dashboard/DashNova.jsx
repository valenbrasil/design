import { Dialog } from "../../components/feedback/Dialog.jsx";
import { Field } from "../../components/forms/Field.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Select } from "../../components/forms/Select.jsx";
import { Textarea } from "../../components/forms/Textarea.jsx";
import { Radio } from "../../components/forms/Radio.jsx";
import { Checkbox } from "../../components/forms/Checkbox.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Card, CardHeader } from "../../components/core/Card.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Switch } from "../../components/forms/Switch.jsx";
import * as React from "react";
function NovaAvaliacaoDialog({ open, onClose, onCreated }) {
  return (
    <Dialog
      open={open}
      width={560}
      title="Nova avalia\xE7\xE3o"
      description="Preencha os dados do im\xF3vel para abrir o processo."
      onClose={onClose}
      footer={
        <React.Fragment>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button iconRight="arrow-right" onClick={onCreated}>
            Criar processo
          </Button>
        </React.Fragment>
      }
    >
      <div
        style={{
          display: "grid",
          gap: "var(--space-4)",
        }}
      >
        <Radio
          defaultValue="ptam"
          options={[
            {
              value: "ptam",
              label: "Avaliação Mercadológica (PTAM)",
              hint: "Entrega em 3 dias úteis, sem vistoria técnica",
            },
            {
              value: "full",
              label: "Laudo de Avaliação Completo",
              hint: "Com vistoria e responsabilidade técnica (RRT/ART)",
            },
          ]}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-4)",
          }}
        >
          <Field label="Cliente" required={true}>
            <Input placeholder="Nome ou raz\xE3o social" />
          </Field>
          <Field label="Finalidade">
            <Select
              placeholder="Selecione"
              options={[
                "Compra e venda",
                "Inventário",
                "Revisão de imposto",
                "Reajuste de aluguel",
                "Ação judicial",
              ]}
            />
          </Field>
          <Field label="Matr\xEDcula do im\xF3vel" hint="Matr\xEDcula atualizada">
            <Input placeholder="42.318" />
          </Field>
          <Field label="Cidade">
            <Select
              placeholder="Selecione"
              options={["Itajaí", "Balneário Camboriú", "Navegantes", "Itapema"]}
            />
          </Field>
        </div>
        <Field label="Objetivo da avalia\xE7\xE3o">
          <Textarea rows={3} placeholder="Descreva o objetivo e observa\xE7\xF5es relevantes" />
        </Field>
        <Checkbox
          label="Cliente autorizou vistoria t\xE9cnica no im\xF3vel"
          defaultChecked={true}
        />
      </div>
    </Dialog>
  );
}
function VistoriasView() {
  const items = [
    ["09 set • 09h00", "Apartamento 704 • Ed. Marina", "Itajaí", "Confirmada", "success"],
    ["11 set • 14h30", "Terreno 1.240 m²", "Navegantes", "A confirmar", "warning"],
    ["16 set • 10h00", "Cobertura 1201", "Itapema", "Confirmada", "success"],
  ];
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--space-6)",
        padding: "var(--space-8)",
        maxWidth: 900,
      }}
    >
      <Card>
        <CardHeader
          eyebrow="Agenda"
          title="Vistorias de setembro"
          action={<Switch label="Lembrete por WhatsApp" defaultChecked={true} />}
        />
        <div
          style={{
            display: "grid",
          }}
        >
          {items.map(([when, what, city, status, tone], i) => (
            <div
              key={when}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                padding: "var(--space-4) 0",
                borderTop: i ? "1px solid var(--border-subtle)" : "none",
              }}
            >
              <Icon
                name="calendar-clock"
                size={20}
                style={{
                  color: "var(--sage-500)",
                }}
              />
              <div
                style={{
                  flex: 1,
                }}
              >
                <div
                  style={{
                    font: "var(--type-label)",
                    color: "var(--text-strong)",
                  }}
                >
                  {what}
                </div>
                <div
                  style={{
                    font: "var(--type-body-sm)",
                    color: "var(--text-muted)",
                  }}
                >
                  {when} • {city}
                </div>
              </div>
              <Badge tone={tone}>{status}</Badge>
              <Button size="sm" variant="outline">
                Reagendar
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export { NovaAvaliacaoDialog, VistoriasView };
