import * as React from "react";
const AV = {
  sm: 28,
  md: 40,
  lg: 56,
  xl: 80,
};
function Avatar({ src, name = "", size = "md", style }) {
  const px = AV[size] || AV.md;
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      style={{
        width: px,
        height: px,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--sage-100)",
        color: "var(--sage-700)",
        font: "var(--type-label)",
        fontSize: px * 0.36,
        flexShrink: 0,
        border: "1px solid var(--border-subtle)",
        ...style,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        initials
      )}
    </span>
  );
}
export { Avatar };
