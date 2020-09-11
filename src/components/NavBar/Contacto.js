import React from 'react';


function DatosEmpresa (props){
    console.log(props)
    return<>
            <h3 style={{color:"#318aac"}}>{props.direccion}</h3>
            <h3 style={{color:"#318aac"}}>{props.telefono}</h3>
            <h3 style={{color:"#318aac"}}>{props.correo}</h3>
    </>
}



function Contacto({ direccion, telefono, correo }) {
    return <>
     <div class="contacto">
        Direccion: <DatosEmpresa direccion="Cucumayo 1234"></DatosEmpresa>
        Telefono: <DatosEmpresa telefono="45189615"></DatosEmpresa>
        E-Mail: <DatosEmpresa correo="sano@sano.com.ar"></DatosEmpresa>
     </div>
    </>
}

export default Contacto;