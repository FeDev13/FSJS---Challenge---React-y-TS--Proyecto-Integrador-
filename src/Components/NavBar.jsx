import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ size, setShow }) => {
  return (
    <>
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
            <NavLink to="/login">
              <button className="btn">login</button>
            </NavLink>
            <NavLink to="/products">
              <button className="btn">Productos</button>
            </NavLink>
            <NavLink to="/">
              <button className="btn">home</button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
