import { Card, CardHeader } from "../../components/core/Card.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Accordion } from "../../components/data/Accordion.jsx";
import { SectionHead, Eyebrow, WRAP, IMG } from "./SiteChrome.jsx";
import * as React from "react";
function ServiceTypes() {
  return (
    <section
      style={{
        padding: "var(--section-y) 0",
      }}
    >
      <div style={WRAP}>
        <SectionHead eyebrow="Servi\xE7o" title="Tipos de avalia\xE7\xE3o" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr .8fr",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          <Card>
            <CardHeader
              title="Avalia\xE7\xE3o Mercadol\xF3gica (PTAM)"
              action={<Badge tone="brand">3 dias úteis</Badge>}
            />
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                display: "grid",
                gap: 8,
                font: "var(--type-body-sm)",
                color: "var(--text-body)",
              }}
            >
              <li>Determinação do valor de mercado do imóvel.</li>
              <li>Recomendado para negociações.</li>
              <li>Inclui Selo de Avaliador CNAI.</li>
              <li>
                Análise mercadológica para estimativas gerais, mantendo a credibilidade do valor de
                mercado, mas sem vistoria técnica.
              </li>
            </ul>
          </Card>
          <Card>
            <CardHeader
              title="Laudo de Avalia\xE7\xE3o Completo"
              action={<Badge tone="neutral">Com vistoria</Badge>}
            />
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                display: "grid",
                gap: 8,
                font: "var(--type-body-sm)",
                color: "var(--text-body)",
              }}
            >
              <li>Análise detalhada do imóvel e do mercado.</li>
              <li>
                Inclui Registro de Responsabilidade Técnica por perito arquiteto (RRT) ou engenheiro
                (ART).
              </li>
              <li>Recomendado para processos judiciais.</li>
            </ul>
          </Card>
          <div
            style={{
              display: "grid",
              gap: "var(--space-4)",
              justifyItems: "start",
            }}
          >
            <img
              src={IMG.laudo}
              alt="Modelo de laudo de avalia\xE7\xE3o"
              style={{
                width: "100%",
                borderRadius: "var(--radius-card)",
              }}
            />
            <Button
              variant="outline"
              iconLeft="download"
              href="https://link.valenbrasil.com/download"
            >
              Download das Avaliações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Applications() {
  const items = [
    ["landmark", "Avaliação Patrimonial", "Conheça o valor do imóvel para decisões assertivas."],
    [
      "key-round",
      "Compra e Venda",
      "Saiba o real valor do imóvel para boas negociações imobiliárias",
    ],
    [
      "receipt",
      "Revisão de Imposto",
      "Solicite a revisão do valor cobrado em impostos: IPTU, ITBI, ITCMD",
    ],
    ["scroll-text", "Inventário", "Apure o valor dos imóveis para heranças e partilhas."],
    [
      "file-pen-line",
      "Reajuste de Aluguel",
      "Renegocie corretamente na renovação do contrato de locação",
    ],
    ["gavel", "Ação Judicial", "Apresente o justo valor do imóvel objeto de uma ação na Justiça"],
  ];
  return (
    <section
      style={{
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--section-y) 0",
      }}
    >
      <div style={WRAP}>
        <SectionHead
          eyebrow="Aplica\xE7\xE3o"
          title="Avalia\xE7\xE3o de Im\xF3veis"
          sub="aplic\xE1vel em diferentes contextos"
          align="center"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "var(--space-6)",
          }}
        >
          {items.map(([icon, title, text]) => (
            <Card key={title} interactive={true}>
              <Icon
                name={icon}
                size={24}
                style={{
                  color: "var(--sage-500)",
                }}
              />
              <h3
                style={{
                  font: "var(--type-h4)",
                  margin: "var(--space-4) 0 var(--space-2)",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  font: "var(--type-body-sm)",
                  color: "var(--text-muted)",
                }}
              >
                {text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function Process() {
  const steps = [
    [
      "01",
      "Documentação",
      "Descrição dos objetivos da avaliação > Envio de documentos do imóvel > Assinatura do contrato",
    ],
    [
      "02",
      "Vistoria Técnica",
      "Para o Laudo Completo, agendamento com o Perito Avaliador para a vistoria técnica no imóvel avaliado",
    ],
    [
      "03",
      "Avaliação do Imóvel",
      "Desenvolvimento da avaliação e envio do documento dentro do prazo e formato acordados",
    ],
  ];
  return (
    <section
      style={{
        padding: "var(--section-y) 0",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        <div>
          <SectionHead eyebrow="Etapas" title="Entenda nosso processo" />
          <div
            style={{
              display: "grid",
              gap: "var(--space-6)",
            }}
          >
            {steps.map(([n, title, text]) => (
              <div
                key={n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "var(--space-4)",
                  paddingBottom: "var(--space-6)",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  style={{
                    font: "var(--type-mono)",
                    color: "var(--sage-500)",
                  }}
                >
                  {n}
                </span>
                <div>
                  <h3
                    style={{
                      font: "var(--type-h4)",
                      marginBottom: 4,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      font: "var(--type-body-sm)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={IMG.processo}
          alt="Vistoria t\xE9cnica"
          style={{
            width: "100%",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "var(--shadow-md)",
          }}
        />
      </div>
    </section>
  );
}
function Team() {
  const items = [
    [
      "Graduação Internacional",
      "A VALEN reúne profissionais graduados no Brasil e na Espanha, com visão global e estratégica de mercado",
    ],
    [
      "Equipe Nacional",
      "Peritos de diferentes regiões do Brasil, com técnica e experiência de mercados locais.",
    ],
    ["Projetos Nacionais", "Atuação em avaliações e projetos de abrangência nacional."],
  ];
  return (
    <section
      style={{
        background: "var(--surface-contrast)",
        padding: "var(--section-y) 0",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        <img
          src={IMG.equipe}
          alt="Peritos Valen Brasil"
          style={{
            width: "100%",
            borderRadius: "var(--radius-2xl)",
          }}
        />
        <div>
          <div
            style={{
              display: "grid",
              gap: "var(--space-3)",
              marginBottom: "var(--space-10)",
            }}
          >
            <span
              style={{
                font: "var(--type-eyebrow)",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-widest)",
                color: "var(--sage-600)",
              }}
            >
              Equipe
            </span>
            <h2
              style={{
                font: "var(--type-h2)",
              }}
            >
              Conheça nossos peritos
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gap: "var(--space-6)",
            }}
          >
            {items.map(([title, text]) => (
              <div key={title}>
                <h3
                  style={{
                    font: "var(--type-h4)",
                    marginBottom: 4,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    font: "var(--type-body-sm)",
                    color: "var(--text-muted)",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Story() {
  return (
    <section
      style={{
        padding: "var(--section-y) 0",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          gridTemplateColumns: ".85fr 1.15fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        <img
          src={IMG.fundadoras}
          alt="S\xF3cias-fundadoras"
          style={{
            width: "100%",
            aspectRatio: "4/5",
            objectFit: "cover",
            borderRadius: "var(--radius-2xl)",
          }}
        />
        <div
          style={{
            display: "grid",
            gap: "var(--space-5)",
          }}
        >
          <h2
            style={{
              font: "var(--type-h3)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            VALEN + BRASIL
          </h2>
          <p
            style={{
              font: "var(--type-label)",
              color: "var(--text-brand)",
            }}
          >
            Valência, Espanha + Santa Catarina, Brasil
          </p>
          <p
            style={{
              font: "var(--type-body)",
              maxWidth: "62ch",
            }}
          >
            A Valen Brasil surgiu em Valência, na Espanha, durante a experiência da sócia-fundadora
            no controle de qualidade de construtoras espanholas, quando reconheceu a necessidade de
            um serviço igualmente qualificado no Brasil.
          </p>
          <p
            style={{
              font: "var(--type-body)",
              maxWidth: "62ch",
            }}
          >
            Entre projetos, execução de obras e detalhamentos técnicos, as peritas responsáveis pela
            Valen Brasil compartilham uma trajetória de quase uma década no universo da arquitetura.
          </p>
          <p
            style={{
              font: "var(--type-body)",
              maxWidth: "62ch",
            }}
          >
            Agora, integram a visão arquitetônica de ambas para a elaboração de Laudos Periciais de
            Avaliação com a precisão Valen Brasil.
          </p>
          <img
            src={IMG.selo}
            alt="Selo Valen Brasil"
            style={{
              width: 96,
              marginTop: "var(--space-2)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
function BlogTeaser({ onNavigate }) {
  const posts = [
    [
      IMG.post1,
      "Avaliação Imobiliária",
      "Quem são os Avaliadores?",
      "Conheça quem são os profissionais qualificados para avaliar seu patrimônio.",
    ],
    [
      IMG.post2,
      "Avaliação Imobiliária",
      "O Laudo de Avaliação do Imóvel",
      "Entenda como um laudo pericial auxilia em negociações imobiliárias.",
    ],
    [
      IMG.post3,
      "Imposto",
      "Imposto Explicado: ITBI",
      "Como corrigir cálculos incorretos e os detalhes desse imposto imobiliário.",
    ],
  ];
  return (
    <section
      style={{
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--section-y) 0",
      }}
    >
      <div style={WRAP}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "var(--space-12)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "var(--space-3)",
            }}
          >
            <Eyebrow>Blog</Eyebrow>
            <h2
              style={{
                font: "var(--type-h2)",
              }}
            >
              Explore nosso blog
            </h2>
          </div>
          <Button variant="link" iconRight="arrow-right" onClick={() => onNavigate("blog")}>
            Ver todos os artigos
          </Button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "var(--space-6)",
          }}
        >
          {posts.map(([img, tag, title, text]) => (
            <Card
              key={title}
              interactive={true}
              padding="0"
              style={{
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: 170,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  padding: "var(--space-5)",
                  display: "grid",
                  gap: "var(--space-2)",
                }}
              >
                <Badge tone="brand" size="sm">
                  {tag}
                </Badge>
                <h3
                  style={{
                    font: "var(--type-h4)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    font: "var(--type-body-sm)",
                    color: "var(--text-muted)",
                  }}
                >
                  {text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function Faq() {
  const items = [
    {
      question: "Quanto tempo é necessário para uma avaliação?",
      answer:
        "O prazo para elaboração da avaliação varia conforme sua complexidade. A Avaliação Mercadológica é entregue em 3 dias úteis. Já o Laudo de Avaliação Completo, com análise detalhada e vistoria técnica, é entregue de 3 a 15 dias úteis após a vistoria agendada. Em situações de urgência, o prazo pode ser reduzido.",
    },
    {
      question: "Qual é o preço de uma avaliação imobiliária?",
      answer:
        "O preço de uma avaliação varia conforme tipo de imóvel, região e finalidade. Uma Avaliação Mercadológica custa, em média, R$ 1.000, e um Laudo de Avaliação Completo, a partir de R$ 1.700. Esses valores aplicam-se a imóveis comuns; imóveis atípicos requerem orçamento específico, considerando deslocamento, urgência e complexidades adicionais.",
    },
    {
      question: "Por que avaliar com uma equipe multidisciplinar?",
      answer:
        "Contamos com uma equipe multidisciplinar, formada por arquitetos, engenheiros e corretores de imóveis, que atuam de forma integrada na avaliação dos imóveis. Essa combinação de diferentes especialidades permite uma análise mais completa, considerando aspectos técnicos, construtivos, arquitetônicos, mercadológicos e de localização, proporcionando maior segurança, precisão e confiabilidade aos resultados.",
    },
    {
      question: "Quais os documentos necessários para a avaliação?",
      answer:
        "Solicitamos a matrícula atualizada do imóvel a ser avaliado, o número do IPTU e, quando disponíveis, plantas e croquis para maior detalhamento da avaliação.",
    },
  ];
  return (
    <section
      style={{
        padding: "var(--section-y) 0",
      }}
    >
      <div
        style={{
          ...WRAP,
          maxWidth: 860,
        }}
      >
        <h2
          style={{
            font: "var(--type-h2)",
            marginBottom: "var(--space-8)",
          }}
        >
          Perguntas Frequentes
        </h2>
        <Accordion items={items} defaultOpen={0} />
      </div>
    </section>
  );
}
function FinalCta() {
  return (
    <section
      style={{
        background: "var(--surface-brand-subtle)",
        borderTop: "1px solid var(--sage-200)",
        padding: "var(--space-24) 0",
      }}
    >
      <div
        style={{
          ...WRAP,
          display: "grid",
          justifyItems: "center",
          gap: "var(--space-8)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            font: "var(--type-h1)",
            color: "var(--sage-800)",
            maxWidth: "24ch",
          }}
        >
          Pronto para avaliar seu imóvel?
        </h2>
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
          }}
        >
          <Button size="lg" iconLeft="message-circle" href="https://wa.me/554731701572">
            WhatsApp
          </Button>
          <Button variant="outline" size="lg" href="https://link.valenbrasil.com/form">
            Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}

export { ServiceTypes, Applications, Process, Team, Story, BlogTeaser, Faq, FinalCta };
