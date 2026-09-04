import * as React from "react";
function Card({ children, padding = "var(--space-6)", tone = "default", interactive, style }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid var(--border-subtle)",
    },
    brand: {
      background: "var(--surface-brand-subtle)",
      border: "1px solid var(--sage-200)",
    },
    contrast: {
      background: "var(--surface-contrast)",
      border: "1px solid var(--sage-200)",
    },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...tones[tone],
        borderRadius: "var(--radius-card)",
        padding,
        boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: interactive && hover ? "translateY(-2px)" : "none",
        transition:
          "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
function CardHeader({ title, eyebrow, action, style }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        marginBottom: "var(--space-4)",
        ...style,
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 4,
        }}
      >
        {eyebrow ? (
          <span
            style={{
              font: "var(--type-eyebrow)",
              letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {eyebrow}
          </span>
        ) : null}
        {title ? (
          <h3
            style={{
              font: "var(--type-h4)",
              color: "var(--text-strong)",
            }}
          >
            {title}
          </h3>
        ) : null}
      </div>
      {action}
    </div>
  );
}
export { Card, CardHeader };
