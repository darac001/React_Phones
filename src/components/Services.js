import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper className='section'>
      <div className="section-center">
      <div className="title"></div>
      <div className="section-center">
        <div className="line"></div>
        <h1>What we offer</h1>
      </div>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                {/* <span className="icon">{icon}</span> */}
                <span className="icon"><img src={icon} alt="service"></img></span>
                
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
padding-top: 10px !important;
text-align: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 100;
    font-family: "Hind", sans-serif;
  }
  h3,
  h4 {
    color: var(--clr-primary-5);
    padding-left: 2rem;
  }
  padding: 5rem 0;
  .line {
    color: var(--clr-grey-6);
    border: 1.5px solid var(--clr-grey-6);
    margin-bottom: 1rem;
  }
  background: var(--clr-grey-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    padding-left:2rem;
    margin-bottom: 0;
    line-height: 1.6;
    font-size: 1.1rem;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 1rem;
  }
  .service {
    
    text-align: center;
    padding: 2.5rem 2rem;
    
    p {
      color: var(--clr-primary-2);
      padding: 0;
    }
    h4{
      padding: 0;
      margin: 0;
    }
    span {

img {
  padding-right: 1.6rem;
  
}
}
  }
  span {

    img {
      height: 150px;
      margin-bottom: 1rem;
      
    }
  }
  @media (min-width: 992px) {
    text-align: left;
    .service {
    
    text-align: left;
    padding: 2.5rem 2rem;
    
    p {
      color: var(--clr-primary-2);
    }
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(1rem);
    }
  }
`
export default Services
