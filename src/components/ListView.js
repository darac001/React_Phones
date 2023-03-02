import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { FunkyArrowSmall } from "../components";
const ListView = ({ filtered_products }) => {
  const titleArrow = "details"
  const arrowRight = true
  return (
    <Wrapper>
      {filtered_products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p className="overview">Overview:</p>
              <p>{description}...</p>

              <Link to={`/products/${id}`} className="arrow" >
                <FunkyArrowSmall title={titleArrow} arrow={arrowRight} />
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  article{
    height: 350px;
   
  }
.overview{
  margin-bottom: 0rem;
}
  img {
    height: 300px;
    display: block;
    margin: auto;
    padding: 0;
    object-fit: cover;
  }

  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
