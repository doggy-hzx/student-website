import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../../asserts/css/Student.css'
import { List, Avatar, Button } from 'antd';
import Title from '../Title';
import StudentSelect from './StudentSelect'
import { backendUrl, getCookie, setCookie } from '../Common';

var classupdate = {
	classname:'',
	classid:'',
}

class StudentChoose extends Component {
    constructor(props) {
		super(props);
		this.state = {
			flag:4,
			class:[],
		};
	}

	componentDidMount(){

        fetch(backendUrl + "get_course/", {
            method: "get",
			mode: "cors",
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    class:result.class,
                })
            },
                (error) => {
                    console.log(error);
                })

	}

	update=(e)=>{
		classupdate.classname = e.classname;
		this.setState({
			flag:5,
		})
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
	
	Create=()=>{
		this.setState({
			flag:3,
		})
	}

    Class=()=>{
		this.setState({
			flag:6,
		})
	}

	Choose=()=>{
	}

	Todo=()=>{
		this.setState({
			flag:7,
		})
	}
	
    render() {
		if(this.state.flag === 1){
            return <Redirect to = {{pathname:'/Student'}} />
		}else if(this.state.flag === 2){
            return <Redirect to = {{pathname:'/StudentChange'}} />
		}else if(this.state.flag === 3){
			return <Redirect to = {{pathname:'/StudentCreateClass'}} />
		}else if(this.state.flag === 4){
			return (
				<div>
					<Title></Title>
					<StudentSelect Info = {this.Info} Change = {this.Change} Class = {this.Class} Choose = {this.Choose} Todo = {this.Todo}></StudentSelect>
					<div className = "Student">
						<List
							header = {<div>已选课程</div>}
							dataSource = {this.state.class}

							renderItem = {
								item => (
									<List.Item>
										<List.Item.Meta
											title = {<a>{item.classname}</a>}
											onClick = {()=>this.update(item)}
										></List.Item.Meta>
									</List.Item>
								)
							}

						></List>

					</div>
				</div>
			);
		}else if(this.state.flag === 6){
			return <Redirect to = {{pathname:'/StudentClass'}} />
		}else if(this.state.flag === 5){
			return (
				<Redirect to = {
					{
						pathname:'/StudentClassInfo',
						state:classupdate,
					}
				}/>
			)
		}else if(this.state.flag === 7){
			return <Redirect to = {{pathname:'/StudentTodo'}} />
		}
    }
}

export default StudentChoose;
