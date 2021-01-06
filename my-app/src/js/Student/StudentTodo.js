import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { List, Input, Button, Divider } from 'antd';
import { backendUrl, getCookie, setCookie } from '../Common';
import StudentSelect from './StudentSelect';
import Title from '../Title';

var toHomework = {
    homeworkname:'',

}
class StudentTodo extends Component {
  constructor(props) {
		super(props);
		this.state = {
            flag:4,
            homework:[
                {homeworkname:"homework1"},
                {homeworkname:"homework2"},
                {homeworkname:"homework3"},
            ],
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
        this.setState({
            flag:7,
        })
    }
    
    setToHomework=(e)=>{
        toHomework.homeworkname = e.homeworkname;
        this.setState({
            flag:5,
        })
    }

	Todo=()=>{
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

                    <div className = "CreateClass">
                        <List
                            dataSource={this.state.homework}
                            renderItem={item => 
            
                                <List.Item>
                                    <List.Item.Meta
                                        title = {<a>{item.homeworkname}</a>}
                                        onClick = {()=>this.setToHomework(item)}
                                    >
                                    </List.Item.Meta>
                                </List.Item>
                            }
                        >
                        </List>
                    </div>

                </div>
			);
		}else if(this.state.flag === 6){
			return <Redirect to = {{pathname:'/StudentClass'}} />
		}else if(this.state.flag === 7){
			return <Redirect to = {{pathname:'/StudentChoose'}} />
		}else if(this.state.flag === 5){
            return (
                <Redirect to = {{
                    pathname:'/StudentHomework',
                    state:toHomework
                }} />
            )
        }
    }
}

export default StudentTodo;
