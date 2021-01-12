import React, { Component } from 'react';
import Title from '../Title'
import { List, Button, Divider, Input } from 'antd';
import { backendUrl, getCookie, setCookie } from '../Common';
import { Redirect } from 'react-router-dom';

const { TextArea } = Input;

class TeacherHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            isDo:false,

            homewokeid:"",
            homeworkname:"",
            deadline:"",
            homeworkinfo:"",
            content:"你还没做作业！",
        };
    }

    componentDidMount(){

        this.setState({
            homeworkname:this.props.location.state.homeworkname,
            homewokeid:this.props.location.state.homewokeid,
        })

        fetch(backendUrl + "get_homework_info/", {
            method: "post",
            mode: "cors",
            body:JSON.stringify(this.props.location.state),
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    homeworkname:result.name,
                    deadline:result.ddl,
                    homeworkinfo:result.description,
                })
            },
                (error) => {
                    console.log(error);
                })

        fetch(backendUrl + "get_submit/", {
            method: "post",
            mode: "cors",
            body:JSON.stringify(this.props.location.state),
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                if(result.isSuccess){
                    this.setState({
                        content:result.content,
                    })
                }
            },
                (error) => {
                    console.log(error);
                })



    }

    Submit=()=>{
        fetch(backendUrl + "submit_homework/", {
            method: "post",
            mode: "cors",
            body:JSON.stringify(this.state),
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

    Homework=(e)=>{
        this.setState({
            content:e.target.value,
        })
    }

    Return=()=>{
        this.setState({
            flag:1,
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
                                    {this.state.homeworkname}
                                </p>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    截止时间:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.deadline}
                                </p>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    作业内容:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.homeworkinfo}
                                </p>
                            </List.Item>
                            <Divider></Divider>
                            
                            <p>
                                你的作业:
                                <Divider type = "vertical"></Divider>
                                {this.state.content}
                            </p>

                            <Divider></Divider>
                            <List.Item>

                                <TextArea
                                    rows={4}
                                    onChange={(e)=>this.Homework(e)}
                                >

                                </TextArea>

                                <Divider type="vertical"></Divider>
                                <div>
                                    <Button
                                        onClick = {this.Submit}
                                    >提交</Button>
                                    
                                    <Divider></Divider>

                                    <Button
                                        onClick = {this.Return}
                                    >返回</Button>
                                    
                                </div>
                            </List.Item>
                            <Divider></Divider>

                    </div>

                </div>
            );
        }else if(this.state.flag === 1){
            return (
                <Redirect to={
                    {
                        pathname:'/',
                    }
                }/>
            )
        }
    }
}

export default TeacherHomework;
