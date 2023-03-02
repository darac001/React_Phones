import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // get all prices
    let maxPrice = action.payload.map((p) => p.price);
    // console.log(maxPrice);
    // get the max price using spread
    maxPrice = Math.max(...maxPrice);
    // spread op [...action.payload] copies the original values, not referencing to the place in memory]
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      // copy old values from filter, filter is an object in state
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    if (sort === "price-lowest") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = filtered_products.sort((a, b) => {
        // console.log(tempProducts);
        return b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    // console.log(tempProducts);
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    // dynamic object keys, [name] is text as set in search input and value is value
    // https://www.youtube.com/watch?v=_qxCYtWm0tw&ab_channel=CodingAddict
    
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    // console.log("filtering..");
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        console.log(tempProducts);
        return product.colors.find((c) => c === color);
      });
      console.log(tempProducts);

      // or, doesn't work well

      // tempProducts = tempProducts.filter((item) => {
      //   return item.colors.indexOf(color) >= 0;
      // });
      // console.log(tempProducts);
    }
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // filter by shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
