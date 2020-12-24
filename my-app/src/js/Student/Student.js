import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import '../../asserts/css/Student.css'
import Title from '../Title';
import StudentSelect from './StudentSelect';
import { backendUrl } from '../Common'
import { Divider, List } from 'antd';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:1,
            username:"用户名",
            phone:"123456",
            email:"xxx@xxx.xxx",
            real_name:"真名",
        };
        this.Info = this.Info.bind(this);
        this.Change = this.Change.bind(this);
        this.Class = this.Class.bind(this);
    }

    componentDidMount(){
        /*fetch(backendUrl+"user/profile/",{
            method:"get",
            mode:"cors",
            credentials:"include",
        })
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    username:result.username,
                    phone:result.phone,
                    email:result.email,
                    real_name:result.real_name,
                })
            },
            (error)=>{
                console.log(error);
            })*/
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
        this.setState({
            flag:4,
        })
    }

    Choose=()=>{
        this.setState({
            flag:5,
        })
    }

    render() {
        if(this.state.flag === 1){
            return (
                <div>
                    <Title></Title>
                    <StudentSelect Info = {this.Info} Change = {this.Change} Class = {this.Class} Choose = {this.Choose}></StudentSelect>
                    <div className = "Student">
                        <List>
                            <List.Item>
                                <p>
                                    用户名:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.username}
                                </p>
                            </List.Item>
                            <List.Item>
                                <p>
                                    电话号码:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.phone}
                                </p>
                            </List.Item>
                            <List.Item>
                                <p>
                                    电子邮箱:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.email}
                                </p>
                            </List.Item>
                            <List.Item>
                                <p>
                                    真实姓名:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.real_name}
                                </p>
                            </List.Item>
                        </List>
                    </div>
                </div>
            );
        }else if(this.state.flag === 2){
            return <Redirect to = {{pathname:'/StudentChange'}} />
        }else if(this.state.flag === 4){
            return <Redirect to = {{pathname:'/StudentClass'}} />
        }else if(this.state.flag === 5){
            return <Redirect to = {{pathname:'/StudentChoose'}} />
        }
    }
}

export default User;

