import React from "react";
import styled from "styled-components";
import logo2 from "../assets/logo2.svg";
import { links } from "../utils/constants";
import { BsInstagram, BsFacebook, BsMessenger } from "react-icons/bs";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <div className="links">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="rights">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> ThePhoneShop</span>
        </h5>
        <h5>All rights reserved</h5>
      </div> */}
      <div className="icons">
        <Link to="/">
          <img src={logo2} alt="logo" />
        </Link>
        <div className="social-icons">
          <a href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a href="https://www.facebook.com/">
            <BsMessenger />
          </a>

        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 13rem;
  display: flex;
  position: relative;
  padding: 0rem 10rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  &:before,
  &:after {
    background: inherit;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &:before {
    top: 0;
    transform: skewY(-3deg);
    transform-origin: 0% 0;
  }

  &:after {
    bottom: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
  }
  .rights {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 200px;
  }
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-family: "Hind", sans-serif !important;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .nav-links {
    display: none;
  }
  .social-icons {
    color: #94a3b8;
    font-size: 2rem;
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    a {
      color: #94a3b8;
    }
  }
  @media (min-width: 776px) {
    flex-direction: row;
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-7);
        font-size: 1.3rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    img {
      width: 300px;
    }
  }
`;

export default Footer;
