import styled from "styled-components";
import { colors } from "../theme";

const ITEMS = ["Residential", "Workplace", "Hospital", "Hospitality", "Retail", "Educational"];

const Track = styled.div`
  background: ${colors.gold};
  padding: 0.8rem 0;
  overflow: hidden;
  white-space: nowrap;
`;

const Strip = styled.div`
  display: inline-flex;
  animation: marquee 22s linear infinite;
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2.5rem;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.ink};

  &::before {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(10, 10, 8, 0.35);
  }
`;

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <Track>
      <Strip>
        {doubled.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </Strip>
    </Track>
  );
}
