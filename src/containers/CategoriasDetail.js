import React from 'react';
import {Link,useParams} from "react-router-dom";

const style = {
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const styleVolver = {
    marginTop: '10px',
}


function CategoriasDetail (){
    const {categoryId} = useParams();

    return <>

        <p style={style}>Esto es un quilombo y estas en : {categoryId}</p>

        <Link to={'/'}><button style={styleVolver} type="button" class="btn btn-info">Volver</button></Link> 
    </>
}

export default CategoriasDetail;