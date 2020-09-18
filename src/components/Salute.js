import React from 'react';
import '../assets/style.css';
//import './style.css';


export const Estilo = () => {
        // return <div onClick={SaludoFrontal} style ={{ background: 'green', height: 50, width: 149 } id = 'boton'}>
        return <div onClick={SaludoFrontal} class ='boton'> 
            Bienvenido a nuestro portal de compras!
        </div>
}

const Line = ({children}) => {
    const style = {
        display :'flex',
        margin : 35,
        justifyContent: 'space between'
    }
    

    return <div style={style}>
        {children}
    </div>

};

function SaludoFrontal(){
    alert ('Bienvenidos al e-commerce de SantiV');
    console.log('Bienvenido al e-commerce de SantiV')
}


function  Salute(){
    return<>
        <Line><Estilo></Estilo></Line>
        </>;
};

export default Salute;