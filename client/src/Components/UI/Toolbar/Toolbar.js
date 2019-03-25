import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import {connect} from "react-redux";

import {fetchLogout} from "../../../store/actions";

const Toolbar = (props) =>{
    return(

        props.token ?
            <div>
                <span style={{color: 'red'}}>Hello, {props.username}!</span>
                <NavLink className="buttonNav" activeClassName='buttonNavActiv' to='/addTask'>Add task</NavLink>
                <NavLink className="buttonNav"  to="/" onClick={() => props.fetchLogout(props.token)}>Logout</NavLink>
            </div>
            :
        <Nav className='justify-content-end'>
            <NavLink exact className="buttonNav" activeClassName='buttonNavActiv' to="/register">Register</NavLink>
            <NavLink exact className="buttonNav" activeClassName='buttonNavActiv' to="/login">Login</NavLink>
        </Nav>


    )
};

const mapStateToProps = (state) =>{
    return {
        token: state.token,
        username: state.username
    }
};


const mapDispatchToProps = (dispatch) =>{

    return{

       fetchLogout: (token) => dispatch(fetchLogout(token))
    }

};



export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);