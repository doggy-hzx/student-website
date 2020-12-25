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
            class:[
                {classname:"class1",classinfo:"class1 info"},
                {classname:"class2",classinfo:"class2 info"},
                {classname:"class3",classinfo:"class3 info"},
                {classname:"class4",classinfo:"class4 info"},
                {classname:"class5",classinfo:"class5 info"},
                {classname:"class6",classinfo:"class6 info"},
                {classname:"class7",classinfo:"class7 info"},
                {classname:"class8",classinfo:"class8 info"},
                {classname:"class9",classinfo:"class9 info"},
                {classname:"class10",classinfo:"class10 info"},
                {classname:"class11",classinfo:"class11 info"},
                {classname:"class12",classinfo:"class12 info"},
                {classname:"class13",classinfo:"class13 info"},
                {classname:"class14",classinfo:"class14 info"},
                {classname:"class15",classinfo:"class15 info"},
                {classname:"class16",classinfo:"class16 info"},
                {classname:"class17",classinfo:"class17 info"},
                {classname:"class18",classinfo:"class18 info"},
                {classname:"class19",classinfo:"class19 info"},
                {classname:"class20",classinfo:"class20 info"},
            ]
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
