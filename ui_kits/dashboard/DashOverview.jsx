import { StatCard } from "../../components/data/StatCard.jsx";
import { Card, CardHeader } from "../../components/core/Card.jsx";
import { Table } from "../../components/data/Table.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Progress } from "../../components/feedback/Progress.jsx";
import { Alert } from "../../components/feedback/Alert.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { LAUDOS } from "./DashShell.jsx";
import * as React from "react";
function DashOverview({ onOpen }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--space-6)",
        padding: "var(--space-8)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "var(--space-4)",
        }}
      >
        <StatCard
          label="Laudos no m\xEAs"
          value="14"
          delta="+3 vs. m\xEAs anterior"
          deltaTone="up"
          icon="file-text"
        />
        <StatCard label="Vistorias agendadas" value="6" delta="2 nesta semana" icon="map-pin" />
        <StatCard
          label="Ticket m\xE9dio"
          value="R$ 1.740"
          delta="-4%"
          deltaTone="down"
          icon="trending-up"
        />
        <StatCard
          label="Prazo m\xE9dio"
          value="4,2 dias"
          delta="dentro da meta"
          deltaTone="up"
          icon="calendar-check"
        />
      </div>
      <Alert tone="warning" title="1 laudo com prazo vencido">
        Sala comercial 302 • Itajaí — prazo 05/09/2026.
      </Alert>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: "var(--space-6)",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{
                font: "var(--type-h4)",
              }}
            >
              Laudos em andamento
            </h2>
            <Button variant="link" iconRight="arrow-right" onClick={() => onOpen("laudos")}>
              Ver todos
            </Button>
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
                key: "tipo",
                label: "Tipo",
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
            ]}
            rows={LAUDOS}
          />
        </div>
        <div
          style={{
            display: "grid",
            gap: "var(--space-4)",
          }}
        >
          <Card>
            <CardHeader eyebrow="Etapas" title="Progresso da carteira" />
            <div
              style={{
                display: "grid",
                gap: "var(--space-4)",
              }}
            >
              <Progress value={20} label="Documenta\xE7\xE3o" showValue={true} />
              <Progress value={45} label="Vistoria t\xE9cnica" showValue={true} />
              <Progress value={100} label="Entrega" showValue={true} />
            </div>
          </Card>
          <Card>
            <CardHeader eyebrow="Agenda" title="Pr\xF3ximas vistorias" />
            <div
              style={{
                display: "grid",
                gap: "var(--space-4)",
              }}
            >
              {[
                ["09 set • 09h00", "Apartamento 704 • Itajaí"],
                ["11 set • 14h30", "Terreno 1.240 m² • Navegantes"],
                ["16 set • 10h00", "Cobertura 1201 • Itapema"],
              ].map(([when, what]) => (
                <div
                  key={when}
                  style={{
                    display: "flex",
                    gap: "var(--space-3)",
                    alignItems: "flex-start",
                  }}
                >
                  <Icon
                    name="calendar"
                    size={16}
                    style={{
                      color: "var(--sage-500)",
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
                      {when}
                    </div>
                    <div
                      style={{
                        font: "var(--type-body-sm)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {what}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export { DashOverview };
