import * as React from "react";
import { Icon } from "./Icon.jsx";
function Tag({ children, onRemove, style }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "var(--surface-subtle)",
        color: "var(--text-body)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-sm)",
        padding: "4px 8px",
        font: "var(--type-body-sm)",
        ...style,
      }}
    >
      {children}
      {onRemove ? (
        <button
          onClick={onRemove}
          aria-label="Remover"
          style={{
            display: "inline-flex",
            background: "none",
            border: "none",
            padding: 0,
            color: "var(--text-muted)",
            cursor: "pointer",
          }}
        >
          <Icon name="x" size={14} />
        </button>
      ) : null}
    </span>
  );
}
export { Tag };
