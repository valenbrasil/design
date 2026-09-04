import { NavItem } from "../../components/navigation/NavItem.jsx";
import { Logo } from "../../components/core/Logo.jsx";
import { Separator } from "../../components/core/Separator.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Button } from "../../components/core/Button.jsx";
import { IconButton } from "../../components/core/IconButton.jsx";
import { Avatar } from "../../components/core/Avatar.jsx";
import * as React from "react";
const LAUDOS = [
  {
    id: "VB-2026-114",
    imovel: "Apartamento 704 • Ed. Marina",
    cidade: "Itajaí",
    tipo: "Laudo Completo",
    cliente: "Marcela Duarte",
    prazo: "12/09/2026",
    status: "Em vistoria",
    tone: "warning",
    progresso: 45,
    valor: "R$ 1.980",
  },
  {
    id: "VB-2026-113",
    imovel: "Casa • Bairro Estados",
    cidade: "Balneário Camboriú",
    tipo: "PTAM",
    cliente: "Construtora Nortis",
    prazo: "08/09/2026",
    status: "Entregue",
    tone: "success",
    progresso: 100,
    valor: "R$ 1.100",
  },
  {
    id: "VB-2026-112",
    imovel: "Terreno 1.240 m²",
    cidade: "Navegantes",
    tipo: "Judicial",
    cliente: "Escritório Lemos & Cia",
    prazo: "20/09/2026",
    status: "Documentação",
    tone: "info",
    progresso: 20,
    valor: "R$ 2.400",
  },
  {
    id: "VB-2026-111",
    imovel: "Sala comercial 302",
    cidade: "Itajaí",
    tipo: "PTAM",
    cliente: "Ana Beatriz Rocha",
    prazo: "05/09/2026",
    status: "Atrasado",
    tone: "danger",
    progresso: 70,
    valor: "R$ 1.000",
  },
  {
    id: "VB-2026-110",
    imovel: "Cobertura 1201",
    cidade: "Itapema",
    tipo: "Laudo Completo",
    cliente: "Família Bertoldi",
    prazo: "28/09/2026",
    status: "Em análise",
    tone: "neutral",
    progresso: 60,
    valor: "R$ 2.150",
  },
];
function DashSidebar({ route, onRoute }) {
  return (
    <aside
      style={{
        width: 244,
        flexShrink: 0,
        background: "var(--sidebar)",
        borderRight: "1px solid var(--sidebar-border)",
        padding: "var(--space-5) var(--space-4)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}
    >
      <div
        style={{
          padding: "0 var(--space-2)",
        }}
      >
        <Logo height={18} base="../../" />
      </div>
      <nav
        style={{
          display: "grid",
          gap: 2,
        }}
      >
        <NavItem
          icon="layout-dashboard"
          label="Vis\xE3o geral"
          active={route === "overview"}
          onClick={(e) => {
            e.preventDefault();
            onRoute("overview");
          }}
        />
        <NavItem
          icon="file-text"
          label="Laudos"
          badge={LAUDOS.length}
          active={route === "laudos"}
          onClick={(e) => {
            e.preventDefault();
            onRoute("laudos");
          }}
        />
        <NavItem
          icon="map-pin"
          label="Vistorias"
          badge={3}
          active={route === "vistorias"}
          onClick={(e) => {
            e.preventDefault();
            onRoute("vistorias");
          }}
        />
        <NavItem icon="users" label="Clientes" onClick={(e) => e.preventDefault()} />
        <NavItem icon="folder-open" label="Documentos" onClick={(e) => e.preventDefault()} />
      </nav>
      <Separator />
      <nav
        style={{
          display: "grid",
          gap: 2,
        }}
      >
        <NavItem icon="settings" label="Ajustes" onClick={(e) => e.preventDefault()} />
        <NavItem icon="life-buoy" label="Suporte" onClick={(e) => e.preventDefault()} />
      </nav>
      <div
        style={{
          marginTop: "auto",
          padding: "var(--space-3)",
          background: "var(--surface-brand-subtle)",
          borderRadius: "var(--radius-card)",
        }}
      >
        <strong
          style={{
            font: "var(--type-label)",
            color: "var(--sage-700)",
          }}
        >
          NBR 14653
        </strong>
        <p
          style={{
            font: "var(--type-body-sm)",
            color: "var(--sage-700)",
            marginTop: 4,
          }}
        >
          Todos os laudos seguem a norma vigente.
        </p>
      </div>
    </aside>
  );
}
function DashTopbar({ title, subtitle, onNew }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-6)",
        padding: "var(--space-5) var(--space-8)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--surface-page)",
      }}
    >
      <div>
        <h1
          style={{
            font: "var(--type-h3)",
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            style={{
              font: "var(--type-body-sm)",
              color: "var(--text-muted)",
              marginTop: 2,
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
        }}
      >
        <Input
          placeholder="Buscar im\xF3vel ou cliente"
          iconLeft="search"
          size="sm"
          style={{
            width: 240,
          }}
        />
        <IconButton icon="bell" label="Notifica\xE7\xF5es" variant="outline" size="sm" />
        <Button size="sm" iconLeft="plus" onClick={onNew}>
          Nova avaliação
        </Button>
        <Avatar name="Bettina Cesario" size="sm" />
      </div>
    </header>
  );
}

export { LAUDOS, DashSidebar, DashTopbar };
