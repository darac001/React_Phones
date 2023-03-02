import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { FunkyArrow } from "../components";
import arrow from "../assets/Arrow.svg";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,

  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const titleArrow = "Products"
  const arrowRight = false

  const { id } = useParams();
  // see App.js products/:id url

  const navigate = useNavigate();
  const {
    single_product_loading,
    single_product_error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);

    // eslint-disable-next-line
  }, [id]);
  // console.log(single_product);

  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [single_product_error]);

  if (single_product_loading) {
    return <Loading />;
  }
  if (single_product_error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,

    id: sku,
    company,
    images,
  } = single_product;
  return (
    <Wrapper>
      {/* <PageHero title={name} product /> */}
      <div className="section section-center page">
       
        <div className=" product-center">
          <ProductImages images={images} />
          <section className="content">
            <h3>{name}</h3>

            <h3 className="price"> {formatPrice(price)}</h3>
            <p className="desc"> {description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart single_product={single_product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 2rem;
    
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .arrow{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h5{
      color: var(--clr-primary-5);
      margin: 0;
      padding: 0;
    }
  }

  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 1.4;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 400px 2fr;
      
    }
    .price {
      font-size: 1rem;
    }
  }
`;

export default SingleProductPage;
