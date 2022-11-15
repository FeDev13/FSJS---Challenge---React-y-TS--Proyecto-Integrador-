import React from "react";
import Categories from "./Categories";

const Slideshow = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="title" color="black">
              Los mas pedidos
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="cards">
              {Categories.map((values) => {
                // filtra por propiedad rating del producto y lo verifica con if
                const { id, title, price, image, rating } = values;
                if (rating >= 4) {
                  return (
                    <>
                      <div className="card" key={id}>
                        <div className="card-header">
                          <img src={image} alt={title} />
                        </div>
                        <div className="card-body">
                          <h2 className="titleProduct">{title}</h2>
                          <span className="price">${price}</span>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
