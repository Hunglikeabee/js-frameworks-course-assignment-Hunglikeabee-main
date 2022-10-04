import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";


const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
        padding: 10px;
        text-decoration: none;
        color: black;
    }
`

export default function Header() {

  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext)

  const logout = () => {
    setAuth(null)
    navigate("/")
  }

  return (
      <StyledHeader>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
        { auth ? "" : <NavLink to="/login">Login</NavLink>}
        { auth ? <NavLink to="/admin">Admin</NavLink> : "" }
        { auth ? <button onClick={logout}>Logout</button> : ""}
      </StyledHeader>
  )
}