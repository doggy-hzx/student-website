import { Input,Form, Button, Divider } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import Title from '../Title';
import '../../asserts/css/CreateClass.css'

class TeacherCreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classname:"",
            classtime:"",
            classteacher:"",
            classinfo:"",
        };
    }
    getClassname=(e)=>{
        this.setState({
            classname:e.target.value,
        })
    }

    getClasstime=(e)=>{
        this.setState({
            classtime:e.target.value,
        })
    }

    getClassteacher=(e)=>{
        this.setState({
            classteacher:e.target.value,
        })
    }

    getClassinfo=(e)=>{
        this.setState({
            classinfo:e.target.value,
        })
    }

    onFinish=()=>{
        
    }

    render() {
        return (
            <div>
                <Title></Title>
                <div className = "CreateClass">
                    <Form
                        {...Layout}
                        colon = {false}
                        onFinish = {this.onFinish}
                    >
                        <Form.Item
                            label = "课程名称"
                            name = "classname"
                            rules = {[{required:true,message:'请输入课程名'}]}
                        >
                            <Input onChange = {(e)=>this.getClassname(e)}></Input>
                        </Form.Item>

                        <Divider></Divider>

                        <Form.Item
                            label = "上课时间"
                            name = "classtime"
                            rules = {[{required:true,message:'请输入课程时间'}]}
                        >
                            <Input onChange = {(e)=>this.getClasstime(e)}></Input>
                        </Form.Item>

                        <Divider></Divider>

                        <Form.Item
                            label = "任课老师"
                            name = "classteacher"
                            rules = {[{required:true,message:'请输入任课老师'}]}
                        >
                            <Input onChange = {(e)=>this.getClassteacher(e)}></Input>
                        </Form.Item>

                        <Divider></Divider>

                        <Form.Item
                            label = "课程描述"
                            name = "classinfo"
                            rules = {[{required:false}]}
                        >
                            <Input onChange = {(e)=>this.getClassinfo(e)}></Input>
                        </Form.Item>

                        <Divider></Divider>

                        <Form.Item
                            name = "submit"
                        >
                            <Button htmlType = "submit">
                                创建课程
                            </Button>
                        </Form.Item>

                    </Form>

                </div>
            </div>
        );
    }
}

export default TeacherCreateClass;
