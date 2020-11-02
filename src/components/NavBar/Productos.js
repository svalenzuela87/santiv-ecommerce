import React from  'react';
import '../../assets/style.css';
import {useParams} from "react-router-dom";

import ItemProducto from "../ItemList";

// import getFromRemote from "../Remote";


function Productos() {
  const {lista} = useParams();
    console.log("Estas en :"  +  lista)
    // debugger;

    //MUESTRO TODOS LOS PRODUCTOS QUE OBTENGO DE FIREBASE

  return <>

      <ItemProducto/>

  </>
}

export default Productos;