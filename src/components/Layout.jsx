import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";
import { ScrollToTop } from "./Shared";
import { colors, fonts } from "../theme";

const Page = styled.div`
  font-family: ${fonts.sans};
  background: ${colors.ink};
  color: ${colors.offwhite};
  overflow-x: hidden;
  min-height: 100vh;
`;

export default function Layout() {
  return (
    <Page>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </Page>
  );
}
