import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductsContext();
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
        <h1>See our featured products</h1>
      </div>

      <div className="section-center featured">
        {/* display only 6 featured products on home page */}
        {featured_products.slice(0, 6).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
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
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .line {
    color: var(--clr-grey-6);
    border: 1.5px solid var(--clr-grey-6);
    margin-bottom: 1rem;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts
