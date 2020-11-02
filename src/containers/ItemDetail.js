import React, {useEffect,useState} from 'react';
import Counter from "../components/ItemCount";
import {Link, useParams} from "react-router-dom";
import '../assets/style.css';




let location ="/assets/productos/";


//BUSCO ITEM DENTRO DEL ARRAY DE ITEMS POR ID
const obtenerItem= (id)=> new Promise((res, rej) =>{

            //DEFINO UBICACION EN EL STORAGE DE LOS PRODUCTOS
            let items = [];
            items.push(localStorage.getItem('items'));
            items = JSON.parse(items);

           setTimeout(() => {          
            //res(items.filter(x => x.id === id)); // DEVUELVE UN ARRAY CON TODO
	        res(items.find(items => items.id === id));  //DEVUELVE EL CONTENIDO DEL ARRAY
        }, 3000);   
});


function ItemDetail () {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        console.log('Mounted ItemDetail');


        obtenerItem(id).then(res => {
            setItem(res);
        }).catch((error) => {
            console.log("Error buscando item ", error);
        }).finally(() => {
            setCargando (false);
          });

        return ()=> {
            console.log ('Dismounted ItemDetail');
        }

    },[]);


    return <>

            { cargando && <div id='styleCenter'><p>Cargando informacion del producto...</p></div>} 

            { !cargando &&  <div id='styleCenter'>
                        <p>El producto seleccionado es : {item.name}</p>
                        {item && <p>{item.description}</p>}
                        {item && <img src={location+item.image} alt={item.name} id='styleImage'/>}
                            < Counter
                                    initial ={1}
                                    max= {item.stock}
                                    min = {1}
                                    id = {id}
                                />

                  <Link to={'/'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link> 
                    
                    <br/>


                  </div>

                }
    </>

}



export default ItemDetail;