import * as React from "react";
function Skeleton({
  width = "100%",
  height = 12,
  radius = "var(--radius-sm)",
  style
}) {
  return <span style={{
    display: "block",
    width,
    height,
    borderRadius: radius,
    background: "linear-gradient(90deg,var(--neutral-200) 25%,var(--neutral-100) 50%,var(--neutral-200) 75%)",
    backgroundSize: "200% 100%",
    animation: "valen-shimmer 1.4s linear infinite",
    ...style
  }}><style>{`@keyframes valen-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style></span>;
}
export { Skeleton };