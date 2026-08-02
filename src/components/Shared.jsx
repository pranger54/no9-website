import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors, faint, fonts, media } from "../theme";

/* ── Small shared building blocks ── */

/* Thin gold rule used inside labels */
export const Line = styled.span`
  display: inline-block;
  width: 32px;
  height: 0.5px;
  background: ${colors.gold};
  flex-shrink: 0;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: ${({ $center }) => ($center ? "center" : "flex-start")};
  font-size: 0.66rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: ${colors.gold};
  font-weight: 300;
  margin-bottom: 1.2rem;

  ${media.mobile} {
    font-size: 0.58rem;
    letter-spacing: 0.2em;
    gap: 0.5rem;
  }
`;

/* Gold eyebrow label, e.g. — SELECTED WORK — */
export const Label = ({ children, center }) => (
  <LabelRow $center={center}>
    <Line />
    {children}
    {center && <Line />}
  </LabelRow>
);

/* Big serif section heading */
export const SectionTitle = styled.h2`
  font-family: ${fonts.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 300;
  line-height: 1.15;
  color: ${colors.offwhite};

  em {
    font-style: italic;
  }
`;

/* Muted paragraph used across sections */
export const Muted = styled.p`
  font-size: 0.95rem;
  line-height: 1.85;
  color: ${faint(0.5)};
  font-weight: 200;
`;

/* Scrolls to top whenever the route changes */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}
