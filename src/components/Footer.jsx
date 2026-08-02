import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { colors, faint, media, pagePadding } from "../theme";

const COLUMNS = [
  { title: "Work", links: [["Residential", "/work"], ["Commercial", "/work"], ["Cultural", "/work"], ["Hospitality", "/work"], ["Landscape", "/work"]] },
  { title: "Studio", links: [["About", "/studio"], ["Team", "/studio"], ["Process", "/studio"], ["Awards", "/studio"], ["Press", "/studio"]] },
  { title: "Connect", links: [["New Projects", "/contact"], ["Media", "/contact"], ["Careers", "/contact"], ["Instagram", "/contact"], ["LinkedIn", "/contact"]] },
];

const Wrap = styled.footer`
  background: ${colors.inkDeep};
  padding-top: 5rem;
  padding-bottom: 2rem;
  border-top: 0.5px solid ${faint(0.05)};
  ${pagePadding}

  ${media.mobile} {
    padding-top: 3.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 0.5px solid ${faint(0.06)};

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

const Tagline = styled.p`
  font-size: 0.85rem;
  line-height: 1.75;
  color: ${faint(0.28)};
  font-weight: 200;
  max-width: 240px;
  margin-top: 1rem;
`;

const ColTitle = styled.div`
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${faint(0.22)};
  margin-bottom: 1.25rem;
`;

const ColList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ColLink = styled(Link)`
  font-size: 0.85rem;
  color: ${faint(0.38)};
  text-decoration: none;
  font-weight: 200;
  transition: color 0.2s;

  &:hover {
    color: ${faint(0.7)};
  }
`;

const Bottom = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.68rem;
  color: ${faint(0.18)};
  letter-spacing: 0.06em;

  ${media.mobile} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <Grid>
        <div>
          <Brand to="/">
            <Logo />
          </Brand>
          <Tagline>
            Architecture rooted in material honesty, spatial clarity, and deep
            respect for place. Bangkok.
          </Tagline>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <ColTitle>{col.title}</ColTitle>
            <ColList>
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <ColLink to={to}>{label}</ColLink>
                </li>
              ))}
            </ColList>
          </div>
        ))}
      </Grid>

      <Bottom>
        <span>© 2026 Number Nine Associate. All rights reserved.</span>
        <span>Crafted with precision</span>
      </Bottom>
    </Wrap>
  );
}
