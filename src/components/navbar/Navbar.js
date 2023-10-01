import styled from 'styled-components';
import './navbar.css'
import React, { useState } from 'react';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const NavMobileItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  padding: 5%;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  background: linear-gradient(to right, #46a8ff, #90edfa); /* Replace these color codes with your desired colors */
  border: none; /* Remove the default border */
  color: transparent; /* Make the text transparent */
  -webkit-background-clip: text; /* Clip the background to the text */
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;

  
  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
    function HamburgerMenu() {
        return (
            <div className={`hamburger-menu`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        );
    }

    function XIcon() {
        return (
            <div className="x-icon">
                <div className="xbar bar1"></div>
                <div className="xbar bar2"></div>
            </div>
        );
    }


    return (
        <div className={"navigation"}>
        <Nav>
            <Logo className={"navbar-logo"}> FizyoNefes </Logo>
            <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                {isMobileNavOpen ? XIcon() : HamburgerMenu()}
            </MobileNavToggle>
            <DesktopNav>
                <NavItem><a href="/">Anasayfa</a></NavItem>
                <NavItem><a href="/About">Hakkımızda</a></NavItem>
                <NavItem><a href="/Contact">İletişim</a></NavItem>
            </DesktopNav>
        </Nav>
            <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
                <div className={"mobile-navbar-fields"}>
                <NavMobileItem><a href="/">Anasayfa</a></NavMobileItem>
                <NavMobileItem><a href="/About">Hakkımızda</a></NavMobileItem>
                <NavMobileItem><a href="/Contact">İletişim</a></NavMobileItem>
                </div>
            </MobileNav>
        </div>
    );


};




export default NavBar;