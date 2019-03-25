import React, {Component, Fragment} from 'react';

import {sendLoginForm} from "../../store/actions";
import {connect} from "react-redux";


class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    changeInputHandle = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <Fragment>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form id="formLogin" className="col-12">
                            <div className="form-group">
                                <label htmlFor="user">Login</label><br/>
                                <input type="text" className="form-control" id="user" name="username" value={this.state.username} required onChange={(e)=>this.changeInputHandle(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass">Password</label><br/>
                                <input type="text" className="form-control" id="pass" name="password" value={this.state.password} required onChange={(e)=>this.changeInputHandle(e)}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" id="login" className="btn btn-primary" onClick={(e)=>this.props.sendLoginForm(e, this.state.username, this.state.password, this.props.history)}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }

}


const mapDispatchToProps = (dispatch) =>{

    return{

        //changeInputHandle: (e) => dispatch(changeInputHandle(e)),
        sendLoginForm: (e, username, password, history) => dispatch(sendLoginForm(e, username, password, history))
    }

};


export default connect(null, mapDispatchToProps)(Login);