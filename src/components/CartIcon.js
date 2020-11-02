import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../assets/style.css';

const count = 0;

const style = {
    'margin': '70px 0px 0px 12px',
}

const style2 = {
   'margin': '40px 0px 0px 12px',
}


function CartIcon(){
 return <>
    {/* <div>
            {count > 0 
                        ? <button style={style2} onClick={addProduct}><p>{count}</p><AddShoppingCartIcon/></button> 
                        : <button style={style} onClick={addProduct}><AddShoppingCartIcon/></button> 
                        } 
    </div> */}
 </>
}

export function addProduct(id) {
   //ACA DEBERIA AGREGAR AL CARRITO PRINCIPAL 
   alert ('Se agrego el producto ' , id);
   console.log('Se agrego el producto ', id)
}

export default CartIcon;