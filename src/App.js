import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./Components/Category";
import Hijo from "./Components/Hijo";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" exact component={Category} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
