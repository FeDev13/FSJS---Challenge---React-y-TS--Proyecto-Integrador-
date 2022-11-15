import React, { useState } from "react";
import Categories from "./Categories";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); //useState setea el imput del search en vacio
  const [popUpContent, setPopUpContent] = useState([]); //setea el modal en vacio
  const [popupToggle, setPopUpToggle] = useState(false); //setea el modal en invisible

  const changeContent = (guitar) => {
    //funcion que toma el array vacio creado por setPopUpContent y lo pasa como argumento para abrir el modal
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
            //filtra el array, si searchTerm esta vacio muestra todos las cards
            if (searchTerm === "") {
              return val;
            } else if (
              //sino, busca si el titulo esta dentro de lo que se escribio en el input
              val.title.toLowerCase().includes(searchTerm)
            ) {
              return val;
            }
          }).map((val) => {
            //map sobre el array y crea las cards
            const { title, price, image, details } = val;
            return (
              <Card className="muicard">
                <CardMedia component="img" alt="" height="250" image={image} />
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
                    sx={{
                      borderRadius: 30,
                      backgroundColor: "black",
                    }}
                    onClick={() => changeContent(val)} //aca se pasa la funcion con callback que usa el seteo del array en el modal
                  >
                    Detalles
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 30,
                      backgroundColor: "black",
                    }}
                  >
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
      {popupToggle && ( //modal que se cierra si elclick es adentro o en el boton
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
