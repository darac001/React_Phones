import React from "react";
import styled from "styled-components";
import logo from "../assets/MOBILE-LOGO.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useSidebarContext } from "../context/sidebar_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useSidebarContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="links-nav">
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}

            {myUser && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          <CartButtons />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
    }
    
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .links-nav{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
.logo{
  animation: slideRight 1s ease forwards;
}
@keyframes slideRight {
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
}

    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between; 
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      margin-right: 1rem;

      li {
        margin-top: 0.3rem;
        margin-right: 0.7rem;
        font-weight: 700
        ;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        padding-right: 0.2rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
