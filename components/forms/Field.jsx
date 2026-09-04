import * as React from "react";
function Field({ label, htmlFor, hint, error, required, children, style }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 6,
        ...style,
      }}
    >
      {label ? (
        <label
          htmlFor={htmlFor}
          style={{
            font: "var(--type-label)",
            color: "var(--text-strong)",
          }}
        >
          {label}
          {required ? (
            <span
              style={{
                color: "var(--danger-500)",
              }}
            >
              {" "}
              *
            </span>
          ) : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span
          style={{
            font: "var(--type-body-sm)",
            color: "var(--danger-500)",
          }}
        >
          {error}
        </span>
      ) : hint ? (
        <span
          style={{
            font: "var(--type-body-sm)",
            color: "var(--text-muted)",
          }}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
export { Field };
