import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Breadcrumb({ items = [], style }) {
  return (
    <nav
      aria-label="Trilha"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        font: "var(--type-body-sm)",
        color: "var(--text-muted)",
        ...style,
      }}
    >
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 ? (
            <Icon
              name="chevron-right"
              size={14}
              style={{
                color: "var(--neutral-400)",
              }}
            />
          ) : null}
          {it.href && i < items.length - 1 ? (
            <a
              href={it.href}
              style={{
                color: "var(--text-muted)",
              }}
            >
              {it.label}
            </a>
          ) : (
            <span
              style={{
                color: i === items.length - 1 ? "var(--text-strong)" : "var(--text-muted)",
              }}
            >
              {it.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
export { Breadcrumb };
