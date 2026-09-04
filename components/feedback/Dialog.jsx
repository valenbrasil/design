import * as React from "react";
import { Icon } from "../core/Icon.jsx";
function Dialog({ open = true, title, description, children, footer, onClose, width = 480 }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-6)",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--overlay)",
          backdropFilter: "blur(2px)",
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: width,
          background: "var(--surface-card)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-xl)",
          padding: "var(--space-6)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            marginBottom: "var(--space-4)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 4,
            }}
          >
            <h3
              style={{
                font: "var(--type-h4)",
                color: "var(--text-strong)",
              }}
            >
              {title}
            </h3>
            {description ? (
              <p
                style={{
                  font: "var(--type-body-sm)",
                  color: "var(--text-muted)",
                }}
              >
                {description}
              </p>
            ) : null}
          </div>
          {onClose ? (
            <button
              onClick={onClose}
              aria-label="Fechar"
              style={{
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                display: "inline-flex",
                padding: 0,
              }}
            >
              <Icon name="x" size={18} />
            </button>
          ) : null}
        </div>
        {children}
        {footer ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "var(--space-2)",
              marginTop: "var(--space-6)",
            }}
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export { Dialog };
