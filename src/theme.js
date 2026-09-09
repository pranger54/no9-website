import { createTheme } from "@mui/material/styles";

/* ── Design tokens (same palette as the original site) ── */
export const colors = {
  gold: "#C8A96E",
  goldLight: "#E2C88A",
  ink: "#0A0A08",
  inkSoft: "#0D0D0B",
  inkDeep: "#060604",
  card: "#0F0F0D",
  offwhite: "#F0EDE6",
};

/* rgba(offwhite, opacity) helper — used everywhere for muted text/borders */
export const faint = (opacity) => `rgba(240, 237, 230, ${opacity})`;

/* ── Typeface ──
   One sans-serif family across the whole site. No italics anywhere —
   emphasis is expressed with weight instead (see GlobalStyles.js).
   Available weights: 200 300 400 500 600 700 (loaded in index.html). */
export const fonts = {
  sans: "'Outfit', sans-serif",
  /* Kept as an alias so any older code that still says fonts.serif
     renders in the same sans family rather than breaking. */
  get serif() {
    return this.sans;
  },
};

/* Weight scale — use these instead of hard-coding numbers */
export const weights = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

/* ── Responsive breakpoints ──
   Use inside any styled-component:

     const Box = styled.div`
       padding: 7rem 3.5rem;

       ${media.tablet} { padding: 5rem 2rem; }
       ${media.mobile}  { padding: 3.5rem 1.25rem; }
     `;                                                        */
export const breakpoints = {
  mobile: 640,   // phones
  tablet: 900,   // small tablets / large phones landscape
  laptop: 1200,  // small laptops
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  laptop: `@media (max-width: ${breakpoints.laptop}px)`,
  /* the reverse, for desktop-only rules */
  desktop: `@media (min-width: ${breakpoints.tablet + 1}px)`,
};

/* Height of the fixed nav bar once scrolled (logo height + its padding).
   Anything that needs to sit just below the nav — the sticky category bar
   on /work, scroll-to anchors — should use these numbers, so they stay
   correct if the logo size in Logo.jsx changes. */
export const navHeight = {
  desktop: 98, // logo 68 + 0.9rem padding top & bottom
  tablet: 79,  // logo 56 + 0.7rem
  mobile: 70,  // logo 46 + 0.75rem
};

/* Standard page side padding, shrinks on small screens */
export const pagePadding = `
  padding-left: 3.5rem;
  padding-right: 3.5rem;

  ${media.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${media.mobile} {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

/* ── MUI theme ── */
const theme = createTheme({
  /* Same numbers as the `media` helpers above, so styled-components and
     MUI's sx breakpoints stay in sync:
       xs = phone   (0 – 639)
       sm = tablet  (640 – 899)
       md = desktop (900+)                                            */
  breakpoints: {
    values: {
      xs: 0,
      sm: breakpoints.mobile,
      md: breakpoints.tablet,
      lg: breakpoints.laptop,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: { main: colors.gold, light: colors.goldLight, contrastText: colors.ink },
    background: { default: colors.ink, paper: colors.card },
    text: { primary: colors.offwhite, secondary: faint(0.6) },
    divider: faint(0.07),
  },
  typography: {
    fontFamily: fonts.sans,
    h1: { fontFamily: fonts.sans, fontWeight: 300, letterSpacing: "-0.01em" },
    h2: { fontFamily: fonts.sans, fontWeight: 300, lineHeight: 1.15 },
    h3: { fontFamily: fonts.sans, fontWeight: 400 },
    body1: { fontWeight: 200, lineHeight: 1.85 },
    body2: { fontWeight: 200, lineHeight: 1.75 },
    button: { fontFamily: fonts.sans, letterSpacing: "0.16em", fontWeight: 500 },
  },
  shape: { borderRadius: 1 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          fontSize: "0.72rem",
          borderRadius: 1,
          transition: "all 0.25s",
        },
        containedPrimary: {
          padding: "0.9rem 2.4rem",
          "&:hover": { background: colors.goldLight, transform: "translateY(-2px)" },
        },
        outlinedPrimary: {
          padding: "0.55rem 1.5rem",
          fontWeight: 400,
          borderColor: "rgba(200, 169, 110, 0.6)",
          "&:hover": { background: colors.gold, color: colors.ink, borderColor: colors.gold },
        },
        textPrimary: {
          color: faint(0.55),
          "&:hover": { background: "transparent", color: colors.offwhite },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined", fullWidth: true },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: faint(0.04),
            borderRadius: 1,
            fontWeight: 200,
            fontSize: "0.9rem",
            "& fieldset": { border: `0.5px solid ${faint(0.12)}` },
            "&:hover fieldset": { borderColor: faint(0.25) },
            "&.Mui-focused fieldset": { border: `0.5px solid ${colors.gold}` },
          },
        },
      },
    },
  },
});

export default theme;
