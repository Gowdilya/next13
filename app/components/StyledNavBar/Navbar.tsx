"use client";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

export type NavBarProps = {
  style: StyleProps;
};

export type StyleProps = {
  bgColor: String;
  textColor: String;
};

const baseSpan = css`
  background-color: ${(props) => props.color};
  height: 0.25rem; /* 4px */
  width: 100%;
  border-radius: 0.5rem; /* 8px */
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
const top = css`
  transform: ${(props) => props.open && "translateY(0.875rem) rotate(45deg)"};
`;

const middle = css`
  width: ${(props) => (props.open ? "0%" : "100%")};
`;

const bottom = css`
  transform: ${(props) => props.open && "translateY(-0.875rem) rotate(-45deg)"};
`;

const TopSpan = styled.span`
  ${baseSpan}
  ${top}
`;

const MidSpan = styled.span`
  ${baseSpan}
  ${middle}
`;

const BottomSpan = styled.span`
  ${baseSpan}
  ${bottom}
`;
const HamBurgerButton = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 2rem; /* 32px */
  height: 2rem; /* 32px */
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    visiblity: hidden;
    display: none;
  }
`;

const TopNav = styled.div`
  visibility: hidden;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    visibility: visible;
    justify-content: flex-end;
    align: end;
    width: 75%;
  }
`;

const MenuBar = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const StyledNav = styled.nav`
  z-index: 30;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  align-items: center;
  padding: 1rem; /* 16px */
  height: 5rem; /* 80px */
  display: flex;
  background-color: ${(props) => props.color};
`;

export default function Navbar({ style }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav color={style.bgColor}>
      <MobileNav
        open={open}
        setOpen={setOpen}
        bgColor={style.bgColor}
        textColor={style.textColor}
      />
      <LogoContainer>
        <a href="/">
          <Image
            priority
            src="/images/gowdilya.png"
            height={144}
            width={144}
            alt={"Gowdilya"}
          />
        </a>
      </LogoContainer>
      <MenuBar>
        <HamBurgerButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <TopSpan open={open} color={style.textColor} />
          <MidSpan open={open} color={style.textColor} />
          <BottomSpan open={open} color={style.textColor} />
        </HamBurgerButton>
        <TopNav>
          <NavLink to="/" textColor={style.textColor}>
            Home
          </NavLink>
          <NavLink to="/about" textColor={style.textColor}>
            About
          </NavLink>
          <NavLink to="/user/login" textColor={style.textColor}>
            Login
          </NavLink>
          <NavLink to="/user/signup" textColor={style.textColor}>
            Sign Up
          </NavLink>
        </TopNav>
      </MenuBar>
    </StyledNav>
  );
}
