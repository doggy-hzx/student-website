import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../../asserts/css/Teacher.css'
import { List, Avatar, Button, Divider } from 'antd';
import Title from '../Title';
import TeacherSelect from './TeacherSelect'
import { backendUrl, getCookie, setCookie } from '../Common';

var classupdate = {
	classname:'1'
}

class TeacherClass extends Component {
    constructor(props) {
		super(props);
		this.state = {
			flag:4,
			class:[
				{course_name:123,course_id:123}
			],
			course_id:"",
		};
	}

	componentDidMount(){

        fetch(backendUrl + "get_courses/", {
			method: "get",
            mode: "cors",
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    class:result.data,
                })
            },
                (error) => {
                    console.log(error);
                })

	}

	update=(e)=>{
		classupdate.coursename = e.coursename;
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
	}

	Delete=(e)=>{

		this.setState({
			course_id:e.course_id,
		})

		fetch(backendUrl + "delete_course/", {
			method: "post",
			mode: "cors",
			body:JSON.stringify(this.state),
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
            },
                (error) => {
                    console.log(error);
                })

        fetch(backendUrl + "get_courses/", {
			method: "get",
			mode: "cors",
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
				this.setState({
					class:result.data,
				})
            },
                (error) => {
                    console.log(error);
                })

	}

    render() {
		if(this.state.flag === 1){
            return <Redirect to = {{pathname:'/Teacher'}} />
		}else if(this.state.flag === 2){
            return <Redirect to = {{pathname:'/TeacherChange'}} />
		}else if(this.state.flag === 3){
			return <Redirect to = {{pathname:'/TeacherCreateClass'}} />
		}else if(this.state.flag === 4){
			return (
				<div>
					<Title></Title>
					<TeacherSelect Info = {this.Info} Change = {this.Change} Class = {this.Class}></TeacherSelect>
					<div className = "Teacher">
						<List
							header = {<div>已开课程</div>}
							dataSource = {this.state.class}

							renderItem = {
								item => (
									<List.Item>

										<List.Item.Meta
											title = {<a>{item.course_name}</a>}
											onClick = {()=>this.update(item)}
										></List.Item.Meta>
										
										<Button onClick = {(item)=>this.Delete(item)}>删除课程</Button>
									</List.Item>
								)
							}

						></List>

				        <Button onClick = {this.Create}>创建课程</Button>

				        <Divider></Divider>

					</div>
				</div>
			);
		}else if(this.state.flag === 5){
			return (
				<Redirect to = {
					{
						pathname:'/TeacherClassInfo',
						state:classupdate,
					}
				}/>
			)
		}
    }
}

export default TeacherClass;
