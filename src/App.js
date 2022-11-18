import "./App.css";

import "./styles/amazon.css";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Faq from "./Components/Faq";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Login from "./Components/Login";
import CreditCardForm from "./Components/CreditCardForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/compra" element={<CreditCardForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
