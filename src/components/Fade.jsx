import styled from "styled-components";
import { useInView } from "../hooks/useUI";

const Reveal = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : 28)}px);
  transition:
    opacity 0.8s ease ${({ $delay }) => $delay}ms,
    transform 0.8s ease ${({ $delay }) => $delay}ms;
`;

/* Fades content in when it scrolls into view.
   Usage: <Fade delay={200}>…</Fade> */
export default function Fade({ delay = 0, children, ...rest }) {
  const { ref, inView } = useInView();
  return (
    <Reveal ref={ref} $visible={inView} $delay={delay} {...rest}>
      {children}
    </Reveal>
  );
}
