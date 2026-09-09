import styled from "styled-components";
import { colors, faint, fonts, media, pagePadding } from "../../theme";

const AWARDS = [
  ["AIA", "Honor Award 2024"],
  ["RIBA", "International Award"],
  ["Dezeen", "Building of the Year"],
  ["Frame", "Interior of the Year"],
];

const Wrap = styled.div`
  background: ${colors.inkSoft};
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-top: 0.5px solid ${faint(0.05)};
  border-bottom: 0.5px solid ${faint(0.05)};
  ${pagePadding}

  ${media.tablet} {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1.5rem 2.5rem;
  }
`;

const Caption = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${faint(0.2)};
  white-space: nowrap;
`;

const Award = styled.div`
  text-align: center;
`;

const Org = styled.div`
  font-family: ${fonts.sans};
  font-size: 1.05rem;
  color: ${colors.offwhite};
`;

const Prize = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${faint(0.3)};
  margin-top: 2px;
`;

export default function AwardsBar() {
  return (
    <Wrap>
      <Caption>Recognised by</Caption>
      {AWARDS.map(([org, prize]) => (
        <Award key={org}>
          <Org>{org}</Org>
          <Prize>{prize}</Prize>
        </Award>
      ))}
    </Wrap>
  );
}
