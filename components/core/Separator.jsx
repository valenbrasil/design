import * as React from "react";
function Separator({ orientation = "horizontal", label, style }) {
  if (label)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          ...style,
        }}
      >
        <span
          style={{
            flex: 1,
            height: 1,
            background: "var(--border-subtle)",
          }}
        />
        <span
          style={{
            font: "var(--type-eyebrow)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-widest)",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            flex: 1,
            height: 1,
            background: "var(--border-subtle)",
          }}
        />
      </div>
    );
  return (
    <span
      role="separator"
      style={
        orientation === "vertical"
          ? {
              width: 1,
              alignSelf: "stretch",
              background: "var(--border-subtle)",
              ...style,
            }
          : {
              display: "block",
              height: 1,
              width: "100%",
              background: "var(--border-subtle)",
              ...style,
            }
      }
    />
  );
}
export { Separator };
