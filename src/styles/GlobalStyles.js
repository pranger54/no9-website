import { createGlobalStyle } from "styled-components";
import { colors, media } from "../theme";

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
    overflow-x: hidden;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
