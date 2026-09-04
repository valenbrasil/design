import * as React from "react";
import { Icon } from "./Icon.jsx";
const IB_SIZES = {
  sm: {
    box: "2rem",
    icon: 16,
  },
  md: {
    box: "2.5rem",
    icon: 18,
  },
  lg: {
    box: "3rem",
    icon: 20,
  },
};
function IconButton({ icon, label, variant = "ghost", size = "md", disabled, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const s = IB_SIZES[size] || IB_SIZES.md;
  const bg = {
    ghost: "transparent",
    outline: "transparent",
    solid: "var(--primary)",
    subtle: "var(--neutral-100)",
  }[variant];
  const fg = variant === "solid" ? "var(--primary-foreground)" : "var(--text-body)";
  const bgHover = {
    ghost: "var(--neutral-100)",
    outline: "var(--neutral-100)",
    solid: "var(--sage-600)",
    subtle: "var(--neutral-200)",
  }[variant];
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: s.box,
        height: s.box,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: hover && !disabled ? bgHover : bg,
        color: fg,
        border: "1px solid " + (variant === "outline" ? "var(--border-strong)" : "transparent"),
        borderRadius: "var(--radius-control)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "var(--transition-control)",
        ...style,
      }}
    >
      <Icon name={icon} size={s.icon} />
    </button>
  );
}
export { IconButton };
