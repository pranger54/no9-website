import styled from "styled-components";
import Fade from "../Fade";
import { Label } from "../Shared";
import { colors, faint, fonts, media, pagePadding } from "../../theme";
import { PHOTOS } from "../../data/photos";

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
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
  object-position: center 40%;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 6, 0.78);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Quote = styled.blockquote`
  font-family: ${fonts.serif};
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.45;
  color: ${colors.offwhite};
  max-width: 780px;
  margin: 2rem auto 2.5rem;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(200, 169, 110, 0.15);
  border: 0.5px solid rgba(200, 169, 110, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.serif};
  font-size: 1rem;
  color: ${colors.gold};
`;

const AuthorName = styled.div`
  font-size: 0.85rem;
  color: ${colors.offwhite};
`;

const AuthorRole = styled.div`
  font-size: 0.7rem;
  color: ${faint(0.35)};
  letter-spacing: 0.06em;
`;

export default function Testimonial() {
  return (
    <Wrap>
      <Background src={PHOTOS.testimonial} alt="Interior" />
      <Overlay />

      <Content>
        <Fade>
          <Label center>Client Voice</Label>
        </Fade>
        <Fade delay={200}>
          <Quote>
            "Number Nine Associate did not give us a building. They gave us a place —
            somewhere that will define our family for generations. The care
            they brought to every material and every proportion still moves me."
          </Quote>
        </Fade>
        <Fade delay={350}>
          <Author>
            <Avatar>MR</Avatar>
            <div style={{ textAlign: "left" }}>
              <AuthorName>Miranda Reyes</AuthorName>
              <AuthorRole>Founder, Reyes Family Foundation</AuthorRole>
            </div>
          </Author>
        </Fade>
      </Content>
    </Wrap>
  );
}
