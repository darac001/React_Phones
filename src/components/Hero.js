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
  @media (min-width: 992px) {
    padding-right: 40rem;
    height: calc(70vh - 10rem);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bcgHero}) center/cover no-repeat;
      display: grid;
    grid-template-columns: 1fr;
    gap: 8rem;
    text-align: left;
    h1 {
      margin-bottom: 2rem;
      font-size: 5.5rem;
      font-weight: 600;
    }
    p {
      font-size: 1.6rem;
    }
    .hero-btn {
      padding: 0.75rem 2rem;
      font-size: 0.9rem;
      margin: 0;
    }
    .img-container {
      display: block;
      position: relative;
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
