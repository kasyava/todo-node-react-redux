import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

import './Header.css';

const Header = (props) =>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">

                <Nav className="mr-auto">
                    <NavLink exact className="buttonNav" activeClassName='buttonNavActiv' to="/">Home</NavLink>

                </Nav>
                {props.children}
            </Navbar>

        </div>
    )
};

export default Header;