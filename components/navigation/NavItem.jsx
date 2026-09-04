import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function NavItem({ icon, label, active, badge, href = "#", onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "8px var(--space-3)",
        borderRadius: "var(--radius-control)",
        textDecoration: "none",
        background: active ? "var(--sidebar-accent)" : hover ? "var(--neutral-100)" : "transparent",
        color: active ? "var(--sidebar-accent-foreground)" : "var(--sidebar-foreground)",
        font: "var(--type-label)",
        transition: "var(--transition-control)",
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={18} /> : null}
      <span
        style={{
          flex: 1,
        }}
      >
        {label}
      </span>
      {badge !== undefined ? (
        <span
          style={{
            font: "var(--type-eyebrow)",
            color: "var(--text-muted)",
          }}
        >
          {badge}
        </span>
      ) : null}
    </a>
  );
}
export { NavItem };
