import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// created index.js inside the components folder and imported all components at once
import { Navbar, Sidebar, Footer,Promo } from "./components";
// created index.js inside the pages folder and imported all pages at once
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  
} from "./pages";

function App() {
  return (
    <Router>
      
      <Promo />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
