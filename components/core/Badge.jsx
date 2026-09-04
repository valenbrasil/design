import * as React from "react";
const BADGE_TONES = {
  neutral: ["var(--neutral-100)", "var(--neutral-700)"],
  brand: ["var(--sage-50)", "var(--sage-700)"],
  solid: ["var(--primary)", "var(--primary-foreground)"],
  success: ["var(--success-50)", "var(--success-700)"],
  warning: ["var(--warning-50)", "var(--warning-700)"],
  danger: ["var(--danger-50)", "var(--danger-700)"],
  info: ["var(--info-50)", "var(--info-700)"],
  outline: ["transparent", "var(--text-body)"],
};
function Badge({ children, tone = "neutral", size = "md", style }) {
  const [bg, fg] = BADGE_TONES[tone] || BADGE_TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: bg,
        color: fg,
        border: "1px solid " + (tone === "outline" ? "var(--border-strong)" : "transparent"),
        borderRadius: "var(--radius-pill)",
        padding: size === "sm" ? "2px 8px" : "4px 10px",
        font: "var(--type-eyebrow)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "0.02em",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
export { Badge };
