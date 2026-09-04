import * as React from "react";
function Progress({ value = 0, label, showValue, size = "md", style }) {
  const h = size === "sm" ? 4 : size === "lg" ? 10 : 6;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      style={{
        display: "grid",
        gap: 6,
        ...style,
      }}
    >
      {label || showValue ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            font: "var(--type-body-sm)",
            color: "var(--text-muted)",
          }}
        >
          <span>{label}</span>
          {showValue ? <span>{pct}%</span> : null}
        </div>
      ) : null}
      <div
        style={{
          height: h,
          background: "var(--neutral-200)",
          borderRadius: "var(--radius-full)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: pct + "%",
            height: "100%",
            background: "var(--primary)",
            borderRadius: "var(--radius-full)",
            transition: "width var(--duration-slow) var(--ease-out)",
          }}
        />
      </div>
    </div>
  );
}
export { Progress };
