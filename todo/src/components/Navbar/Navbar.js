import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import NavbarStyles from "./Navbar.styles";

const Nav = styled.nav`
  height: 30px;
  width: 100%;
  text-align: center;
`;

const Lists = styled.ul`
  list-style: none;
  height: 60px;
  margin: auto;
  padding: 0;
`;

const ListItems = styled.li`
  display: inline-block;
  height: 60px;
  a {
    font-family: ${NavbarStyles.mainFont};
    display: block;
    position: relative;
    height: 60px;
    line-height: 65px;
    font-size: 1rem;
    font-wieght: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color ${NavbarStyles.mainTextColor};
  }
  .active {
    border-bottom: solid 3px ${NavbarStyles.mainOrangeColor};
  }
`;



const Navbar = () => {
  
  return(
    <Nav>
      <Lists>
        <ListItems>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : "not"}>
            Home
          </NavLink>
        </ListItems>
        <ListItems>
          <NavLink to="/login" className={({ isActive }) => isActive ? "selected" : "not"}>
            Login
          </NavLink>
        </ListItems>
      </Lists>
    </Nav>
  )
}

export default Navbar;