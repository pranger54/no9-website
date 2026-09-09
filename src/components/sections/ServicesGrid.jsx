import styled from "styled-components";
import Fade from "../Fade";
import { Label, SectionTitle } from "../Shared";
import { colors, faint, fonts, media, pagePadding } from "../../theme";
import { SERVICES } from "../../data/services";

const gold = colors.gold;

/* Line-art icons, one per service */
const ICONS = [
  <svg key="architecture" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="2" y="2" width="32" height="32" stroke={gold} strokeWidth="1"/><line x1="2" y1="12" x2="34" y2="12" stroke={gold} strokeWidth="0.6"/><line x1="2" y1="22" x2="34" y2="22" stroke={gold} strokeWidth="0.6"/><line x1="12" y1="2" x2="12" y2="34" stroke={gold} strokeWidth="0.6"/><line x1="24" y1="2" x2="24" y2="34" stroke={gold} strokeWidth="0.6"/></svg>,
  <svg key="interior" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="10" width="28" height="20" stroke={gold} strokeWidth="1"/><rect x="11" y="15" width="14" height="9" stroke={gold} strokeWidth="0.6"/><line x1="4" y1="10" x2="18" y2="3" stroke={gold} strokeWidth="0.8"/><line x1="32" y1="10" x2="18" y2="3" stroke={gold} strokeWidth="0.8"/></svg>,
  <svg key="structure" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="14" stroke={gold} strokeWidth="1"/><path d="M18 4 Q24 11 18 18 Q12 25 18 32" stroke={gold} strokeWidth="0.6" fill="none"/><line x1="4" y1="18" x2="32" y2="18" stroke={gold} strokeWidth="0.6"/></svg>,
  // <svg key="residential" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="2" y="16" width="32" height="18" stroke={gold} strokeWidth="1"/><path d="M2 16 L18 5 L34 16" stroke={gold} strokeWidth="1" fill="none"/><rect x="14" y="24" width="8" height="10" stroke={gold} strokeWidth="0.6"/></svg>,
  // <svg key="commercial" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="2" width="24" height="32" stroke={gold} strokeWidth="1"/>{[0, 1, 2, 3, 4].map((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={10 + c * 12} y={5 + r * 5} width={8} height={3} fill="rgba(200,169,110,0.25)"/>))}<rect x="13" y="26" width="10" height="8" stroke={gold} strokeWidth="0.6"/></svg>,
  // <svg key="civic" width="36" height="36" viewBox="0 0 36 36" fill="none"><ellipse cx="18" cy="22" rx="14" ry="9" stroke={gold} strokeWidth="1"/><line x1="18" y1="13" x2="18" y2="2" stroke={gold} strokeWidth="1"/><line x1="11" y1="9" x2="18" y2="2" stroke={gold} strokeWidth="0.6"/><line x1="25" y1="9" x2="18" y2="2" stroke={gold} strokeWidth="0.6"/></svg>,
];

const Wrap = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  background: ${colors.ink};
  ${pagePadding}

  ${media.mobile} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${faint(0.05)};
  margin-top: 3.5rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    margin-top: 2.25rem;
  }
`;

const Card = styled.div`
  background: ${colors.ink};
  padding: 2.5rem 2rem;

  ${media.mobile} {
    padding: 2rem 1.25rem;
  }
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;

  &:hover {
    background: #111110;
  }

  /* gold underline sweeps in on hover */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.gold}, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Icon = styled.div`
  margin-bottom: 1.5rem;
  opacity: 0.55;
  transition: opacity 0.3s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-family: ${fonts.sans};
  font-size: 1.3rem;
  color: ${colors.offwhite};
  margin-bottom: 0.75rem;
`;

const Text = styled.div`
  font-size: 0.83rem;
  line-height: 1.75;
  color: ${faint(0.4)};
  font-weight: 200;
  margin-bottom: 1.5rem;
`;

const Explore = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.gold};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  span {
    transition: transform 0.2s;
  }

  ${Card}:hover & span {
    transform: translateX(5px);
  }
`;

export default function ServicesGrid() {
  return (
    <Wrap>
      <Fade>
        <Label>What We Do</Label>
      </Fade>
      <Fade delay={150}>
        <SectionTitle>
          Full-spectrum design,
          <br />
          <em>from ground to sky</em>
        </SectionTitle>
      </Fade>

      <Grid>
        {SERVICES.map((service, i) => (
          <Card key={service.t}>
            <Icon>{ICONS[i]}</Icon>
            <Title>{service.t}</Title>
            <Text>{service.d}</Text>
            {/* <Explore>
              Explore <span>→</span>
            </Explore> */}
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
