import "./App.css";

import "./styles/amazon.css";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
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
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/login" exact component={Login} />
          <Route path="/compra" exact component={CreditCardForm} />
        </Router>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
