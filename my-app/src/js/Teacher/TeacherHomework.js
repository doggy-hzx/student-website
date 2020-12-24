import React, { Component } from 'react';
import Title from '../Title'
import { List, Button, Divider, Input } from 'antd'
import { Redirect } from 'react-router-dom';

var to = {
    stuname:"",
}

class TeacherHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            homeworkname:"",
            deadline:"",
            homeworkinfo:"",
            submitstudent:[],

            thomeworkname:"",
            tdeadline:"",
            thomeworkinfo:"",

        };
    }

    componentDidMount(){

        this.setState({
            homeworkname:this.props.location.state.homeworkname,
        })

    }

    setHomeworkInfo=(e)=>{
        this.setState({
            thomeworkinfo:e,
        })
    }

    setDeadline=(e)=>{
        this.setState({
            tdeadline:e,
        })
    }   

    setHomeworkname=(e)=>{
        this.setState({
            thomeworkname:e,
        })
    }

    setToStuHomework=(e)=>{
        to.stuname = e.stuname;
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
                                <div>
                                    <Input onChange = {(e)=>this.setHomeworkname(e)} style = {{width:100}}></Input>
                                    <Divider type = "vertical"></Divider>
                                    <Button>保存更改</Button>
                                </div>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    截止时间:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.deadline}
                                </p>
                                <div>
                                    <Input onChange = {(e)=>this.setDeadline(e)} style = {{width:100}}></Input>
                                    <Divider type = "vertical"></Divider>
                                    <Button>保存更改</Button>
                                </div>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    作业内容:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.homeworkinfo}
                                </p>
                                <div>
                                    <Input onChange = {(e)=>this.setHomeworkInfo(e)} style = {{width:100}}></Input>
                                    <Divider type = "vertical"></Divider>
                                    <Button>保存更改</Button>
                                </div>
                            </List.Item>
                            <Divider></Divider>
                            <List
                                bordered
                                dataSource={this.state.submitstudent}
                                renderItem={item => 
                                
                                    <List.Item>
                                        <List.Item.Meta
                                            title = {<a>{item.stuname}</a>}
                                            onClick = {()=>this.setToStuHomework(item)}
                                        >
                                        </List.Item.Meta>
                                    </List.Item>
                                }
                            >
                            </List>
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
        }
    }
}

export default TeacherHomework;
