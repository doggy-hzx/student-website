import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../../asserts/css/Student.css'
import { List, Avatar, Button } from 'antd';
import Title from '../Title';
import StudentSelect from './StudentSelect'
import { backendUrl, getCookie, setCookie } from '../Common';

var classupdate = {
	classname:'1'
}

class StudentClass extends Component {
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

        fetch(backendUrl + "user/profile/", {
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
	}

	Choose=()=>{
		this.setState({
			flag:6,
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
					<StudentSelect Info = {this.Info} Change = {this.Change} Class = {this.Class} Choose = {this.Choose}></StudentSelect>
					<div className = "Student">
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
										<Button>选择课程</Button>
									</List.Item>
								)
							}

						></List>

					</div>
				</div>
			);
		}else if(this.state.flag === 6){
			return <Redirect to = {{pathname:'/StudentClassChoose'}} />
		}
		else if(this.state.flag === 5){
			return (
				<Redirect to = {
					{
						pathname:'/StudentClassInfo',
						state:classupdate,
					}
				}/>
			)
		}
    }
}

export default StudentClass;
