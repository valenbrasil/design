import { Button } from "../../components/core/Button.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Eyebrow, WRAP, IMG } from "./SiteChrome.jsx";
import * as React from "react";
function HomeHero() {
  return (
    <section
      style={{
        background: "var(--surface-page)",
        padding: "var(--space-20) 0 var(--space-16)",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-6)",
            justifyItems: "start",
          }}
        >
          <Eyebrow>Avaliação Imobiliária</Eyebrow>
          <h1
            style={{
              font: "var(--type-display)",
              fontSize: "clamp(2.6rem,4.4vw,3.75rem)",
            }}
          >
            Laudo de Avaliação de Imóvel
          </h1>
          <p
            style={{
              font: "var(--type-body-lg)",
              color: "var(--text-body)",
              maxWidth: "44ch",
            }}
          >
            Descubra o valor do seu imóvel com a visão completa de arquitetos + engenheiros +
            corretores.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              alignItems: "center",
              marginTop: "var(--space-2)",
            }}
          >
            <Button size="lg" iconRight="arrow-right" href="https://wa.me/554731701572">
              Solicite sua avaliação
            </Button>
            <Badge tone="brand">Entrega em 3 dias úteis</Badge>
          </div>
        </div>
        <div
          style={{
            borderRadius: "var(--radius-2xl)",
            overflow: "hidden",
            aspectRatio: "1/1",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <img
            src={IMG.hero}
            alt="Im\xF3vel avaliado pela Valen Brasil"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
function TrustStrip() {
  const items = [
    ["shield-check", "Responsabilidade Técnica"],
    ["users", "Equipe Multidisciplinar"],
    ["scale", "Metodologia NBR 14653"],
    ["monitor-smartphone", "Contratação Online"],
    ["calendar-check", "Entrega em 3 dias úteis"],
    ["sigma", "Inferência Estatística"],
  ];
  return (
    <section
      style={{
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "var(--space-16) 0",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: ".9fr 1.1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-3)",
          }}
        >
          <Eyebrow>Segurança</Eyebrow>
          <h2
            style={{
              font: "var(--type-h2)",
            }}
          >
            Empresa Especializada
          </h2>
          <p
            style={{
              font: "var(--type-body-lg)",
              color: "var(--text-muted)",
            }}
          >
            Seu patrimônio é único. Seu valor também.
          </p>
        </div>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-4) var(--space-6)",
          }}
        >
          {items.map(([icon, label]) => (
            <li
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                font: "var(--type-body)",
                color: "var(--text-body)",
              }}
            >
              <Icon
                name={icon}
                size={18}
                style={{
                  color: "var(--sage-500)",
                }}
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { HomeHero, TrustStrip };
