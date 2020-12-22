import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import {Menu} from 'antd';
import '../../asserts/css/TeacherSelect.css'

class TeacherSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:1,
        };
    }

    Info=()=>{
        this.props.Info();
    }

    Change=()=>{
        this.props.Change();
    }

    Class=()=>{
        this.props.Class();
    }
    
    Back=()=>{
        this.setState({
            flag:0,
        })
    }

    render() {
        if(this.state.flag === 1){
            return (
                <div className = "TeacherSelect">
                    <Menu>
                        <Menu.Item onClick = {this.Info.bind()}>用户信息</Menu.Item>
                        <Menu.Item onClick = {this.Change.bind()}>修改信息</Menu.Item>
                        <Menu.Item onClick = {this.Class.bind()}>开课信息</Menu.Item>
                        <Menu.Item onClick = {this.Back}>返回首页</Menu.Item>
                    </Menu>
                </div>
            );
        }else if(this.state.flag === 0){
            return <Redirect to = {{pathname:'/'}} />
        }
        
    }
}

export default TeacherSelect;

