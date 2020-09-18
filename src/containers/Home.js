import Logo from '../components/Logo';
import Salute from '../components/Salute';
import React from 'react';
// import Productos from "../components/NavBar/Productos";
import Acerca from "../components/NavBar/Acerca";
import Contacto from "../components/NavBar/Contacto";
import ProductList from "../components/NavBar/Productos";
import {Link} from 'react-router-dom';
import Cart from '../containers/Cart';

import '../assets/style.css';


function Home({ children }) {
    return <header className="App-header">
    
  <div id="flex">  

        <div id="logo">
            <Logo>
                <Link to={'/Cart'}></Link>
            </Logo>
        </div>

        <div id="salute">
            <Salute/>
        </div>

        <br/>
            <h2>Estos son nuestros productos</h2>
        <br/>
        <br/>

        <div id="productos">
            <ProductList/>
        </div>


        <br/>
            <h2>Acerca de nosotros</h2>
        <br/>
        <br/>

        <div id="acerca">
            <Acerca/>
        </div>

        <br/>
            <h2>Contacto</h2>
        <br/>
        <br/>

        <div id="contacto">
            <Contacto/>
        </div>

        <div id='cart'>
            <Cart/>
        </div>


    </div>

    </header>
}



export default Home;