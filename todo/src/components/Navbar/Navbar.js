import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import NavbarStyles from "./Navbar.styles"

// import { Menu } from "@styled-icons/evaicons-solid/Menu";

const Nav = styled.nav`
  max-height: 60px;
  max-width: 100%;
  text-align: center;
  align-content: center;
  position: relative;
  display: flex;
  margin: 0 26px;
  justify-content: space-between;
`;

const Lists = styled.ul`
  list-style: none;
  float: left;
  text-align: left;
  height: 60px;
  margin: 24px 30px 0 0;
`;

const ListItems = styled.li`
  display: inline-block;
  height: 60px;
  a {
    font-family: ${NavbarStyles.mainFont};
    display: block;
    position: relative;
    font-size: 1rem;
    font-wieght: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color ${NavbarStyles.mainTextColor};
  }
  .active {
    border-bottom: 2px solid ${NavbarStyles.mainOrangeColor};
  }
`;

const Button = styled.text`
  font-size: 1rem;
  font-family: ${NavbarStyles.mainFont};
  background-color: white;
  color: ${NavbarStyles.mainButtonColor};
  margin: auto 0 auto 0;
  display: flex;
  &:hover{
    color: ${NavbarStyles.mainButtonColor};
  }
  a {
    margin: 0.5rem;
    text-decoration: none;
    align-self: center;
  }
`;

// const MenuIcon = styled(Menu)`
//   height: 30px;
//   margin: auto 0 auto 5px;
// `;
// interface DialogProps {
//   children?: ReactNode;
//   isOpen: Boolean;
// }


const Navbar = () => {
  
  const items = ["", "about"]


  const lists = (props) => props.map((item) => (
    <ListItems>
      <NavLink to={ item } className={({ isActive }) => isActive ? "active" : "not"}>
        { item ? item : "Home" }
      </NavLink>
    </ListItems>
  ))

  return(
    <>
      <Nav>
        {/* <MenuIcon /> */}
        <Lists>{ lists(items)  }</Lists>
        <Button>
          <NavLink to="/login" >Login</NavLink>
          <p>/</p>
          <NavLink to="/signup">SignUp</NavLink>
        </Button>
      </Nav>
    </>
  )
}

export default Navbar;