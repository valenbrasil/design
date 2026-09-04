import * as React from "react";
function Tabs({ items = [], value, defaultValue, onChange, variant = "underline", style }) {
  const first = items.length
    ? typeof items[0] === "string"
      ? items[0]
      : items[0].value
    : undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value === undefined ? internal : value;
  const pick = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === "pill";
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: pill ? 4 : "var(--space-6)",
        borderBottom: pill ? "none" : "1px solid var(--border-subtle)",
        background: pill ? "var(--neutral-100)" : "transparent",
        padding: pill ? 4 : 0,
        borderRadius: pill ? "var(--radius-control)" : 0,
        ...style,
      }}
    >
      {items.map((it) => {
        const t =
          typeof it === "string"
            ? {
                value: it,
                label: it,
              }
            : it;
        const on = active === t.value;
        return (
          <button
            key={t.value}
            role="tab"
            aria-selected={on}
            onClick={() => pick(t.value)}
            style={{
              background: pill && on ? "var(--surface-card)" : "transparent",
              border: "none",
              font: "var(--type-label)",
              color: on ? "var(--text-strong)" : "var(--text-muted)",
              cursor: "pointer",
              padding: pill ? "6px 12px" : "0 0 10px",
              borderRadius: pill ? "var(--radius-sm)" : 0,
              boxShadow: pill && on ? "var(--shadow-xs)" : "none",
              borderBottom: pill ? "none" : "2px solid " + (on ? "var(--primary)" : "transparent"),
              marginBottom: pill ? 0 : -1,
              transition: "var(--transition-control)",
            }}
          >
            {t.label}
            {t.count !== undefined ? (
              <span
                style={{
                  color: "var(--text-muted)",
                  marginLeft: 6,
                }}
              >
                {t.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
export { Tabs };
