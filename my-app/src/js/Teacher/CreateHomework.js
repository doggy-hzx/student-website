import React, { Component } from 'react';
import Title from '../Title'
import { List, Button, Divider, Input } from 'antd'
import { Redirect } from 'react-router-dom';
import { backendUrl, getCookie, setCookie } from '../Common';

var to = {
    stuname:"",
}

class CreateHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:0,
            classid:"",
            homeworkname:"",
            deadline:"",
            homeworkinfo:"",
        };
    }

    componentDidMount(){
        this.setState({
            classid:this.props.location.state.classid,
        })
    }

    setHomeworkInfo=(e)=>{
        this.setState({
            homeworkinfo:e.target.value,
        })
    }

    setDeadline=(e)=>{
        this.setState({
            deadline:e.target.value,
        })
    }   

    setHomeworkname=(e)=>{
        this.setState({
            homeworkname:e.target.value,
        })
    }

    Create=()=>{

        var deadline = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/ig;
        
        if(!deadline.test(this.state.deadline)){
            alert("时间不合法");
        }else{
            fetch(backendUrl + "new_homework/", {
                method :"post",
                mode: "cors",
                body: JSON.stringify(this.state),
                credentials: 'include',
            })
                .then(res => res.json())
                .then((result) => {
                    if (result.isSuccess) {
                        alert("作业创建成功");
                        this.setState({
                            flag:2,
                        });
                    }
                },
                (error)=>{
                    console.log(error);
                })
        }
        
    }

    Return=()=>{
        this.setState({
            flag:3,
        })
    }

    render() {
        if(this.state.flag === 0){
            return (
                <div>
                    <Title></Title>

                    <div className = "CreateClass">

                        <List.Item>
                                <p>
                                    作业名称:
                                    <Divider type = "vertical"></Divider>
                                </p>
                                <div>
                                    <Input onChange = {(e)=>this.setHomeworkname(e)}></Input>
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    截止时间:
                                    <Divider type = "vertical"></Divider>
                                </p>
                                <div>
                                    <Input onChange = {(e)=>this.setDeadline(e)}></Input>
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    作业内容:
                                    <Divider type = "vertical"></Divider>
                                </p>
                                <div>
                                    <Input onChange = {(e)=>this.setHomeworkInfo(e)}></Input>
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <Divider></Divider>
                            
                            <Button onClick = {()=>this.Create()} block>创建作业</Button>

                            <Divider></Divider>
                            
                            <Button onClick = {()=>this.Return()} block>返回主页</Button>
                            
                            <Divider></Divider>
                    </div>

                </div>
            );
        }else if(this.state.flag === 1){
            return (
                <Redirect to={
                    {
                        pathname:'/TeacherCheck',
                        state:to,
                    }
                }/>
            )
        }else if(this.state.flag === 2){
            return <Redirect to = {{pathname:'/Teacher'}}></Redirect>
        }else if(this.state.flag === 3){
            return <Redirect to = {{pathname:'/Teacher'}}></Redirect>
        }
    }
}

export default CreateHomework;
