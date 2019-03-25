import React, {Component, Fragment} from 'react';
//import axios from '../../axios-config';


import {sendRegisterForm} from "../../store/actions";
import {connect} from "react-redux";


class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    changeInputHandle = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    // changePasswordHandle = (e) => {
    //     this.setState({password: e.target.value});
    // };
    //
    // handleClick = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.set('username', this.state.username);
    //     formData.set('password', this.state.password);
    //
    //     axios.post('users', formData)
    //         .then(responce=>{
    //
    //             if(responce.status === 200){
    //                 localStorage.setItem('user', JSON.stringify(responce.data))
    //                 window.location = '/';
    //             }
    //             else{
    //                 alert('Произошла ошибка');
    //             }
    //
    //         })
    //         .catch((responce) => alert('Ошибка: ' + responce));
    // };



    render() {
        return (
            <Fragment>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form id="formRegister" className="col-12">
                            <div className="form-group">
                                <label htmlFor="username">Login</label><br/>
                                <input type="text" className="form-control" id="username" name="username" value={this.state.username} required onChange={(e)=>this.changeInputHandle(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label><br/>
                                <input type="text" className="form-control" id="password" name="password" value={this.state.password} required onChange={(e)=>this.changeInputHandle(e)}/>
                            </div>

                            <div className="form-group">
                                <button type="submit" id="register" className="btn btn-primary" onClick={(e)=>this.props.sendRegisterForm(e, this.state.username, this.state.password, this.props.history)}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }

}

const mapStateToProps = (state) =>{
    return {
        username: state.username,
        password: state.password
    }
};


const mapDispatchToProps = (dispatch) =>{

    return{
        sendRegisterForm: (e, username, password, history) => dispatch(sendRegisterForm(e, username, password, history))
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(Register);