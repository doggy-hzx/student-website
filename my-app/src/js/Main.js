import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Button } from 'antd'
import '../asserts/css/Header.css';
import ZjuLogo from '../asserts/image/timgXFIKOJKO.png';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag:0,
		};
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
		if(this.state.flag === 0){
			return (
				<div>
					<body className = "Header">
						<img src = {ZjuLogo}></img>
						<div id = "button">
							<Button onClick = {this.SignIn}>登录</Button>
							<Button onClick = {this.Create}>注册</Button>
						</div>
					</body>
				</div>
			);	
		}else if(this.state.flag === 1){
			return <Redirect to = {{pathname:'/LoginIn'}} />
		}else if(this.state.flag === 2){
			return <Redirect to = {{pathname:'/Create'}} />
		}
		
	}
}

export default Main;
