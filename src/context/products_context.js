
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url } from "../utils/constants";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      try {
        const response = await fetch(`${products_url}`);
        // console.log(response);
        const products = await response.json();
        // console.log(products);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      } catch (error) {
        console.log(error);
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };
    fetchProducts();
    // console.log(state);
  }, []);

        const fetchSingleProduct = async (url) => {
          dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
          try {
            const response = await fetch(url);
            // console.log(response);
            const singleProduct = await response.json();
            // console.log(singleProduct);
            dispatch({
              type: GET_SINGLE_PRODUCT_SUCCESS,
              payload: singleProduct,
            });
          } catch (error) {
            console.log(error);
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
          }
        };


  return (
    <ProductsContext.Provider
      value={{ ...state,fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
