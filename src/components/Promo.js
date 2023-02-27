import React from 'react'
import styled from "styled-components";

const Promo=()=> {
  return (<Wrapper>

    <h5>%20 off protection cases for a limited time. plus other special offers</h5>
  </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 4rem;
  display: flex;
  position: relative;
  padding: 0rem 10rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-size: 1rem;
    font-family: "Hind", sans-serif !important;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.25;
  } 
@media (max-width: 776px) {
  padding: 0rem 5rem;
  h5{
    font-size: 0.8rem;
  }
}
`;

export default Promo