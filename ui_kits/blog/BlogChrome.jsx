import { Logo } from "../../components/core/Logo.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Separator } from "../../components/core/Separator.jsx";
import * as React from "react";
const BWRAP = {
  width: "100%",
  maxWidth: 1080,
  margin: "0 auto",
  padding: "0 var(--space-6)",
};
const POSTS = [
  {
    slug: "oib",
    tag: "Avaliação Imobiliária",
    title: "OIB: Observatório Imobiliário Brasileiro",
    date: "19 de mar de 2026",
    img: "https://framerusercontent.com/images/SeIFZwaV2MCG19R8WhcT3sw2R8k.jpg?width=2000&height=920",
    excerpt:
      "Em um mercado onde decisões milionárias ainda são frequentemente baseadas em percepções e dados dispersos, o surgimento do Observatório Imobiliário Brasileiro (OIB) promete redefinir as regras do jogo — trazendo mais inteligência, transparência e segurança para quem atua no setor.",
  },
  {
    slug: "cib",
    tag: "Imposto Imobiliário",
    title: "CIB - Cadastro Imobiliário Brasileiro: o novo CPF dos Imóveis",
    date: "15 de out de 2025",
    img: "https://framerusercontent.com/images/lkPfXS6CzdUn8tGnjygLDhS5uk.webp?width=900&height=601",
    excerpt: "",
  },
  {
    slug: "potencial",
    tag: "Investimento Imobiliário",
    title: "Imóvel na Prática: Potencial Construtivo do Terreno",
    date: "8 de out de 2025",
    img: "https://framerusercontent.com/images/4ZBklDjL1UQ3v0QoJmd5H26zQ.jpg?width=1000&height=667",
    excerpt:
      "Entenda o que é potencial construtivo, como calculá-lo e como aproveitá-lo ao máximo para uma construção altamente rentável.",
  },
  {
    slug: "terrenos",
    tag: "Investimento Imobiliário",
    title: "Investimento: Valorização de Terrenos",
    date: "8 de out de 2025",
    img: "https://framerusercontent.com/images/g8gz0mdS11YCmrPVnYXoXX9FVs.jpeg?width=1200&height=1200",
    excerpt: "",
  },
  {
    slug: "consorcio",
    tag: "Investimento Imobiliário",
    title: "Investimento: Consórcio X Financiamento",
    date: "8 de out de 2025",
    img: "https://framerusercontent.com/images/1YeGRvSF0R1GAO9zv7Sdw5w1iBw.jpg?width=750&height=500",
    excerpt: "",
  },
  {
    slug: "construtora",
    tag: "Imóveis na Prática",
    title: "Imóveis na Prática: Construtora X Incorporadora",
    date: "8 de out de 2025",
    img: "https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg?width=1188&height=872",
    excerpt: "",
  },
  {
    slug: "mcmv",
    tag: "Investimento Imobiliário",
    title: "Investimento: Construtoras do Minha Casa Minha Vida",
    date: "8 de out de 2025",
    img: "https://framerusercontent.com/images/4AA7uQe07FSf0FmpbfC4ddhwrXI.png?width=1200&height=1200",
    excerpt: "",
  },
];
const TAG_SECTIONS = [
  {
    tag: "Arquitetura",
    posts: [
      {
        title: "Cidade das Artes e das Ciências: Cultura e Inovação",
        date: "1 de nov de 2024",
      },
      {
        title: "O Minimalismo na Arquitetura",
        date: "14 de out de 2024",
      },
      {
        title: "Biografia: Santiago Calatrava",
        date: "16 de set de 2024",
      },
      {
        title: "Milan Design Week | Fuorisalone",
        date: "8 de mai de 2024",
      },
      {
        title: "Igrejas Contemporâneas",
        date: "24 de abr de 2024",
      },
    ],
  },
  {
    tag: "Imposto Imobiliário",
    posts: [
      {
        title: "CIB - Cadastro Imobiliário Brasileiro: o novo CPF dos Imóveis",
        date: "15 de out de 2025",
      },
      {
        title: "Imposto Explicado: Imposto de Renda sobre Venda de Imóvel",
        date: "8 de out de 2025",
      },
      {
        title: "Laudêmio: entenda o que é, quem paga e como é calculado",
        date: "8 de out de 2025",
      },
      {
        title: "Imposto Explicado: IPTU",
        date: "8 de out de 2025",
      },
      {
        title: "Imposto Explicado: ITCMD",
        date: "8 de out de 2025",
      },
    ],
  },
];
function BlogHeader({ onHome }) {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--surface-page)",
      }}
    >
      <div
        style={{
          ...BWRAP,
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
          }}
        >
          <Logo variant="icon" height={28} base="../../" />
          <Logo height={18} base="../../" />
        </a>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-6)",
          }}
        >
          <a
            href="../website/index.html"
            style={{
              font: "var(--type-label)",
              color: "var(--text-body)",
            }}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onHome();
            }}
            style={{
              font: "var(--type-label)",
              color: "var(--text-strong)",
            }}
          >
            Blog
          </a>
          <Button
            size="sm"
            variant="outline"
            iconRight="message-circle"
            href="https://wa.me/554731701572"
          >
            Fale conosco
          </Button>
        </nav>
      </div>
    </header>
  );
}
function BlogFooter() {
  return (
    <footer
      style={{
        marginTop: "var(--space-24)",
        padding: "var(--space-8) 0",
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          ...BWRAP,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          font: "var(--type-body-sm)",
          color: "var(--text-muted)",
        }}
      >
        <span>2025 @ valenbrasil.com | Todos os Direitos Reservados.</span>
        <span
          style={{
            display: "flex",
            gap: "var(--space-5)",
          }}
        >
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </span>
      </div>
    </footer>
  );
}

export { POSTS, BWRAP, TAG_SECTIONS, BlogHeader, BlogFooter };
