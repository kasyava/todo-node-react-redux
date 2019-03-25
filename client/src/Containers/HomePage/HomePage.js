import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchTask, deleteTask} from "../../store/actions";

import "./HomePage.css"

import {Button} from "react-bootstrap";


class HomePage extends Component{


    componentDidMount() {
        if(this.props.token) this.props.fetchTask(this.props.token);
        console.log(this.props.task);
    }

    render() {

        return (
            <Fragment>

                <div  style={{padding: 10 + 'px'}}>
                    {!this.props.task ? <div>You must be logged in</div> :
                        this.props.task.length>0 ?
                            this.props.task.map((item, index) =>{

                                    return(

                                            <div key={index} id={item._id} className='wrap' >

                                                <h3>Title: {item.title}</h3>

                                                <p>Description: {item.description}</p>
                                                <Button onClick={() => this.props.deleteTask(item._id, this.props.token, this.props.history)} >Delete task</Button>
                                            </div>


                                    )
                            })
                        : <div>No data. Add new tasks </div>
                    }
                </div>
            </Fragment>
        );
    }

}

const mapStateToProps = (state) =>{
    return {
        task: state.task,
        username: state.username,
        token: state.token,
        currentTarget: state.currentTarget
    }
};


const mapDispatchToProps = (dispatch) =>{

    return{

         fetchTask: (token) => dispatch(fetchTask(token)),

         deleteTask: (id, token, history) => dispatch(deleteTask(id, token, history)),



    }

};



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);