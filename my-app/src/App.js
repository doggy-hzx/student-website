import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginIn from './js/LoginIn';
import Main from './js/Main';
import Create from './js/Create';
import User from './js/User';
import Change from './js/Change';
import Comment from './js/Comment';
import ChangePassword from './js/ChangePassword';
import RealChange from './js/RealChange';
import RealCreate from './js/RealCreate';


class App extends Component {

    constructor(props){
        super(props);
    }

	render(){
        return (
            <Router>
                <div>
                    <Route exact path = "/" component = {Main}></Route>
                    <Route exact path = "/LoginIn" component = {LoginIn}></Route>
                    <Route exact path = "/Create" component = {Create}></Route>
                    <Route exact path = "/User" component = {User}></Route>
                    <Route exact path = "/User/Comment" component = {Comment}></Route>
                    <Route exact path = "/User/Change" component = {Change}></Route>
                    <Route exact path = "/User/Change/ChangePassword" component = {ChangePassword}></Route>
                    <Route exact path = "/RealChange" component = {RealChange}></Route>
                    <Route exact path = "/RealCreate" component = {RealCreate}></Route>
                </div>
            </Router>
        );
	}
}

export default App;