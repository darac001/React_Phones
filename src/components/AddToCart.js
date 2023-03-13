import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = (props) => {
  const { addToCart } = useCartContext();
  // from SingleProductPage
  const { single_product } = props;
  const { id, stock, colors } = single_product;
  // console.log(single_product);

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <Wrapper>
      <div className="colors">
        <span> colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${mainColor === color ? "color-btn active" : "color-btn"
                  }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
        className="cart-btn-amount"
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="cart-btn"
          onClick={() => addToCart(id, mainColor, amount, single_product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .btn-container {
    margin-top: 1rem;
    }

  .cart-btn{
 
    text-transform: uppercase;
  background: var(--clr-primary-6);
  color: var(--clr-primary-10);  
  letter-spacing: var(--spacing);  
  font-weight: 600;
  transition: var(--transition);
  font-size: 0.7rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  border-radius: 5rem;
    padding: 0.5rem 1rem;
  
    }


  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }


  @media (max-width: 576px) {
  .btn-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }


  .cart-btn {
    text-transform: uppercase;
  background: var(--clr-primary-6);
  color: var(--clr-primary-10);
  
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 600;
  transition: var(--transition);
  font-size: 0.7rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  border-radius: 5rem;
    padding: 0.5rem 1rem;
      font-size: 0.75rem;
      width: 100%;
      text-align: center; 
    }


  }
`;
export default AddToCart;
