import React, { Component } from 'react';
import { List, Input, Button, Divider } from 'antd';
import '../../asserts/css/CreateClass.css'
import Title from '../Title'

class ClassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classname:"123",
            classtime:"",
            classinfo:"",
            classteacher:"",

            tclassname:"",
            tclasstime:"",
            tclassinfo:"",
            tclassteacher:"",
        };
    }

    setClassname=(e)=>{
        this.setState({
            tclassname:e.target.value,
        })
    }

    setClasstime=(e)=>{
        this.setState({
            tclasstime:e.target.value,
        })
    }

    setClassinfo=(e)=>{
        this.setState({
            tclassinfo:e.target.value,
        })
    }

    setClassteacher=(e)=>{
        this.setState({
            tclassteacher:e.target.value,
        })
    }

    render() {
        return (
            <div>
                <Title></Title>
                {this.props.location.state.classname}

                <div className = "CreateClass">
                    <List.Item>
                        <p>
                            课程名称:{this.state.classname}
                        </p>
                        <div>
                            <Input onChange = {(e)=>this.setClassname(e)} style = {{width:100}}></Input>
                            <Button>保存更改</Button>
                        </div>
                    </List.Item>
                    <Divider></Divider>
                    <List.Item>
                        <p>
                            上课时间:{this.state.classtime}
                        </p>
                        <div>
                            <Input onChange = {(e)=>this.setClasstime(e)} style = {{width:100}}></Input>
                            <Button>保存更改</Button>
                        </div>
                    </List.Item>
                    <Divider></Divider>
                    <List.Item>
                        <p>
                            任课老师:{this.state.classteacher}
                        </p>
                        <div>
                            <Input onChange = {(e)=>this.setClassinfo(e)} style = {{width:100}}></Input>
                            <Button>保存更改</Button>
                        </div>
                    </List.Item>
                    <Divider></Divider>
                    <List.Item>
                        <p>
                            课程介绍:{this.state.classinfo}
                        </p>
                        <div>
                            <Input onChange = {(e)=>this.setClassteacher(e)} style = {{width:100}}></Input>
                            <Button>保存更改</Button>
                        </div>
                    </List.Item>
                </div>

            </div>
        );
    }
}

export default ClassInfo;
