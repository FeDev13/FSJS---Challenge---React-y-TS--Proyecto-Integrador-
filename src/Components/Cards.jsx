import React from "react";
import "../styles/cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, image } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Cards;
