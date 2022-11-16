import React from "react";
import "../styles/navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Guitar Shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
          <button className="btn">login</button>
          <button className="btn">Productos</button>
          <button className="btn">home</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
