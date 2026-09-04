import * as React from "react";
const BASE = "assets/icons/";
function Icon({ name, size = 20, style, className }) {
  const url = BASE + name + ".svg";
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flexShrink: 0,
        background: "currentColor",
        WebkitMaskImage: "url(" + url + ")",
        maskImage: "url(" + url + ")",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
    />
  );
}
export { Icon };
