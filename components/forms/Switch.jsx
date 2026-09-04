import * as React from "react";
function Switch({ label, checked, defaultChecked, disabled, onChange, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  return (
    <label
      onClick={() => {
        if (disabled) return;
        if (checked === undefined) setInternal(!on);
        onChange && onChange(!on);
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <span
        style={{
          width: 38,
          height: 22,
          borderRadius: "var(--radius-full)",
          padding: 2,
          display: "inline-flex",
          background: on ? "var(--primary)" : "var(--neutral-300)",
          transition: "background-color var(--duration-base) var(--ease-in-out)",
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: "var(--radius-full)",
            background: "#fff",
            boxShadow: "var(--shadow-sm)",
            transform: on ? "translateX(16px)" : "translateX(0)",
            transition: "transform var(--duration-base) var(--ease-out)",
          }}
        />
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
export { Switch };
