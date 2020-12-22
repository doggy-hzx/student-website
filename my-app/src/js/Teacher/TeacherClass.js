import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../../asserts/css/Teacher.css'
import { List, Avatar, Button } from 'antd';
import Title from '../Title';
import TeacherSelect from './TeacherSelect'

var classupdate = {
	classname:'class1'
}

class TeacherClass extends Component {
    constructor(props) {
		super(props);
		this.state = {
			flag:4,
			class:[
				{classname:'class1'},
				{classname:'class2'},
			]
		};
	}

	componentDidMount(){



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
											title = {<a>{item.classname}</a>}
											onClick = {()=>this.update(item)}
										></List.Item.Meta>
									</List.Item>
								)
							}

						></List>

				        <Button onClick = {this.Create}>创建课程</Button>

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
