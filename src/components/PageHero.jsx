import styled from "styled-components";
import Fade from "./Fade";
import { Label } from "./Shared";
import { colors, fonts, media, pagePadding } from "../theme";

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 11rem;
  padding-bottom: 5rem;
  ${pagePadding}

  ${media.tablet} {
    padding-top: 9rem;
    padding-bottom: 3.5rem;
  }

  ${media.mobile} {
    padding-top: 7.5rem;
    padding-bottom: 2.5rem;
  }
`;

const Photo = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(8, 8, 6, 0.92) 0%, rgba(8, 8, 6, 0.75) 60%, rgba(8, 8, 6, 0.5) 100%);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: ${fonts.sans};
  font-size: clamp(2.6rem, 4.5vw, 4.2rem);
  font-weight: 300;
  line-height: 1.1;
  color: ${colors.offwhite};
  letter-spacing: -0.01em;

  em {
    font-style: normal;
  }

  ${media.mobile} {
    font-size: clamp(2rem, 9vw, 2.6rem);
  }
`;

/* Compact hero banner for subpages */
export default function PageHero({ label, title, photo }) {
  return (
    <Wrap>
      {photo && (
        <>
          <Photo src={photo} alt="" />
          <Overlay />
        </>
      )}
      <Content>
        <Fade delay={100}>
          <Label>{label}</Label>
        </Fade>
        <Fade delay={250}>
          <Title>{title}</Title>
        </Fade>
      </Content>
    </Wrap>
  );
}
