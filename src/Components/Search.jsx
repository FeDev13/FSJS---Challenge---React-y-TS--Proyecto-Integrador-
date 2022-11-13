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
                  {price}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions className="muicontent">
                  <Button variant="contained">Detalles</Button>
                  <Button variant="contained">Comprar</Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
