import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Fade from "../Fade";
import { Line } from "../Shared";
import { colors, faint, fonts, media } from "../../theme";
import { PHOTOS } from "../../data/photos";

const Wrap = styled.section`
  min-height: 100vh;
  /* real viewport height on mobile browsers (accounts for the URL bar) */
  min-height: 100svh;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: kenBurns 18s ease-in-out infinite alternate;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to top, rgba(8, 8, 6, 0.9), transparent 30%),
      linear-gradient(105deg, rgba(8, 8, 6, 0.88) 0%, rgba(8, 8, 6, 0.72) 50%, rgba(8, 8, 6, 0.35) 100%);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 3.5rem 6rem;
  max-width: 720px;

  ${media.tablet} {
    padding: 8rem 2rem 6rem;
    max-width: 100%;
  }

  ${media.mobile} {
    padding: 7rem 1.25rem 6rem;
  }
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${colors.gold};
  font-weight: 300;
  margin-bottom: 2rem;

  ${media.mobile} {
    font-size: 0.58rem;
    letter-spacing: 0.2em;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h1`
  font-family: ${fonts.serif};
  font-size: clamp(3.2rem, 6vw, 5.8rem);
  font-weight: 300;
  line-height: 1.07;
  color: ${colors.offwhite};
  letter-spacing: -0.01em;
  margin-bottom: 2rem;

  em {
    font-style: italic;
    color: ${colors.gold};
  }

  ${media.mobile} {
    font-size: clamp(2.6rem, 13vw, 3.4rem);
    margin-bottom: 1.5rem;
  }
`;

const Intro = styled.p`
  font-size: 1rem;
  line-height: 1.85;
  color: ${faint(0.6)};
  max-width: 420px;
  margin-bottom: 3rem;
  font-weight: 200;

  ${media.mobile} {
    font-size: 0.92rem;
    line-height: 1.75;
    margin-bottom: 2.25rem;
  }
`;

const Stats = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3.5rem;
  z-index: 2;
  display: flex;
  gap: 1.5rem;
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${faint(0.3)};
  font-weight: 300;

  &::before {
    content: "";
    width: 0.5px;
    height: 40px;
    background: ${faint(0.2)};
    animation: shimmer 2s ease infinite;
  }

  ${media.tablet} {
    display: none;
  }
`;

/* Buttons stack on narrow phones instead of squeezing side by side */
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Background>
        <img src={PHOTOS.hero} alt="Modern architecture" />
      </Background>

      <Content>
        <Fade delay={200}>
          <Eyebrow>
            <Line /> Architecture · Interior · Landscape
          </Eyebrow>
        </Fade>

        <Fade delay={380}>
          <Title>
            Where form
            <br />
            meets <em>purpose</em>
          </Title>
        </Fade>

        <Fade delay={520}>
          <Intro>
            We design spaces that transcend function — environments where
            material, light, and geometry converge into something felt before
            it is seen.
          </Intro>
        </Fade>

        <Fade delay={680}>
          <Actions>
            <Button variant="contained" onClick={() => navigate("/work")}>
              View Projects
            </Button>
            <Button variant="text" onClick={() => navigate("/studio")}>
              Our Studio →
            </Button>
          </Actions>
        </Fade>
      </Content>

      <ScrollHint>Scroll</ScrollHint>
    </Wrap>
  );
}
