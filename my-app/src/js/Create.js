import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import { Input, Button, Radio, Divider } from 'antd';
import { backendUrl, getCookie } from './Common'
import '../asserts/css/App.css';
import '../asserts/css/Logo.css';
import '../asserts/css/Info.css';
import Title from './Title'
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:2,
            change:"password",
            username:"",
            password:"",
            phone:"",
            email:"",
            citizen_id:"",
            real_name: "",
            type:"",
        };
    }

    GetUsername=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }

    GetEmail=(e)=>{
        this.setState({
            email:e.target.value,
        })
    }

    GetCode=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    GetID=(e)=>{
        this.setState({
            citizen_id:e.target.value,
        })
    }

    GetPhone=(e)=>{
        this.setState({
            phone:e.target.value,
        })
    }

    GetRealName=(e)=>{
        this.setState({
            real_name:e.target.value,
        })
    }

    UserAppData=()=>{
        var email = /^([a-z0-9]+[\.\-_]?)*[a-z0-9]+@[a-z0-9]+[-_]?[a-z0-9]+(\.[a-z0-9]{2,3}){1,2}$/ig;
        if(this.refs.code.value != this.refs.if_same_code.value){
            alert("确认密码错误，请重新输入");
        }else if(this.state.username.length<=4){
            alert("用户名必须超过4位!");
        }else if(this.state.password.length<6||this.state.password.length>18){
            alert("密码必须在6-18位之间!");
        }else if(!email.test(this.state.email)){
            alert("邮箱地址不合法!");
        }else if(this.state.phone.length!=11){
            alert("电话号码不合法!");
        }else if(this.state.citizen_id.length!=10){
            alert("学号不合法!");
        }else{
            
            fetch(backendUrl + "register/", {
                headers: {
                    'X-CSRFToken': getCookie('csrftoken')
                },
                method :"post",
                mode: "cors",
                body: JSON.stringify(this.state),
                credentials: 'include',
            })
                .then(res => res.json())
                .then((result) => {
                    if (result.isSuccess) {
                        alert("用户注册成功");
                        this.setState({
                            flag: 0,
                        })
                    }
                },
            (error)=>{
                console.log(error);
            })
        }

    }

    Back=()=>{
        this.setState({
            flag:0,
        })
    }

    Change=()=>{
        this.setState({
            change:"text",
            string:"隐藏密码"
        })
    }

    Choose = (e) => {
        this.setState({
            type: e.target.value,
        })
    }

    render(){
        if(this.state.flag === 2){
            return (
                <div>
                    <Title></Title>
                    <div className = "Info_Create" style={{float:'left'}}>
                        <div>
                            <form>
                                <div>
                                    <div>
                                        <Input type = "text" name = "用户名" placeholder = "用户名" ref = "name" onChange = {(e)=>this.GetUsername(e)}/>
                                        <Input type = "text" name = "邮箱" placeholder = "邮箱" ref = "address" onChange = {(e)=>this.GetEmail(e)}/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input type = {this.state.change} name = "密码" placeholder = "密码" ref = "code" onChange = {(e)=>this.GetCode(e)}/>
                                        <Input type = "text" name = "电话号码" placeholder = "电话号码" ref = "phone" onChange = {(e)=>this.GetPhone(e)}/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input type = {this.state.change} name = "确认密码" placeholder = "确认密码" ref = "if_same_code"/>
                                        <Input type = "text" name = "学号" placeholder = "学号" ref = "ID" onChange = {(e)=>this.GetID(e)}/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input type = "text" name = "真实姓名" placeholder = "真实姓名" ref = "real_name" onChange = {(e)=>this.GetRealName(e)}/>
                                    </div>
                                </div>
                            </form>
                            <Radio.Group onChange={(e)=>this.Choose(e)}>
                                <Radio.Button value={"teacher"}>Teacher</Radio.Button>
                                <Divider type = "vertical"></Divider>
                                <Radio.Button value={"student"}>Student</Radio.Button>
                            </Radio.Group>
                            <Divider></Divider>
                            <div>
                                <Button onClick = {this.UserAppData}>
                                    用户注册
                                </Button>
                            </div>
                            <div>
                                <Button onClick = {this.Back}>
                                    返回
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else if(this.state.flag === 0){
            return <Redirect to = {{pathname:'/'}} />
        }
    }
}

export default Create;