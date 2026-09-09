import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import { colors, faint, fonts, media } from "../theme";
import { useScrolled } from "../hooks/useUI";
import { CONTACT } from "../data/contact";

const LINKS = [
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/studio" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Bar = styled.nav`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: ${({ $scrolled }) => ($scrolled ? "0.9rem 3.5rem" : "1.5rem 3.5rem")};
  background: ${({ $scrolled, $open }) =>
    $scrolled || $open ? "rgba(8,8,6,0.94)" : "rgba(8,8,6,0.4)"};
  backdrop-filter: blur(20px);
  border-bottom: ${({ $scrolled }) => ($scrolled ? `0.5px solid ${faint(0.07)}` : "none")};
  transition: padding 0.4s ease, background 0.4s ease;

  ${media.tablet} {
    padding: ${({ $scrolled }) => ($scrolled ? "0.7rem 2rem" : "1rem 2rem")};
  }

  ${media.mobile} {
    padding: 0.75rem 1.25rem;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  flex-shrink: 0;
`;

/* ── Desktop links ── */
const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;

  ${media.laptop} {
    gap: 1.6rem;
  }

  ${media.tablet} {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 300;
  color: ${faint(0.6)};
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: ${colors.offwhite};
  }

  &.active {
    color: ${colors.gold};
  }
`;

/* ── Hamburger button (mobile only) ── */
const Burger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  ${media.tablet} {
    display: flex;
    align-items: flex-end;
  }

  span {
    display: block;
    height: 1px;
    background: ${colors.offwhite};
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    width: 26px;
    transform: ${({ $open }) => ($open ? "translateY(6px) rotate(45deg)" : "none")};
  }

  span:nth-child(2) {
    width: 18px;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  span:nth-child(3) {
    width: 26px;
    transform: ${({ $open }) => ($open ? "translateY(-6px) rotate(-45deg)" : "none")};
  }
`;

/* ── Slide-down mobile menu ── */
const Sheet = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 199;
    background: rgba(8, 8, 6, 0.98);
    backdrop-filter: blur(24px);
    padding: 7rem 2rem 2rem;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    overflow-y: auto;
  }

  ${media.mobile} {
    padding: 6rem 1.25rem 2rem;
  }
`;

const SheetLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const SheetItem = styled(NavLink)`
  display: block;
  padding: 1.15rem 0;
  border-bottom: 0.5px solid ${faint(0.08)};
  font-family: ${fonts.sans};
  font-size: 1.9rem;
  font-weight: 300;
  color: ${colors.offwhite};
  text-decoration: none;

  &.active {
    color: ${colors.gold};
  }
`;

const SheetFooter = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: ${faint(0.4)};
  font-weight: 200;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Nav() {
  const scrolled = useScrolled();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  /* Close the menu whenever the route changes */
  useEffect(() => setOpen(false), [pathname]);

  /* Stop the page behind the menu from scrolling */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Bar $scrolled={scrolled} $open={open}>
        <Brand to="/">
          <Logo small />
        </Brand>

        <Links>
          {LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavItem to={to}>{label}</NavItem>
            </li>
          ))}
          <li>
            <Button variant="outlined" onClick={() => navigate("/contact")}>
              Begin Project
            </Button>
          </li>
        </Links>

        <Burger
          $open={open}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </Burger>
      </Bar>

      <Sheet $open={open}>
        <SheetLinks>
          {LINKS.map(({ label, to }) => (
            <li key={to}>
              <SheetItem to={to} onClick={() => setOpen(false)}>
                {label}
              </SheetItem>
            </li>
          ))}
        </SheetLinks>

        <SheetFooter>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </SheetFooter>
      </Sheet>
    </>
  );
}
