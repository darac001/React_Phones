import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bcgHero from '../assets/bcg-hero.jpg'

const Hero = () => {
  return (
    
      <Wrapper className="section-hero">
        <article className="content">
          <h1>
            Phones are everything.
            <br/>   
            But people are people.
          </h1>
          <p>That's why we are here.</p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
          
        </article>
        {/* <img className='phone' src={phone} alt="phone"></img> */}
      </Wrapper>
    
  );
};

const Wrapper = styled.section`
  min-height: 70vh;
  display: grid;
  text-align: center;
  margin: auto;
  color: white;
  place-items: center;
  padding-right: 0rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bcgHero}) center/cover no-repeat;

  .hero-btn {
    padding: 0.65rem 1.8rem;
    font-size: 0.8rem;
    margin: 0;
    }


  p {
    line-height: 2;
    max-width: 45rem;
    margin-bottom: 2rem;
    color: var(--clr-grey-10);
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    .phone{
      display: none;
    }
  }
  @media (min-width: 992px) {
    padding-right: 40rem;
    height: calc(70vh - 10rem);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bcgHero}) center/cover no-repeat;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    padding: 6rem;
    text-align: left;
    h1 {
      margin-bottom: 2rem;
      font-size: 5.5rem;
      font-weight: 600;
    }
    p {
      font-size: 26px !important;
    }
    .hero-btn {
      padding: 0.75rem 2rem;
      font-size: 0.9rem;
      margin: 0;
    }
    .phone {
            
      opacity: 0;
      border: 4px solid transparent;
      border-left: 9px solid #D0F9F9 ;
      border-right: 9px solid #D0F9F9 ;
      border-radius: 50%;
      width: 400px;

      animation: circle 8s ease-in-out;
    }
    @keyframes circle{
      0%{
        transform: rotate(0deg);
        opacity: 0;
      }
      50%{
        transform: rotate(360deg);
        opacity: 0.1;
      }
      100%{
        transform: rotate(0deg);
        opacity: 0;
      }
    }
    p {
    line-height: 2;
    max-width: 45rem;
    margin-bottom: 2rem;
    color: var(--clr-grey-10);
    font-size: 1rem;
  }

  }

`;

export default Hero
