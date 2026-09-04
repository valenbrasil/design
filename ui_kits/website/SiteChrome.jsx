import * as React from "react";
import { Button } from "../../components/core/Button.jsx";
import { Logo } from "../../components/core/Logo.jsx";
import { Separator } from "../../components/core/Separator.jsx";
const IMG = {
  hero: "https://framerusercontent.com/images/g8gz0mdS11YCmrPVnYXoXX9FVs.jpeg?width=2048&height=2048",
  laudo:
    "https://framerusercontent.com/images/4AA7uQe07FSf0FmpbfC4ddhwrXI.png?width=3059&height=3048",
  processo:
    "https://framerusercontent.com/images/4ZBklDjL1UQ3v0QoJmd5H26zQ.jpg?width=1000&height=667",
  equipe:
    "https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg?width=1188&height=872",
  fundadoras:
    "https://framerusercontent.com/images/j8lcAYX3rubzUIpd0yW8K8Kic.jpeg?width=4281&height=5142",
  selo: "https://framerusercontent.com/images/5mDELZtlJmAv1D51M04Py8AZAw.png?width=430&height=415",
  post1:
    "https://framerusercontent.com/images/1YeGRvSF0R1GAO9zv7Sdw5w1iBw.jpg?width=750&height=500",
  post2:
    "https://framerusercontent.com/images/SeIFZwaV2MCG19R8WhcT3sw2R8k.jpg?width=2000&height=920",
  post3:
    "https://framerusercontent.com/images/lkPfXS6CzdUn8tGnjygLDhS5uk.webp?width=900&height=601",
};
const WRAP = {
  width: "100%",
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--space-6)",
};
function Eyebrow({ children }) {
  return (
    <span
      style={{
        font: "var(--type-eyebrow)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-widest)",
        color: "var(--text-muted)",
      }}
    >
      {children}
    </span>
  );
}
function SectionHead({ eyebrow, title, sub, align = "left" }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--space-3)",
        textAlign: align,
        justifyItems: align === "center" ? "center" : "start",
        marginBottom: "var(--space-12)",
      }}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        style={{
          font: "var(--type-h2)",
        }}
      >
        {title}
      </h2>
      {sub ? (
        <p
          style={{
            font: "var(--type-body-lg)",
            color: "var(--text-muted)",
            maxWidth: "48ch",
          }}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
function SiteHeader({ route, onNavigate }) {
  const link = (label, key) => (
    <a
      key={key}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onNavigate(key);
      }}
      style={{
        font: "var(--type-label)",
        color: route === key ? "var(--text-strong)" : "var(--text-body)",
        textDecoration: "none",
      }}
    >
      {label}
    </a>
  );
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "rgba(255,255,255,.82)",
        backdropFilter: "var(--blur-panel)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          ...WRAP,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
        >
          <Logo height={22} base="../../" />
        </a>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-8)",
          }}
        >
          {link("Home", "home")}
          {link("Blog", "blog")}
          <Button size="sm" iconRight="message-circle" href="https://wa.me/554731701572">
            WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
}
function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-16) 0 var(--space-8)",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "var(--space-12)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-4)",
            alignContent: "start",
          }}
        >
          <Logo height={20} base="../../" />
          <div
            style={{
              font: "var(--type-body-sm)",
              color: "var(--text-muted)",
              display: "grid",
              gap: 4,
            }}
          >
            <span>Valen Brasil Gestão Empresarial Ltda</span>
            <span
              style={{
                font: "var(--type-mono)",
                fontSize: 12,
              }}
            >
              CNPJ 39.819.814/0001-98 • Desde 2020
            </span>
            <span
              style={{
                font: "var(--type-mono)",
                fontSize: 12,
              }}
            >
              CAU PJ69468-1 • CRECI 11689-J
            </span>
            <span>Rua Samuel Heusi, 463 • Itajaí • Santa Catarina</span>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gap: "var(--space-3)",
            alignContent: "start",
          }}
        >
          <Eyebrow>Políticas</Eyebrow>
          <a
            href="#"
            style={{
              font: "var(--type-body-sm)",
            }}
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            style={{
              font: "var(--type-body-sm)",
            }}
          >
            Termos de Uso
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gap: "var(--space-3)",
            alignContent: "start",
          }}
        >
          <Eyebrow>Contato</Eyebrow>
          <a
            href="mailto:contato@valenbrasil.com"
            style={{
              font: "var(--type-body-sm)",
            }}
          >
            contato@valenbrasil.com
          </a>
          <a
            href="tel:+554731701572"
            style={{
              font: "var(--type-body-sm)",
            }}
          >
            +55 47 3170-1572
          </a>
        </div>
      </div>
      <div
        style={{
          ...WRAP,
          marginTop: "var(--space-12)",
        }}
      >
        <Separator />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "var(--space-4)",
            font: "var(--type-body-sm)",
            color: "var(--text-muted)",
          }}
        >
          <span>Copyright @2025</span>
          <span>valenbrasil.com</span>
        </div>
      </div>
    </footer>
  );
}

export { WRAP, IMG, Eyebrow, SectionHead, SiteHeader, SiteFooter };
