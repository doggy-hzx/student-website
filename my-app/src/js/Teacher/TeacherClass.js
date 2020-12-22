import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../../asserts/css/Teacher.css'
import { Button,Form,Input } from 'antd';
import Title from '../Title';
import TeacherSelect from './TeacherSelect'

class TeacherClass extends Component {
    constructor(props) {
		super(props);
		this.state = {
			flag:4,
		};
	}
	
	Info=()=>{
        this.setState({
            flag:1,
        })
    }

    Change=()=>{
		this.setState({
			flag:2,
		})
    }

    Class=()=>{
	}
	
    render() {
		if(this.state.flag === 1){
            return <Redirect to = {{pathname:'/Teacher'}} />
		}else if(this.state.flag === 2){
            return <Redirect to = {{pathname:'/TeacherChange'}} />
		}else if(this.state.flag === 4){
			return (
				<div>
					<Title></Title>
					<TeacherSelect Info = {this.Info} Change = {this.Change} Class = {this.Class}></TeacherSelect>
					<div className = "Teacher">
					</div>
				</div>
			);
		}
    }
}

export default TeacherClass;
