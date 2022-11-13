import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Category from "./Components/Category";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Faq from "./Pages/Faq";
import Search from "./Components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productos" exact component={Search} />
            <Route path="/faq" exact component={Faq} />
          </Switch>
        </Router>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
