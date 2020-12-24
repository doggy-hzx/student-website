import React, { Component } from 'react';
import { List, Input, Button, Divider } from 'antd';
import '../../asserts/css/CreateClass.css'
import Title from '../Title'
import { backendUrl, getCookie, setCookie } from '../Common';
import { Redirect } from 'react-router-dom';

var toHomework = {
    homeworkname:'',
}

class ClassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            classid:"",
            classname:"",
            classtime:"",
            classinfo:"",
            classteacher:"",
            studentnumber:"",
            homework:[
                {homeworkname:'homework1'},
                {homeworkname:'homework2'},
            ],
        };
    }

    componentDidMount() {

        this.setState({
            classname:this.props.location.state.classname,
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

    setToHomework=(e)=>{
        toHomework.homeworkname = e.homeworkname;
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
                        <List
                        >
                        <List.Item>
                            <p>
                                课程名称:
                                <Divider type = "vertical"></Divider>
                                {this.state.classname}
                            </p>
                        </List.Item>
                        <Divider></Divider>
                        <List.Item>
                            <p>
                                上课时间:
                                <Divider type = "vertical"></Divider>
                                {this.state.classtime}
                            </p>
                        </List.Item>
                        <Divider></Divider>
                        <List.Item>
                            <p>
                                任课老师:
                                <Divider type = "vertical"></Divider>
                                {this.state.classteacher}
                            </p>
                        </List.Item>
                        <Divider></Divider>
                        <List.Item>
                            <p>
                                课程介绍:
                                <Divider type = "vertical"></Divider>
                                {this.state.classinfo}
                            </p>
                        </List.Item>
                        <Divider></Divider>
                        <List.Item>
                            <p>
                                选课人数:
                                <Divider type = "vertical"></Divider>
                                {this.state.studentnumber}
                            </p>
                        </List.Item>
                        <Divider></Divider>

                        <List
                            bordered
                            dataSource={this.state.homework}
                            renderItem={item => 
                            
                                <List.Item>
                                    <List.Item.Meta
                                        title = {<a>{item.homeworkname}</a>}
                                        onClick = {()=>this.setToHomework(item)}
                                    >
                                    </List.Item.Meta>
                                </List.Item>
                            }
                        >
                        </List>
                        </List>
                    </div>

                </div>
            );
        }else if(this.state.flag === 1){
            return(
                <Redirect to = {
                    {
                        pathname:'/StudentHomework',
                        state:toHomework,
                    }
                }/>
            )
        }
    }

}

export default ClassInfo;
