import { Breadcrumb } from "../../components/navigation/Breadcrumb.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Avatar } from "../../components/core/Avatar.jsx";
import { Separator } from "../../components/core/Separator.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Card } from "../../components/core/Card.jsx";
import { PostCard } from "./BlogFeed.jsx";
import { POSTS, BWRAP } from "./BlogChrome.jsx";
import * as React from "react";
function PostView({ post, onBack, onOpen }) {
  const related = POSTS.filter((p) => p.title !== post.title).slice(0, 3);
  return (
    <main>
      <div
        style={{
          ...BWRAP,
          paddingTop: "var(--space-8)",
        }}
      >
        <Breadcrumb
          items={[
            {
              label: "Blog",
              href: "#",
            },
            {
              label: post.tag,
              href: "#",
            },
            {
              label: post.title,
            },
          ]}
        />
      </div>
      <article
        style={{
          ...BWRAP,
          maxWidth: 760,
          paddingTop: "var(--space-10)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-5)",
            justifyItems: "start",
          }}
        >
          <Badge tone="brand">{post.tag}</Badge>
          <h1
            style={{
              font: "var(--type-h1)",
              fontSize: "2.75rem",
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
            }}
          >
            <Avatar name="Valen Brasil" size="sm" />
            <span
              style={{
                font: "var(--type-body-sm)",
                color: "var(--text-muted)",
              }}
            >
              Valen Brasil • {post.date} • 6 min de leitura
            </span>
          </div>
        </div>
        <img
          src={post.img}
          alt=""
          style={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
            borderRadius: "var(--radius-2xl)",
            margin: "var(--space-10) 0",
          }}
        />
        <div
          style={{
            display: "grid",
            gap: "var(--space-6)",
            font: "var(--type-body-lg)",
            color: "var(--text-body)",
          }}
        >
          {post.excerpt ? (
            <p
              style={{
                font: "var(--type-body-lg)",
                color: "var(--text-strong)",
              }}
            >
              {post.excerpt}
            </p>
          ) : null}
          <p>
            Este bloco demonstra a tipografia de leitura do blog: Manrope 1.125rem com entrelinha
            1,65 e largura máxima de 68 caracteres. Títulos internos usam Jost em peso leve.
          </p>
          <h2
            style={{
              font: "var(--type-h3)",
              marginTop: "var(--space-4)",
            }}
          >
            Por que isso importa na avaliação
          </h2>
          <p>
            Contamos com uma equipe multidisciplinar, formada por arquitetos, engenheiros e
            corretores de imóveis, que atuam de forma integrada na avaliação dos imóveis,
            considerando aspectos técnicos, construtivos, arquitetônicos, mercadológicos e de
            localização.
          </p>
          <blockquote
            style={{
              margin: 0,
              padding: "var(--space-5) var(--space-6)",
              background: "var(--surface-brand-subtle)",
              borderRadius: "var(--radius-card)",
              font: "var(--type-body-lg)",
              color: "var(--sage-700)",
            }}
          >
            Seu patrimônio é único. Seu valor também.
          </blockquote>
          <p>
            Solicitamos a matrícula atualizada do imóvel a ser avaliado, o número do IPTU e, quando
            disponíveis, plantas e croquis para maior detalhamento da avaliação.
          </p>
        </div>
        <Card
          tone="subtle"
          style={{
            marginTop: "var(--space-12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <h3
              style={{
                font: "var(--type-h4)",
              }}
            >
              Quer saber o valor do seu imóvel?
            </h3>
            <p
              style={{
                font: "var(--type-body-sm)",
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              Laudo de avaliação a partir de 3 dias úteis.
            </p>
          </div>
          <Button iconRight="arrow-right" href="https://wa.me/554731701572">
            Solicitar avaliação
          </Button>
        </Card>
      </article>
      <div
        style={{
          ...BWRAP,
          marginTop: "var(--space-16)",
        }}
      >
        <Separator label="Leia tamb\xE9m" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "var(--space-6)",
            marginTop: "var(--space-8)",
          }}
        >
          {related.map((p) => (
            <PostCard key={p.slug} post={p} onOpen={onOpen} />
          ))}
        </div>
        <div
          style={{
            marginTop: "var(--space-8)",
          }}
        >
          <Button variant="ghost" iconLeft="arrow-left" onClick={onBack}>
            Voltar ao blog
          </Button>
        </div>
      </div>
    </main>
  );
}

export { PostView };
