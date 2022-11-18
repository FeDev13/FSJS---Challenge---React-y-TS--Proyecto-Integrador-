import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ size, setShow }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <h1>Guitar Shop</h1>
        <nav ref={navRef}>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>

          <NavLink to="/login">
            <button className="botones">Login</button>
          </NavLink>
          <NavLink to="/products">
            <button className="botones">Comprar</button>
          </NavLink>
          <NavLink to="/">
            <button className="botones">Home</button>
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Navbar;
