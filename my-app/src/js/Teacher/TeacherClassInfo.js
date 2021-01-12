import React, { Component } from 'react';
import { List, Input, Button, Divider, Dropdown, Menu } from 'antd';
import '../../asserts/css/CreateClass.css'
import Title from '../Title'
import { backendUrl, getCookie, setCookie } from '../Common';
import { Redirect } from 'react-router-dom';

var toHomework = {
    homeworkname:'',
    homeworkid:'',
    classid:'',
}

class TeacherClassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            classid:'',
            classname:"",
            classtime:"",
            classinfo:"",
            classteacher:"",
            studentnumber:"",
            
            homework:[
            ],
            assistance:[
            ],
            
            tclassname:"",
            tclasstime:"",
            tclassinfo:"",
            tclassteacher:"",
            ta_id:"",
        };

    }

    componentDidMount() {

        this.setState({
            classid:this.props.location.state.classid,
        })

        fetch(backendUrl + "get_courseinfo/", {
            method: "post",
            mode: "cors",
            body:JSON.stringify(this.props.location.state),
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    classname: result.course_name,
                    classtime: result.course_time,
                    classinfo: result.course_description,
                    classteacher: result.course_teacher_name,
                    studentnumber:result.course_stu_num,
                    assistance:result.ta_info,
                    homework:result.homeworks,
                })
            },
                (error) => {
                    console.log(error);
                })

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

    setAssistance=(e)=>{
        this.setState({
            ta_id:e.target.value,
        })
    }

    setToHomework=(e)=>{
        toHomework.homeworkname = e.name;
        toHomework.homeid = e.id;
        toHomework.classid = this.state.classid;
        this.setState({
            flag:1,
        })
    }

    DelAssistance=(e)=>{

        e.course_id = this.state.classid;

        fetch(backendUrl + "del_ta/", {
            method: "post",
            mode: "cors",
            body:JSON.stringify(e),
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                })
            },
                (error) => {
                    console.log(error);
                })

    }

    addAssistance=()=>{
        fetch(backendUrl + "new_ta/", {
            method: "post",
            mode: "cors",
            body:JSON.stringify(this.state),
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                })
            },
                (error) => {
                    console.log(error);
                })
    }

    Return=()=>{
        this.setState({
            flag:2,
        })
    }

    CreateHomeword=()=>{

        toHomework.classid = this.state.classid;

        this.setState({
            flag:3,
        })
        
    }

    Save=()=>{

        fetch(backendUrl + "user/profile/", {
            method: "post",
            body: JSON.stringify(this.state),
            mode: "cors",
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
            },
                (error) => {
                    console.log(error);
                })

        fetch(backendUrl + "user/profile/", {
            method: "get",
            mode: "cors",
            credentials: "include",
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    classname: result.classname,
                    classtime: result.classtime,
                    classinfo: result.classinfo,
                    classteacher: result.classteacher,
                    studentnumber:result.studentnumber,
                })
            },
                (error) => {
                    console.log(error);
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
                                    课程名称:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.classname}
                                </p>
                                <div>
                                    {/* <Input onChange = {(e)=>this.setClassname(e)} style = {{width:100}}></Input> */}
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <List
                                bordered
                                header = {<div>助教姓名</div>}
                                dataSource = {this.state.assistance}

                                renderItem = {
                                    item => (
                                        <List.Item>

                                            <List.Item.Meta
                                                title = {<a>{item.name}</a>}
                                            ></List.Item.Meta>

                                            <Divider type = "vertical"></Divider>

                                            <Button onClick = {()=>this.DelAssistance(item)}>删除助教</Button>

                                        </List.Item>
                                    )
                                }

                            >   
                            </List>
                            <List.Item>
                                <p>
                                    助教姓名:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.classtime}
                                </p>
                                <div>
                                    {/* <Input onChange = {(e)=>this.setAssistance(e)} style = {{width:100}}></Input> */}
                                    <Divider type = "vertical"></Divider>
                                    <Button onClick = {()=>this.addAssistance()}>添加助教</Button>
                                </div>
                            </List.Item>
                            <List.Item>
                                <p>
                                    上课时间:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.classtime}
                                </p>
                                <div>
                                    {/* <Input onChange = {(e)=>this.setClasstime(e)} style = {{width:100}}></Input> */}
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <List.Item>
                                <p>
                                    任课老师:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.classteacher}
                                </p>
                                <div>
                                    {/* <Input onChange = {(e)=>this.setClassinfo(e)} style = {{width:100}}></Input> */}
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <List.Item>
                                <p>
                                    课程介绍:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.classinfo}
                                </p>
                                <div>
                                    {/* <Input onChange = {(e)=>this.setClassteacher(e)} style = {{width:100}}></Input> */}
                                    <Divider type = "vertical"></Divider>
                                </div>
                            </List.Item>
                            <List.Item>
                                <p>
                                    选课人数:
                                    <Divider type = "vertical"></Divider>
                                    {this.state.studentnumber}
                                </p>
                            </List.Item>

                            <List
                                bordered
                                header={<div>课程作业</div>}
                                dataSource={this.state.homework}
                                renderItem={item => 
                                
                                    <List.Item>
                                        <List.Item.Meta
                                            title = {<a>{item.name}</a>}
                                            onClick = {()=>this.setToHomework(item)}
                                        >
                                        </List.Item.Meta>
                                    </List.Item>
                                }
                            >
                            </List>

                            <Divider></Divider>

                            <Button onClick = {()=>this.CreateHomeword()} block>创建作业</Button>

                            {/*<Divider></Divider>

                            <Button onClick = {()=>this.Save()} block>保存更改</Button>*/}

                            <Divider></Divider>

                            <Button onClick = {()=>this.Return()} block>返回主页</Button>

                            <Divider></Divider>

                        </List>

                    </div>
                </div>
            );
        }else if(this.state.flag === 1){
            return(
                <Redirect to = {
                    {
                        pathname:'/TeacherHomework',
                        state:toHomework,
                    }
                }/>
            )
        }else if(this.state.flag === 2){
            return(
                <Redirect to = {{pathname:'/'}}></Redirect>
            )
        }else if(this.state.flag === 3){
            return(<Redirect to = {{pathname:'/CreateHomework',state:toHomework,}}></Redirect>)
        }
    }

}

export default TeacherClassInfo;
