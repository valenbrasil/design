import * as React from "react";
import { Icon } from "../core/Icon.jsx";
const ALERT_TONES = {
  info: {
    bg: "var(--info-50)",
    fg: "var(--info-700)",
    icon: "info",
  },
  success: {
    bg: "var(--success-50)",
    fg: "var(--success-700)",
    icon: "circle-check",
  },
  warning: {
    bg: "var(--warning-50)",
    fg: "var(--warning-700)",
    icon: "triangle-alert",
  },
  danger: {
    bg: "var(--danger-50)",
    fg: "var(--danger-700)",
    icon: "circle-alert",
  },
  brand: {
    bg: "var(--surface-brand-subtle)",
    fg: "var(--sage-700)",
    icon: "badge-check",
  },
};
function Alert({ title, children, tone = "info", icon, style }) {
  const t = ALERT_TONES[tone] || ALERT_TONES.info;
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--space-3)",
        background: t.bg,
        borderRadius: "var(--radius-md)",
        padding: "var(--space-4)",
        border: "1px solid transparent",
        ...style,
      }}
    >
      <Icon
        name={icon || t.icon}
        size={18}
        style={{
          color: t.fg,
          marginTop: 1,
        }}
      />
      <div
        style={{
          display: "grid",
          gap: 2,
        }}
      >
        {title ? (
          <strong
            style={{
              font: "var(--type-label)",
              color: t.fg,
            }}
          >
            {title}
          </strong>
        ) : null}
        {children ? (
          <div
            style={{
              font: "var(--type-body-sm)",
              color: "var(--text-body)",
            }}
          >
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export { Alert };
