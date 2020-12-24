import React, { Component } from 'react';
import Title from '../Title'
import { List, Button, Divider, Input } from 'antd';
import { Redirect } from 'react-router-dom';

const { TextArea } = Input;

class TeacherHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            homeworkname:"",
            deadline:"",
            homeworkinfo:"",
            homeworkdo:"",
        };
    }

    componentDidMount(){

        this.setState({
            homeworkname:this.props.location.state.homeworkname,
        })

    }

    Submit=()=>{

    }

    Homework=(e)=>{
        this.setState({
            homeworkdo:e.target.value,
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
                        pathname:'/Student',
                    }
                }/>
            )
        }
    }
}

export default TeacherHomework;
