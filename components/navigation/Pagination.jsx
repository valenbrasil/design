import * as React from "react";
import { IconButton } from "../core/IconButton.jsx";
function Pagination({ page = 1, total = 1, onChange, style }) {
  const pages = Array.from(
    {
      length: total,
    },
    (_, i) => i + 1,
  );
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        ...style,
      }}
    >
      <IconButton
        icon="chevron-left"
        label="Anterior"
        variant="outline"
        size="sm"
        disabled={page <= 1}
        onClick={() => onChange && onChange(page - 1)}
      />
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange && onChange(p)}
          style={{
            minWidth: 32,
            height: 32,
            borderRadius: "var(--radius-control)",
            cursor: "pointer",
            border: "1px solid " + (p === page ? "var(--primary)" : "transparent"),
            background: p === page ? "var(--surface-brand-subtle)" : "transparent",
            color: p === page ? "var(--sage-700)" : "var(--text-muted)",
            font: "var(--type-body-sm)",
            transition: "var(--transition-control)",
          }}
        >
          {p}
        </button>
      ))}
      <IconButton
        icon="chevron-right"
        label="Proxima"
        variant="outline"
        size="sm"
        disabled={page >= total}
        onClick={() => onChange && onChange(page + 1)}
      />
    </nav>
  );
}
export { Pagination };
