import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, faint, fonts, media } from "../theme";

/* Project card.
   `span`  — how many of the 12 grid columns it takes (default 4)
   `tall`  — taller photo, for feature cards on the home page */

const Card = styled(Link)`
  grid-column: span ${({ $span }) => $span};
  display: block;
  overflow: hidden;
  position: relative;
  background: ${colors.card};
  text-decoration: none;
`;

const PhotoFrame = styled.div`
  overflow: hidden;
  position: relative;
  aspect-ratio: ${({ $tall }) => ($tall ? "4 / 3.4" : "4 / 2.6")};

  ${media.mobile} {
    /* one consistent shape when cards are full width */
    aspect-ratio: 4 / 3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(8, 8, 6, 0.1);
    transition: background 0.4s;
  }

  ${Card}:hover & img {
    transform: scale(1.06);
  }

  ${Card}:hover &::after {
    background: rgba(8, 8, 6, 0.3);
  }
`;

const Info = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  border-top: 0.5px solid ${faint(0.06)};
  background: ${colors.card};

  ${media.mobile} {
    padding: 1rem 1.1rem;
  }
`;

const Category = styled.div`
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${faint(0.35)};
  margin-bottom: 0.3rem;
  font-weight: 300;
`;

const Name = styled.div`
  font-family: ${fonts.sans};
  font-size: 1.15rem;
  color: ${colors.offwhite};
  line-height: 1.3;

  ${media.mobile} {
    font-size: 1.05rem;
  }
`;

const Count = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  color: ${faint(0.28)};
  white-space: nowrap;
`;

const Arrow = styled.span`
  font-size: 1.1rem;
  color: ${faint(0.3)};
  transition: all 0.25s;

  ${Card}:hover & {
    color: ${colors.gold};
    transform: translate(3px, -3px);
  }
`;

export default function ProjectCard({ project, span = 4, tall = false }) {
  return (
    <Card to={`/work/${project.slug}`} $span={span}>
      <PhotoFrame $tall={tall}>
        <img src={project.photo} alt={project.name} loading="lazy" />
      </PhotoFrame>
      <Info>
        <div>
          <Category>
            {project.location} · {project.year}
          </Category>
          <Name>{project.name}</Name>
        </div>
        <div style={{ textAlign: "right" }}>
          <Count>{project.gallery.length} photos</Count>
          <div>
            <Arrow>↗</Arrow>
          </div>
        </div>
      </Info>
    </Card>
  );
}
