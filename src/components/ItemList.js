import React, { useEffect, useState } from  'react';
import {Link} from 'react-router-dom';
import {getFirestore} from '../firebase/index';
import '../assets/style.css';
import ProductList from "../containers/ProductGallery";

const styleImage = {
    width: '200px',
    height: '200px',
    marginBottom: '5px'
}

//Agregando comentario

const styleButton = {
    display: 'flex',
    height: '41px',
    color: 'white',
    fontSize: '19px',
    fontWeight: '600',
    marginTop: '80px'
}

//HACERLO CON EL "Lista cuadriculada con barras de título"
// https://material-ui.com/es/components/grid-list/

// export function ProductList({ items }) {
//     let location ="/assets/productos/";
    
//     // useEffect(() => {  
//     //   var lista= items;
//     //   console.log("aca recorro la lista que obtengo: " + JSON.stringify(lista));   
//     // },[]);

//     return <> 
//     <div>
//         {items.map(p =>  
//                 <div class="producto" id={p.id} > <img src={location+p.image} alt={p.name} style={styleImage}/> 
//                 <p style={ {margin: '75px 20px 0px 20px'}}>{p.name}</p>
//                 <Link to={'/item/'+ p.id + '/detail'}><button style={styleButton} >Detalles</button></Link>
//                 </div>                
//                 )}   
//     </div>
//     </>
//   }

  function ItemProducto(){
    const [ListaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        //PARA QUE FUNCIONE HARDCODEADO
        // getFromRemote().then(res => {
        //     setListaProductos(res);    
        //     setCargando(false);    

        const db = getFirestore();
        const itemCollection = db.collection('items');


        // const priceyItems = itemCollection.where('price', '>', 100);
        // priceyItems.them((querySnapshot) => {
        //   if (!querySnapshot.size === 0){
        //     console.log('no existen items de mas de 100 pesos')
        //   }
        //   setCargando(false);
        // //   setListaProductos(querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
        // setListaProductos(querySnapshot);
        // debugger;
        // })

        itemCollection.get().then((querySnapshot) => {
          


        //   querySnapshot.forEach(function(doc) {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data().name);
        // });

        if(querySnapshot.size===0){
          console.log('No hay resultados');
        }
        
        setListaProductos(querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id})));
          }).catch((error) => {
            console.log("Error buscando items ", error);
          }).finally(() => {
            setCargando (false);
          });

    },[]);

    useEffect(() => {
        // console.log("Ya guardo la lista: ", ListaProductos);
        localStorage.setItem('items', JSON.stringify(ListaProductos));
    },[ListaProductos]);
   

        return <>
             { cargando && <p>Cargando productos...</p>}
             { !cargando && <ProductList items={ListaProductos}></ProductList> }
        </>;
}


export default ItemProducto;