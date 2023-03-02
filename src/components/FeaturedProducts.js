import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

import FunkyArrow from './FunkyArrow'

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductsContext();
    const titleArrow = "products"
    const arrowRight = true
  if (products_loading) {
    return <Loading />;
  }
  if (products_error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title"></div>
      <div className="section-center">
        <div className="line"></div>
        <h1>See our featured products </h1>
      </div>

      <div className="section-center featured">
        {/* display only 6 featured products on home page */}
        {featured_products.slice(0, 6).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      <Link to="/products" className='prod-link'>
        <FunkyArrow title={titleArrow} arrow={arrowRight} />
        </Link>
      </div>
  
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  text-align: center;
  padding-bottom: 0.1rem;
 
  h1 {
    font-size: 3.5rem;
    font-weight: 100;
    font-family: "Hind", sans-serif;
  }
  .featured {
    margin-top: 1rem;
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn-arrow {
   
    width: 300px;
    margin: 0 auto;
    
  }
  .arrow{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h5{
      color: var(--clr-primary-5);
      font-size: 1.5rem;
      margin: 0;
      padding-top: 1rem;
      padding-bottom: 1.2rem;
    }
  }
  .arrow-img{
    width: 30px;
  }
  .line {
    color: var(--clr-grey-6);
    border: 1.5px solid var(--clr-grey-6);
    margin-bottom: 1rem;
  }
  @media (min-width: 576px) {
    text-align: left;
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
`;

export default FeaturedProducts
