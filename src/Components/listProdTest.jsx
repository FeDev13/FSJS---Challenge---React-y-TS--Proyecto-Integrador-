import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "./NavBar";
import { ShopCartContext } from "../Contexts/Context";
import Axios from "axios";
import listprodtest from "../styles/listprodtest.css";

const ListProdTest = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await Axios.get(
      "http://localhost:3001/productos/guitarras"
    );
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(ShopCartContext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <>
      <Navbar />
      <h1>Nuestro catalogo</h1>
      <div className="home">
        {data.map((item, index) => {
          item.quantity = 1;
          return (
            <div className="card" key={index}>
              <img src={item.imagen} alt="" />
              <p>{item.nombre}</p>
              <h3>$. {item.precio}</h3>
              <Button
                variant="filled"
                color="amber"
                onClick={() => dispatch({ type: "ADD", payload: item })}
              >
                Agregar al carrito
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListProdTest;
