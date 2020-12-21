import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';
import '../asserts/css/ChangePassword.css'

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            flag:0,
        };
    }

    GetCode=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    Submit=()=>{

        var flag = 0;

        if(this.state.password!=""){
            if(this.state.password.length<6||this.state.password.length>18){
                alert("密码必须在6到18位之间!");
                flag = 1;
            }
        }

        if(flag === 0){

            // fetch(backendUrl+"user/profile/modify/",{
            //     method:"post",
            //     body:JSON.stringify(this.state),
            //     mode:"cors",
            //     credentials: 'include',
            // })
            //     .then(res => res.json())
            //     .then((result)=>{
            //         if(result.isSucess){
            //             alert("更改成功");
            //         }else{
            //             alert("更改失败");
            //         }
            //     },
            // (error)=>{
            //     console.log(error);
            // })
        }
    }

    Back=()=>{
        this.setState({
            flag:1,
        })
    }

    render() {
        if(this.state.flag === 0){
            return (
                <div className = "ChangePassword">
                    <input type = "text" placeholder = {this.state.phone} ref = "phone" onChange = {(e)=>this.GetCode(e)}></input>
                    <div>
                        <button onClick = {this.Submit}>
                            提交
                        </button>
                    </div>
                    <div>
                        <button onClick = {this.Back}>
                            返回
                        </button>
                    </div>
                </div>
            );
        }else{
            return <Redirect to = {{pathname:'/User/Change'}} />
        }
    }
}

export default ChangePassword;
