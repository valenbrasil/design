import * as React from "react";
function Radio({
  options = [],
  value,
  defaultValue,
  name,
  onChange,
  orientation = "vertical",
  style,
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const sel = value === undefined ? internal : value;
  return (
    <div
      role="radiogroup"
      style={{
        display: "flex",
        flexDirection: orientation === "row" ? "row" : "column",
        gap: orientation === "row" ? "var(--space-5)" : "var(--space-3)",
        ...style,
      }}
    >
      {options.map((o) => {
        const opt =
          typeof o === "string"
            ? {
                value: o,
                label: o,
              }
            : o;
        const on = sel === opt.value;
        return (
          <label
            key={opt.value}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--space-2)",
              cursor: "pointer",
            }}
          >
            {/* Controle nativo, visualmente oculto: é ele que carrega o
                atributo name, faz o grupo ser submetido num <form> e agrupa
                as opções para leitores de tela. O visual fica nos spans. */}
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={on}
              onChange={() => {
                if (value === undefined) setInternal(opt.value);
                onChange && onChange(opt.value);
              }}
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                opacity: 0,
                margin: 0,
              }}
            />
            <span
              aria-hidden="true"
              style={{
                width: 18,
                height: 18,
                marginTop: 1,
                borderRadius: "var(--radius-full)",
                flexShrink: 0,
                border: "1px solid " + (on ? "var(--primary)" : "var(--input)"),
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "var(--transition-control)",
              }}
            >
              {on ? (
                <span
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: "var(--radius-full)",
                    background: "var(--primary)",
                  }}
                />
              ) : null}
            </span>
            <span
              style={{
                display: "grid",
                gap: 2,
              }}
            >
              <span
                style={{
                  font: "var(--type-body-sm)",
                  color: "var(--text-strong)",
                }}
              >
                {opt.label}
              </span>
              {opt.hint ? (
                <span
                  style={{
                    font: "var(--type-body-sm)",
                    color: "var(--text-muted)",
                  }}
                >
                  {opt.hint}
                </span>
              ) : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}
export { Radio };
