import React from 'react';
import CartIcon from '../../components/NavBar/CartIcon';
import '../../assets/style.css';
import {Link} from 'react-router-dom';

import {
    BrowserRouter as Router,
  } from "react-router-dom";
  
  import { Navbar,Nav,NavDropdown } from 'react-bootstrap'


  function Categories({categories}){
    console.log ("Las categorias son : " + categories);
    return 
  }


function NavBar () {

    return (
              <div class="flex"> 
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                            {/* <a class="navbar-brand" href="#">Navbar</a> */}
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
                                        {/* <li class="nav-item dropdown bg-dark">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categorias
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="category/:id">Frutos</a>
                                                <a class="dropdown-item" href="category/:id">Semillas</a>
                                                <a class="dropdown-item" href="category/:id">Suplementos</a>
                                            <div class="dropdown-divider"></div>
                                                <a class="dropdown-item"href="category/:id">Importados</a>
                                            </div>
                                        </li> */}
                                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="category/:id">Frutos</NavDropdown.Item>
                                        <NavDropdown.Item href="category/:id">Semillas</NavDropdown.Item>
                                        <NavDropdown.Item href="category/:id">Suplementos</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="category/:id">Importados</NavDropdown.Item>
                                    </NavDropdown>
                                </ul>
                                {/* <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form> */}
                            </div>

                            <CartIcon/>
                        </Navbar>    
                    </div>
                </div>
            </div>
    )
}

export default NavBar;