import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Button } from 'antd'
import '../asserts/css/Header.css';
import ZjuLogo from '../asserts/image/timgXFIKOJKO.png';
import { backendUrl, getCookie } from './Common'

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
            flag: 0,
		};
	}

    componentDidMount() {

        /*$.ajaxSetup({ xhrFields: { withCredentials: true }, crossDomain: true});
        $.post(backendUrl + "check_session/", JSON.stringify(this.state), function (result) {

            if (result.isSuccess) {
                this.setState({
                    flag:3,
                })
            }

        }.bind(this));*/
        
        fetch(backendUrl+"login/",{
            method:"post",
            mode:"cors",
            body:JSON.stringify(this.state),
            credentials: 'include',
            headers:{
                sessionid:getCookie("sessionid"),
            }
        })
            .then(res => res.json())
            .then((result)=>{
                if(result.isLogin){
                    this.setState({
                        flag:3,
                    })
                }
        })
    }

	SignIn=()=>{
		this.setState({
			flag:1,
		})
	}

	Create=()=>{
		this.setState({
			flag:2,
		})
	}

	render() {
        if (this.state.flag === 0) {
            return (
                <div>
                    <body className="Header">
                        <img src={ZjuLogo}></img>
                        <div id="button">
                            <Button onClick={this.SignIn}>登录</Button>
                            <Button onClick={this.Create}>注册</Button>
                        </div>
                    </body>
                </div>
            );
        } else if (this.state.flag === 1) {
            return <Redirect to={{ pathname: '/LoginIn' }} />
        } else if (this.state.flag === 2) {
            return <Redirect to={{ pathname: '/Create' }} />
        } else if (this.state.flag === 3) {
            return (
                <div>
                    <body className="Header">
                        <img src={ZjuLogo}></img>
                        <div id="button">
                            <Button>用户中心</Button>
                        </div>
                    </body>
                </div>
            );
        }
		
	}
}

export default Main;
