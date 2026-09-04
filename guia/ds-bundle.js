/* @ds-bundle: {"format":4,"namespace":"ValenBrasilDesignSystem_5c2e1e","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"GuiaSpecimens.jsx":"d4552eb3da72","components/core/Avatar.jsx":"2578b52a460a","components/core/Badge.jsx":"7b7ab9883784","components/core/Button.jsx":"e05f6214b6df","components/core/Card.jsx":"6ecd4062d86f","components/core/Icon.jsx":"9ec4fdd3f9b2","components/core/IconButton.jsx":"28fcabc2824b","components/core/Logo.jsx":"8ca3b88480b4","components/core/Separator.jsx":"fc6b410c85e5","components/core/Tag.jsx":"e5f1ffa448e5","components/data/Accordion.jsx":"02d8aa250782","components/data/StatCard.jsx":"1664e12622ff","components/data/Table.jsx":"0be19f8f3f2f","components/feedback/Alert.jsx":"6af20fb91372","components/feedback/Dialog.jsx":"558fa934bc9a","components/feedback/Progress.jsx":"f6dd4aa2de4b","components/feedback/Skeleton.jsx":"c947b2f9894a","components/feedback/Toast.jsx":"e383fd443387","components/feedback/Tooltip.jsx":"2d6f719e4445","components/forms/Checkbox.jsx":"09b15a2ddd7c","components/forms/Field.jsx":"441c12f2b011","components/forms/Input.jsx":"11b2800a9189","components/forms/Radio.jsx":"a9b18c067395","components/forms/Select.jsx":"d29b27f162eb","components/forms/Switch.jsx":"bf98657125b6","components/forms/Textarea.jsx":"c193eaf8c2a0","components/navigation/Breadcrumb.jsx":"706d811bc475","components/navigation/NavItem.jsx":"f11d77ea7365","components/navigation/Pagination.jsx":"3fd68cda741c","components/navigation/Tabs.jsx":"7372f9d1ba05","ui_kits/blog/BlogChrome.jsx":"59ed5bf2174f","ui_kits/blog/BlogFeed.jsx":"9b22285b12ff","ui_kits/blog/PostView.jsx":"f8f6b4184379","ui_kits/dashboard/DashLaudos.jsx":"f5cd425082db","ui_kits/dashboard/DashNova.jsx":"9cbba1f0b11a","ui_kits/dashboard/DashOverview.jsx":"0a0b9862b4d2","ui_kits/dashboard/DashShell.jsx":"de2c7028298e","ui_kits/dashboard/Login.jsx":"34c7fad606c6","ui_kits/website/HomeHero.jsx":"f468ca5b67af","ui_kits/website/HomeSections.jsx":"fcdd42afcf4d","ui_kits/website/SiteChrome.jsx":"e158eb0bda8c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ValenBrasilDesignSystem_5c2e1e = window.ValenBrasilDesignSystem_5c2e1e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// GuiaSpecimens.jsx
try { (() => {
const V = () => window.ValenBrasilDesignSystem_5c2e1e;
function Row({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12,
      ...style
    }
  }, children);
}
function Sub({
  children
}) {
  return /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-muted)",
      margin: "0 0 12px"
    }
  }, children);
}
function Block({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Sub, null, title), children);
}
function SpecButtons() {
  const {
    Button,
    IconButton
  } = V();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    title: "Variantes"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, null, "Primary"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Link"), /*#__PURE__*/React.createElement(Button, {
    variant: "destructive"
  }, "Excluir"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Desabilitado"))), /*#__PURE__*/React.createElement(Block, {
    title: "Tamanhos e \xEDcones"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "arrow-right"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    iconLeft: "download"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right"
  }, "Large"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    label: "Compartilhar",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis",
    label: "Mais"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "check",
    label: "Confirmar",
    variant: "solid"
  }))));
}
function SpecDataDisplay() {
  const {
    Badge,
    Tag,
    Avatar,
    Card,
    CardHeader,
    Separator,
    StatCard
  } = V();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    title: "Badge e Tag"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Avalia\xE7\xE3o"), /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Novo"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Entregue"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Em vistoria"), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger"
  }, "Atrasado"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Judicial"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Rascunho"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Imposto"))), /*#__PURE__*/React.createElement(Block, {
    title: "Avatar"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "Bettina Cesario",
    size: "xl"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Valen Brasil",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Marcela Duarte"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Ana Rocha",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Block, {
    title: "Card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true
  }, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Servi\xE7o",
    title: "Laudo Completo"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "An\xE1lise detalhada do im\xF3vel e do mercado, com vistoria t\xE9cnica.")), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Prazo",
    title: "3 dias \xFAteis"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Avalia\xE7\xE3o mercadol\xF3gica (PTAM).")), /*#__PURE__*/React.createElement(Card, {
    tone: "contrast"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Norma",
    title: "NBR 14653"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--sage-700)"
    }
  }, "Metodologia normativa em todo laudo.")))), /*#__PURE__*/React.createElement(Block, {
    title: "StatCard"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Laudos no m\xEAs",
    value: "14",
    delta: "+3 vs. m\xEAs anterior",
    deltaTone: "up",
    icon: "file-text"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Vistorias",
    value: "6",
    delta: "2 nesta semana",
    icon: "map-pin"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Ticket m\xE9dio",
    value: "R$ 1.740",
    delta: "-4%",
    deltaTone: "down",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Prazo m\xE9dio",
    value: "4,2 dias",
    delta: "dentro da meta",
    deltaTone: "up",
    icon: "calendar-check"
  }))), /*#__PURE__*/React.createElement(Block, {
    title: "Separator"
  }, /*#__PURE__*/React.createElement(Separator, {
    label: "Etapas"
  })));
}
function SpecForms() {
  const {
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    Radio,
    Switch
  } = V();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Matr\xEDcula do im\xF3vel",
    hint: "N\xFAmero da matr\xEDcula atualizada",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Ex: 42.318"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Buscar"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar laudo",
    iconLeft: "search"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    error: "Informe um e-mail v\xE1lido"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "contato@",
    invalid: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo de avalia\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Selecione",
    options: ["Mercadológica (PTAM)", "Laudo de Avaliação Completo"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Desabilitado"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Indispon\xEDvel",
    disabled: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Objetivo da avalia\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Descreva o objetivo da avalia\xE7\xE3o"
  })), /*#__PURE__*/React.createElement(Radio, {
    defaultValue: "ptam",
    options: [{
      value: "ptam",
      label: "Avaliação Mercadológica (PTAM)",
      hint: "Entrega em 3 dias úteis"
    }, {
      value: "full",
      label: "Laudo de Avaliação Completo",
      hint: "Inclui vistoria técnica"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Aceito os Termos de Uso",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quero receber o blog por e-mail"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Indispon\xEDvel",
    disabled: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Notificar por WhatsApp",
    defaultChecked: true
  }))));
}
function SpecFeedback() {
  const {
    Alert,
    Toast,
    Progress,
    Skeleton,
    Tooltip,
    Button,
    Dialog,
    Badge
  } = V();
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    title: "Alert"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "brand",
    title: "Metodologia NBR 14653"
  }, "Todo laudo segue a norma brasileira de avalia\xE7\xE3o."), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Documento pendente"
  }, "Envie a matr\xEDcula atualizada para iniciar a avalia\xE7\xE3o."), /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "Vistoria n\xE3o confirmada"
  }, "Reagende com o perito avaliador."), /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Laudo entregue"
  }, "O cliente recebeu o PDF em 08/09."))), /*#__PURE__*/React.createElement(Block, {
    title: "Toast, Progress e Skeleton"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Laudo enviado",
    description: "O cliente recebeu o PDF por e-mail.",
    onClose: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 20,
    label: "Documenta\xE7\xE3o",
    showValue: true
  }), /*#__PURE__*/React.createElement(Progress, {
    value: 66,
    label: "Vistoria t\xE9cnica",
    showValue: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: 220,
    height: 16
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: 160,
    height: 12
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%",
    height: 12
  }))))), /*#__PURE__*/React.createElement(Block, {
    title: "Tooltip e Dialog"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Norma NBR 14653"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Passe o mouse")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setOpen(true)
  }, "Abrir di\xE1logo")), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Enviar laudo ao cliente?",
    description: "O PDF ser\xE1 anexado ao e-mail de entrega.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false)
    }, "Enviar"))
  })));
}
function SpecNavigation() {
  const {
    Tabs,
    Breadcrumb,
    Pagination,
    NavItem
  } = V();
  const [p, setP] = React.useState(2);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 240px",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sub, null, "Breadcrumb"), /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Blog",
      href: "#"
    }, {
      label: "Imposto",
      href: "#"
    }, {
      label: "ITBI"
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sub, null, "Tabs \u2014 underline"), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "todos",
      label: "Todos",
      count: 12
    }, {
      value: "and",
      label: "Em andamento",
      count: 4
    }, {
      value: "ent",
      label: "Entregues",
      count: 8
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sub, null, "Tabs \u2014 pill"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ["Mercadológica", "Completo", "Judicial"],
    style: {
      justifySelf: "start",
      display: "inline-flex"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sub, null, "Pagination"), /*#__PURE__*/React.createElement(Pagination, {
    page: p,
    total: 5,
    onChange: setP
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sub, null, "NavItem"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      background: "var(--sidebar)",
      padding: 8,
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "layout-dashboard",
    label: "Vis\xE3o geral",
    active: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "file-text",
    label: "Laudos",
    badge: 8
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "map-pin",
    label: "Vistorias",
    badge: 3
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "users",
    label: "Clientes"
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "settings",
    label: "Ajustes"
  }))));
}
function SpecTable() {
  const {
    Table,
    Badge,
    Accordion
  } = V();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Block, {
    title: "Table"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "id",
      label: "Nº",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-mono)",
          fontSize: 12
        }
      }, r.id)
    }, {
      key: "imovel",
      label: "Imóvel"
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "prazo",
      label: "Prazo",
      align: "right"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }],
    rows: [{
      id: "VB-2026-114",
      imovel: "Apartamento 704 • Itajaí",
      tipo: "Laudo Completo",
      prazo: "12/09",
      status: "Em vistoria",
      tone: "warning"
    }, {
      id: "VB-2026-113",
      imovel: "Casa • Balneário Camboriú",
      tipo: "PTAM",
      prazo: "08/09",
      status: "Entregue",
      tone: "success"
    }, {
      id: "VB-2026-112",
      imovel: "Terreno • Navegantes",
      tipo: "Judicial",
      prazo: "20/09",
      status: "Documentação",
      tone: "info"
    }]
  })), /*#__PURE__*/React.createElement(Block, {
    title: "Accordion"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      question: "Quanto tempo é necessário para uma avaliação?",
      answer: "A Avaliação Mercadológica é entregue em 3 dias úteis. Já o Laudo de Avaliação Completo é entregue de 3 a 15 dias úteis após a vistoria agendada."
    }, {
      question: "Quais os documentos necessários para a avaliação?",
      answer: "Solicitamos a matrícula atualizada do imóvel, o número do IPTU e, quando disponíveis, plantas e croquis."
    }]
  })));
}
function SpecIcons() {
  const {
    Icon
  } = V();
  const names = ["file-text", "ruler", "scale", "map-pin", "landmark", "key-round", "receipt", "scroll-text", "file-signature", "gavel", "shield-check", "users", "download", "upload", "arrow-right", "arrow-left", "search", "calendar", "calendar-check", "calendar-clock", "clock", "message-circle", "mail", "lock", "bell", "settings", "plus", "x", "check", "chevron-right", "trending-up", "building-2"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(8,1fr)",
      gap: 16
    }
  }, names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 8,
      padding: "14px 6px",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 22,
    style: {
      color: "var(--text-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 10,
      color: "var(--text-muted)",
      textAlign: "center",
      wordBreak: "break-all"
    }
  }, n))));
}
Object.assign(window, {
  SpecButtons,
  SpecDataDisplay,
  SpecForms,
  SpecFeedback,
  SpecNavigation,
  SpecTable,
  SpecIcons,
  Row,
  Sub,
  Block
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "GuiaSpecimens.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const AV = {
  sm: 28,
  md: 40,
  lg: 56,
  xl: 80
};
function Avatar({
  src,
  name = "",
  size = "md",
  style
}) {
  const px = AV[size] || AV.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--sage-100)",
      color: "var(--sage-700)",
      font: "var(--type-label)",
      fontSize: px * 0.36,
      flexShrink: 0,
      border: "1px solid var(--border-subtle)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const BADGE_TONES = {
  neutral: ["var(--neutral-100)", "var(--neutral-700)"],
  brand: ["var(--sage-50)", "var(--sage-700)"],
  solid: ["var(--primary)", "var(--primary-foreground)"],
  success: ["var(--success-50)", "var(--success-700)"],
  warning: ["var(--warning-50)", "var(--warning-700)"],
  danger: ["var(--danger-50)", "var(--danger-700)"],
  info: ["var(--info-50)", "var(--info-700)"],
  outline: ["transparent", "var(--text-body)"]
};
function Badge({
  children,
  tone = "neutral",
  size = "md",
  style
}) {
  const [bg, fg] = BADGE_TONES[tone] || BADGE_TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: bg,
      color: fg,
      border: "1px solid " + (tone === "outline" ? "var(--border-strong)" : "transparent"),
      borderRadius: "var(--radius-pill)",
      padding: size === "sm" ? "2px 8px" : "4px 10px",
      font: "var(--type-eyebrow)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.02em",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "var(--space-6)",
  tone = "default",
  interactive,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid var(--border-subtle)"
    },
    brand: {
      background: "var(--surface-brand-subtle)",
      border: "1px solid var(--sage-200)"
    },
    contrast: {
      background: "var(--surface-contrast)",
      border: "1px solid var(--sage-200)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...tones[tone],
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
      ...style
    }
  }, children);
}
function CardHeader({
  title,
  eyebrow,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-strong)"
    }
  }, title) : null), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const BASE = (typeof window !== "undefined" && window.__VALEN_ICON_BASE) || "assets/icons/";
