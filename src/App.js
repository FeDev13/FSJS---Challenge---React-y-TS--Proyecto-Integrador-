import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/NavBar";
import Amazon from "./Components/Amazon";
import Cart from "./Components/Cart";
import "./styles/amazon.css";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Faq from "./Components/Faq";
import Products from "./Components/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Router>
          <Route path="/products" exact component={Products} />
          <Route path="/faq" exact component={Faq} />
        </Router>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
