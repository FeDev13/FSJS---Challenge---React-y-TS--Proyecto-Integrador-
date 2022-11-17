import React from "react";
import "../styles/cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, price, image } = item;
  return (
    <>
      <div className="cards">
        <div className="image_box">
          <img src={image} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>Precio - ${price}</p>
          <button onClick={() => handleClick(item)}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
