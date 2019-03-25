import React, {Component, Fragment} from 'react';


import {Col, Form, Button} from "react-bootstrap";
import {sendTaskForm} from "../../store/actions";
import {connect} from "react-redux";


class TaskForm extends Component {

    state = {
        title:'',
        description: '',
    };

    user = this.props.token;

    textHandler = event =>{
        this.setState({[event.target.name]: event.target.value});
    };
    

    render() {

        return (
            <Fragment>

                {!this.user ? null :
                    <div className='justify-content-center'>
                        <Form as={Col}>
                            <Form.Group controlId="taskTitle">
                                <Form.Label>Task title</Form.Label>
                                <Form.Control name='title' onChange={(e) => this.textHandler(e)} value={this.state.title} type="text" placeholder="Enter task titlte"/>
                            </Form.Group>

                            <Form.Group controlId="taskDescription">
                                <Form.Label>Task description</Form.Label>
                                <Form.Control name='description' onChange={(e) => this.textHandler(e)} value={this.state.description} type="text" placeholder="Enter task message"/>
                            </Form.Group>


                            <Button onClick={(e) => this.props.sendTaskForm(e, this.state, this.props.token, this.props.history)} >Create task</Button>


                        </Form>
                    </div>
                }
            </Fragment>

        );
    }
}



const mapStateToProps = (state) =>{
    return {
        token: state.token
    }
};


const mapDispatchToProps = (dispatch) =>{

    return{
        sendTaskForm: (e, state, token, history) => dispatch(sendTaskForm(e, state, token, history))
    }

};


export default  connect(mapStateToProps, mapDispatchToProps)(TaskForm);