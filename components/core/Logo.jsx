import * as React from "react";
function Logo({ variant = "full", height = 28, base = "", style }) {
  const src = base + (variant === "icon" ? "assets/valen-icone.png" : "assets/valen-logo.png");
  return (
    <img
      src={src}
      alt="Valen Brasil"
      style={{
        height,
        width: "auto",
        display: "block",
        ...style,
      }}
    />
  );
}
export { Logo };