function Icon({
  name,
  size = 20,
  style,
  className
}) {
  const url = BASE + name + ".svg";
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: className,
    style: {
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
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 var(--space-3)",
    font: "var(--type-body-sm)",
    gap: 6,
    icon: 16
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 var(--space-4)",
    font: "var(--type-label)",
    gap: 8,
    icon: 18
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 var(--space-6)",
    font: "var(--type-body)",
    gap: 10,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    bg: "var(--primary)",
    fg: "var(--primary-foreground)",
    border: "transparent",
    bgHover: "var(--sage-600)"
  },
  secondary: {
    bg: "var(--secondary)",
    fg: "var(--secondary-foreground)",
    border: "transparent",
    bgHover: "var(--neutral-200)"
  },
  outline: {
    bg: "transparent",
    fg: "var(--text-strong)",
    border: "var(--border-strong)",
    bgHover: "var(--neutral-100)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-body)",
    border: "transparent",
    bgHover: "var(--neutral-100)"
  },
  link: {
    bg: "transparent",
    fg: "var(--text-brand)",
    border: "transparent",
    bgHover: "transparent"
  },
  destructive: {
    bg: "var(--destructive)",
    fg: "var(--destructive-foreground)",
    border: "transparent",
    bgHover: "var(--danger-700)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  href,
  type = "button",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? "a" : "button";
  const css = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: variant === "link" ? 0 : s.padding,
    font: s.font,
    letterSpacing: "var(--tracking-normal)",
    background: hover && !disabled ? v.bgHover : v.bg,
    color: v.fg,
    border: "1px solid " + v.border,
    borderRadius: "var(--radius-control)",
    textDecoration: variant === "link" && hover ? "underline" : "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transform: press && !disabled ? "scale(0.985)" : "none",
    transition: "var(--transition-control), transform var(--duration-fast) var(--ease-in-out)",
    whiteSpace: "nowrap",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: css
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const IB_SIZES = {
  sm: {
    box: "2rem",
    icon: 16
  },
  md: {
    box: "2.5rem",
    icon: 18
  },
  lg: {
    box: "3rem",
    icon: 20
  }
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = IB_SIZES[size] || IB_SIZES.md;
  const bg = {
    ghost: "transparent",
    outline: "transparent",
    solid: "var(--primary)",
    subtle: "var(--neutral-100)"
  }[variant];
  const fg = variant === "solid" ? "var(--primary-foreground)" : "var(--text-body)";
  const bgHover = {
    ghost: "var(--neutral-100)",
    outline: "var(--neutral-100)",
    solid: "var(--sage-600)",
    subtle: "var(--neutral-200)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: hover && !disabled ? bgHover : bg,
      color: fg,
      border: "1px solid " + (variant === "outline" ? "var(--border-strong)" : "transparent"),
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-control)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = "full",
  height = 28,
  base = "",
  style
}) {
  const src = base + (variant === "icon" ? "assets/valen-icone.png" : "assets/valen-logo.png");
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Valen Brasil",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function Separator({
  orientation = "horizontal",
  label,
  style
}) {
  if (label) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-subtle)"
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    role: "separator",
    style: orientation === "vertical" ? {
      width: 1,
      alignSelf: "stretch",
      background: "var(--border-subtle)",
      ...style
    } : {
      display: "block",
      height: 1,
      width: "100%",
      background: "var(--border-subtle)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "var(--surface-subtle)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      padding: "4px 8px",
      font: "var(--type-body-sm)",
      ...style
    }
  }, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remover",
    style: {
      display: "inline-flex",
      background: "none",
      border: "none",
      padding: 0,
      color: "var(--text-muted)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = -1,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? "1px solid var(--border-subtle)" : "none",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      style: {
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
        color: "var(--text-strong)"
      }
    }, it.question, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 18,
      style: {
        color: "var(--sage-500)",
        transform: on ? "rotate(45deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-out)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: on ? 500 : 0,
        overflow: "hidden",
        transition: "max-height var(--duration-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-body)",
        color: "var(--text-body)",
        paddingBottom: "var(--space-5)",
        maxWidth: "68ch"
      }
    }, it.answer)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  deltaTone = "neutral",
  icon,
  style
}) {
  const tones = {
    up: "var(--success-500)",
    down: "var(--danger-500)",
    neutral: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-5)",
      display: "grid",
      gap: "var(--space-2)",
      boxShadow: "var(--shadow-xs)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)"
    }
  }, label), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color: "var(--sage-500)"
    }
  }) : null), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--type-h3)",
      fontFamily: "var(--font-display)",
      color: "var(--text-strong)",
      fontWeight: "var(--weight-light)"
    }
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: tones[deltaTone]
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      background: "var(--surface-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      font: "var(--type-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)",
      padding: "10px var(--space-4)",
      background: "var(--surface-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      padding: "var(--space-3) var(--space-4)",
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)"
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ALERT_TONES = {
  info: {
    bg: "var(--info-50)",
    fg: "var(--info-700)",
    icon: "info"
  },
  success: {
    bg: "var(--success-50)",
    fg: "var(--success-700)",
    icon: "circle-check"
  },
  warning: {
    bg: "var(--warning-50)",
    fg: "var(--warning-700)",
    icon: "triangle-alert"
  },
  danger: {
    bg: "var(--danger-50)",
    fg: "var(--danger-700)",
    icon: "circle-alert"
  },
  brand: {
    bg: "var(--surface-brand-subtle)",
    fg: "var(--sage-700)",
    icon: "badge-check"
  }
};
function Alert({
  title,
  children,
  tone = "info",
  icon,
  style
}) {
  const t = ALERT_TONES[tone] || ALERT_TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      background: t.bg,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      border: "1px solid transparent",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 18,
    style: {
      color: t.fg,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--type-label)",
      color: t.fg
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay)",
      backdropFilter: "blur(2px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-strong)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      display: "inline-flex",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-2)",
      marginTop: "var(--space-6)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  label,
  showValue,
  size = "md",
  style
}) {
  const h = size === "sm" ? 4 : size === "lg" ? 10 : 6;
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      ...style
    }
  }, label || showValue ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue ? /*#__PURE__*/React.createElement("span", null, pct, "%") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: "var(--neutral-200)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: "var(--primary)",
      borderRadius: "var(--radius-full)",
      transition: "width var(--duration-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 12,
  radius = "var(--radius-sm)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width,
      height,
      borderRadius: radius,
      background: "linear-gradient(90deg,var(--neutral-200) 25%,var(--neutral-100) 50%,var(--neutral-200) 75%)",
      backgroundSize: "200% 100%",
      animation: "valen-shimmer 1.4s linear infinite",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes valen-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}"));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  description,
  tone = "neutral",
  onClose,
  style
}) {
  const icons = {
    neutral: "bell",
    success: "circle-check",
    danger: "circle-alert"
  };
  const colors = {
    neutral: "var(--text-muted)",
    success: "var(--success-500)",
    danger: "var(--danger-500)"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-4)",
      minWidth: 300,
      maxWidth: 400,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icons[tone],
    size: 18,
    style: {
      color: colors[tone],
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      color: "var(--text-muted)",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = "top",
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)",
      boxShadow: "var(--shadow-md)",
      font: "var(--type-body-sm)",
      fontSize: 12,
      padding: "6px 8px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      opacity: open ? 1 : 0,
      pointerEvents: "none",
      zIndex: 40,
      transition: "opacity var(--duration-fast) var(--ease-in-out)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-sm)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--primary)" : "var(--surface-card)",
      color: "var(--primary-foreground)",
      border: "1px solid " + (on ? "var(--primary)" : "var(--input)"),
      transition: "var(--transition-control)"
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger-500)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--danger-500)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  id,
  value,
  defaultValue,
  placeholder,
  type = "text",
  size = "md",
  iconLeft,
  invalid,
  disabled,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16,
    style: {
      position: "absolute",
      left: 12,
      color: "var(--text-muted)"
    }
  }) : null, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: h,
      padding: iconLeft ? "0 var(--space-3) 0 34px" : "0 var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-strong)",
      background: disabled ? "var(--neutral-100)" : "var(--surface-card)",
      border: "1px solid " + (invalid ? "var(--danger-500)" : focus ? "var(--ring)" : "var(--input)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "var(--transition-control)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  name,
  onChange,
  orientation = "vertical",
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const sel = value === undefined ? internal : value;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: orientation === "row" ? "row" : "column",
      gap: orientation === "row" ? "var(--space-5)" : "var(--space-3)",
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const on = sel === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      onClick: () => {
        if (value === undefined) setInternal(opt.value);
        onChange && onChange(opt.value);
      },
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--space-2)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        marginTop: 1,
        borderRadius: "var(--radius-full)",
        flexShrink: 0,
        border: "1px solid " + (on ? "var(--primary)" : "var(--input)"),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "var(--transition-control)"
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "var(--radius-full)",
        background: "var(--primary)"
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-strong)"
      }
    }, opt.label), opt.hint ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, opt.hint) : null));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  id,
  options = [],
  value,
  defaultValue,
  placeholder,
  size = "md",
  disabled,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: h,
      padding: "0 34px 0 var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-strong)",
      background: disabled ? "var(--neutral-100)" : "var(--surface-card)",
      border: "1px solid " + (focus ? "var(--ring)" : "var(--input)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      appearance: "none",
      outline: "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: "absolute",
      right: 12,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => {
      if (disabled) return;
      if (checked === undefined) setInternal(!on);
      onChange && onChange(!on);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 22,
      borderRadius: "var(--radius-full)",
      padding: 2,
      display: "inline-flex",
      background: on ? "var(--primary)" : "var(--neutral-300)",
      transition: "background-color var(--duration-base) var(--ease-in-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-full)",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transform: on ? "translateX(16px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  id,
  value,
  defaultValue,
  placeholder,
  rows = 4,
  invalid,
  disabled,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", {
    id: id,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-strong)",
      background: disabled ? "var(--neutral-100)" : "var(--surface-card)",
      resize: "vertical",
      border: "1px solid " + (invalid ? "var(--danger-500)" : focus ? "var(--ring)" : "var(--input)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "var(--transition-control)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Trilha",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14,
    style: {
      color: "var(--neutral-400)"
    }
  }) : null, it.href && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      color: "var(--text-muted)"
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === items.length - 1 ? "var(--text-strong)" : "var(--text-muted)"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function NavItem({
  icon,
  label,
  active,
  badge,
  href = "#",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "8px var(--space-3)",
      borderRadius: "var(--radius-control)",
      textDecoration: "none",
      background: active ? "var(--sidebar-accent)" : hover ? "var(--neutral-100)" : "transparent",
      color: active ? "var(--sidebar-accent-foreground)" : "var(--sidebar-foreground)",
      font: "var(--type-label)",
      transition: "var(--transition-control)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      color: "var(--text-muted)"
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: "Anterior",
    variant: "outline",
    size: "sm",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1)
  }), pages.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => onChange && onChange(p),
    style: {
      minWidth: 32,
      height: 32,
      borderRadius: "var(--radius-control)",
      cursor: "pointer",
      border: "1px solid " + (p === page ? "var(--primary)" : "transparent"),
      background: p === page ? "var(--surface-brand-subtle)" : "transparent",
      color: p === page ? "var(--sage-700)" : "var(--text-muted)",
      font: "var(--type-body-sm)",
      transition: "var(--transition-control)"
    }
  }, p)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    label: "Proxima",
    variant: "outline",
    size: "sm",
    disabled: page >= total,
    onClick: () => onChange && onChange(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style
}) {
  const first = items.length ? typeof items[0] === "string" ? items[0] : items[0].value : undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value === undefined ? internal : value;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: pill ? 4 : "var(--space-6)",
      borderBottom: pill ? "none" : "1px solid var(--border-subtle)",
      background: pill ? "var(--neutral-100)" : "transparent",
      padding: pill ? 4 : 0,
      borderRadius: pill ? "var(--radius-control)" : 0,
      ...style
    }
  }, items.map(it => {
    const t = typeof it === "string" ? {
      value: it,
      label: it
    } : it;
    const on = active === t.value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.value),
      style: {
        background: pill && on ? "var(--surface-card)" : "transparent",
        border: "none",
        font: "var(--type-label)",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        cursor: "pointer",
        padding: pill ? "6px 12px" : "0 0 10px",
        borderRadius: pill ? "var(--radius-sm)" : 0,
        boxShadow: pill && on ? "var(--shadow-xs)" : "none",
        borderBottom: pill ? "none" : "2px solid " + (on ? "var(--primary)" : "transparent"),
        marginBottom: pill ? 0 : -1,
        transition: "var(--transition-control)"
      }
    }, t.label, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        marginLeft: 6
      }
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogChrome.jsx
try { (() => {
const BWRAP = {
  width: "100%",
  maxWidth: 1080,
  margin: "0 auto",
  padding: "0 var(--space-6)"
};
const POSTS = [{
  slug: "oib",
  tag: "Avaliação Imobiliária",
  title: "OIB: Observatório Imobiliário Brasileiro",
  date: "19 de mar de 2026",
  img: "https://framerusercontent.com/images/SeIFZwaV2MCG19R8WhcT3sw2R8k.jpg?width=2000&height=920",
  excerpt: "Em um mercado onde decisões milionárias ainda são frequentemente baseadas em percepções e dados dispersos, o surgimento do Observatório Imobiliário Brasileiro (OIB) promete redefinir as regras do jogo — trazendo mais inteligência, transparência e segurança para quem atua no setor."
}, {
  slug: "cib",
  tag: "Imposto Imobiliário",
  title: "CIB - Cadastro Imobiliário Brasileiro: o novo CPF dos Imóveis",
  date: "15 de out de 2025",
  img: "https://framerusercontent.com/images/lkPfXS6CzdUn8tGnjygLDhS5uk.webp?width=900&height=601",
  excerpt: ""
}, {
  slug: "potencial",
  tag: "Investimento Imobiliário",
  title: "Imóvel na Prática: Potencial Construtivo do Terreno",
  date: "8 de out de 2025",
  img: "https://framerusercontent.com/images/4ZBklDjL1UQ3v0QoJmd5H26zQ.jpg?width=1000&height=667",
  excerpt: "Entenda o que é potencial construtivo, como calculá-lo e como aproveitá-lo ao máximo para uma construção altamente rentável."
}, {
  slug: "terrenos",
  tag: "Investimento Imobiliário",
  title: "Investimento: Valorização de Terrenos",
  date: "8 de out de 2025",
  img: "https://framerusercontent.com/images/g8gz0mdS11YCmrPVnYXoXX9FVs.jpeg?width=1200&height=1200",
  excerpt: ""
}, {
  slug: "consorcio",
  tag: "Investimento Imobiliário",
  title: "Investimento: Consórcio X Financiamento",
  date: "8 de out de 2025",
  img: "https://framerusercontent.com/images/1YeGRvSF0R1GAO9zv7Sdw5w1iBw.jpg?width=750&height=500",
  excerpt: ""
}, {
  slug: "construtora",
  tag: "Imóveis na Prática",
  title: "Imóveis na Prática: Construtora X Incorporadora",
  date: "8 de out de 2025",
  img: "https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg?width=1188&height=872",
  excerpt: ""
}, {
  slug: "mcmv",
  tag: "Investimento Imobiliário",
  title: "Investimento: Construtoras do Minha Casa Minha Vida",
  date: "8 de out de 2025",
  img: "https://framerusercontent.com/images/4AA7uQe07FSf0FmpbfC4ddhwrXI.png?width=1200&height=1200",
  excerpt: ""
}];
const TAG_SECTIONS = [{
  tag: "Arquitetura",
  posts: [{
    title: "Cidade das Artes e das Ciências: Cultura e Inovação",
    date: "1 de nov de 2024"
  }, {
    title: "O Minimalismo na Arquitetura",
    date: "14 de out de 2024"
  }, {
    title: "Biografia: Santiago Calatrava",
    date: "16 de set de 2024"
  }, {
    title: "Milan Design Week | Fuorisalone",
    date: "8 de mai de 2024"
  }, {
    title: "Igrejas Contemporâneas",
    date: "24 de abr de 2024"
  }]
}, {
  tag: "Imposto Imobiliário",
  posts: [{
    title: "CIB - Cadastro Imobiliário Brasileiro: o novo CPF dos Imóveis",
    date: "15 de out de 2025"
  }, {
    title: "Imposto Explicado: Imposto de Renda sobre Venda de Imóvel",
    date: "8 de out de 2025"
  }, {
    title: "Laudêmio: entenda o que é, quem paga e como é calculado",
    date: "8 de out de 2025"
  }, {
    title: "Imposto Explicado: IPTU",
    date: "8 de out de 2025"
  }, {
    title: "Imposto Explicado: ITCMD",
    date: "8 de out de 2025"
  }]
}];
function BlogHeader({
  onHome
}) {
  const {
    Logo,
    Button
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...BWRAP,
      height: 76,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "icon",
    height: 28,
    base: "../../"
  }), /*#__PURE__*/React.createElement(Logo, {
    height: 18,
    base: "../../"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../website/index.html",
    style: {
      font: "var(--type-label)",
      color: "var(--text-body)"
    }
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome();
    },
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, "Blog"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    iconRight: "message-circle",
    href: "https://wa.me/554731701572"
  }, "Fale conosco"))));
}
function BlogFooter() {
  const {
    Separator
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "var(--space-24)",
      padding: "var(--space-8) 0",
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...BWRAP,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "2025 @ valenbrasil.com | Todos os Direitos Reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Pol\xEDtica de Privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Termos de Uso"))));
}
Object.assign(window, {
  BWRAP,
  POSTS,
  TAG_SECTIONS,
  BlogHeader,
  BlogFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogFeed.jsx
try { (() => {
function FeaturedPost({
  post,
  onOpen
}) {
  const {
    Badge,
    Button
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("article", {
    onClick: () => onOpen(post),
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-10)",
      alignItems: "center",
      cursor: "pointer",
      padding: "var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, post.tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: "2.6rem"
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-muted)",
      maxWidth: "52ch"
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Valen Brasil"), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", null, post.date)), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right"
  }, "Ler artigo")), /*#__PURE__*/React.createElement("img", {
    src: post.img,
    alt: "",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-2xl)"
    }
  }));
}
function PostCard({
  post,
  onOpen
}) {
  const {
    Card,
    Badge
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    onClick: () => onOpen(post),
    style: {
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(post)
  }, /*#__PURE__*/React.createElement("img", {
    src: post.img,
    alt: "",
    style: {
      width: "100%",
      height: 160,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, post.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, post.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Valen Brasil \u2022 ", post.date))));
}
function TagSection({
  section,
  onOpen
}) {
  const {
    Button,
    Separator
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-12) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)"
    }
  }, section.tag), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right"
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, section.posts.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen({
        ...p,
        tag: section.tag,
        img: POSTS[i % POSTS.length].img,
        excerpt: ""
      });
    },
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-4) 0",
      borderTop: "1px solid var(--border-subtle)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-strong)"
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, p.date)))));
}
function BlogFeed({
  onOpen
}) {
  const {
    Separator,
    Pagination,
    Tabs
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const [page, setPage] = React.useState(1);
  const [tab, setTab] = React.useState("todos");
  const filtered = tab === "todos" ? POSTS.slice(1) : POSTS.slice(1).filter(p => p.tag === tab);
  return /*#__PURE__*/React.createElement("main", {
    style: BWRAP
  }, /*#__PURE__*/React.createElement(FeaturedPost, {
    post: POSTS[0],
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "var(--space-10) 0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)"
    }
  }, "\xDAltimos artigos"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: [{
      value: "todos",
      label: "Todos"
    }, {
      value: "Investimento Imobiliário",
      label: "Investimento"
    }, {
      value: "Imposto Imobiliário",
      label: "Imposto"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    post: p,
    onOpen: onOpen
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 3,
    onChange: setPage
  })), TAG_SECTIONS.map(s => /*#__PURE__*/React.createElement(TagSection, {
    key: s.tag,
    section: s,
    onOpen: onOpen
  })));
}
Object.assign(window, {
  BlogFeed,
  PostCard,
  FeaturedPost,
  TagSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogFeed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/PostView.jsx
try { (() => {
function PostView({
  post,
  onBack,
  onOpen
}) {
  const {
    Breadcrumb,
    Badge,
    Avatar,
    Separator,
    Button,
    Card
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const related = POSTS.filter(p => p.title !== post.title).slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...BWRAP,
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Blog",
      href: "#"
    }, {
      label: post.tag,
      href: "#"
    }, {
      label: post.title
    }]
  })), /*#__PURE__*/React.createElement("article", {
    style: {
      ...BWRAP,
      maxWidth: 760,
      paddingTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, post.tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: "2.75rem"
    }
  }, post.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Valen Brasil",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Valen Brasil \u2022 ", post.date, " \u2022 6 min de leitura"))), /*#__PURE__*/React.createElement("img", {
    src: post.img,
    alt: "",
    style: {
      width: "100%",
      aspectRatio: "16/9",
      objectFit: "cover",
      borderRadius: "var(--radius-2xl)",
      margin: "var(--space-10) 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      font: "var(--type-body-lg)",
      color: "var(--text-body)"
    }
  }, post.excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-strong)"
    }
  }, post.excerpt) : null, /*#__PURE__*/React.createElement("p", null, "Este bloco demonstra a tipografia de leitura do blog: Manrope 1.125rem com entrelinha 1,65 e largura m\xE1xima de 68 caracteres. T\xEDtulos internos usam Jost em peso leve."), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      marginTop: "var(--space-4)"
    }
  }, "Por que isso importa na avalia\xE7\xE3o"), /*#__PURE__*/React.createElement("p", null, "Contamos com uma equipe multidisciplinar, formada por arquitetos, engenheiros e corretores de im\xF3veis, que atuam de forma integrada na avalia\xE7\xE3o dos im\xF3veis, considerando aspectos t\xE9cnicos, construtivos, arquitet\xF4nicos, mercadol\xF3gicos e de localiza\xE7\xE3o."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: "var(--space-5) var(--space-6)",
      background: "var(--surface-brand-subtle)",
      borderRadius: "var(--radius-card)",
      font: "var(--type-body-lg)",
      color: "var(--sage-700)"
    }
  }, "Seu patrim\xF4nio \xE9 \xFAnico. Seu valor tamb\xE9m."), /*#__PURE__*/React.createElement("p", null, "Solicitamos a matr\xEDcula atualizada do im\xF3vel a ser avaliado, o n\xFAmero do IPTU e, quando dispon\xEDveis, plantas e croquis para maior detalhamento da avalia\xE7\xE3o.")), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    style: {
      marginTop: "var(--space-12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, "Quer saber o valor do seu im\xF3vel?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Laudo de avalia\xE7\xE3o a partir de 3 dias \xFAteis.")), /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    href: "https://wa.me/554731701572"
  }, "Solicitar avalia\xE7\xE3o"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...BWRAP,
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Separator, {
    label: "Leia tamb\xE9m"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, related.map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    post: p,
    onOpen: onOpen
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "arrow-left",
    onClick: onBack
  }, "Voltar ao blog"))));
}
Object.assign(window, {
  PostView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/PostView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashLaudos.jsx
try { (() => {
function DashLaudos({
  onSelect
}) {
  const {
    Tabs,
    Table,
    Badge,
    IconButton,
    Select,
    Input,
    Tag,
    Pagination
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const [tab, setTab] = React.useState("todos");
  const [page, setPage] = React.useState(1);
  const rows = tab === "todos" ? LAUDOS : LAUDOS.filter(l => tab === "andamento" ? l.status !== "Entregue" : l.status === "Entregue");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "todos",
      label: "Todos",
      count: LAUDOS.length
    }, {
      value: "andamento",
      label: "Em andamento",
      count: 4
    }, {
      value: "entregues",
      label: "Entregues",
      count: 1
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "Tipo",
    options: ["PTAM", "Laudo Completo", "Judicial"],
    style: {
      width: 170
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "Cidade",
    options: ["Itajaí", "Balneário Camboriú", "Navegantes", "Itapema"],
    style: {
      width: 190
    }
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    placeholder: "Buscar n\xBA do laudo",
    iconLeft: "search",
    style: {
      width: 210
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Prazo: setembro")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "id",
      label: "Nº",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-mono)",
          fontSize: 12
        }
      }, r.id)
    }, {
      key: "imovel",
      label: "Imóvel",
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--text-strong)"
        }
      }, r.imovel), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--text-muted)",
          fontSize: 12
        }
      }, r.cidade))
    }, {
      key: "cliente",
      label: "Cliente"
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "valor",
      label: "Honorários",
      align: "right"
    }, {
      key: "prazo",
      label: "Prazo",
      align: "right"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }, {
      key: "acao",
      label: "",
      align: "right",
      render: r => /*#__PURE__*/React.createElement(IconButton, {
        icon: "arrow-right",
        label: "Abrir laudo",
        size: "sm",
        onClick: () => onSelect(r)
      })
    }],
    rows: rows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 3,
    onChange: setPage
  })));
}
function LaudoDetail({
  laudo,
  onBack
}) {
  const {
    Card,
    CardHeader,
    Badge,
    Progress,
    Button,
    Icon,
    Breadcrumb,
    Table,
    Avatar
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Laudos",
      href: "#"
    }, {
      label: laudo.id
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      fontSize: "2rem"
    }
  }, laudo.imovel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 12
    }
  }, laudo.id), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", null, laudo.cidade), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", null, laudo.tipo), /*#__PURE__*/React.createElement(Badge, {
    tone: laudo.tone
  }, laudo.status))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: "download"
  }, "Baixar PDF"), /*#__PURE__*/React.createElement(Button, {
    iconRight: "send"
  }, "Enviar ao cliente"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Andamento",
    title: "Etapas da avalia\xE7\xE3o"
  }), /*#__PURE__*/React.createElement(Progress, {
    value: laudo.progresso,
    showValue: true,
    label: "Conclus\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      marginTop: "var(--space-5)"
    }
  }, [["Documentação", "Concluída em 02/09", "circle-check", "var(--success-500)"], ["Vistoria técnica", "Agendada para 09/09 às 09h00", "clock", "var(--warning-500)"], ["Elaboração do laudo", "Aguardando vistoria", "circle-dashed", "var(--text-muted)"]].map(([t, s, ic, c]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    style: {
      color: c,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, s)))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Documentos",
    title: "Arquivos do im\xF3vel",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      iconLeft: "upload"
    }, "Enviar")
  }), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "nome",
      label: "Arquivo"
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "data",
      label: "Recebido",
      align: "right"
    }],
    rows: [{
      nome: "Matrícula 42.318",
      tipo: "PDF",
      data: "02/09/2026"
    }, {
      nome: "IPTU 2026",
      tipo: "PDF",
      data: "02/09/2026"
    }, {
      nome: "Planta baixa",
      tipo: "DWG",
      data: "03/09/2026"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Contrato",
    title: "Resumo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      font: "var(--type-body-sm)"
    }
  }, [["Cliente", laudo.cliente], ["Finalidade", laudo.tipo === "Judicial" ? "Ação judicial" : "Compra e venda"], ["Honorários", laudo.valor], ["Prazo", laudo.prazo], ["Norma", "NBR 14653"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Respons\xE1vel",
    title: "Perito avaliador"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Bettina Cesario"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, "Bettina Cesario"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "RRT 000000 \u2022 CNAI")))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "arrow-left",
    onClick: onBack
  }, "Voltar aos laudos"))));
}
Object.assign(window, {
  DashLaudos,
  LaudoDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashLaudos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashNova.jsx
try { (() => {
function NovaAvaliacaoDialog({
  open,
  onClose,
  onCreated
}) {
  const {
    Dialog,
    Field,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Button
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    width: 560,
    title: "Nova avalia\xE7\xE3o",
    description: "Preencha os dados do im\xF3vel para abrir o processo.",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: onCreated
    }, "Criar processo"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    defaultValue: "ptam",
    options: [{
      value: "ptam",
      label: "Avaliação Mercadológica (PTAM)",
      hint: "Entrega em 3 dias úteis, sem vistoria técnica"
    }, {
      value: "full",
      label: "Laudo de Avaliação Completo",
      hint: "Com vistoria e responsabilidade técnica (RRT/ART)"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Cliente",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Nome ou raz\xE3o social"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Finalidade"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Selecione",
    options: ["Compra e venda", "Inventário", "Revisão de imposto", "Reajuste de aluguel", "Ação judicial"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Matr\xEDcula do im\xF3vel",
    hint: "Matr\xEDcula atualizada"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "42.318"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Cidade"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Selecione",
    options: ["Itajaí", "Balneário Camboriú", "Navegantes", "Itapema"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Objetivo da avalia\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Descreva o objetivo e observa\xE7\xF5es relevantes"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Cliente autorizou vistoria t\xE9cnica no im\xF3vel",
    defaultChecked: true
  })));
}
function VistoriasView() {
  const {
    Card,
    CardHeader,
    Badge,
    Icon,
    Button,
    Switch
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const items = [["09 set • 09h00", "Apartamento 704 • Ed. Marina", "Itajaí", "Confirmada", "success"], ["11 set • 14h30", "Terreno 1.240 m²", "Navegantes", "A confirmar", "warning"], ["16 set • 10h00", "Cobertura 1201", "Itapema", "Confirmada", "success"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      padding: "var(--space-8)",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Agenda",
    title: "Vistorias de setembro",
    action: /*#__PURE__*/React.createElement(Switch, {
      label: "Lembrete por WhatsApp",
      defaultChecked: true
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, items.map(([when, what, city, status, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: when,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      borderTop: i ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-clock",
    size: 20,
    style: {
      color: "var(--sage-500)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, what), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, when, " \u2022 ", city)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, status), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline"
  }, "Reagendar"))))));
}
Object.assign(window, {
  NovaAvaliacaoDialog,
  VistoriasView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashNova.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashOverview.jsx
try { (() => {
function DashOverview({
  onOpen
}) {
  const {
    StatCard,
    Card,
    CardHeader,
    Table,
    Badge,
    Progress,
    Alert,
    Button,
    Icon
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Laudos no m\xEAs",
    value: "14",
    delta: "+3 vs. m\xEAs anterior",
    deltaTone: "up",
    icon: "file-text"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Vistorias agendadas",
    value: "6",
    delta: "2 nesta semana",
    icon: "map-pin"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Ticket m\xE9dio",
    value: "R$ 1.740",
    delta: "-4%",
    deltaTone: "down",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Prazo m\xE9dio",
    value: "4,2 dias",
    delta: "dentro da meta",
    deltaTone: "up",
    icon: "calendar-check"
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "1 laudo com prazo vencido"
  }, "Sala comercial 302 \u2022 Itaja\xED \u2014 prazo 05/09/2026."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h4)"
    }
  }, "Laudos em andamento"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => onOpen("laudos")
  }, "Ver todos")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "id",
      label: "Nº",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-mono)",
          fontSize: 12
        }
      }, r.id)
    }, {
      key: "imovel",
      label: "Imóvel",
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--text-strong)"
        }
      }, r.imovel), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--text-muted)",
          fontSize: 12
        }
      }, r.cidade))
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "prazo",
      label: "Prazo",
      align: "right"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }],
    rows: LAUDOS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Etapas",
    title: "Progresso da carteira"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 20,
    label: "Documenta\xE7\xE3o",
    showValue: true
  }), /*#__PURE__*/React.createElement(Progress, {
    value: 45,
    label: "Vistoria t\xE9cnica",
    showValue: true
  }), /*#__PURE__*/React.createElement(Progress, {
    value: 100,
    label: "Entrega",
    showValue: true
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Agenda",
    title: "Pr\xF3ximas vistorias"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, [["09 set • 09h00", "Apartamento 704 • Itajaí"], ["11 set • 14h30", "Terreno 1.240 m² • Navegantes"], ["16 set • 10h00", "Cobertura 1201 • Itapema"]].map(([when, what]) => /*#__PURE__*/React.createElement("div", {
    key: when,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16,
    style: {
      color: "var(--sage-500)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, when), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, what)))))))));
}
Object.assign(window, {
  DashOverview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashShell.jsx
try { (() => {
const LAUDOS = [{
  id: "VB-2026-114",
  imovel: "Apartamento 704 • Ed. Marina",
  cidade: "Itajaí",
  tipo: "Laudo Completo",
  cliente: "Marcela Duarte",
  prazo: "12/09/2026",
  status: "Em vistoria",
  tone: "warning",
  progresso: 45,
  valor: "R$ 1.980"
}, {
  id: "VB-2026-113",
  imovel: "Casa • Bairro Estados",
  cidade: "Balneário Camboriú",
  tipo: "PTAM",
  cliente: "Construtora Nortis",
  prazo: "08/09/2026",
  status: "Entregue",
  tone: "success",
  progresso: 100,
  valor: "R$ 1.100"
}, {
  id: "VB-2026-112",
  imovel: "Terreno 1.240 m²",
  cidade: "Navegantes",
  tipo: "Judicial",
  cliente: "Escritório Lemos & Cia",
  prazo: "20/09/2026",
  status: "Documentação",
  tone: "info",
  progresso: 20,
  valor: "R$ 2.400"
}, {
  id: "VB-2026-111",
  imovel: "Sala comercial 302",
  cidade: "Itajaí",
  tipo: "PTAM",
  cliente: "Ana Beatriz Rocha",
  prazo: "05/09/2026",
  status: "Atrasado",
  tone: "danger",
  progresso: 70,
  valor: "R$ 1.000"
}, {
  id: "VB-2026-110",
  imovel: "Cobertura 1201",
  cidade: "Itapema",
  tipo: "Laudo Completo",
  cliente: "Família Bertoldi",
  prazo: "28/09/2026",
  status: "Em análise",
  tone: "neutral",
  progresso: 60,
  valor: "R$ 2.150"
}];
function DashSidebar({
  route,
  onRoute
}) {
  const {
    NavItem,
    Logo,
    Separator
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flexShrink: 0,
      background: "var(--sidebar)",
      borderRight: "1px solid var(--sidebar-border)",
      padding: "var(--space-5) var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 18,
    base: "../../"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "layout-dashboard",
    label: "Vis\xE3o geral",
    active: route === "overview",
    onClick: e => {
      e.preventDefault();
      onRoute("overview");
    }
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "file-text",
    label: "Laudos",
    badge: LAUDOS.length,
    active: route === "laudos",
    onClick: e => {
      e.preventDefault();
      onRoute("laudos");
    }
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "map-pin",
    label: "Vistorias",
    badge: 3,
    active: route === "vistorias",
    onClick: e => {
      e.preventDefault();
      onRoute("vistorias");
    }
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "users",
    label: "Clientes",
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "folder-open",
    label: "Documentos",
    onClick: e => e.preventDefault()
  })), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "settings",
    label: "Ajustes",
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "life-buoy",
    label: "Suporte",
    onClick: e => e.preventDefault()
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "var(--space-3)",
      background: "var(--surface-brand-subtle)",
      borderRadius: "var(--radius-card)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--type-label)",
      color: "var(--sage-700)"
    }
  }, "NBR 14653"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--sage-700)",
      marginTop: 4
    }
  }, "Todos os laudos seguem a norma vigente.")));
}
function DashTopbar({
  title,
  subtitle,
  onNew
}) {
  const {
    Input,
    Button,
    IconButton,
    Avatar
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-5) var(--space-8)",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h3)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar im\xF3vel ou cliente",
    iconLeft: "search",
    size: "sm",
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifica\xE7\xF5es",
    variant: "outline",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "plus",
    onClick: onNew
  }, "Nova avalia\xE7\xE3o"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Bettina Cesario",
    size: "sm"
  })));
}
Object.assign(window, {
  LAUDOS,
  DashSidebar,
  DashTopbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Login.jsx
try { (() => {
function LoginScreen() {
  const V = window.ValenBrasilDesignSystem_5c2e1e;
  const {
    Logo,
    Field,
    Input,
    Button,
    Checkbox,
    Separator,
    Alert,
    Icon,
    Badge
  } = V;
  const [email, setEmail] = React.useState("");
  const [erro, setErro] = React.useState(false);
  const entrar = e => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErro(true);
      return;
    }
    setErro(false);
    window.location.href = "index.html";
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "var(--space-10) var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 20,
    base: "../../"
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: entrar,
    style: {
      width: "100%",
      maxWidth: 380,
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      fontSize: "2rem"
    }
  }, "Acessar o painel"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Gest\xE3o de laudos de avalia\xE7\xE3o da Valen Brasil.")), erro ? /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "N\xE3o foi poss\xEDvel entrar"
  }, "Verifique o e-mail informado e tente novamente.") : null, /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    htmlFor: "email",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: "nome@valenbrasil.com",
    iconLeft: "mail",
    value: email,
    invalid: erro,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Senha",
    htmlFor: "senha",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "senha",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    iconLeft: "lock"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Manter conectado",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-body-sm)"
    }
  }, "Esqueci minha senha")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Entrar"), /*#__PURE__*/React.createElement(Separator, {
    label: "ou"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    fullWidth: true,
    iconLeft: "building-2"
  }, "Entrar com conta corporativa"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "Ainda n\xE3o tem acesso? ", /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/554731701572"
  }, "Fale com a equipe"))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, "CNPJ 39.819.814/0001-98 \u2022 CAU PJ69468-1 \u2022 CRECI 11689-J")), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--surface-contrast)",
      borderLeft: "1px solid var(--sage-200)",
      padding: "var(--space-12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "NBR 14653"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--sage-800)",
      maxWidth: "16ch"
    }
  }, "Seu patrim\xF4nio \xE9 \xFAnico. Seu valor tamb\xE9m."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      maxWidth: 420
    }
  }, [["shield-check", "Responsabilidade Técnica", "RRT de perito arquiteto ou ART de engenheiro em todo laudo completo."], ["users", "Equipe Multidisciplinar", "Arquitetos, engenheiros e corretores atuando de forma integrada."], ["calendar-check", "Entrega em 3 dias úteis", "Avaliação mercadológica com prazo fechado."]].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    style: {
      color: "var(--sage-600)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--sage-800)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--sage-700)"
    }
  }, d))))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/valen-icone.png",
    alt: "",
    style: {
      width: 56,
      opacity: .8
    }
  })));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeHero.jsx
