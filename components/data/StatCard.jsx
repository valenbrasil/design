import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function StatCard({ label, value, delta, deltaTone = "neutral", icon, style }) {
  const tones = {
    up: "var(--success-500)",
    down: "var(--danger-500)",
    neutral: "var(--text-muted)",
  };
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)",
        padding: "var(--space-5)",
        display: "grid",
        gap: "var(--space-2)",
        boxShadow: "var(--shadow-xs)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            font: "var(--type-eyebrow)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </span>
        {icon ? (
          <Icon
            name={icon}
            size={16}
            style={{
              color: "var(--sage-500)",
            }}
          />
        ) : null}
      </div>
      <strong
        style={{
          font: "var(--type-h3)",
          fontFamily: "var(--font-display)",
          color: "var(--text-strong)",
          fontWeight: "var(--weight-light)",
        }}
      >
        {value}
      </strong>
      {delta ? (
        <span
          style={{
            font: "var(--type-body-sm)",
            color: tones[deltaTone],
          }}
        >
          {delta}
        </span>
      ) : null}
    </div>
  );
}
export { StatCard };
