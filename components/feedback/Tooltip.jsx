import * as React from "react";
function Tooltip({ label, children, placement = "top", style }) {
  const [open, setOpen] = React.useState(false);
  const pos =
    placement === "bottom"
      ? {
          top: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
        }
      : {
          bottom: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
        };
  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        ...style,
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute",
          ...pos,
          background: "var(--surface-card)",
          color: "var(--text-strong)",
          border: "1px solid var(--border-strong)",
          boxShadow: "var(--shadow-md)",
          font: "var(--type-body-sm)",
          fontSize: 12,
          padding: "6px 8px",
          borderRadius: "var(--radius-sm)",
          whiteSpace: "nowrap",
          opacity: open ? 1 : 0,
          pointerEvents: "none",
          zIndex: 40,
          transition: "opacity var(--duration-fast) var(--ease-in-out)",
        }}
      >
        {label}
      </span>
    </span>
  );
}
export { Tooltip };
