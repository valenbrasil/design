import * as React from "react";
function Table({ columns = [], rows = [], style }) {
  return (
    <div
      style={{
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        background: "var(--surface-card)",
        ...style,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{
                  textAlign: c.align || "left",
                  font: "var(--type-eyebrow)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--text-muted)",
                  padding: "10px var(--space-4)",
                  background: "var(--surface-subtle)",
                  borderBottom: "1px solid var(--border-subtle)",
                  whiteSpace: "nowrap",
                }}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td
                  key={c.key}
                  style={{
                    textAlign: c.align || "left",
                    font: "var(--type-body-sm)",
                    color: "var(--text-body)",
                    padding: "var(--space-3) var(--space-4)",
                    borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
                  }}
                >
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export { Table };
