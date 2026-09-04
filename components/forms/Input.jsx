import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Input({
  id,
  value,
  defaultValue,
  placeholder,
  type = "text",
  size = "md",
  iconLeft,
  invalid,
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
      {iconLeft ? (
        <Icon
          name={iconLeft}
          size={16}
          style={{
            position: "absolute",
            left: 12,
            color: "var(--text-muted)",
          }}
        />
      ) : null}
      <input
        id={id}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          height: h,
          padding: iconLeft ? "0 var(--space-3) 0 34px" : "0 var(--space-3)",
          font: "var(--type-body-sm)",
          color: "var(--text-strong)",
          background: disabled ? "var(--neutral-100)" : "var(--surface-card)",
          border:
            "1px solid " + (invalid ? "var(--danger-500)" : focus ? "var(--ring)" : "var(--input)"),
          borderRadius: "var(--radius-control)",
          boxShadow: focus ? "var(--ring-focus)" : "none",
          outline: "none",
          transition: "var(--transition-control)",
          ...style,
        }}
      />
    </div>
  );
}
export { Input };
