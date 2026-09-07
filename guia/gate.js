/*
  Tela de senha do guia.

  ATENÇÃO, e isto é importante entender antes de confiar nisto:
  este site é estático. O conteúdo inteiro chega ao navegador do visitante
  junto com esta verificação, então quem souber abrir o código-fonte ou
  desligar o JavaScript vê tudo sem digitar nada. Isto NÃO é proteção de
  conteúdo sensível — é uma porta fechada, não um cofre. Serve para o site
  não ficar escancarado a quem tropeça no endereço.

  Para proteção de verdade existem dois caminhos, ambos com autenticação no
  servidor: restringir o Pages a membros do projeto no GitLab, ou pôr o
  Cloudflare Access na frente do domínio. Ver o README.

  Guardamos o SHA-256 da senha em vez do texto: não protege o conteúdo, mas
  evita entregar a senha a quem abrir o código-fonte por curiosidade.

  Para trocar a senha: gere o hash com
      echo -n "nova-senha" | sha256sum
  e substitua HASH_SENHA abaixo.
*/
(function () {
  var HASH_SENHA = "ede79f11df342df27477f6771e35f172569f3f3bf441a617d151c87d1fa60045";
  var CHAVE = "valen_design_ok";

  // Já liberado nesta aba? Não incomoda de novo.
  try {
    if (sessionStorage.getItem(CHAVE) === "1") return;
  } catch (e) {
    /* navegador sem sessionStorage: pede a senha, apenas */
  }

  // Esconde o conteúdo antes de qualquer pintura, para não vazar num piscar.
  var esconde = document.createElement("style");
  esconde.id = "gate-esconde";
  esconde.textContent = "body > *:not(#gate){display:none !important}";
  (document.head || document.documentElement).appendChild(esconde);

  async function sha256(texto) {
    var bytes = new TextEncoder().encode(texto);
    var buf = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(buf))
      .map(function (b) { return b.toString(16).padStart(2, "0"); })
      .join("");
  }

  function montar() {
    var base = (window.__VALEN_GATE_BASE || "");

    var gate = document.createElement("div");
    gate.id = "gate";
    gate.innerHTML =
      '<style>' +
      '#gate{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;' +
      'background:var(--surface-page,#fff);font-family:var(--font-sans,system-ui,sans-serif)}' +
      '#gate .caixa{width:100%;max-width:340px;display:grid;gap:var(--space-5,1.25rem);' +
      'justify-items:center;text-align:center;padding:var(--space-6,1.5rem)}' +
      '#gate img{width:150px}' +
      '#gate p{font:var(--type-body-sm,0.875rem/1.5 system-ui);color:var(--text-muted,#82867f);margin:0}' +
      '#gate form{display:grid;gap:var(--space-3,0.75rem);width:100%}' +
      '#gate input{height:var(--control-h-md,2.5rem);padding:0 var(--space-3,0.75rem);' +
      'font:var(--type-body,1rem/1.5 system-ui);color:var(--text-strong,#141613);' +
      'background:var(--neutral-0,#fff);border:1px solid var(--input,#c8cbc6);' +
      'border-radius:var(--radius-control,0.5rem);text-align:center}' +
      '#gate input:focus{outline:2px solid var(--ring,#73945f);outline-offset:2px}' +
      '#gate button{height:var(--control-h-md,2.5rem);border:0;cursor:pointer;' +
      'font:var(--type-label,500 0.875rem/1.4 system-ui);color:var(--primary-foreground,#fff);' +
      'background:var(--primary,#73945f);border-radius:var(--radius-control,0.5rem)}' +
      '#gate button:hover{background:var(--sage-600,#5e7c4c)}' +
      '#gate .erro{font:var(--type-body-sm,0.875rem/1.5 system-ui);color:var(--danger-500,#b3453c);' +
      'min-height:1.2em;margin:0}' +
      '</style>' +
      '<div class="caixa">' +
      '<img src="' + base + 'assets/valen-logo.png" alt="Valen Brasil">' +
      '<p>Guia do Design System — acesso restrito.</p>' +
      '<form><input type="password" placeholder="Senha" autocomplete="current-password" autofocus>' +
      '<button type="submit">Entrar</button></form>' +
      '<p class="erro" role="alert"></p>' +
      '</div>';

    document.body.appendChild(gate);

    var campo = gate.querySelector("input");
    var erro = gate.querySelector(".erro");

    gate.querySelector("form").addEventListener("submit", async function (ev) {
      ev.preventDefault();
      var digitado = campo.value;
      var ok = false;
      try {
        ok = (await sha256(digitado)) === HASH_SENHA;
      } catch (e) {
        erro.textContent = "Não foi possível verificar neste navegador.";
        return;
      }
      if (!ok) {
        erro.textContent = "Senha incorreta.";
        campo.value = "";
        campo.focus();
        return;
      }
      try { sessionStorage.setItem(CHAVE, "1"); } catch (e) { /* segue sem lembrar */ }
      var s = document.getElementById("gate-esconde");
      if (s) s.remove();
      gate.remove();
    });

    campo.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montar);
  } else {
    montar();
  }
})();
