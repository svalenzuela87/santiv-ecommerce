import React, { useEffect, useState } from 'react';
import {getFirestore} from '../../firebase/index';
import {Link} from 'react-router-dom';

//DEFAULT
const categoriesDefault = ['Frutos', 'Semillas','Suplementos','Importados'];


//Setear primer letra mayuscula
const setMayus = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function Categorias(){
    const [categories, setCategories] = useState([]);
  

    //Busco en Firebase si hay categorias
    useEffect(() => {

      //Aca Verificar en Firestore si hay categorias sino manda default de arriba
      const db = getFirestore();
      const itemCollection = db.collection('categories');

      itemCollection.get().then((querySnapshot) => {
          
        if(querySnapshot.size===0){
          console.log('No hay categorias');
        }


        let Categories= [];
        Categories.push(querySnapshot.docs.map(doc => setMayus(doc.data().categories)[0]));
        setCategories((Categories[0]))


       
          }).catch((error) => {
            console.log("Error buscando categorias ", error);
            setCategories(categoriesDefault)
          }).finally(() => {
          });

    },[]);


      return <>
          {categories.map( categoria =>  <Link to={'/categoria/' + categoria}><a class="dropdown-item">{categoria}</a></Link>  )}   
      </>

  }

export default Categorias;