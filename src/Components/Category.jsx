import React, { useState } from "react";
import Categories from "./Categories";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";

const Category = () => {
  const [data, setData] = useState(Categories);

  const [popUpContent, setPopUpContent] = useState([]);
  const [popupToggle, setPopUpToggle] = useState(false);

  const changeContent = (guitar) => {
    setPopUpContent([guitar]);
    setPopUpToggle(!popupToggle);
  };

  //Filtra por categoria

  const filterResult = (catItem) => {
    const result = Categories.filter((el) => {
      return el.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="input">
        <input type="text" placeholder="Buscar" />
        <Search className="search" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Nuestros productos</h1>
          </div>
        </div>
        <div className="filtro">
          <div className="col">
            <button className="btn" onClick={() => setData(Categories)}>
              Todas
            </button>
            <button className="btn" onClick={() => filterResult("Electrica")}>
              Electrica
            </button>
            <button className="btn" onClick={() => filterResult("Acustica")}>
              Acustica
            </button>
            <button className="btn" onClick={() => filterResult("Clasica")}>
              Clasica
            </button>
          </div>
          <div className="col1">
            <div className="cards">
              {data.map((values) => {
                const { title, price, image, details } = values;
                return (
                  <>
                    <Card className="muicard">
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        {price}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        ></Typography>
                      </CardContent>
                      <CardActions className="muicontent">
                        <Button
                          variant="contained"
                          onClick={() => changeContent(values)}
                        >
                          Detalles
                        </Button>
                        <Button variant="contained">Comprar</Button>
                      </CardActions>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {popupToggle && (
        <div className="popUpContainer" onClick={changeContent}>
          <div className="popUpBody">
            <div className="popUpContent">
              {popUpContent.map((pop) => {
                return (
                  <div className="popUpCard">
                    <p>Nombre: {pop.title}</p>
                    <p>Precio:{pop.price}</p>
                    <p>Detalles: {pop.details}</p>
                    <p>rating: {pop.rating}</p>
                  </div>
                );
              })}
            </div>
            <div className="popUpFooter">
              <Button variant="contained" onClick={changeContent}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
