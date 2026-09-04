import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Accordion({ items = [], defaultOpen = -1, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div
      style={{
        display: "grid",
        ...style,
      }}
    >
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? "1px solid var(--border-subtle)" : "none",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <button
              onClick={() => setOpen(on ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-4)",
                background: "none",
                border: "none",
                padding: "var(--space-5) 0",
                cursor: "pointer",
                textAlign: "left",
                font: "var(--type-body-lg)",
                fontFamily: "var(--font-sans)",
                color: "var(--text-strong)",
              }}
            >
              {it.question}
              <Icon
                name="plus"
                size={18}
                style={{
                  color: "var(--sage-500)",
                  transform: on ? "rotate(45deg)" : "none",
                  transition: "transform var(--duration-base) var(--ease-out)",
                }}
              />
            </button>
            <div
              style={{
                maxHeight: on ? 500 : 0,
                overflow: "hidden",
                transition: "max-height var(--duration-slow) var(--ease-out)",
              }}
            >
              <p
                style={{
                  font: "var(--type-body)",
                  color: "var(--text-body)",
                  paddingBottom: "var(--space-5)",
                  maxWidth: "68ch",
                }}
              >
                {it.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export { Accordion };
