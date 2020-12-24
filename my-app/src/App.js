import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './asserts/css/App.css'
import LoginIn from './js/LoginIn';
import Main from './js/Main';
import Create from './js/Create';
import User from './js/User';
import Change from './js/Change';
import Comment from './js/Comment';
import ChangePassword from './js/ChangePassword';
import Teacher from './js/Teacher/Teacher';
import TeacherClass from './js/Teacher/TeacherClass';
import TeacherChange from './js/Teacher/TeacherChange';
import TeacherClassInfo from './js/Teacher/TeacherClassInfo';
import TeacherCreateClass from './js/Teacher/TeacherCreateClass';
import TeacherHomework from './js/Teacher/TeacherHomework';
import TeacherCheck from './js/Teacher/TeacherCheck';

import Student from './js/Student/Student';
import StudentClass from './js/Student/StudentClass';
import StudentChange from './js/Student/StudentChange';
import StudentClassInfo from './js/Student/StudentClassInfo';
import StudentCreateClass from './js/Teacher/TeacherCreateClass';
import StudentHomework from './js/Teacher/TeacherHomework';
import StudentCheck from './js/Teacher/TeacherCheck';
import StudentChoose from './js/Student/StudentChoose';

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

                    {/* 教师的route */}
                    <Route exact path = "/Teacher" component = {Teacher}></Route>
                    <Route exact path = "/TeacherClass" component = {TeacherClass}></Route>
                    <Route exact path = "/TeacherChange" component = {TeacherChange}></Route>
                    <Route exact path = "/TeacherClassInfo" component = {TeacherClassInfo}></Route>
                    <Route exact path = "/TeacherCreateClass" component = {TeacherCreateClass}></Route>
                    <Route exact path = "/TeacherHomework" component = {TeacherHomework}></Route>
                    <Route exact path = "/TeacherCheck" component = {TeacherCheck}></Route>

                    {/*学生的route*/}
                    <Route exact path = "/Student" component = {Student}></Route>
                    <Route exact path = "/StudentClass" component = {StudentClass}></Route>
                    <Route exact path = "/StudentChange" component = {StudentChange}></Route>
                    <Route exact path = "/StudentClassInfo" component = {StudentClassInfo}></Route>
                    <Route exact path = "/StudentCreateClass" component = {StudentCreateClass}></Route>
                    <Route exact path = "/StudentHomework" component = {StudentHomework}></Route>
                    <Route exact path = "/StudentCheck" component = {StudentCheck}></Route>
                    <Route exact path = "/StudentChoose" component = {StudentChoose}></Route>

                </div>
            </Router>
        );
	}
}

export default App;