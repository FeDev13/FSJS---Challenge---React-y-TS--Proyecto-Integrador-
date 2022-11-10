import { useState } from "react"

export default function Hijo(){

const [frase, setFrase]=useState("hola") // setFrase es una funcion
    console.log(frase);
    
    return ( //onClick llama una callback q ejecuta setFrase q toma como parametro variable frase
        <div>
        <h2>{frase}</h2> 
    <button onClick={()=>{setFrase(frase + "Fede")}}>Agregar</button> 
    </div>
    )
}