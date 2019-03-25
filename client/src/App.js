import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from "react-router-dom";

import './App.css';


import Register from './Containers/Register/Register'
import Login from "./Containers/Login/Login";
import HomePage from "./Containers/HomePage/HomePage";
import ProductForm from "./Containers/TaskForm/TaskForm";
import Layout from "./Components/Layout/Layout";



class App extends Component {
  render() {
    return (
        <div className="App">


          <BrowserRouter>
            <Layout>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/register'  exact component={Register} />
                <Route path='/login'  exact component={Login} />
                <Route path='/addTask'  exact component={ProductForm} />
              </Switch>
            </Layout>
          </BrowserRouter>

        </div>
    );
  }
}

export default App;