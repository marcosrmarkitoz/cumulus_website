# Cumulus Website — Guia de Estilo e Design System 💎

Este documento serve como a "Fonte da Verdade" para o branding, interface (UI) e experiência do usuário (UX) do site Cumulus. Ele deve ser seguido rigorosamente por designers e desenvolvedores para manter a integridade da marca.

---

## 1. Identidade de Marca (Branding)
A marca Cumulus evoca **segurança, transparência e modernidade**. 
- **Conceito:** Transformar a complexidade financeira em algo leve e fluido como as nuvens.
- **Voz:** Profissional, mas acessível; direta e sem "letras miúdas".

---

## 2. Paleta de Cores (Tokens)
As cores são definidas no `index.css` via variáveis CSS. Nunca use cores hexadecimais *hardcoded* nos componentes.

| Token | Valor Hex | Uso Recomendado |
| :--- | :--- | :--- |
| `--cumulus-primary` | `#1A3A5C` | Headlines, fundos de Hero, navegação principal. |
| `--cumulus-secondary` | `#2E86C1` | Botões primários, ícones de destaque, links. |
| `--cumulus-accent` | `#5DADE2` | Elementos de apoio, bordas de destaque, links em InfoBar. |
| `--cumulus-cloud` | `#EBF5FB` | Fundos de cards, seções secundárias. |
| `--cumulus-dark` | `#0D1B2A` | Texto de corpo (body), estados de hover escuros. |
| `--cumulus-gray` | `#6C7A89` | Textos secundários (quando sobre fundo claro). |
| `--cumulus-bg-gray` | `#F8FAFC` | Fundo principal de páginas (background). |
| `--cumulus-success` | `#27AE60` | Indicadores positivos, rendimentos, confirmações. |
| `--cumulus-gold` | `#F39C12` | Cashback, níveis VIP, alertas importantes. |

---

## 3. Tipografia
Usamos uma hierarquia clara para guiar a leitura.

- **Fonte Principal:** [Inter](https://fonts.google.com/specimen/Inter) (Sans-Serif).
- **Fallback:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`

### Escalas de Texto
- **H1 (Hero):** `3.5rem` | Bold (700) | Line-height: 1.1
- **H2 (Seção):** `2.5rem` | Bold (700) | Line-height: 1.2
- **H3 (Card):** `1.5rem` | Bold (700)
- **Body:** `1rem` | Regular (400) | Line-height: 1.5
- **Subheadline:** `1.1rem` a `1.25rem` | Semibold (600) | Cor: Primary ou White (90% opacity).

---

## 4. Espaçamento e Grid
Baseado em um sistema de múltiplos de 4 e 8.

- **Padding de Seção:** `4rem 0` (64px) ou `6rem 0` (96px) para Heros.
- **Gap de Grid:** `2rem` (32px) padrão para cards.
- **Container:** Máximo de `1200px` com padding lateral de `1.5rem`.

---

## 5. Sombras e Superfícies
- **`--shadow-sm`:** Sombras sutis para botões ou inputs.
- **`--shadow-md`:** Cards em estado normal.
- **`--shadow-lg`:** Modais, popups e cards em estado de **Hover**.

---

## 6. Componentes Padrão

### Botões (CTAs)
- **Primário:** Fundo `--cumulus-secondary`, Texto branco.
- **Secundário:** Borda `--cumulus-secondary`, Fundo transparente.
- **Outline:** Borda branca, Texto branco (usado sobre fundos escuros).
- **Bordas:** `borderRadius: 8px`.

### Cards de Conteúdo
- Fundo: `--cumulus-white` ou `--cumulus-cloud`.
- Border-radius: `16px` ou `24px` (mais arredondado = mais amigável).
- Padding interno: `2rem` a `3rem`.

---

## 7. Animações e Fluidez
Usamos `framer-motion` para garantir que o site pareça "vivo".

- **Entrada (Scroll Reveal):**
  - Efeito: Fade-in + Deslocamento de 30px (Y).
  - Configuração: `initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }`.
- **Interação (Hover):**
  - **Cards:** Crescimento de scale para `1.05`.
  - **Botões:** Crescimento de scale para `1.03` e feedback de `0.97` no clique (tap).

---

## 8. Regras de Acessibilidade (Contraste)
**NUNCA** use texto cinza claro sobre fundo branco ou texto branco puro com opacidade excessiva sobre fundos coloridos.
- **Mínimo:** Texto sobre fundo escuro deve usar `rgba(255, 255, 255, 0.9)` para reduzir o glare, mas manter o contraste.
- **InfoBar:** Sempre deve ter fundo sólido em `--cumulus-primary` para garantir a leitura da mensagem global.
