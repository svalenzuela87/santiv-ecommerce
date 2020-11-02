import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useCartContext, ListProvider } from '../../context/CartContext';

//obtengo el icono desde Material-UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { icon } from "@fortawesome/fontawesome-svg-core";


//Acomodo Icono
const Icon = () => (
    <div style={{ marginTop: 7, color: 'turquoise', marginLeft: 10 }}> 
       <Link to ={'/Cart/' + 'lista'}><ShoppingCartIcon/></Link>
  </div>
);


export function Contador(evt){
  // const {count} = useCartContext();
  

  console.log("El contador del icono esta en: " + evt);



  // if (typeof count === 'object') { 
  //     console.log("es objeto")
      return <>  
           <div><Icon/></div>
           </>
  //   }else{
  //     debugger;
  //     console.log("Entro al que deberia mostrar contador");
  //     return <>
  //         <div><p>{count}</p><Icon/></div>
  //       </>
  //   }
  
}


function CartIcon(){


  return <>

        {/* <ListProvider>
            <Contador/>
          </ListProvider>      */}

          <Contador/>
          {/* <div><Icon/></div> */}
  </>
}

export default CartIcon;