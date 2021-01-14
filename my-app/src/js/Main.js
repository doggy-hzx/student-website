import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Button, Divider,List,Card } from 'antd';
import '../asserts/css/Header.css';
import '../asserts/css/Main.css';
import ZjuLogo from '../asserts/image/timgXFIKOJKO.png';
import { backendUrl, getCookie } from './Common';

const { Meta } = Card;

var to = {
    classname:"",
}

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
            flag: 0,
            class:[]
		};
	}

    componentDidMount() {
        
        fetch(backendUrl+"check_session/",{
            method:"post",
            mode:"cors",
            body:JSON.stringify(this.state),
            credentials: 'include',
        })
            .then(res => res.json())
            .then((result)=>{
                if(result.isSuccess){
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

    User=()=>{
        fetch(backendUrl+"user_info/",{
            method:"get",
            mode:"cors",
            credentials: 'include',
        })
            .then(res => res.json())
            .then((result)=>{
                if(result.type === "teacher"){
                    this.setState({
                        flag:4,
                    })
                }else if(result.type === "student"){
                    this.setState({
                        flag:5,
                    })
                }
        })
    }

    Del=()=>{

        fetch(backendUrl+"logout/",{
            method:"get",
            mode:"cors",
            credentials: 'include',
        })
            .then(res => res.json())
            .then((result)=>{
                if(result.isSuccess){
                    this.setState({
                        flag:0,
                    })
                }
        })

    }

    toClass=(e)=>{

        to.classname = e.classname;
        this.setState({
            flag:6,
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

                    <Divider></Divider>

                    <div className = "Main">
                        <List
                            dataSource={this.state.class}
                            grid={{ gutter: 100, column: 5 }}
                            renderItem={item=>
                                <List.Item>
                                    <Card
                                        hoverable
                                    >
                                        <Meta title={item.classname} description={item.classinfo} onClick = {()=>this.toClass(item)}></Meta>
                                    </Card>
                                </List.Item>
                            }
                        >
                        </List>
                    </div>

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
                            <Button onClick = {this.User}>用户中心</Button>
                            <Button onClick = {this.Del}>注销</Button>
                        </div>
                    </body>
                </div>
            );
        } else if (this.state.flag === 4) {
            return (<Redirect to={{ pathname: '/Teacher' }} />)
        } else if (this.state.flag === 5) {
            return (<Redirect to={{ pathname: '/Student' }} />)
        } else if (this.state.flag === 6) {
            return (<Redirect to = {
                {
                    pathname:'/StudentClassInfo',
                    state:to,
                }
            }
            ></Redirect>)
        }
		
	}
}

export default Main;
