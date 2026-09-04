import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Checkbox({ label, checked, defaultChecked, disabled, onChange, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label
      onClick={toggle}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: "var(--radius-sm)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: on ? "var(--primary)" : "var(--surface-card)",
          color: "var(--primary-foreground)",
          border: "1px solid " + (on ? "var(--primary)" : "var(--input)"),
          transition: "var(--transition-control)",
        }}
      >
        {on ? <Icon name="check" size={13} /> : null}
      </span>
      {label ? (
        <span
          style={{
            font: "var(--type-body-sm)",
            color: "var(--text-body)",
          }}
        >
          {label}
        </span>
      ) : null}
    </label>
  );
}
export { Checkbox };
