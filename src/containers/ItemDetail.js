import React, {useEffect,useState} from 'react';
import Counter from "../components/ItemCount";
import {Link, useParams} from "react-router-dom";
import addProduct from "../components/CartIcon";


const style = {
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const styleVolver = {
    marginTop: '10px',
}


// let items = JSON.stringify(window.localStorage.getItem('items'));
let items = [];

//ACA VOY A BUSCAR CON EL ID LOS DATOS

const obtenerItem= (id)=> new Promise((res, rej) =>{
           setTimeout(() => {          
                res(items.find(items =>items.id== id));       
            }, 3000);   
        });
   

// const obtenerItem = (id) =>{
//     debugger;
//     return [items].filter(x => x===id);
// }



function ItemDetail () {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        console.log('Mounted ItemDetail');


        obtenerItem(id).then(res => {
            setItem(id);
            debugger;
        }).catch((error) => {
            console.log("Error buscando item ", error);
        });   


        
        return ()=> {
            console.log ('Dismounted ItemDetail');
        }

    },[]);

    

    return <>
        <div style={style}>
                  <p>El producto es : {id}</p>
                  {item && <p>{item.name}</p>}
                    < Counter
                            initial ={1}
                            max= {20}
                            min = {0}
                        />
             <button  onClick={() => addProduct(id)}type="button" class="btn btn-info">Agregar al carrito</button>
        </div>

        <Link to={'/'}><button style={styleVolver} type="button" class="btn btn-info">Volver</button></Link>
    </>

}



export default ItemDetail;