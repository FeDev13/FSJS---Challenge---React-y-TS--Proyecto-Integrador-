import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Faq from "./Pages/Faq";
import Search from "./Components/Search";
import Login from "./Components/Login";

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
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
