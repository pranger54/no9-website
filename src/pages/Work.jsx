import styled from "styled-components";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import Fade from "../components/Fade";
import CTA from "../components/sections/CTA";
import { colors, faint, fonts, media, navHeight, pagePadding } from "../theme";
import { PROJECTS_BY_CATEGORY, PROJECTS } from "../data/projects";
import { PHOTOS } from "../data/photos";

const Wrap = styled.section`
  padding-top: 2rem;
  padding-bottom: 6rem;
  background: ${colors.ink};
  ${pagePadding}

  ${media.mobile} {
    padding-top: 1rem;
    padding-bottom: 4rem;
  }
`;

/* ── Sticky category filter bar ── */
const Filters = styled.nav`
  position: sticky;
  /* sits directly under the fixed nav bar — see NAV_HEIGHT in theme.js */
  top: ${navHeight.desktop}px;
  z-index: 50;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.1rem 0;
  margin-bottom: 3rem;
  background: rgba(8, 8, 6, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 0.5px solid ${faint(0.07)};

  /* On phones: one swipeable row instead of wrapping onto many lines */
  ${media.tablet} {
    top: ${navHeight.tablet}px;
    flex-wrap: nowrap;
    gap: 1.5rem;
    overflow-x: auto;
    scrollbar-width: none;
    margin-bottom: 2rem;
    /* let it bleed to the screen edges so it feels like a real tab bar */
    margin-left: -2rem;
    margin-right: -2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${media.mobile} {
    top: ${navHeight.mobile}px;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const FilterLink = styled.a`
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 300;
  color: ${faint(0.45)};
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: ${colors.gold};
  }

  sup {
    font-size: 0.55rem;
    margin-left: 0.35rem;
    color: ${faint(0.25)};
  }
`;

/* ── One category block ── */
const Category = styled.section`
  /* clear both the nav and the sticky filter bar when jumping to a section */
  scroll-margin-top: ${navHeight.desktop + 58}px;
  margin-bottom: 4.5rem;

  ${media.tablet} {
    scroll-margin-top: ${navHeight.tablet + 54}px;
    margin-bottom: 3rem;
  }

  ${media.mobile} {
    scroll-margin-top: ${navHeight.mobile + 54}px;
  }
`;

const CategoryHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 0.5px solid ${faint(0.09)};
`;

const CategoryName = styled.h2`
  font-family: ${fonts.sans};
  font-size: clamp(1.6rem, 2.6vw, 2.3rem);
  font-weight: 300;
  color: ${colors.offwhite};
`;

const CategoryCount = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.gold};
  font-weight: 300;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;

  /* Tablet: two per row, ignoring the desktop spans */
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
  }
`;

/* Two projects fill the row (6 + 6); three or more sit in thirds (4 each) */
const spanFor = (total) => (total <= 2 ? 6 : 4);

export default function Work() {
  return (
    <>
      <PageHero
        label="Selected Work"
        photo={PHOTOS.p2}
        title={
          "Projects"
          // <>
          //   {PROJECTS.length} projects, <em>six disciplines</em>
          // </>
        }
      />

      <Wrap>
        <Filters>
          {PROJECTS_BY_CATEGORY.map(({ category, projects }) => (
            <FilterLink key={category} href={`#${category.toLowerCase()}`}>
              {category}
              <sup>{projects.length}</sup>
            </FilterLink>
          ))}
        </Filters>

        {PROJECTS_BY_CATEGORY.map(({ category, projects }) => (
          <Category key={category} id={category.toLowerCase()}>
            <CategoryHead>
              <CategoryName>{category}</CategoryName>
              <CategoryCount>
                {projects.length} {projects.length === 1 ? "project" : "projects"}
              </CategoryCount>
            </CategoryHead>

            <Grid>
              {projects.map((project) => (
                <Fade key={project.slug} style={{ gridColumn: `span ${spanFor(projects.length)}` }}>
                  <ProjectCard project={project} span={12} />
                </Fade>
              ))}
            </Grid>
          </Category>
        ))}
      </Wrap>

      <CTA />
    </>
  );
}
