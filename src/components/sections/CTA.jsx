import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Fade from "../Fade";
import { Muted } from "../Shared";
import { colors, fonts, media, pagePadding } from "../../theme";
import { PHOTOS } from "../../data/photos";

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 8rem;
  padding-bottom: 8rem;
  ${pagePadding}

  ${media.mobile} {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }
`;

const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(8, 8, 6, 0.92) 0%, rgba(8, 8, 6, 0.7) 60%, rgba(8, 8, 6, 0.5) 100%);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Title = styled.h2`
  font-family: ${fonts.serif};
  font-size: clamp(2.2rem, 3.8vw, 3.5rem);
  font-weight: 300;
  line-height: 1.12;
  color: ${colors.offwhite};

  em {
    font-style: italic;
    color: ${colors.gold};
  }

  ${media.mobile} {
    font-size: clamp(1.9rem, 8.5vw, 2.4rem);
  }
`;

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Background src={PHOTOS.cta} alt="Architecture" />
      <Overlay />

      <Content>
        <Fade>
          <Title>
            Ready to build
            <br />
            something <em>that endures?</em>
          </Title>
        </Fade>
        <Fade delay={200}>
          <Muted style={{ marginBottom: "2rem" }}>
            We take on a carefully chosen number of projects each year to give
            every client our full focus. Tell us about your vision — we would
            love to hear it.
          </Muted>
          <Button variant="contained" onClick={() => navigate("/contact")}>
            Begin the Conversation
          </Button>
        </Fade>
      </Content>
    </Wrap>
  );
}
