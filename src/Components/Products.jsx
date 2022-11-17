import React from "react";
import Navbar from "./NavBar";
import { useState } from "react";
import Cart from "./Cart";
import ProdArray from "./ProdArray";

const Products = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <ProdArray handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {alert && <div className="warning">El producto ya esta agregado</div>}
    </>
  );
};

export default Products;
