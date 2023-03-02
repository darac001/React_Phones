import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <main>
      
      <Wrapper className="page section section-center">
          <div className="title-about">
            <h2>about us</h2>
            <div className="underline"></div>
          </div>
        <article>
          <p>
            Welcome to our company! We are dedicated to providing our customers with the best possible shopping experience, whether you're looking for a new phone or accessories to enhance your mobile device.
            Our company was founded on the belief that technology should be accessible to everyone, and that's why we work hard to offer a wide range of products at affordable prices. We understand that your phone is an important part of your life, and we want to make sure you have everything you need to make the most of it.
            At our company, we pride ourselves on offering excellent customer service. Our team is always available to answer your questions, help you find the perfect product, or assist with any issues you may encounter during the ordering or shipping process.
            We also believe in providing our customers with the highest quality products. That's why we partner with some of the most trusted brands in the industry to offer you a wide range of options that meet our rigorous standards for quality and durability.
            Whether you're looking for the latest iPhone or Samsung Galaxy, or need accessories like cases, chargers, or screen protectors, we have everything you need to keep your phone running smoothly and looking great.
            Thank you for choosing our company as your go-to source for all your mobile needs. We look forward to serving you!
          </p>
        <img src={aboutImg}  />
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
padding-bottom: 20rem;
  article{

    display: grid;
    gap: 2rem;
  }
  .title-about{
    margin: 0rem 0rem;
  }
  img {
    width: 100%;
    display: block;
    height: 80%;
    object-fit: cover;
    margin-top: 2.5rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    article{
      gap: 8rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default AboutPage
