import React from "react";

import {Link} from "react-router-dom";

//obtengo el icono desde Material-UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


//creo la aplicacion a exportar
const CartIcon = () => (
    <div style={{ marginTop: 7, color: 'turquoise', marginLeft: 10 }}> 
       <Link to ={'/Cart'}><ShoppingCartIcon/></Link>
  </div>
);


export default CartIcon;
