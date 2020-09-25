import React from 'react';
import {Link,useParams} from "react-router-dom";
import '../assets/style.css';


function CategoriasDetail (){
    const {categoryId} = useParams();

    return <>

        <p id='styleCenter'>Esto es un quilombo y estas en : {categoryId}</p>

        <Link to={'/'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link> 
    </>
}

export default CategoriasDetail;