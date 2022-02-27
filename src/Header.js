import React, { useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { NavLink as Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Nav>
        <Link to={"/"}>
          <Logo
            src="https://bip.so/static/media/logo.842fade0.svg"
            alt="Bip Logo"
          />
        </Link>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Assignment
          </NavLink>

          {/* Second Nav */}
          <NavBtnLink to="/search">
            <FaSearch />
          </NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;

export const Nav = styled.nav`
  background: #22303c;
  /* background: #121212; */
  height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  width: 100%;
  position: fixed;
  top: 0;

  z-index: 1001;

  user-select: none;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const Logo = styled.img`
  width: 50px;
  padding: 5px;
  cursor: pointer;
  object-fit: contain;
  @media (max-width: 724px) {
    width: 60px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

const NavBtnLink = styled(Link)`
  border-radius: 100%;
  background: #808080;
  padding: 10px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 40px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  display: flex;
  justify-content: end;

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  } */
`;
