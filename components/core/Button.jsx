import * as React from "react";
import { Icon } from "./Icon.jsx";
const SIZES = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 var(--space-3)",
    font: "var(--type-body-sm)",
    gap: 6,
    icon: 16,
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 var(--space-4)",
    font: "var(--type-label)",
    gap: 8,
    icon: 18,
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 var(--space-6)",
    font: "var(--type-body)",
    gap: 10,
    icon: 20,
  },
};
const VARIANTS = {
  primary: {
    bg: "var(--primary)",
    fg: "var(--primary-foreground)",
    border: "transparent",
    bgHover: "var(--sage-600)",
  },
  secondary: {
    bg: "var(--secondary)",
    fg: "var(--secondary-foreground)",
    border: "transparent",
    bgHover: "var(--neutral-200)",
  },
  outline: {
    bg: "transparent",
    fg: "var(--text-strong)",
    border: "var(--border-strong)",
    bgHover: "var(--neutral-100)",
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-body)",
    border: "transparent",
    bgHover: "var(--neutral-100)",
  },
  link: {
    bg: "transparent",
    fg: "var(--text-brand)",
    border: "transparent",
    bgHover: "transparent",
  },
  destructive: {
    bg: "var(--destructive)",
    fg: "var(--destructive-foreground)",
    border: "transparent",
    bgHover: "var(--danger-700)",
  },
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  href,
  type = "button",
  onClick,
  style,
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? "a" : "button";
  const css = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: variant === "link" ? 0 : s.padding,
    font: s.font,
    letterSpacing: "var(--tracking-normal)",
    background: hover && !disabled ? v.bgHover : v.bg,
    color: v.fg,
    border: "1px solid " + v.border,
    borderRadius: "var(--radius-control)",
    textDecoration: variant === "link" && hover ? "underline" : "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transform: press && !disabled ? "scale(0.985)" : "none",
    transition: "var(--transition-control), transform var(--duration-fast) var(--ease-in-out)",
    whiteSpace: "nowrap",
    ...style,
  };
  return (
    <Tag
      // Um <a> ignora o atributo disabled, então um botão-link desabilitado
      // continuaria navegando: retiramos o href e barramos o clique.
      href={href && !disabled ? href : undefined}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      aria-disabled={disabled ? true : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={css}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </Tag>
  );
}
export { Button };
