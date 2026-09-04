import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Select({
  id,
  options = [],
  value,
  defaultValue,
  placeholder,
  size = "md",
  disabled,
  onChange,
  style,
}) {
  const [focus, setFocus] = React.useState(false);
  const h =
    size === "sm"
      ? "var(--control-h-sm)"
      : size === "lg"
        ? "var(--control-h-lg)"
        : "var(--control-h-md)";
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <select
        id={id}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          height: h,
          padding: "0 34px 0 var(--space-3)",
          font: "var(--type-body-sm)",
          color: "var(--text-strong)",
          background: disabled ? "var(--neutral-100)" : "var(--surface-card)",
          border: "1px solid " + (focus ? "var(--ring)" : "var(--input)"),
          borderRadius: "var(--radius-control)",
          boxShadow: focus ? "var(--ring-focus)" : "none",
          appearance: "none",
          outline: "none",
          transition: "var(--transition-control)",
          ...style,
        }}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const opt =
            typeof o === "string"
              ? {
                  value: o,
                  label: o,
                }
              : o;
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      <Icon
        name="chevron-down"
        size={16}
        style={{
          position: "absolute",
          right: 12,
          color: "var(--text-muted)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
export { Select };
