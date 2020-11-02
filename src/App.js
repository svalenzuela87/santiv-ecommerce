import React from 'react';
import './App.css';
import Home from './containers/Home';
import NavBar from './containers/NavBar';
import Cart from './containers/Cart';
import ItemDetail from './containers/ItemDetail'
import Productos from './components/NavBar/Productos';
import CategoriasDetail from './containers/CategoriasDetail';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

    return (

      <div className="App">
 
       <BrowserRouter>
          <NavBar/>  
          <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route path="/Productos/:lista">
             <Productos/>
            </Route>
            <Route path="/Productos/">
             <Productos/>
            </Route>
            <Route path="/item/:id">
             <ItemDetail/>
            </Route>
            <Route path="/categoria/:categoryId">
             <CategoriasDetail/>
            </Route>
            <Route path ='/Cart/:productId'>
              <Cart/>
            </Route>
          </Switch>
         </BrowserRouter> 

      </div>
    );
}

export default App;