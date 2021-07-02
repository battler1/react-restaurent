import React from "react";
import { GlobalStyle } from "./globalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
