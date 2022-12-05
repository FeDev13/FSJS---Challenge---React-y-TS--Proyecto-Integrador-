import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "./NavBar";

const ListProdTest = () => {
  const url = "http://localhost:3001/productos/guitarras";

  const [prod, setProd] = useState([]);

  useEffect(() => {
    getProd();
  }, []);

  function getProd() {
    fetch(url)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setProd(response);
      });
  }
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Catalogo
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {prod.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.imagen}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h2 className="text-lg text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.nombre}
                        </a>
                      </h2>
                      <p> Precio $ {product.precio}</p>
                    </div>
                    <Button variant="filled" color="amber">
                      Comprar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProdTest;
