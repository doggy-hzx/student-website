import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import '../asserts/css/User.css'
import Title from './Title';
import UserSelect from './UserSelect';


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
        this.Comment = this.Comment.bind(this);
    }

    componentDidMount(){
        // fetch(backendUrl+"user/profile/",{
        //     method:"get",
        //     mode:"cors",
        //     credentials:"include",
        // })
        //     .then(res => res.json())
        //     .then((result)=>{
        //         this.setState({
        //             username:result.username,
        //             phone:result.phone,
        //             email:result.email,
        //             real_name:result.real_name,
        //         })
        //     },
        //     (error)=>{
        //         console.log(error);
        //     })
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

    Comment=()=>{
        this.setState({
            flag:3,
        })
    }

    render() {
        if(this.state.flag === 1){
            return (
                <div>
                    <Title></Title>
                    <UserSelect Info = {this.Info} Change = {this.Change} Comment = {this.Comment}></UserSelect>
                    <div className = "User">
                        <div id = "UserName">
                            {this.state.username}
                        </div>
                        <div id = "Type">
                            注册用户
                        </div>
                        <div id = "Info">
                            <a>
                                <text>电话</text>
                                <text>{this.state.phone}</text>
                            </a>
                            <a>
                                <text>邮箱</text>
                                <text>{this.state.email}</text>
                            </a>
                            <a>
                                <text>真实姓名</text>
                                <text>{this.state.real_name}</text>
                            </a>
                        </div>
                    </div>
                </div>
            );
        }else if(this.state.flag === 3){
            return <Redirect to = {{pathname:'/User/Comment'}} />
        }else if(this.state.flag === 2){
            return <Redirect to = {{pathname:'/User/Change'}} />
        }
    }
}

export default User;
