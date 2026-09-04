import * as React from "react";
import { Logo } from "../../components/core/Logo.jsx";
import { Field } from "../../components/forms/Field.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Checkbox } from "../../components/forms/Checkbox.jsx";
import { Separator } from "../../components/core/Separator.jsx";
import { Alert } from "../../components/feedback/Alert.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Badge } from "../../components/core/Badge.jsx";
function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [erro, setErro] = React.useState(false);
  const entrar = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErro(true);
      return;
    }
    setErro(false);
    window.location.href = "index.html";
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "var(--surface-page)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "var(--space-10) var(--space-12)",
        }}
      >
        <Logo height={20} base="../../" />
        <form
          onSubmit={entrar}
          style={{
            width: "100%",
            maxWidth: 380,
            margin: "0 auto",
            display: "grid",
            gap: "var(--space-5)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "var(--space-2)",
            }}
          >
            <h1
              style={{
                font: "var(--type-h2)",
                fontSize: "2rem",
              }}
            >
              Acessar o painel
            </h1>
            <p
              style={{
                font: "var(--type-body-sm)",
                color: "var(--text-muted)",
              }}
            >
              Gestão de laudos de avaliação da Valen Brasil.
            </p>
          </div>
          {erro ? (
            <Alert tone="danger" title="N\xE3o foi poss\xEDvel entrar">
              Verifique o e-mail informado e tente novamente.
            </Alert>
          ) : null}
          <Field label="E-mail" htmlFor="email" required={true}>
            <Input
              id="email"
              type="email"
              placeholder="nome@valenbrasil.com"
              iconLeft="mail"
              value={email}
              invalid={erro}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field label="Senha" htmlFor="senha" required={true}>
            <Input
              id="senha"
              type="password"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              iconLeft="lock"
            />
          </Field>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox label="Manter conectado" defaultChecked={true} />
            <a
              href="#"
              style={{
                font: "var(--type-body-sm)",
              }}
            >
              Esqueci minha senha
            </a>
          </div>
          <Button type="submit" size="lg" fullWidth={true} iconRight="arrow-right">
            Entrar
          </Button>
          <Separator label="ou" />
          <Button variant="outline" size="lg" fullWidth={true} iconLeft="building-2">
            Entrar com conta corporativa
          </Button>
          <p
            style={{
              font: "var(--type-body-sm)",
              color: "var(--text-muted)",
              textAlign: "center",
            }}
          >
            Ainda não tem acesso? <a href="https://wa.me/554731701572">Fale com a equipe</a>
          </p>
        </form>
        <span
          style={{
            font: "var(--type-mono)",
            fontSize: 11,
            color: "var(--text-muted)",
          }}
        >
          CNPJ 39.819.814/0001-98 • CAU PJ69468-1 • CRECI 11689-J
        </span>
      </div>
      <aside
        style={{
          background: "var(--surface-contrast)",
          borderLeft: "1px solid var(--sage-200)",
          padding: "var(--space-12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "var(--space-8)",
        }}
      >
        <Badge tone="brand">NBR 14653</Badge>
        <h2
          style={{
            font: "var(--type-h2)",
            color: "var(--sage-800)",
            maxWidth: "16ch",
          }}
        >
          Seu patrimônio é único. Seu valor também.
        </h2>
        <div
          style={{
            display: "grid",
            gap: "var(--space-4)",
            maxWidth: 420,
          }}
        >
          {[
            [
              "shield-check",
              "Responsabilidade Técnica",
              "RRT de perito arquiteto ou ART de engenheiro em todo laudo completo.",
            ],
            [
              "users",
              "Equipe Multidisciplinar",
              "Arquitetos, engenheiros e corretores atuando de forma integrada.",
            ],
            [
              "calendar-check",
              "Entrega em 3 dias úteis",
              "Avaliação mercadológica com prazo fechado.",
            ],
          ].map(([ic, t, d]) => (
            <div
              key={t}
              style={{
                display: "flex",
                gap: "var(--space-3)",
              }}
            >
              <Icon
                name={ic}
                size={20}
                style={{
                  color: "var(--sage-600)",
                  marginTop: 2,
                }}
              />
              <div>
                <div
                  style={{
                    font: "var(--type-label)",
                    color: "var(--sage-800)",
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    font: "var(--type-body-sm)",
                    color: "var(--sage-700)",
                  }}
                >
                  {d}
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="../../assets/valen-icone.png"
          alt=""
          style={{
            width: 56,
            opacity: 0.8,
          }}
        />
      </aside>
    </div>
  );
}

export { LoginScreen };
