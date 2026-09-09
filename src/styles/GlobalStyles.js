import { createGlobalStyle } from "styled-components";
import { colors, fonts, media, weights } from "../theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    /* stop iOS from auto-enlarging text in landscape */
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${colors.ink};
    color: ${colors.offwhite};
    font-family: ${fonts.sans};
    overflow-x: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ── Typography rules ──────────────────────────────────────────────
     One sans-serif family everywhere, and no slanted text anywhere.
     Emphasis is carried by WEIGHT instead of italics.                */

  /* Everything inherits the single family — including form controls,
     which browsers otherwise render in their own default font */
  input, textarea, select, button {
    font-family: inherit;
  }

  /* Kill italics site-wide, whatever produces them */
  em, i, cite, address, dfn, var, blockquote, q {
    font-style: normal;
  }

  /* <em> now means "emphasised" — shown a step heavier, not slanted */
  em {
    font-weight: ${weights.medium};
  }

  /* Bold still works and is properly bold */
  strong, b {
    font-weight: ${weights.bold};
  }

  /* Nothing may push the page wider than the screen */
  img, video, svg {
    max-width: 100%;
  }

  /* Slightly smaller base size on phones so every rem-based
     size in the site scales down together */
  ${media.mobile} {
    html {
      font-size: 15px;
    }
  }

  /* ── Keyframe animations ── */
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes kenBurns {
    0%   { transform: scale(1.08) translateX(0); }
    100% { transform: scale(1)    translateX(-1%); }
  }

  @keyframes shimmer {
    0%   { opacity: 0.3; }
    50%  { opacity: 0.7; }
    100% { opacity: 0.3; }
  }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar              { width: 4px; }
  ::-webkit-scrollbar-track        { background: ${colors.ink}; }
  ::-webkit-scrollbar-thumb        { background: ${colors.gold}; border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover  { background: ${colors.goldLight}; }

  /* ── Selection ── */
  ::selection {
    background: rgba(200, 169, 110, 0.25);
    color: ${colors.offwhite};
  }
`;

export default GlobalStyles;
