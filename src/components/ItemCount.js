import React, { useState } from 'react';
import '../App.css';
import '../assets/style.css';
import {Link} from "react-router-dom";


//Funcion para agregar al "Items" el "Item" correspondiente con su QTY (contador)
function addCount(id, count){
    // console.log("Entro al add y el id es: " + id);


    let items = [];
            items= localStorage.getItem('items');
            items = JSON.parse(items);

            // console.log("Estos son los items: " + items);


    //Busco el producto dentro de items(array)
    var item = items.find(items => items.id === id)

    //Le asigno el qty al producto (objeto)
    var qty = {qty: count};
    item = {...item, ...qty};

    //Busco item anterior y lo elimino
    items = items.filter(function(el) { return el.id != item.id; });
   
    //Agrego producto objecto (item) nuevo con el qty y lo almaceno en el localstorage tambien
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

//Le ponemos props que no son mas objetos que se puede editar
const Counter = ({initial, max, min, id}) => {

    //Defino estilos en mensajeria y botones
    const style = {
        'background': 'grey',
        'color' : 'red'
    };

    const styleButtons ={
        'display': 'flex',
        'place-content': 'space-between',
        'width': '90px',
        'align-items': 'center',
    };

    const styleCompra = {
        'flex-direction': 'column',
        'display': 'flex',
        'align-items': 'center',
    }

    //Modificamos las props (objetos en este caso) inicializamos
    const [count, setCount] = useState(initial);

    //Funcion para agregar al contador
    function add (){
        if (count < max){
            setCount (count + 1)
        }
    };

    //Funcion para restar el contador
    function subs() {
        if (count > min)
            setCount (count - 1)
    };

    //Muestro lo que retorna el componente por pantalla
    return (
        <>

         <div style={styleCompra}>
            {/* Agrego condiciones para deshabilitar los botones */}
            <div style={styleButtons}>
            <button disabled = {count === min} onClick ={subs}> - </button>            
             <h3>{count}</h3>
             <button disabled = {count === max} onClick ={add}>+</button>
            </div>
        

            <br/>
            
            <label>
            {count === max 
                      ?  <h4 style={style}>  Usted llego al maximo de productos </h4> 
                        : <h5> Quedan   {(max-count)}   productos. </h5>
                    } 
            </label>

            <Link to={'/Cart/'+ id}><button onClick={() => addCount(id, count)} type="button" class="btn btn-info">Agregar al carrito</button></Link>

        </div> 
                    
        </>
    )
};

export default Counter;