try { (() => {
function HomeHero() {
  const {
    Button,
    Badge
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--space-20) 0 var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Avalia\xE7\xE3o Imobili\xE1ria"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: "clamp(2.6rem,4.4vw,3.75rem)"
    }
  }, "Laudo de Avalia\xE7\xE3o de Im\xF3vel"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "44ch"
    }
  }, "Descubra o valor do seu im\xF3vel com a vis\xE3o completa de arquitetos + engenheiros + corretores."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    href: "https://wa.me/554731701572"
  }, "Solicite sua avalia\xE7\xE3o"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Entrega em 3 dias \xFAteis"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      aspectRatio: "1/1",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero,
    alt: "Im\xF3vel avaliado pela Valen Brasil",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))));
}
function TrustStrip() {
  const {
    Icon
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const items = [["shield-check", "Responsabilidade Técnica"], ["users", "Equipe Multidisciplinar"], ["scale", "Metodologia NBR 14653"], ["monitor-smartphone", "Contratação Online"], ["calendar-check", "Entrega em 3 dias úteis"], ["sigma", "Inferência Estatística"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Seguran\xE7a"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)"
    }
  }, "Empresa Especializada"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "Seu patrim\xF4nio \xE9 \xFAnico. Seu valor tamb\xE9m.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4) var(--space-6)"
    }
  }, items.map(([icon, label]) => /*#__PURE__*/React.createElement("li", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color: "var(--sage-500)"
    }
  }), label)))));
}
Object.assign(window, {
  HomeHero,
  TrustStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
function ServiceTypes() {
  const {
    Card,
    CardHeader,
    Button,
    Badge
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Servi\xE7o",
    title: "Tipos de avalia\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr .8fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Avalia\xE7\xE3o Mercadol\xF3gica (PTAM)",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, "3 dias \xFAteis")
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: "grid",
      gap: 8,
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Determina\xE7\xE3o do valor de mercado do im\xF3vel."), /*#__PURE__*/React.createElement("li", null, "Recomendado para negocia\xE7\xF5es."), /*#__PURE__*/React.createElement("li", null, "Inclui Selo de Avaliador CNAI."), /*#__PURE__*/React.createElement("li", null, "An\xE1lise mercadol\xF3gica para estimativas gerais, mantendo a credibilidade do valor de mercado, mas sem vistoria t\xE9cnica."))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Laudo de Avalia\xE7\xE3o Completo",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Com vistoria")
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: "grid",
      gap: 8,
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "An\xE1lise detalhada do im\xF3vel e do mercado."), /*#__PURE__*/React.createElement("li", null, "Inclui Registro de Responsabilidade T\xE9cnica por perito arquiteto (RRT) ou engenheiro (ART)."), /*#__PURE__*/React.createElement("li", null, "Recomendado para processos judiciais."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.laudo,
    alt: "Modelo de laudo de avalia\xE7\xE3o",
    style: {
      width: "100%",
      borderRadius: "var(--radius-card)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: "download",
    href: "https://link.valenbrasil.com/download"
  }, "Download das Avalia\xE7\xF5es")))));
}
function Applications() {
  const {
    Card,
    Icon
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const items = [["landmark", "Avaliação Patrimonial", "Conheça o valor do imóvel para decisões assertivas."], ["key-round", "Compra e Venda", "Saiba o real valor do imóvel para boas negociações imobiliárias"], ["receipt", "Revisão de Imposto", "Solicite a revisão do valor cobrado em impostos: IPTU, ITBI, ITCMD"], ["scroll-text", "Inventário", "Apure o valor dos imóveis para heranças e partilhas."], ["file-signature", "Reajuste de Aluguel", "Renegocie corretamente na renovação do contrato de locação"], ["gavel", "Ação Judicial", "Apresente o justo valor do imóvel objeto de uma ação na Justiça"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Aplica\xE7\xE3o",
    title: "Avalia\xE7\xE3o de Im\xF3veis",
    sub: "aplic\xE1vel em diferentes contextos",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, items.map(([icon, title, text]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    style: {
      color: "var(--sage-500)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "var(--space-4) 0 var(--space-2)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, text))))));
}
function Process() {
  const steps = [["01", "Documentação", "Descrição dos objetivos da avaliação > Envio de documentos do imóvel > Assinatura do contrato"], ["02", "Vistoria Técnica", "Para o Laudo Completo, agendamento com o Perito Avaliador para a vistoria técnica no imóvel avaliado"], ["03", "Avaliação do Imóvel", "Desenvolvimento da avaliação e envio do documento dentro do prazo e formato acordados"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Etapas",
    title: "Entenda nosso processo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, steps.map(([n, title, text]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-4)",
      paddingBottom: "var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--sage-500)"
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, text)))))), /*#__PURE__*/React.createElement("img", {
    src: IMG.processo,
    alt: "Vistoria t\xE9cnica",
    style: {
      width: "100%",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-md)"
    }
  })));
}
function Team() {
  const items = [["Graduação Internacional", "A VALEN reúne profissionais graduados no Brasil e na Espanha, com visão global e estratégica de mercado"], ["Equipe Nacional", "Peritos de diferentes regiões do Brasil, com técnica e experiência de mercados locais."], ["Projetos Nacionais", "Atuação em avaliações e projetos de abrangência nacional."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-contrast)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.equipe,
    alt: "Peritos Valen Brasil",
    style: {
      width: "100%",
      borderRadius: "var(--radius-2xl)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--sage-600)"
    }
  }, "Equipe"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)"
    }
  }, "Conhe\xE7a nossos peritos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, items.map(([title, text]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, text)))))));
}
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      gridTemplateColumns: ".85fr 1.15fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.fundadoras,
    alt: "S\xF3cias-fundadoras",
    style: {
      width: "100%",
      aspectRatio: "4/5",
      objectFit: "cover",
      borderRadius: "var(--radius-2xl)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--tracking-wide)"
    }
  }, "VALEN + BRASIL"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-brand)"
    }
  }, "Val\xEAncia, Espanha + Santa Catarina, Brasil"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "62ch"
    }
  }, "A Valen Brasil surgiu em Val\xEAncia, na Espanha, durante a experi\xEAncia da s\xF3cia-fundadora no controle de qualidade de construtoras espanholas, quando reconheceu a necessidade de um servi\xE7o igualmente qualificado no Brasil."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "62ch"
    }
  }, "Entre projetos, execu\xE7\xE3o de obras e detalhamentos t\xE9cnicos, as peritas respons\xE1veis pela Valen Brasil compartilham uma trajet\xF3ria de quase uma d\xE9cada no universo da arquitetura."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "62ch"
    }
  }, "Agora, integram a vis\xE3o arquitet\xF4nica de ambas para a elabora\xE7\xE3o de Laudos Periciais de Avalia\xE7\xE3o com a precis\xE3o Valen Brasil."), /*#__PURE__*/React.createElement("img", {
    src: IMG.selo,
    alt: "Selo Valen Brasil",
    style: {
      width: 96,
      marginTop: "var(--space-2)"
    }
  }))));
}
function BlogTeaser({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Button
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const posts = [[IMG.post1, "Avaliação Imobiliária", "Quem são os Avaliadores?", "Conheça quem são os profissionais qualificados para avaliar seu patrimônio."], [IMG.post2, "Avaliação Imobiliária", "O Laudo de Avaliação do Imóvel", "Entenda como um laudo pericial auxilia em negociações imobiliárias."], [IMG.post3, "Imposto", "Imposto Explicado: ITBI", "Como corrigir cálculos incorretos e os detalhes desse imposto imobiliário."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Blog"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)"
    }
  }, "Explore nosso blog")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => onNavigate("blog")
  }, "Ver todos os artigos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, posts.map(([img, tag, title, text]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    padding: "0",
    style: {
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    style: {
      width: "100%",
      height: 170,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, text)))))));
}
function Faq() {
  const {
    Accordion
  } = window.ValenBrasilDesignSystem_5c2e1e;
  const items = [{
    question: "Quanto tempo é necessário para uma avaliação?",
    answer: "O prazo para elaboração da avaliação varia conforme sua complexidade. A Avaliação Mercadológica é entregue em 3 dias úteis. Já o Laudo de Avaliação Completo, com análise detalhada e vistoria técnica, é entregue de 3 a 15 dias úteis após a vistoria agendada. Em situações de urgência, o prazo pode ser reduzido."
  }, {
    question: "Qual é o preço de uma avaliação imobiliária?",
    answer: "O preço de uma avaliação varia conforme tipo de imóvel, região e finalidade. Uma Avaliação Mercadológica custa, em média, R$ 1.000, e um Laudo de Avaliação Completo, a partir de R$ 1.700. Esses valores aplicam-se a imóveis comuns; imóveis atípicos requerem orçamento específico, considerando deslocamento, urgência e complexidades adicionais."
  }, {
    question: "Por que avaliar com uma equipe multidisciplinar?",
    answer: "Contamos com uma equipe multidisciplinar, formada por arquitetos, engenheiros e corretores de imóveis, que atuam de forma integrada na avaliação dos imóveis. Essa combinação de diferentes especialidades permite uma análise mais completa, considerando aspectos técnicos, construtivos, arquitetônicos, mercadológicos e de localização, proporcionando maior segurança, precisão e confiabilidade aos resultados."
  }, {
    question: "Quais os documentos necessários para a avaliação?",
    answer: "Solicitamos a matrícula atualizada do imóvel a ser avaliado, o número do IPTU e, quando disponíveis, plantas e croquis para maior detalhamento da avaliação."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      marginBottom: "var(--space-8)"
    }
  }, "Perguntas Frequentes"), /*#__PURE__*/React.createElement(Accordion, {
    items: items,
    defaultOpen: 0
  })));
}
function FinalCta() {
  const {
    Button
  } = window.ValenBrasilDesignSystem_5c2e1e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-brand-subtle)",
      borderTop: "1px solid var(--sage-200)",
      padding: "var(--space-24) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      justifyItems: "center",
      gap: "var(--space-8)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      color: "var(--sage-800)",
      maxWidth: "24ch"
    }
  }, "Pronto para avaliar seu im\xF3vel?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: "message-circle",
    href: "https://wa.me/554731701572"
  }, "WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "https://link.valenbrasil.com/form"
  }, "Or\xE7amento"))));
}
Object.assign(window, {
  ServiceTypes,
  Applications,
  Process,
  Team,
  Story,
  BlogTeaser,
  Faq,
  FinalCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const ds = () => window.ValenBrasilDesignSystem_5c2e1e;
const IMG = {
  hero: "https://framerusercontent.com/images/g8gz0mdS11YCmrPVnYXoXX9FVs.jpeg?width=2048&height=2048",
  laudo: "https://framerusercontent.com/images/4AA7uQe07FSf0FmpbfC4ddhwrXI.png?width=3059&height=3048",
  processo: "https://framerusercontent.com/images/4ZBklDjL1UQ3v0QoJmd5H26zQ.jpg?width=1000&height=667",
  equipe: "https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg?width=1188&height=872",
  fundadoras: "https://framerusercontent.com/images/j8lcAYX3rubzUIpd0yW8K8Kic.jpeg?width=4281&height=5142",
  selo: "https://framerusercontent.com/images/5mDELZtlJmAv1D51M04Py8AZAw.png?width=430&height=415",
  post1: "https://framerusercontent.com/images/1YeGRvSF0R1GAO9zv7Sdw5w1iBw.jpg?width=750&height=500",
  post2: "https://framerusercontent.com/images/SeIFZwaV2MCG19R8WhcT3sw2R8k.jpg?width=2000&height=920",
  post3: "https://framerusercontent.com/images/lkPfXS6CzdUn8tGnjygLDhS5uk.webp?width=900&height=601"
};
const WRAP = {
  width: "100%",
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--space-6)"
};
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-muted)"
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      textAlign: align,
      justifyItems: align === "center" ? "center" : "start",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)"
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-muted)",
      maxWidth: "48ch"
    }
  }, sub) : null);
}
function SiteHeader({
  route,
  onNavigate
}) {
  const {
    Button,
    Logo
  } = ds();
  const link = (label, key) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(key);
    },
    style: {
      font: "var(--type-label)",
      color: route === key ? "var(--text-strong)" : "var(--text-body)",
      textDecoration: "none"
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(255,255,255,.82)",
      backdropFilter: "var(--blur-panel)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 22,
    base: "../../"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, link("Home", "home"), link("Blog", "blog"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "message-circle",
    href: "https://wa.me/554731701572"
  }, "WhatsApp"))));
}
function SiteFooter() {
  const {
    Logo,
    Separator
  } = ds();
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--space-16) 0 var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 20,
    base: "../../"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Valen Brasil Gest\xE3o Empresarial Ltda"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 12
    }
  }, "CNPJ 39.819.814/0001-98 \u2022 Desde 2020"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 12
    }
  }, "CAU PJ69468-1 \u2022 CRECI 11689-J"), /*#__PURE__*/React.createElement("span", null, "Rua Samuel Heusi, 463 \u2022 Itaja\xED \u2022 Santa Catarina"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pol\xEDticas"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-body-sm)"
    }
  }, "Pol\xEDtica de Privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-body-sm)"
    }
  }, "Termos de Uso")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contato"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contato@valenbrasil.com",
    style: {
      font: "var(--type-body-sm)"
    }
  }, "contato@valenbrasil.com"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+554731701572",
    style: {
      font: "var(--type-body-sm)"
    }
  }, "+55 47 3170-1572"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "var(--space-4)",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Copyright @2025"), /*#__PURE__*/React.createElement("span", null, "valenbrasil.com"))));
}
Object.assign(window, {
  IMG,
  WRAP,
  Eyebrow,
  SectionHead,
  SiteHeader,
  SiteFooter,
  dsWebsite: ds
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
