import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './containers/Home';
import NavBar from './containers/NavBar/NavBar';
import Cart from './containers/Cart';
import ItemDetail from './containers/ItemDetail'
import Productos from './components/NavBar/Productos';
import Categories from './containers/NavBar/NavBar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  const categoriesDefault = [{category: 'Frutos'}, {category: 'Semillas'}, {category: 'Suplementos'},{category: 'Importados'}];
  const [categories, setCategories] = useState(categoriesDefault);

  useEffect(() => {

    //Aca Verificaria en Firestore si hay categorias sino manda default de arriba
    setCategories();

    console.log(categories);

   
    //console.log('App mounted with hook');
  }, []);


  
    return (


      <div className="App">

        <Categories 
         categories = {categories}
        />  

        
       <BrowserRouter>
          <NavBar/>  
          <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route path="/Productos">
             <Productos/>
            </Route>
            <Route path="/item/:id">
             <ItemDetail/>
            </Route>
            <Route path ='/Cart'>
            <Cart/>
            </Route>
          </Switch>
         </BrowserRouter> 

      </div>
    );
}

export default App;