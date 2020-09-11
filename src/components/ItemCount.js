import React, { useState } from 'react';
import '../App.css';

// import Cart from '../containers/Cart';

//Le ponemos props que no son mas objetos que se puede editar
const Counter = ({initial, max, min}) => {

    //Definimos estilos en mensajeria y botones
    const style = {
        'background': 'grey',
        'color' : 'red'
    };

    const styleButtons ={
        // 'display': 'flex',
        // 'align-content': 'space-between',
        // 'width': '90px',
        // 'justify-content': 'space-between'
        'display': 'flex',
        'place-content': 'space-between',
        'width': '90px',
        'align-items': 'center',
        'margin-left': '12px'
    };

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

    //Mostramos lo que retorna el componente por pantalla
    return (
        <>

        {/* <div> */}
            {/* Agregamos condiciones para deshabilitar los botones */}
            <div style={styleButtons}>
            <button disabled = {count === min} onClick ={subs}> - </button>            
             <h3>{count}</h3>
             <button disabled = {count === max} onClick ={add}>+</button>
            </div>

            {/* Distintas formas de arrojar mensajeria por pantalla informando cantidades y alertas al usuario */}
            {/* <h5>{ count === max} ? 'Usted llego al máximo de productos'</h5>
            <h5>{ count === min} ? 'Usted llego al minimo de productos'</h5> */}

            {/* <h5> {count === max 
                        ? "Usted llego al maximo de productos"
                        : "Quedan " + (max-count) + " productos"
                        } 
            </h5> */}

            {/* <h5> El minimo de compra es {min} y el maximo de compra es {max}</h5> */}
        {/* </div> */}

            <br/>
            
            <label>
            {count === max 
                      ?  <h4 style={style}>  Usted llego al maximo de productos </h4> 
                        : <h5 > Quedan   {(max-count)}   productos. </h5>
                    } 
            </label>

                    
        </>
    )
};

export default Counter;