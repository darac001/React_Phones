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
            <br />
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bcgHero}) center/cover no-repeat;
  color: white;
  place-items: center;
  padding-left: 10rem;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(70vh - 10rem);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bcgHero}) center/cover no-repeat;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 5rem;
    }
    p {
      font-size: 1.6rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero
