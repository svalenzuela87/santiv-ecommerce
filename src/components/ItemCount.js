import React, { useState } from 'react';
import '../App.css';
import '../assets/style.css';


//Le ponemos props que no son mas objetos que se puede editar
const Counter = ({initial, max, min}) => {

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
                        : <h5 > Quedan   {(max-count)}   productos. </h5>
                    } 
            </label>

        </div> 
                    
        </>
    )
};

export default Counter;