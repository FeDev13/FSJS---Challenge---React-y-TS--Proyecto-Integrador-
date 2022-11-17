import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/cart.css";
import { NavLink } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  //se pasan props
  const [price, setPrice] = useState(0); //setea el precio en cero

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Quitar</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total </span>
        <span>$ {price}</span>
        <NavLink to="/compra">
          <button className="comprar">Finalizar compra</button>
        </NavLink>
      </div>
    </article>
  );
};

export default Cart;
