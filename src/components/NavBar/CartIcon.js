import React from "react";
import { render } from "react-dom";

//obtengo el icono desde Material-UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


//creo la aplicacion a exportar
const CartIcon = () => (
    <div style={{ marginTop: 7, color: 'turquoise', marginLeft: 10 }}> 
       <ShoppingCartIcon/>
  </div>
);

// render to #root
// render(<CartIcon />, document.getElementById("root"));

export default CartIcon;
