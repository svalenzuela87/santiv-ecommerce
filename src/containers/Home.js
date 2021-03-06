import Logo from '../components/Logo';
import Salute from '../components/Salute';
import React from 'react';
// import Productos from "../components/NavBar/Productos";
import Acerca from "../components/NavBar/Acerca";
import Contacto from "../components/NavBar/Contacto";
import ProductList from "../components/NavBar/Productos";
import {Link} from 'react-router-dom';

import '../assets/style.css';


function Home({ children }) {
    return <header className="App-header">
    
  <div id="flex">  

        <div id="logo">
           <Link to={'/Cart'}><Logo/></Link>
        </div>

        <div id="salute">
            <Salute/>
        </div>

        <br/>
            <divisor>Estos son nuestros productos</divisor>
        <br/>
        <br/>

        <div id="productos">
            <ProductList/>
        </div>


        <br/>
            <divisor>Acerca de nosotros</divisor>
        <br/>
        <br/>

        <div id="acerca">
            <Acerca/>
        </div>

        <br/>
            <divisor>Contacto</divisor>
        <br/>
        <br/>

        <div id="contacto">
            <Contacto/>
        </div>

    </div>

    </header>
}



export default Home;