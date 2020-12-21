import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import { Button,Form,Input } from 'antd';
import Title from './Title';
import UserSelect from './UserSelect';
import '../asserts/css/Change.css'

class Change extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:2,
            name:"",
            email:"",
            phone:"",
            token:"",
        };
        this.Info = this.Info.bind(this);
        this.Change = this.Change.bind(this);
        this.Comment = this.Comment.bind(this);
        this.Application = this.Application.bind(this);
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
        this.setState({
            flag:2,
        })
    }

    Comment=()=>{
        this.setState({
            flag:3,
        })
    }

    Application=()=>{
        this.setState({
            flag:4,
        })
    }

    ChangePassword=()=>{
        this.setState({
            flag:5,
        })
    }

    render() {
        if(this.state.flag === 2){
            return (
                <div>
                    <Title></Title>
                    <UserSelect Info = {this.Info} Change = {this.Change} Comment = {this.Comment} Application = {this.Application}></UserSelect>
                    <div className = "Change">
                        <form>
                            <Input type = "text" placeholder = {this.state.name} ref = "name" onChange = {(e)=>this.GetUsername(e)}></Input>
                            <Input type = "text" placeholder = {this.state.email} ref = "email" onChange = {(e)=>this.GetEmail(e)}></Input>
                            <Input type = "text" placeholder = {this.state.phone} ref = "phone" onChange = {(e)=>this.GetPhone(e)}></Input>
                        </form>
                        <Button type = "primary" onClick = {this.ChangePassword}>
                            修改密码
                        </Button>
                        <Button type = "primary" onClick = {this.Submit}>
                            提交
                        </Button>
                    </div>
                </div>
            );
        }else if(this.state.flag === 3){
            return <Redirect to = {{pathname:'/User/Comment'}} />
        }else if(this.state.flag === 1){
            return <Redirect to = {{pathname:'/User'}} />
        }else if(this.state.flag === 4){
            return <Redirect to = {{pathname:'/User/Application'}} />
        }else if(this.state.flag === 5){
            return <Redirect to = {{pathname:'/User/Change/ChangePassword'}} />
        }
    }
}

export default Change;
