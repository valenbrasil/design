import * as React from "react";
function Textarea({
  id,
  value,
  defaultValue,
  placeholder,
  rows = 4,
  invalid,
  disabled,
  onChange,
  style,
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      id={id}
      rows={rows}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: "100%",
        padding: "var(--space-3)",
        font: "var(--type-body-sm)",
        color: "var(--text-strong)",
        background: disabled ? "var(--neutral-100)" : "var(--surface-card)",
        resize: "vertical",
        border:
          "1px solid " + (invalid ? "var(--danger-500)" : focus ? "var(--ring)" : "var(--input)"),
        borderRadius: "var(--radius-control)",
        boxShadow: focus ? "var(--ring-focus)" : "none",
        outline: "none",
        transition: "var(--transition-control)",
        ...style,
      }}
    />
  );
}
export { Textarea };
