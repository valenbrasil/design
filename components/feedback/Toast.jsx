import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Toast({ title, description, tone = "neutral", onClose, style }) {
  const icons = {
    neutral: "bell",
    success: "circle-check",
    danger: "circle-alert",
  };
  const colors = {
    neutral: "var(--text-muted)",
    success: "var(--success-500)",
    danger: "var(--danger-500)",
  };
  return (
    <div
      role="status"
      style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        padding: "var(--space-4)",
        minWidth: 300,
        maxWidth: 400,
        ...style,
      }}
    >
      <Icon
        name={icons[tone]}
        size={18}
        style={{
          color: colors[tone],
          marginTop: 1,
        }}
      />
      <div
        style={{
          display: "grid",
          gap: 2,
          flex: 1,
        }}
      >
        <strong
          style={{
            font: "var(--type-label)",
            color: "var(--text-strong)",
          }}
        >
          {title}
        </strong>
        {description ? (
          <span
            style={{
              font: "var(--type-body-sm)",
              color: "var(--text-muted)",
            }}
          >
            {description}
          </span>
        ) : null}
      </div>
      {onClose ? (
        <button
          onClick={onClose}
          aria-label="Fechar"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            color: "var(--text-muted)",
            cursor: "pointer",
            display: "inline-flex",
          }}
        >
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </div>
  );
}
export { Toast };
