import { useParams, Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import Fade from "../components/Fade";
import { Label } from "../components/Shared";
import CTA from "../components/sections/CTA";
import { colors, faint, fonts, media, pagePadding } from "../theme";
import { getProject, PROJECTS } from "../data/projects";

/* ── Hero ── */
const Hero = styled.section`
  position: relative;
  min-height: 72vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  ${media.tablet} {
    min-height: 60vh;
  }

  ${media.mobile} {
    min-height: 55svh;
  }
`;

const HeroPhoto = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8, 8, 6, 0.95) 0%, rgba(8, 8, 6, 0.4) 55%, rgba(8, 8, 6, 0.3) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding-bottom: 4rem;
  ${pagePadding}

  ${media.mobile} {
    padding-bottom: 2.5rem;
  }
`;

const Title = styled.h1`
  font-family: ${fonts.sans};
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  font-weight: 300;
  line-height: 1.08;
  color: ${colors.offwhite};
  letter-spacing: -0.01em;
`;

/* ── Facts + description ── */
const Facts = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: ${colors.ink};
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  ${pagePadding}

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  ${media.mobile} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const Fact = styled.div`
  padding: 1rem 0;
  border-bottom: 0.5px solid ${faint(0.07)};
`;

const FactLabel = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.gold};
  margin-bottom: 0.35rem;
  font-weight: 300;
`;

const FactValue = styled.div`
  font-size: 0.95rem;
  color: ${faint(0.65)};
  font-weight: 200;
`;

const Description = styled.p`
  font-family: ${fonts.sans};
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 300;
  line-height: 1.7;
  color: ${faint(0.75)};
`;

/* ── Gallery ── */
const Gallery = styled.section`
  padding-bottom: 6rem;
  background: ${colors.ink};
  display: grid;
  grid-template-columns: ${({ $single }) => ($single ? "1fr" : "repeat(2, 1fr)")};
  gap: 1.5rem;
  ${pagePadding}

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-bottom: 3.5rem;
  }
`;

const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 2px;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};

  img {
    width: 100%;
    height: ${({ $wide }) => ($wide ? "60vh" : "44vh")};
    object-fit: cover;
    display: block;
  }

  ${media.tablet} {
    img {
      height: ${({ $wide }) => ($wide ? "42vh" : "32vh")};
    }
  }

  ${media.mobile} {
    grid-column: auto;

    img {
      /* fixed shape instead of viewport heights — avoids giant crops */
      height: auto;
      aspect-ratio: 4 / 3;
    }
  }
`;

/* ── More projects ── */
const More = styled.section`
  padding-bottom: 6rem;
  background: ${colors.ink};
  ${pagePadding}

  ${media.mobile} {
    padding-bottom: 3.5rem;
  }
`;

const MoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const AllLink = styled(Link)`
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${faint(0.4)};
  text-decoration: none;
  font-weight: 300;

  &:hover {
    color: ${colors.offwhite};
  }
`;

const MoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const MoreCard = styled(Link)`
  text-decoration: none;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-radius: 2px;
    transition: opacity 0.3s;
  }

  &:hover img {
    opacity: 0.8;
  }
`;

const MoreCat = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${faint(0.35)};
  margin: 0.9rem 0 0.25rem;
`;

const MoreName = styled.div`
  font-family: ${fonts.sans};
  font-size: 1.05rem;
  color: ${colors.offwhite};
`;

/* Dynamic page: /work/:slug
   Add pictures per project in src/data/projects.js (photo + gallery) */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/work" replace />;

  const gallery = project.gallery ?? [];
  const others = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Hero>
        <HeroPhoto src={project.photo} alt={project.name} />
        <HeroOverlay />
        <HeroContent>
          <Fade delay={100}>
            <Label>{project.cat}</Label>
          </Fade>
          <Fade delay={250}>
            <Title>{project.name}</Title>
          </Fade>
        </HeroContent>
      </Hero>

      <Facts>
        <Fade delay={400}>
          {[
            ["Location", project.location],
            ["Year", project.year],
            ["Category", project.cat.split("·")[0].trim()],
          ].map(([label, value]) => (
            <Fact key={label}>
              <FactLabel>{label}</FactLabel>
              <FactValue>{value}</FactValue>
            </Fact>
          ))}
        </Fade>
        <Description>{project.description}</Description>
      </Facts>

      {gallery.length > 0 && (
        <Gallery $single={gallery.length === 1}>
          {gallery.map((src, i) => (
            <GalleryItem key={i} $wide={i === 0 && gallery.length % 2 !== 0}>
              <img src={src} alt={`${project.name} — view ${i + 1}`} />
            </GalleryItem>
          ))}
        </Gallery>
      )}

      <More>
        <MoreHeader>
          <Label>More Work</Label>
          <AllLink to="/work">All Projects →</AllLink>
        </MoreHeader>
        <MoreGrid>
          {others.map((other) => (
            <MoreCard key={other.slug} to={`/work/${other.slug}`}>
              <img src={other.photo} alt={other.name} />
              <MoreCat>{other.cat}</MoreCat>
              <MoreName>{other.name}</MoreName>
            </MoreCard>
          ))}
        </MoreGrid>
      </More>

      <CTA />
    </>
  );
}
