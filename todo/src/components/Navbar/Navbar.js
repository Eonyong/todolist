import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import NavbarStyles from "./Navbar.styles";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: space-around;
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

const Button = styled.button`
  font-size: 1rem;
  font-family: ${NavbarStyles.mainFont};
  background-color: white;
  color: ${NavbarStyles.mainButtonColor};
  margin: auto 0 auto 0;
  padding: 0.25em 1em;
  border: 2px solid ${NavbarStyles.mainButtonColor};
  border-radius: 3px;
  a {
    text-decoration: none;
  }
`;


const Navbar = () => {
  
  const items = ["", "about"]
  const lists = items.map((item) => (
    <ListItems>
      <NavLink to={ item } className={({ isActive }) => isActive ? "active" : "not"}>
        { item ? item : "Home" }
      </NavLink>
    </ListItems>
  ))

  return(
    <Nav>
      <p>hihi</p>
      <Lists>{ lists }</Lists>
      <Button>
        <NavLink to="/login">
          Login
        </NavLink>
      </Button>
    </Nav>
  )
}

export default Navbar;