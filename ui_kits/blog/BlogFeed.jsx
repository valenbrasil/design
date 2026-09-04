import { Badge } from "../../components/core/Badge.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Card } from "../../components/core/Card.jsx";
import { Separator } from "../../components/core/Separator.jsx";
import { Pagination } from "../../components/navigation/Pagination.jsx";
import { Tabs } from "../../components/navigation/Tabs.jsx";
import { POSTS, BWRAP, TAG_SECTIONS } from "./BlogChrome.jsx";
import * as React from "react";
function FeaturedPost({ post, onOpen }) {
  return (
    <article
      onClick={() => onOpen(post)}
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr .9fr",
        gap: "var(--space-10)",
        alignItems: "center",
        cursor: "pointer",
        padding: "var(--space-16) 0",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "var(--space-4)",
          justifyItems: "start",
        }}
      >
        <Badge tone="brand">{post.tag}</Badge>
        <h1
          style={{
            font: "var(--type-h1)",
            fontSize: "2.6rem",
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            font: "var(--type-body-lg)",
            color: "var(--text-muted)",
            maxWidth: "52ch",
          }}
        >
          {post.excerpt}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            font: "var(--type-body-sm)",
            color: "var(--text-muted)",
          }}
        >
          <span>Valen Brasil</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <Button variant="link" iconRight="arrow-right">
          Ler artigo
        </Button>
      </div>
      <img
        src={post.img}
        alt=""
        style={{
          width: "100%",
          aspectRatio: "4/3",
          objectFit: "cover",
          borderRadius: "var(--radius-2xl)",
        }}
      />
    </article>
  );
}
function PostCard({ post, onOpen }) {
  return (
    <Card
      interactive={true}
      padding="0"
      onClick={() => onOpen(post)}
      style={{
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div onClick={() => onOpen(post)}>
        <img
          src={post.img}
          alt=""
          style={{
            width: "100%",
            height: 160,
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
          <Badge tone="neutral" size="sm">
            {post.tag}
          </Badge>
          <h3
            style={{
              font: "var(--type-h4)",
            }}
          >
            {post.title}
          </h3>
          <span
            style={{
              font: "var(--type-body-sm)",
              color: "var(--text-muted)",
            }}
          >
            Valen Brasil • {post.date}
          </span>
        </div>
      </div>
    </Card>
  );
}
function TagSection({ section, onOpen }) {
  return (
    <section
      style={{
        padding: "var(--space-12) 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "var(--space-6)",
        }}
      >
        <h2
          style={{
            font: "var(--type-h3)",
          }}
        >
          {section.tag}
        </h2>
        <Button variant="link" iconRight="arrow-right">
          Ver todos
        </Button>
      </div>
      <div
        style={{
          display: "grid",
        }}
      >
        {section.posts.map((p, i) => (
          <a
            key={p.title}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpen({
                ...p,
                tag: section.tag,
                img: POSTS[i % POSTS.length].img,
                excerpt: "",
              });
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "var(--space-6)",
              padding: "var(--space-4) 0",
              borderTop: "1px solid var(--border-subtle)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                font: "var(--type-body-lg)",
                color: "var(--text-strong)",
              }}
            >
              {p.title}
            </span>
            <span
              style={{
                font: "var(--type-body-sm)",
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
              }}
            >
              {p.date}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
function BlogFeed({ onOpen }) {
  const [page, setPage] = React.useState(1);
  const [tab, setTab] = React.useState("todos");
  const filtered = tab === "todos" ? POSTS.slice(1) : POSTS.slice(1).filter((p) => p.tag === tab);
  return (
    <main style={BWRAP}>
      <FeaturedPost post={POSTS[0]} onOpen={onOpen} />
      <Separator />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "var(--space-10) 0 var(--space-6)",
        }}
      >
        <h2
          style={{
            font: "var(--type-h3)",
          }}
        >
          Últimos artigos
        </h2>
        <Tabs
          variant="pill"
          value={tab}
          onChange={setTab}
          items={[
            {
              value: "todos",
              label: "Todos",
            },
            {
              value: "Investimento Imobiliário",
              label: "Investimento",
            },
            {
              value: "Imposto Imobiliário",
              label: "Imposto",
            },
          ]}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "var(--space-6)",
        }}
      >
        {filtered.map((p) => (
          <PostCard key={p.slug} post={p} onOpen={onOpen} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "var(--space-10)",
        }}
      >
        <Pagination page={page} total={3} onChange={setPage} />
      </div>
      {TAG_SECTIONS.map((s) => (
        <TagSection key={s.tag} section={s} onOpen={onOpen} />
      ))}
    </main>
  );
}

export { PostCard, BlogFeed, FeaturedPost, TagSection };
