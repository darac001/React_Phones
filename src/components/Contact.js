import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Be the first to know about our latest updates, special offers, and exclusive content. Sign up for our newsletter today and stay connected with us. You'll receive regular emails from us with all the latest news and updates on our products and services.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xbjeyadq"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
margin:2rem 0rem;
    margin-bottom: 5rem;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-grey-6);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-8);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-grey-6);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-white);
    background-color: var(--clr-primary-4);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    margin:5rem 10rem;
    margin-bottom: 10rem;
  }
`

export default Contact
