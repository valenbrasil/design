import { Tabs } from "../../components/navigation/Tabs.jsx";
import { Table } from "../../components/data/Table.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { IconButton } from "../../components/core/IconButton.jsx";
import { Select } from "../../components/forms/Select.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Tag } from "../../components/core/Tag.jsx";
import { Pagination } from "../../components/navigation/Pagination.jsx";
import { Card, CardHeader } from "../../components/core/Card.jsx";
import { Progress } from "../../components/feedback/Progress.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Breadcrumb } from "../../components/navigation/Breadcrumb.jsx";
import { Avatar } from "../../components/core/Avatar.jsx";
import { LAUDOS } from "./DashShell.jsx";
import * as React from "react";
function DashLaudos({ onSelect }) {
  const [tab, setTab] = React.useState("todos");
  const [page, setPage] = React.useState(1);
  const rows =
    tab === "todos"
      ? LAUDOS
      : LAUDOS.filter((l) =>
          tab === "andamento" ? l.status !== "Entregue" : l.status === "Entregue",
        );
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--space-5)",
        padding: "var(--space-8)",
      }}
    >
      <Tabs
        value={tab}
        onChange={setTab}
        items={[
          {
            value: "todos",
            label: "Todos",
            count: LAUDOS.length,
          },
          {
            value: "andamento",
            label: "Em andamento",
            count: 4,
          },
          {
            value: "entregues",
            label: "Entregues",
            count: 1,
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          flexWrap: "wrap",
        }}
      >
        <Select
          size="sm"
          placeholder="Tipo"
          options={["PTAM", "Laudo Completo", "Judicial"]}
          style={{
            width: 170,
          }}
        />
        <Select
          size="sm"
          placeholder="Cidade"
          options={["Itajaí", "Balneário Camboriú", "Navegantes", "Itapema"]}
          style={{
            width: 190,
          }}
        />
        <Input
          size="sm"
          placeholder="Buscar n\xBA do laudo"
          iconLeft="search"
          style={{
            width: 210,
          }}
        />
        <Tag onRemove={() => {}}>Prazo: setembro</Tag>
      </div>
      <Table
        columns={[
          {
            key: "id",
            label: "Nº",
            render: (r) => (
              <span
                style={{
                  font: "var(--type-mono)",
                  fontSize: 12,
                }}
              >
                {r.id}
              </span>
            ),
          },
          {
            key: "imovel",
            label: "Imóvel",
            render: (r) => (
              <div>
                <div
                  style={{
                    color: "var(--text-strong)",
                  }}
                >
                  {r.imovel}
                </div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 12,
                  }}
                >
                  {r.cidade}
                </div>
              </div>
            ),
          },
          {
            key: "cliente",
            label: "Cliente",
          },
          {
            key: "tipo",
            label: "Tipo",
          },
          {
            key: "valor",
            label: "Honorários",
            align: "right",
          },
          {
            key: "prazo",
            label: "Prazo",
            align: "right",
          },
          {
            key: "status",
            label: "Status",
            render: (r) => <Badge tone={r.tone}>{r.status}</Badge>,
          },
          {
            key: "acao",
            label: "",
            align: "right",
            render: (r) => (
              <IconButton
                icon="arrow-right"
                label="Abrir laudo"
                size="sm"
                onClick={() => onSelect(r)}
              />
            ),
          },
        ]}
        rows={rows}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Pagination page={page} total={3} onChange={setPage} />
      </div>
    </div>
  );
}
function LaudoDetail({ laudo, onBack }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--space-6)",
        padding: "var(--space-8)",
      }}
    >
      <Breadcrumb
        items={[
          {
            label: "Laudos",
            href: "#",
          },
          {
            label: laudo.id,
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-6)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-2)",
          }}
        >
          <h2
            style={{
              font: "var(--type-h2)",
              fontSize: "2rem",
            }}
          >
            {laudo.imovel}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              font: "var(--type-body-sm)",
              color: "var(--text-muted)",
            }}
          >
            <span
              style={{
                font: "var(--type-mono)",
                fontSize: 12,
              }}
            >
              {laudo.id}
            </span>
            <span>•</span>
            <span>{laudo.cidade}</span>
            <span>•</span>
            <span>{laudo.tipo}</span>
            <Badge tone={laudo.tone}>{laudo.status}</Badge>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "var(--space-2)",
          }}
        >
          <Button variant="outline" iconLeft="download">
            Baixar PDF
          </Button>
          <Button iconRight="send">Enviar ao cliente</Button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "var(--space-6)",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-6)",
          }}
        >
          <Card>
            <CardHeader eyebrow="Andamento" title="Etapas da avalia\xE7\xE3o" />
            <Progress value={laudo.progresso} showValue={true} label="Conclus\xE3o" />
            <div
              style={{
                display: "grid",
                gap: "var(--space-4)",
                marginTop: "var(--space-5)",
              }}
            >
              {[
                ["Documentação", "Concluída em 02/09", "circle-check", "var(--success-500)"],
                ["Vistoria técnica", "Agendada para 09/09 às 09h00", "clock", "var(--warning-500)"],
                [
                  "Elaboração do laudo",
                  "Aguardando vistoria",
                  "circle-dashed",
                  "var(--text-muted)",
                ],
              ].map(([t, s, ic, c]) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    gap: "var(--space-3)",
                  }}
                >
                  <Icon
                    name={ic}
                    size={18}
                    style={{
                      color: c,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        font: "var(--type-label)",
                        color: "var(--text-strong)",
                      }}
                    >
                      {t}
                    </div>
                    <div
                      style={{
                        font: "var(--type-body-sm)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {s}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader
              eyebrow="Documentos"
              title="Arquivos do im\xF3vel"
              action={
                <Button size="sm" variant="outline" iconLeft="upload">
                  Enviar
                </Button>
              }
            />
            <Table
              columns={[
                {
                  key: "nome",
                  label: "Arquivo",
                },
                {
                  key: "tipo",
                  label: "Tipo",
                },
                {
                  key: "data",
                  label: "Recebido",
                  align: "right",
                },
              ]}
              rows={[
                {
                  nome: "Matrícula 42.318",
                  tipo: "PDF",
                  data: "02/09/2026",
                },
                {
                  nome: "IPTU 2026",
                  tipo: "PDF",
                  data: "02/09/2026",
                },
                {
                  nome: "Planta baixa",
                  tipo: "DWG",
                  data: "03/09/2026",
                },
              ]}
            />
          </Card>
        </div>
        <div
          style={{
            display: "grid",
            gap: "var(--space-4)",
          }}
        >
          <Card>
            <CardHeader eyebrow="Contrato" title="Resumo" />
            <div
              style={{
                display: "grid",
                gap: "var(--space-3)",
                font: "var(--type-body-sm)",
              }}
            >
              {[
                ["Cliente", laudo.cliente],
                ["Finalidade", laudo.tipo === "Judicial" ? "Ação judicial" : "Compra e venda"],
                ["Honorários", laudo.valor],
                ["Prazo", laudo.prazo],
                ["Norma", "NBR 14653"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "var(--space-4)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      color: "var(--text-strong)",
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader eyebrow="Respons\xE1vel" title="Perito avaliador" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
              }}
            >
              <Avatar name="Bettina Cesario" />
              <div>
                <div
                  style={{
                    font: "var(--type-label)",
                    color: "var(--text-strong)",
                  }}
                >
                  Bettina Cesario
                </div>
                <div
                  style={{
                    font: "var(--type-mono)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                  }}
                >
                  RRT 000000 • CNAI
                </div>
              </div>
            </div>
          </Card>
          <Button variant="ghost" iconLeft="arrow-left" onClick={onBack}>
            Voltar aos laudos
          </Button>
        </div>
      </div>
    </div>
  );
}

export { DashLaudos, LaudoDetail };
