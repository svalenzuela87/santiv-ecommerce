import React from 'react';
import CartIcon from '../components/NavBar/CartIcon';
import '../assets/style.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'
import Categorias from '../components/NavBar/Categorias';

//https://react-bootstrap.github.io/components/navbar/

function NavBar () {

    return (
              <div class="flex"> 
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="mx-auto d-sm-flex d-block flex-sm-nowrap" id="NavBarSantiV">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/">SantiV <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#productos">Productos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link"href="#acerca">Acerca de nosotros</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#contacto">Contacto</a>
                                    </li>
                                        <li class="nav-item dropdown bg-dark">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categorias
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Categorias/>
                                            </div>  
                                        </li>
                                </ul>
                            </div>

                            <CartIcon/>
                        </Navbar>    
                    </div>
                </div>
            </div>
    )
}

export default NavBar;