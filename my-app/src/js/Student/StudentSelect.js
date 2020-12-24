import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import {Menu} from 'antd';
import '../../asserts/css/StudentSelect.css'

class StudentSelect extends Component {
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

    Choose=()=>{
        this.props.Choose();
    }

    Back=()=>{
        this.setState({
            flag:0,
        })
    }

    render() {
        if(this.state.flag === 1){
            return (
                <div className = "StudentSelect">
                    <Menu mode  = "inline">
                        <Menu.Item onClick = {this.Info.bind()}>用户信息</Menu.Item>
                        <Menu.Item onClick = {this.Change.bind()}>修改信息</Menu.Item>
                        <Menu.Item onClick = {this.Class.bind()}>选择课程</Menu.Item>
                        <Menu.Item onClick = {this.Choose.bind()}>已选课程</Menu.Item>
                        <Menu.Item onClick = {this.Back}>返回首页</Menu.Item>
                    </Menu>
                </div>
            );
        }else if(this.state.flag === 0){
            return <Redirect to = {{pathname:'/'}} />
        }
        
    }
}

export default StudentSelect;

