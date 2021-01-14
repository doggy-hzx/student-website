import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import { Button,Divider,Form,Input } from 'antd';
import Title from '../Title';
import StudentSelect from './StudentSelect';
import '../../asserts/css/Change.css'

class Change extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:2,
            name:"",
            email:"",
            phone:"",
            password:"",
            token:"",
        };
        this.Info = this.Info.bind(this);
        this.Change = this.Change.bind(this);
        this.Class = this.Class.bind(this);
    }

    componentDidMount(){

        // fetch(backendUrl+"user/profile/changepass/set_new/",{
        //     mode:"cors",
        // credentials: 'include',
        // })
        //     .then(res => res.json())
        //     .then((tokenresult)=>{
        //     },
        // (error)=>{
        //     console.log(error);
        // })

        // fetch(backendUrl+"user/profile/",{
        //     method:"get",
        //     mode:"cors",
        //     credentials:"include",
        // })
        //     .then(res => res.json())
        //     .then((result)=>{
        //         this.setState({
        //             name:result.username,
        //             phone:result.phone,
        //             email:result.email,
        //         })
        //     },
        //     (error)=>{
        //         console.log(error);
        //     })
    }

    GetUsername=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }

    GetEmail=(e)=>{
        this.setState({
            email:e.target.value,
        })
    }
    
    GetPhone=(e)=>{
        this.setState({
            phone:e.target.value,
        })
    }

    GetPassword=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    

    Submit=()=>{
        var flag = 0;
        //请求数据
        var email = /^([a-z0-9]+[\.\-_]?)*[a-z0-9]+@[a-z0-9]+[-_]?[a-z0-9]+(\.[a-z0-9]{2,3}){1,2}$/ig;
        if(this.state.name!=""){
            if(this.state.name.length<=4){
                alert("用户名必须超过4位!");
                flag = 1;
            }
        }
        if(this.state.email!=""){
            if(!email.test(this.state.email)){
                alert("邮箱地址不合法!");
                flag = 1;
            }
        }
        if(this.state.phone!=""){
            if(this.state.phone.length!=11){
                alert("电话号码不合法!");
                flag = 1;
            }
        }
        
        if(flag === 0){
            // fetch(backendUrl+"user/profile/modify/",{
            //     method:"post",
            //     body:JSON.stringify(this.state),
            //     mode:"cors",
            //     credentials: 'include',
            // })
            //     .then(res => res.json())
            //     .then((result)=>{
            //         if(result.isSucess){
            //             alert("更改成功");
            //         }else{
            //             alert("更改失败");
            //         }
            //     },
            // (error)=>{
            //     console.log(error);
            // })
        }
    }

    Info=()=>{
        this.setState({
            flag:1,
        })
    }

    Change=()=>{
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

    Todo=()=>{
        this.setState({
            flag:6,
        })
    }

    render() {
        if(this.state.flag === 2){
            return (
                <div>
                    <Title></Title>
                    <StudentSelect Info = {this.Info} Change = {this.Change} Class = {this.Class} Choose = {this.Choose} Todo = {this.Todo}></StudentSelect>
                    <div>
                        <Input.Group className = "Change">
                            <Input prefix = "username" type = "text" placeholder = {this.state.name} ref = "name" onChange = {(e)=>this.GetUsername(e)}></Input>
                            <Divider type = "vertical"></Divider>
                            <Input prefix = "email" type = "text" placeholder = {this.state.email} ref = "email" onChange = {(e)=>this.GetEmail(e)}></Input>
                            <Divider type = "vertical"></Divider>
                            <Input prefix = "phone" type = "text" placeholder = {this.state.phone} ref = "phone" onChange = {(e)=>this.GetPhone(e)}></Input>
                            <Divider type = "vertical"></Divider>
                            <Input prefix = "password" type = "text" placeholder = {this.state.password} ref = "password" onChange = {(e)=>this.GetPassword(e)}></Input>
                            
                            <Button onClick = {this.Submit}>
                                提交
                            </Button>

                        </Input.Group>
                    </div>
                </div>
            );
        }else if(this.state.flag === 4){
            return <Redirect to = {{pathname:'/StudentClass'}} />
        }else if(this.state.flag === 1){
            return <Redirect to = {{pathname:'/Student'}} />
        }else if(this.state.flag === 5){
            return <Redirect to = {{pathname:'/StudentChoose'}} />
        }else if(this.state.flag === 6){
            return <Redirect to = {{pathname:'/StudentTodo'}} />
        }
    }
}

export default Change;
