import styled from "styled-components";
import Fade from "../Fade";
import { Label, SectionTitle, Muted } from "../Shared";
import { colors, faint, fonts, media, pagePadding } from "../../theme";
import { PHOTOS } from "../../data/photos";

const PILLARS = [
  { n: "01", title: "Material Honesty", text: "Every surface earns its presence. Materials chosen for character, aging, and truth within the whole." },
  { n: "02", title: "Contextual Sensitivity", text: "We read the land, the light, and the history. Each site demands its own architectural language." },
  { n: "03", title: "Enduring Craft", text: "We resist the fashionable and pursue the timeless. Buildings should outlast their architects." },
];

const Wrap = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  background: ${colors.inkSoft};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  ${pagePadding}

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  ${media.mobile} {
    padding-top: 4rem;
    padding-bottom: 4rem;
    gap: 2.5rem;
  }
`;

/* ── Stacked photo composition ── */
const Composition = styled.div`
  position: relative;
  height: 560px;

  ${media.tablet} {
    height: 440px;
  }

  ${media.mobile} {
    height: 320px;
  }
`;

const MainPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 74%;
  height: 82%;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(8, 8, 6, 0.15);
  }
`;

const AccentPhoto = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 48%;
  height: 50%;
  border: 3px solid ${colors.inkSoft};
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(8, 8, 6, 0.2);
  }
`;

const GoldBar = styled.div`
  position: absolute;
  top: 82%;
  right: 0;
  width: 74%;
  height: 2px;
  background: ${colors.gold};
  opacity: 0.6;
`;

const YearBadge = styled.div`
  position: absolute;
  bottom: 50%;
  right: 26%;
  transform: translate(50%, 50%);
  background: ${colors.gold};
  color: ${colors.ink};
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 1px;
  z-index: 10;

  ${media.mobile} {
    font-size: 0.55rem;
    padding: 0.35rem 0.7rem;
  }
`;

/* ── Pillars list ── */
const Pillar = styled.div`
  padding: 1.25rem 0;
  border-bottom: 0.5px solid ${faint(0.07)};
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const PillarNumber = styled.div`
  font-family: ${fonts.sans};
  font-size: 0.9rem;
  color: ${colors.gold};
  font-weight: 300;
  min-width: 24px;
  margin-top: 2px;
`;

const PillarTitle = styled.div`
  font-family: ${fonts.sans};
  font-size: 1.05rem;
  color: ${colors.offwhite};
  margin-bottom: 0.25rem;
`;

const PillarText = styled.div`
  font-size: 0.83rem;
  line-height: 1.7;
  color: ${faint(0.4)};
  font-weight: 200;
`;

export default function AboutSection() {
  return (
    <Wrap>
      <Composition>
        <MainPhoto>
          <img src={PHOTOS.about1} alt="Interior design" />
        </MainPhoto>
        <AccentPhoto>
          <img src={PHOTOS.about2} alt="Architecture detail" />
        </AccentPhoto>
        <GoldBar />
        <YearBadge>Est. 2006</YearBadge>
      </Composition>

      <div>
        <Fade>
          <Label>The Studio</Label>
        </Fade>
        <Fade delay={150}>
          <SectionTitle>
            Architecture as a
            <br />
            <em>practice of listening</em>
          </SectionTitle>
        </Fade>
        <Fade delay={250}>
          <Muted style={{ margin: "1.5rem 0 2rem" }}>
            Number Nine Associate is a multidisciplinary studio rooted in
            the conviction that exceptional space emerges from a deep
            understanding of place, people, and purpose. We take on a limited
            number of commissions each year.
          </Muted>
        </Fade>
        <Fade delay={350}>
          {PILLARS.map((pillar) => (
            <Pillar key={pillar.n}>
              <PillarNumber>{pillar.n}</PillarNumber>
              <div>
                <PillarTitle>{pillar.title}</PillarTitle>
                <PillarText>{pillar.text}</PillarText>
              </div>
            </Pillar>
          ))}
        </Fade>
      </div>
    </Wrap>
  );
}
