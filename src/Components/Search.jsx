import React, { useState } from "react";
import Categories from "./Categories";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [popUpContent, setPopUpContent] = useState([]);
  const [popupToggle, setPopUpToggle] = useState(false);

  const changeContent = (guitar) => {
    setPopUpContent([guitar]);
    setPopUpToggle(!popupToggle);
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {Categories.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
            const { title, price, image, details } = val;
            return (
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
                  ${price}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions className="muicontent">
                  <Button
                    variant="contained"
                    onClick={() => changeContent(val)}
                  >
                    Detalles
                  </Button>
                  <Button variant="contained">Comprar</Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
      {popupToggle && (
        <div className="popUpContainer" onClick={changeContent}>
          <div className="popUpBody">
            <div className="popUpContent"></div>
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

export default Search;
