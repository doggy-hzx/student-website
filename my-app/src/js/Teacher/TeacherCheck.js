import React, { Component } from 'react';
import Title from '../Title'
import { List, Button, Divider, Input } from 'antd'
import { Redirect } from 'react-router-dom';

class TeacherCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            studentname:"",
            studentinfo:"",
            score:0,

        };
    }

    componentDidMount(){
        this.setState({
            studentname:this.props.location.state.stuname,
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
                        <List>

                        <List.Item>
                                <p>
                                    学生姓名:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.studentname}
                                </p>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    作业内容:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.studentinfo}
                                </p>
                            </List.Item>
                            <Divider></Divider>
                            <List.Item>
                                <p>
                                    评分:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.score}
                                </p>
                                <div>
                                    <Input onChange = {(e)=>this.setClassteacher(e)} style = {{width:100}}></Input>
                                    <Divider type = "vertical"></Divider>
                                    <Button>保存更改</Button>
                                </div>
                            </List.Item>
                        </List>
                        <Button onClick = {this.Return} style = {{float:"right"}}>返回主界面</Button>
                    </div>

                </div>
            );
        }else if(this.state.flag === 1){
            return(
                <Redirect to = {{pathname:'/'}} />
            )
        }
    }
}

export default TeacherCheck;
