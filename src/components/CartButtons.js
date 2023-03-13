import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import carticon from '../assets/cart.svg';
import usericon from '../assets/user.svg';


const CartButton = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <img id="cart" src={carticon} alt="cart" />
         
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
            
            clearCart();
          }}
        >
        <img className="logoutin" src={usericon} alt="" />LOGOUT
          
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          <img className="logoutin" src={usericon} alt="" />LOGIN
          
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 140px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
 
    #cart {
      width: 1.5rem;
      color: black;
    }
  }
  .cart-value {
    position: absolute;
    top: 10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: solid 1px var(--clr-white);
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 12px;
    font-weight: 700;
    padding-top: 0.3rem;
   
    margin: 0rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    
    .logoutin {
      width: 1.2rem;
      margin-right: 0.2rem;
    }
  }
`;
export default CartButton;
