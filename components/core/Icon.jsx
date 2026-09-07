import * as React from "react";
// Os SVGs vivem em assets/icons/, na raiz do site. Páginas servidas de um
// nível mais fundo definem window.__VALEN_ICON_BASE antes de carregar o
// componente para corrigir o caminho relativo.
const BASE =
  (typeof window !== "undefined" && window.__VALEN_ICON_BASE) || "assets/icons/";
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
