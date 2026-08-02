import { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "../Fade";
import { Label, SectionTitle } from "../Shared";
import ProjectCard from "../ProjectCard";
import { colors, faint, media, pagePadding } from "../../theme";
import { randomProjects } from "../../data/projects";

/* Mosaic layout: two feature cards on top, three smaller ones below.
   Change these numbers to change how many projects the home page shows. */
const LAYOUT = [
  { span: 6, tall: true },
  { span: 6, tall: true },
  { span: 4 },
  { span: 4 },
  { span: 4 },
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const AllLink = styled(Link)`
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${faint(0.4)};
  text-decoration: none;
  font-weight: 300;
  transition: color 0.2s;

  &:hover {
    color: ${colors.offwhite};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;

  /* Tablet: two per row regardless of the desktop span */
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    > * {
      grid-column: auto !important;
    }
  }

  /* Phone: one per row */
  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export default function ProjectsGrid({ showAllLink = true }) {
  /* Fresh random selection on every page load */
  const featured = useMemo(() => randomProjects(LAYOUT.length), []);

  return (
    <Wrap>
      <Header>
        <div>
          <Fade>
            <Label>Selected Work</Label>
          </Fade>
          <Fade delay={150}>
            <SectionTitle>
              Projects that
              <br />
              <em>define space</em>
            </SectionTitle>
          </Fade>
        </div>
        {showAllLink && <AllLink to="/work">All Projects →</AllLink>}
      </Header>

      <Grid>
        {featured.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            span={LAYOUT[i].span}
            tall={LAYOUT[i].tall}
          />
        ))}
      </Grid>
    </Wrap>
  );
}
