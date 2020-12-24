import { Input,Form, Button, Divider } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import Title from '../Title';
import { backendUrl } from '../Common'
import '../../asserts/css/CreateClass.css'
import { Redirect } from 'react-router-dom';

class TeacherCreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            classid:"",
            classname:"",
            classtime:"",
            classteacher:"",
            classinfo:"",
        };
    }

    getClassid=(e)=>{
        this.setState({
            classid:e.target.value,
        })
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
        
        fetch(backendUrl+"new_course/",{
            method:"post",
            mode:"cors",
            body:JSON.stringify(this.state),
            credentials: 'include',
        })
            .then(res => res.json())
            .then((result)=>{
                if(result.isSuccess){
                    this.setState({
                        flag:1
                    })
                }
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
                        <Form
                            {...Layout}
                            colon = {false}
                            onFinish = {this.onFinish}
                        >
                            <Form.Item
                                label = "课程ID"
                                name = "classid"
                                rules = {[{required:true,message:'请输入ID'}]}
                            >
                                <Input onChange = {(e)=>this.getClassid(e)}></Input>
                            </Form.Item>

                            <Divider></Divider>

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
                                <Button 
                                    htmlType = "submit"
                                    onClick = {this.onFinish}
                                >
                                    创建课程
                                </Button>
                                <Button
                                    onClick = {this.Return}
                                    style = {{float:"right"}}
                                >
                                    返回主页
                                </Button>
                            </Form.Item>

                        </Form>

                    </div>
                </div>
            );
        }else if(this.state.flag === 1){
            return(<Redirect to = {{pathname:'/Teacher'}} />)
        }
    }
}

export default TeacherCreateClass;
